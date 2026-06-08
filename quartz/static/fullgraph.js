(function () {
  const isIndex = document.body.dataset.slug === "index";
  let d3Loaded = false,
    graphData = null;
  let currentSim = null,
    overlayEl = null;

  function getColors() {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      bg: isDark ? "#161618" : "#faf8f8",
      linkStroke: isDark ? "#555" : "#ccc",
      labelFill: isDark ? "#d4d4d4" : "#2b2b2b",
    };
  }

  /* ── floating button (every page except index) ── */
  function addButton() {
    const btn = document.createElement("button");
    btn.id = "graph-toggle-btn";
    btn.title = "Knowledge Graph";
    btn.setAttribute("aria-label", "Open Knowledge Graph");
    btn.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/></svg>';
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: "1000",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "2px solid var(--secondary, #284b63)",
      background: "var(--light, #faf8f8)",
      color: "var(--secondary, #284b63)",
      cursor: "pointer",
      boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.15s, box-shadow 0.15s",
    });
    btn.onmouseenter = () => {
      btn.style.transform = "scale(1.1)";
      btn.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)";
    };
    btn.onmouseleave = () => {
      btn.style.transform = "";
      btn.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
    };
    btn.onclick = () => toggleOverlay();
    document.body.appendChild(btn);
  }

  /* ── overlay ── */
  function buildOverlay() {
    if (overlayEl) return overlayEl;
    const colors = getColors();

    overlayEl = document.createElement("div");
    overlayEl.id = "graph-overlay";
    Object.assign(overlayEl.style, {
      display: "none",
      position: "fixed",
      inset: "0",
      zIndex: "9999",
      background: colors.bg,
    });
    // observe dark-mode toggles
    new MutationObserver(() => {
      if (overlayEl.style.display === "none") return;
      const c = getColors();
      overlayEl.style.background = c.bg;
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    /* close button */
    const close = document.createElement("button");
    close.innerHTML = "&#x2715;";
    Object.assign(close.style, {
      position: "absolute",
      top: "14px",
      right: "14px",
      zIndex: "10001",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "none",
      background: "var(--gray, #b8b8b8)",
      color: "#fff",
      fontSize: "18px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.15s",
    });
    close.onmouseenter = () => (close.style.background = "var(--secondary, #284b63)");
    close.onmouseleave = () => (close.style.background = "var(--gray, #b8b8b8)");
    close.onclick = () => hideOverlay();
    overlayEl.appendChild(close);

    /* hint */
    const hint = document.createElement("div");
    hint.textContent = "Drag nodes · Scroll to zoom · Click to navigate · Esc to close";
    Object.assign(hint.style, {
      position: "absolute",
      bottom: "14px",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "12px",
      color: "var(--gray, #b8b8b8)",
      pointerEvents: "none",
      zIndex: "10001",
      fontFamily: "inherit",
    });
    overlayEl.appendChild(hint);

    /* loading indicator */
    const loader = document.createElement("div");
    loader.id = "gh-loader";
    loader.textContent = "Loading graph…";
    Object.assign(loader.style, {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontSize: "18px",
      color: "var(--gray, #b8b8b8)",
      fontFamily: "inherit",
    });
    overlayEl.appendChild(loader);

    document.body.appendChild(overlayEl);
    return overlayEl;
  }

  function showOverlay() {
    buildOverlay();
    overlayEl.style.display = "block";
    document.body.style.overflow = "hidden";
    renderGraph();
  }

  function hideOverlay() {
    if (!overlayEl) return;
    overlayEl.style.display = "none";
    document.body.style.overflow = "";
    // kill sim
    if (currentSim) {
      currentSim.stop();
      currentSim = null;
    }
    // remove svg
    const svg = overlayEl.querySelector("svg");
    if (svg) svg.remove();
  }

  function toggleOverlay() {
    if (overlayEl && overlayEl.style.display !== "none") {
      hideOverlay();
    } else {
      showOverlay();
    }
  }

  // Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlayEl && overlayEl.style.display !== "none") {
      hideOverlay();
    }
  });

  /* ── graph rendering ── */
  function renderGraph() {
    if (!overlayEl) return;

    // already loaded → render immediately
    if (d3Loaded && graphData) {
      _doRender();
      return;
    }

    const loader = document.getElementById("gh-loader");
    if (loader) loader.style.display = "";

    // load D3
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js";
    s.crossOrigin = "anonymous";
    s.onload = async () => {
      d3Loaded = true;
      if (!graphData) {
        try {
          graphData = await fetchData;
        } catch (e) {
          if (loader) loader.textContent = "Failed to load data.";
          return;
        }
      }
      _doRender();
    };
    s.onerror = () => {
      if (loader) loader.textContent = "Failed to load D3.";
    };
    document.head.appendChild(s);
  }

  function _doRender() {
    if (!overlayEl || !d3 || !graphData) return;
    const d3 = window.d3;
    const loader = document.getElementById("gh-loader");
    if (loader) loader.style.display = "none";

    // Build graph
    const nodes = [],
      nodeMap = new Map();
    for (const [slug, entry] of Object.entries(graphData)) {
      const n = { id: slug, title: entry.title || slug, group: slug.split("/")[0] };
      nodes.push(n);
      nodeMap.set(slug, n);
    }
    const links = [];
    for (const [slug, entry] of Object.entries(graphData)) {
      for (const l of entry.links || []) {
        if (nodeMap.has(l)) links.push({ source: slug, target: l });
      }
    }

    const colors = getColors();
    const w = overlayEl.clientWidth,
      h = overlayEl.clientHeight;

    const svg = d3
      .select(overlayEl)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%");
    const g = svg.append("g");

    const groups = [...new Set(nodes.map((n) => n.group))];
    const c = d3.scaleOrdinal(groups, d3.schemeCategory10);

    const simulation = (currentSim = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(80),
      )
      .force("charge", d3.forceManyBody().strength(-250))
      .force("center", d3.forceCenter(w / 2, h / 2))
      .force("collide", d3.forceCollide(15)));

    const linkEl = g
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", colors.linkStroke)
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1);

    const nodeG = g.append("g").selectAll("g").data(nodes).join("g");

    nodeG
      .append("circle")
      .attr("r", (d) => Math.min(10, 3 + (graphData[d.id]?.links?.length || 0) * 0.8))
      .attr("fill", (d) => c(d.group))
      .attr("stroke", "#ffffff44")
      .attr("stroke-width", 1)
      .style("cursor", "pointer")
      .on("click", (evt, d) => {
        evt.stopPropagation();
        hideOverlay();
        window.location.href = "./" + d.id;
      })
      .on("mouseenter", function () {
        d3.select(this).attr("stroke", "#ff0").attr("stroke-width", 2.5);
      })
      .on("mouseleave", function () {
        d3.select(this).attr("stroke", "#ffffff44").attr("stroke-width", 1);
      });

    nodeG.append("title").text((d) => d.title || d.id);

    nodeG
      .append("text")
      .text((d) => (d.title || d.id).substring(0, 30))
      .attr("font-size", 9)
      .attr("dx", 10)
      .attr("dy", 3)
      .style("fill", colors.labelFill)
      .style("pointer-events", "none");

    const drag = d3
      .drag()
      .on("start", (evt, d) => {
        if (!evt.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (evt, d) => {
        d.fx = evt.x;
        d.fy = evt.y;
      })
      .on("end", (evt, d) => {
        if (!evt.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });
    nodeG.call(drag);

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 4])
      .on("zoom", (evt) => {
        g.attr("transform", evt.transform);
      });
    svg.call(zoom);

    simulation.on("tick", () => {
      linkEl
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
      nodeG.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");
    });

    // Auto-fit after sim settles
    simulation.on("end", () => {
      const b = g.node().getBBox();
      if (!b.width) return;
      const scale = Math.min(w / b.width, h / b.height) * 0.9;
      const tx = (w - b.width * scale) / 2 - b.x * scale;
      const ty = (h - b.height * scale) / 2 - b.y * scale;
      svg.call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(Math.min(scale, 2)));
    });

    window.addEventListener(
      "resize",
      () => {
        if (overlayEl.style.display === "none") return;
        const nw = overlayEl.clientWidth,
          nh = overlayEl.clientHeight;
        simulation.force("center", d3.forceCenter(nw / 2, nh / 2));
        simulation.alpha(0.3).restart();
      },
      { once: false },
    );
  }

  /* ── bootstrap ── */
  function boot() {
    if (isIndex) {
      // Replace index page with overlay immediately
      buildOverlay();
      showOverlay();
    } else {
      addButton();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
