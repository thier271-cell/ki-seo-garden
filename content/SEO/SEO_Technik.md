---
title: SEO – Technisches SEO
date: 2026-06-08
source: [Backlinko Technical SEO Guide (Brian Dean, Feb 2026), Google Search Central, web.dev/vitals]
tags: [SEO, Technik, CWV]
---

# SEO – Technisches SEO

Technisches SEO ist der Prozess sicherzustellen, dass eine Website die technischen Anforderungen moderner Suchmaschinen erfullt. Brian Dean (Backlinko, 2026): "You can have the best site with the best content. But if your technical SEO is messed up? Then you're not going to rank."

## Die 5 Kernbereiche

### 1. Crawling & Indexing
Google muss deine Seiten FINDEN, CRAWLEN und INDEXIEREN konnen.

- **Page Indexing Report (GSC):** Erste Anlaufstelle - zeigt ob Google Seiten nicht indexieren kann
- **Screaming Frog:** Der "beruhmteste Crawler der Welt" fur tiefgehende technische Analyse
- **GSC Inspect:** Zeigt WARUM eine Seite nicht indexiert wird + wie Google sie rendert
- **XML Sitemap:** Googles "zweitwichtigste Quelle" zum Finden von URLs (laut Google Rep)

### 2. Site-Struktur
"Your site's structure is step #1 of any technical SEO campaign" - Brian Dean

- **Flache Architektur:** Alle Seiten maximal 3-4 Klicks von der Homepage entfernt
- **Konsistente URL-Struktur:** Gibt Google Kontext uber Kategorie-Zugehorigkeit
- **Breadcrumbs:** Automatische interne Links zu Kategorie-Seiten
- **Orphan Pages vermeiden:** Keine Seiten ohne interne Links

### 3. Core Web Vitals

| Metrik | Gut | Schlecht | Misst |
|--------|-----|----------|-------|
| **LCP** | <= 2,5s | > 4,0s | Ladezeit des groBten sichtbaren Elements |
| **INP** | <= 200ms | > 500ms | Reaktionszeit auf Nutzer-Interaktion |
| **CLS** | <= 0,1 | > 0,25 | Visuelle Stabilitat (Layout Shifts) |

**Pagespeed-Fakten aus der Backlinko-Studie:**
- Gesamt-SeitengroBe korreliert am starksten mit Ladezeit
- Jedes Third-Party-Script fugt durchschnittlich 34ms zur Ladezeit hinzu
- CDNs waren in der Studie mit SCHLECHTEREN Ladezeiten assoziiert (falsch konfiguriert)

### 4. Duplicate & Thin Content
- **Semrush Site Audit** oder **Raven Tools** finden Duplicate Content
- **Copyscape Batch Search** pruft Content-Einzigartigkeit extern
- **Canonical URLs** fur Seiten mit ahnlichem Inhalt (z.B. Produktvarianten)
- **Noindex** fur Seiten ohne Unique Content (z.B. paginierte Kommentare)

### 5. Structured Data & Hreflang
- Schema verbessert nicht direkt Rankings - aber ermoglicht Rich Snippets die CTR steigern
- **Aleyda Solis' Hreflang Generator** fur internationale Seiten
- **Map Broker XML Sitemap Validator** pruft Sitemaps auf tote Links

## Case Studies (aus Backlinko Technical SEO Guide)

1. **Felix Norton:** +250% Traffic durch strategische interne Verlinkung (1 Woche)
2. **Salman Baig:** +200% Traffic durch Date Schema ("datePublished"/"dateModified")
3. **Neil Sheth:** +228% Traffic nach Behebung von Orphan Pages, Redirect Chains, Canonical-Issues
4. **Bill Widmer:** +15,23% Klicks durch FAQ Schema (Rich Snippet)

## Unser Tool-Einsatz

| Tool | Was es findet | Phase |
|------|--------------|-------|
| Ahrefs Site Audit | Fehlende Tags, Canonical-Issues, Crawl-Fehler | Audit |
| GSC | Index Coverage, CWV, Mobile Usability | Audit + Reporting |
| Screaming Frog | Deep Crawling (0€ bis 500 URLs) | Gold |

-> [[SEO_OnPage]] . [[Tools/GSC]] . [[../KI Projekt Desi|Navigator]]
