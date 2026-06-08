# Open Questions – AI SEO & GEO

> **Stand:** Juni 2026 | **Status:** Kontinuierlich aktualisiert  
> Dieses Dokument sammelt Fragen, die durch Primärrecherche beantwortet werden müssen.

---

## 1. Grundlegende offene Fragen

### 1.1 AI Overview Mechanik

- [x] **Google AIO nutzt Query Fan-Out** – mehrere parallele, verwandte Suchen (Google bestÃ¤tigt, Juni 2026)
- [x] **AI Overviews erscheinen nur "wenn additiv"** zur klassischen Suche – nicht fÃ¼r jede Query
- [x] **AIO basiert auf Core-Search-Ranking-Systemen** via RAG (Google bestÃ¤tigt)
- [ ] **Was genau bestimmt die Quellenauswahl in Google AI Overviews?**
  - Ist es ein separates Ranking-Modell oder eine Funktion des klassischen Rankings?
  - Welche Gewichtung haben: klassische SERP-Position, E-E-A-T-Signale, Structured Data, Content-Struktur?
  - Gibt es einen Schwellenwert ("wenn Content X Merkmale erfÃ¼llt, wird er zitiert")?

- [ ] **Wie viele Quellen verarbeitet Google AIO maximal fÃ¼r eine Antwort?**
  - Werden immer genau die angezeigten 3-5 Quellen verwendet, oder kann der Retrieval-Pool grÃ¶ÃŸer sein?
  - Wie wird Konsens vs. DiversitÃ¤t bei Ã¤hnlichen Quellen gehandhabt?

- [ ] **Wie viel Text extrahiert und verarbeitet Google AIO aus den Quellseiten?**
  - Nur den unmittelbaren Antwort-Passus oder den gesamten Artikel?
  - Gibt es eine Token/Zeichen-Limit fÃ¼r den Source-Extrakt?

- [x] **Google bietet KEINE separaten AIO-Metriken in Search Console** – AIO-Traffic ist im "Web"-Suchtyp enthalten. ⚡ Keine getrennte Auswertung möglich.

- [ ] **Hat die Domain-GrÃ¶ÃŸe (Anzahl indexierter Seiten) Einfluss auf AIO-Zitation?**

### 1.2 AIO Messbarkeit

- [x] **Search Console enthÃ¤lt AIO-Traffic** – aber kombiniert mit normalen Klicks im "Web"-Suchtyp. Keine separate Auswertung.
- [x] **Google-Extended** steuert Nutzung in AI-Training/Grounding (separat von Search-Ranking)
- [x] **Google hat "Preferred Sources"** eingefÃ¼hrt (Mai 2026) – Nutzer kÃ¶nnen Quellen priorisieren, 2x CTR
- [ ] **Ist AIO-Visibility messbar ohne eigenes Crawling/Rendering?**
  - Wird Google einen API-Endpunkt fÃ¼r AIO-Daten bereitstellen?
  - Wie verlÃ¤sslich sind Third-Party-AIO-Tracker (BrightEdge, SEMrush, Surfer, Otterly)?
- [ ] **Wie personalisiert/lokalisiert sind AIOs?**
  - Wie groÃŸ ist die Varianz zwischen verschiedenen Standorten fÃ¼r die gleiche Query?
  - Wie beeinflusst der Search-Verlauf/Nutzerprofil die AIO-Antwort?
  - Akademische Forschung (Schulte et al., 2026) zeigt: Einmalige Messungen sind unzuverlÃ¤ssig. Visibility muss als Distribution gemessen werden.

### 1.3 Neue Fragen aus akademischer Forschung

- [ ] **Citation vs. Absorption:** Wie oft wird Content zitiert, ohne die AI-Antwort tatsÃ¤chlich zu beeinflussen? (Zhang et al., 2026 unterscheidet Breadth von Depth)
- [ ] **Discovery-Gap:** Warum werden Produkte zu 99.4% namentlich aber nur 3.32% in Discovery-Queries von LLMs gefunden? (Sharma, 2025) – und wie schlieÃŸt man diese LÃ¼cke?
- [ ] **Citation-Verzerrung:** 30.6% aller AI-Zitationen verzerren ihre Quellen (CITETRACE, 2026). Wie kann man das messen und korrigieren?
- [ ] **Cross-Engine-StabilitÃ¤t:** Wie stabil sind GEO-Effekte Ã¼ber verschiedene Engines und Ã¼ber Zeit? Keine longitudinale Forschung vorhanden.
- [ ] **GEO-Angriffe vs. Defense:** Wie verteidigen Suchmaschinen sich gegen GEO-Manipulation? (SCI-Defense Paper)

---

## 2. Platform-spezifische Fragen

### 2.1 ChatGPT Search

- [x] **Eigener Search-Index via OAI-SearchBot** (OpenAI bestätigt)
- [x] **ChatGPT Ads Plattform live** (openai.com/ads) – sponsored content in ChatGPT
- [x] **Drei Search-Tiefen**: Non-reasoning, Agentic mit Reasoning, Deep Research
- [ ] **Wie wählt ChatGPT Search seine Quellen aus?**
  - Reines Bing-Ranking? Oder zusätzliche Re-Ranking-Schicht?
  - Welche Rolle spielen OpenAI-eigene Crawl-Daten (GPTBot) vs. Bing-Index?
  - Bevorzugt ChatGPT bestimmte Content-Formate?
- [ ] **Wie geht ChatGPT Search mit Paywalls und Login-Content um?**
  - OpenAI hat Deals mit Verlagen (NewsCorp, Financial Times, Axel Springer, etc.)
  - Bevorzugt die Engine Content aus Partner-Verlagen?

### 2.2 Perplexity

- [x] **Eigener Search-Index via PerplexityBot** (Perplexity bestätigt)
- [x] **Search API standalone verfügbar** ($5/1K requests) – einziger Anbieter mit Raw-Search-API
- [x] **Multi-Provider Agent API** – OpenAI, Anthropic, Google, xAI + integrierte Suche
- [x] **Keine Ads** – Monetarisierung rein über API/Subscriptions
- [ ] **Wie frisch ist der Perplexity-Index?**
- [ ] **Wird Perplexity Ads einführen?** Pilotprojekte 2024/2025 gestartet

### 2.3 Anthropic Claude

- [x] **Web-Suche ist Server-Tool** (`web_search_20260209`) – Claude entscheidet autonom
- [x] **Kein eigener Index** – nutzt Third-Party-Search-API (vermutlich Bing/Google)
- [x] **Dynamic Filtering** (v20260209): Claude kann Code ausführen, um Suchergebnisse zu filtern
- [x] **$10 pro 1.000 Searches** + Standard-Token-Kosten
- [ ] **Keine Publisher-Control-Mechanismen dokumentiert** – signifikante Lücke
- [ ] **Wird Claude eine native Web-Suche mit eigenem Index integrieren?**

### 2.4 Google Gemini / AI Features

- [x] **AI Mode separat von AI Overviews** – für "komplexe Vergleiche, mehrteilige Fragen"
- [x] **Grounding with Google Search API** verfügbar via Vertex AI
- [x] **"Preferred Sources" live** in AI Overviews + AI Mode
- [ ] **Wird Gemini die klassische Suche vollständig ersetzen?**

### 2.5 Microsoft Copilot

- [x] **AI Performance Dashboard** in Bing Webmaster Tools (Feb 2026) – erste Engine mit dedizierten AI-Citation-Analytics
- [x] **"Grounding Queries"** sichtbar – welche Phrasen AI für Retrieval verwendet hat
- [x] **data-nosnippet** unterstützt für selektives Snippet-Blocking

---

## 3. Content & GEO Strategie

### 3.1 Content-Optimierung

- [ ] **Gibt es ein "zu viel" an GEO-Optimierung?**
  - Content, der so stark für AI-Extraktion optimiert ist, dass er für menschliche Leser unlesbar wird?
  - Wird Google/AI-Engines "over-optimization" für AI erkennen und abstrafen?

- [ ] **Was ist die optimale Antwortlänge für AI-Zitationen?**
  - Google Featured Snippets: ~40-60 Wörter
  - AI Overviews: Variabler, aber gibt es einen Sweet Spot?

- [ ] **Sind "Listenicals" (listicles) für AI-Engines besonders zitierfähig?**
  - Strukturierte Listen scheinen gute Extrakte zu sein
  - Aber: Werden kontextlose Listenpunkte sinnvoll in AI-Antworten integriert?

- [ ] **Wie wichtig ist "Content Freshness" vs. "Content Depth"?**
  - Was priorisiert eine AI Engine: Den aktuellsten oder den umfassendsten Content?

### 3.2 Citation & Attribution

- [ ] **Reicht "Zitiert werden" als SEO-Ziel, oder muss auch geklickt werden?**
  - Wenn Content nur extrahiert, aber nie geklickt wird – bringt das Traffic/Branding-Vorteile?
  - Messen Suchmaschinen "post-click behavior" aus AIO-Links?

- [ ] **Führen mehr Backlinks und höhere Domain-Authority zu mehr AI-Zitationen?**
  - Korrelieren, aber kausal? Testbar durch Backlink-Aufbau auf einzelnen Seiten.

---

## 4. Markt & Business

### 4.1 Marktentwicklung

- [ ] **Wie schnell wächst der Anteil der Suchanfragen, die AUSSCHLIESSLICH über AI-Engines laufen (ohne Google)?**
  - StatCounter, SimilarWeb, Cloudflare Radar-Daten?

- [ ] **Welcher Prozentsatz der SEO-Budgets wird bereits für GEO ausgegeben?**
  - Umfrage-basierte Daten?
  - Agentur-Befragungen?

- [ ] **Welche Branchen sind am stärksten von AI-Kannibalisierung betroffen?**
  - Rankings nach Traffic-Verlust: Publishing, E-Commerce, Reisen, Finanzen, Gesundheit?

### 4.2 Wettbewerb & Pricing

- [ ] **Was kosten Enterprise-GEO-Verträge bei BrightEdge/Profound/Conductor?**
  - Preisermittlung durch direkte Anfragen als potenzieller Kunde?

- [ ] **Welches Pricing-Modell bevorzugen SEO-Agenturen für GEO-Tools?**
  - Pro Client? Pro Keyword? Flatrate?
  - Umfrage in SEO-Communities (Traffic Think Tank, SEO Slack Groups)?

- [ ] **Gibt es Open-Source-GEO-Tools, die als Basis genutzt werden können?**
  - Selbstgebaute Lösungen in der SEO-Community?
  - GitHub-Projekte?

---

## 5. Patente & Primärquellen

### 5.1 Zu recherchierende Google-Patente

- [ ] **Google Patent: "Generative summaries for search results"** – Was verrät das Patent über die AIO-Mechanik?
- [ ] **Google Patent: "Contextual estimation of link information gain"** – Wie bewertet Google Link-Relevanz für generative Antworten?
- [ ] **OpenAI Technische Dokumentation zu GPTBot und SearchGPT?**

### 5.2 Wissenschaftliche Papers zu finden

- [ ] **Gibt es akademische Studien zur Zitierbarkeit in LLM-basierten Suchsystemen?**
  - Keywords: "citation in retrieval augmented generation", "source attribution LLM", "RAG source selection"
- [ ] **Papers zu "Generative Engine Optimization" von Princeton/UCLA/anderen Unis?**
  - Bekannt: "GEO: Generative Engine Optimization" (Aggarwal et al., 2023/2024)
  - Weitere Papers von diesen und anderen Forschungsgruppen?

---

## 6. Technical / Development

- [ ] **Welche APIs existieren, um AI-Engine-Ergebnisse programmatisch abzufragen?**
  - Vollständige Liste aller verfügbaren APIs, deren Limits und Pricing.

- [ ] **Wie kann man Google AIOs programmatisch erkennen (ohne Browser-Automation)?**
  - SerpApi, DataForSEO, eigene Lösungen?

- [ ] **Wie verhindert man IP-Blocking bei systematischem AIO-Tracking?**

- [ ] **Kann man AI-Engines mit robots.txt / meta-Tags kontrollieren?**
  - GPTBot → robots.txt ✅
  - PerplexityBot → robots.txt ✅
  - Google AIO → ? (Nur nosnippet verhindert Snippet-Extraktion)
  - Vollständige Übersicht aller AI-Crawler-Bots und ihrer Steuerungsmöglichkeiten

---

## 7. Ethische & Rechtliche Fragen

- [ ] **Wie gehen AI-Engines mit urheberrechtlich geschütztem Content um?**
  - NYT vs. OpenAI – Auswirkungen auf Retrieval/Citation?
  - EU AI Act – Zitierpflichten für generative Engine-Outputs?

- [ ] **Ist GEO-Manipulation (durch Struktur-Tricks) ethisch vertretbar?**
  - Abgrenzung zwischen legitimer Optimierung und Manipulation

- [ ] **Werden AI-Engines irgendwann Content-Lizenzgebühren zahlen?**
  - Google's Deals mit Verlagen?
  - OpenAI's Content-Partnerschaften?
  - Wie verändert das die Quellen-Landschaft?

---

## 8. Systematisch zu beantworten

Diese Fragen sollten durch strukturierte Primärforschung beantwortet werden:

1. **Citation-Correlation-Study:** Welche Onpage-Faktoren korrelieren am stärksten mit AIO/LLM-Zitation?
2. **Engine-Behavior-Study:** Wie unterscheiden sich die 5 großen Engines in Quellenauswahl und Zitationsverhalten?
3. **Temporal-Citation-Study:** Wie schnell werden neue Inhalte zitiert? Wie lange bleiben sie aktuell?
4. **Competitive-GEO-Study:** Welche Branchen/Keywords haben die höchste AIO-Präsenz? Wo ist Wettbewerb am geringsten?

---

*Letzte Aktualisierung: Juni 2026 | Nächste Überprüfung: fortlaufend*
  
→ [[KI Projekt Desi|Navigator]] · [[KI Bibliothek|Bibliothek]] · [[experiments]] · [[geo_research]]
