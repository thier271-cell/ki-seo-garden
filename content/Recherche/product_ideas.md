# Product Ideas – AI SEO & GEO Intelligence Platform

> **Stand:** Juni 2026 | **Status:** Kontinuierlich aktualisiert  
> Legende: 🟢 Ready to Build | 🟡 Needs Research | 🔴 Future/Vision

---

## 1. Produkt-Vision

**"Die erste Intelligence-Plattform, die Sichtbarkeit über alle Such- und KI-Engines hinweg misst, optimiert und automatisiert."**

Kernversprechen:
- **Miss** → Wo erscheint deine Marke in Google AIO, ChatGPT, Perplexity, Gemini, Copilot?
- **Verstehe** → Warum wirst du (nicht) zitiert? Welche Muster machen Content "citable"?
- **Optimiere** → Konkrete Handlungsempfehlungen, automatisiert durch AI Agents.
- **Überwache** → Kontinuierliches Monitoring mit Alerting bei Veränderungen.

---

## 2. Produkt-Tiers

### Tier 1: GEO Visibility Tracker 🟢

**"Wo deine Marke in AI-Engines erscheint."**

**Features:**
- Domain/Keyword-Tracking über 5+ Engines (Google AIO, ChatGPT Search, Perplexity, Gemini, Copilot)
- "GEO Share of Voice" im Vergleich zu Wettbewerbern
- Weekly/Daily Updates
- Alerting: "Du bist aus der AI Overview für [Keyword] gefallen"
- Historical Data: Sichtbarkeits-Trends über Zeit

**Tech-Stack-Überlegungen:**
- Keyword-Datenbank (eigener Crawler oder API-Zugang zu Search-Daten)
- AI Engine API / Scraping (wo verfügbar)
- Datenbank: TimescaleDB fÃ¼r Zeitreihen
- Frontend: Dashboard mit Engine-Vergleichen

**MVP-Keywords: \(\sim\)100-500 Keywords pro Domain**

---

### Tier 2: GEO Content Optimizer 🟡

**"Macht Content für AI-Engines zitierbar."**

**Features:**
- **Citability Score** – 0-100 Metrik, wie wahrscheinlich Zitation in AI-Engines ist
- **Content-Chunk-Analyse** – Visualisiert, wie RAG-Systeme den Content verarbeiten würden
- **Extractability-Heatmap** – Welche Passagen werden am ehesten extrahiert?
- **Handlungsempfehlungen:**
  - "Füge eine klare Definition in den ersten 100 Wörtern ein"
  - "Strukturiere diesen Abschnitt als FAQ"
  - "Ergänze statistische Datenpunkte (Zahlen, Prozente)"
  - "Optimiere H2/H3-Struktur für Chunking"
- **Wettbewerber-Vergleich:** "Warum wird Konkurrent X zitiert und du nicht?"
- **A/B Preview:** Simuliere AI-Antworten basierend auf deinem Content

**Scoring-Faktoren (Hypothesen):**
```
Citability Score = f(
  definition_present,       // Klare Definitionen
  faq_structure,            // Q&A-Paare
  stat_density,             // Datenpunkte pro 100 Wörter
  heading_quality,          // Klarheit, Deskriptivität
  first_paragraph_clarity,  // Flesch-Kincaid, Satzlänge
  chunk_autonomy,           // Sind Abschnitte autark verständlich?
  source_citations,         // Zitiert der Content selbst Quellen?
  entity_density,           // Erkannte Entitäten
  schema_quality,           // Structured Data vorhanden?
  readability               // Lesbarkeit (AI-Engines bevorzugen klare Sprache)
)
```

---

### Tier 3: GEO AI Agent Workflows 🟡/🔴

**"Automatisierte GEO-Optimierung durch AI-Agenten."**

**Agent-Flows:**

#### Agent A: Content GEO Audit Agent
```
Input: URL
→ Crawl Content
→ Analysiere Struktur (Headings, Chunks, Schema)
→ Bewerte Citability
→ Analysiere Wettbewerber (für gleiches Keyword)
→ Generiere GEO-Audit-Report
→ Optional: Erstelle optimierte Content-Version
Output: Audit-Report + Handlungsempfehlungen + Diff-Ansicht
```

#### Agent B: GEO Monitoring & Alert Agent
```
Input: Domain + Keywords
→ Tracke wöchentlich AIO/ChatGPT/Perplexity-Präsenz
→ Erkenne Veränderungen (neue Zitationen, Verluste)
→ Analysiere mögliche Ursachen (Content-Änderung? Wettbewerber-Update? Engine-Update?)
→ Alert mit Ursachen-Vorschlag und Handlungsempfehlung
Output: Alert-Email/Dashboard-Notification
```

#### Agent C: Competitive GEO Intelligence Agent
```
Input: Deine Domain + Wettbewerber-Domains
→ Vergleiche GEO-Visibility Scores
→ Analysiere Unterschiede in Content-Struktur
→ Finde "GEO-Lücken" (Keywords wo Wettbewerber zitiert wird, du nicht)
→ Generiere Content-Briefings für GEO-Lücken
Output: Content-Briefings + Priorisierte Chancen-Liste
```

#### Agent D: Schema & Entity Agent
```
Input: Domain
→ Crawl alle Seiten
→ Extrahiere Entitäten (Personen, Produkte, Konzepte)
→ Generiere fehlendes Schema-Markup
→ Check Wikidata/Wikipedia-Präsenz
→ Erstelle Entity-Graph-Visualisierung
Output: Schema-Code-Snippets + Entity-Report
```

---

### Tier 4: API & Daten-Plattform 🔴

**"GEO-Signal-Datenbank für programmatischen Zugriff."**

- REST API mit allen GEO-Metriken
- Rohdaten-Zugang zu Citation-Daten
- Bulk-Analyse für große Content-Mengen
- Webhook-Integration (CMS, CI/CD)
- Trainingsdaten-Export fÃ¼r eigene Modelle

---

## 3. Datenstrategie – Der Burggraben

### Zu sammelnde Daten:

1. **Keyword-GEO-Mapping:** Für welche Keywords erscheinen AI Overviews? Welche Quellen?
2. **Citation Patterns:** Welche Content-Muster korrelieren mit AI-Zitation?
3. **Engine-Vergleiche:** Wie unterscheiden sich Zitationen zwischen Engines?
4. **Temporal Data:** Wie verändert sich GEO-Visibility über Zeit?
5. **Entity Graph:** Welche Entitäten werden von Engines erkannt und wie hängen sie zusammen?

### Datenquellen:

| Quelle | Zugänglichkeit | Qualität |
|--------|---------------|----------|
| Google AI Overviews | API (kein offizieller AIO-Endpunkt) | Black-box, muss gescrapt/gerendert werden |
| ChatGPT Search | Kein offizieller API-Endpunkt für Search | Muss gescrapt werden (Terms of Service beachten!) |
| Perplexity API | pplx-api verfügbar | Gut dokumentierte API |
| Gemini API | Verfügbar | Google AI Studio |
| Bing Webmaster Tools | API verfügbar | Begrenzt auf Bing-Daten |
| Brave Search API | API verfügbar | Unabhängiger Index |

⚠️ **Rechtliches Risiko:** Scraping von AI-Engines kann ToS verletzen. API-basierte Ansätze priorisieren.

---

## 4. Technische Architektur (Konzept)

```
┌─────────────────────────────────────────────┐
│                  Frontend                     │
│  Dashboard · Content Analyzer · Reports       │
├─────────────────────────────────────────────┤
│                  API Layer                    │
│  REST + GraphQL · Webhooks · Auth             │
├─────────────────────────────────────────────┤
│               Core Services                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │
│  │ Tracker  │ │ Analyzer │ │ Agent Engine │ │
│  │ Service  │ │ Service  │ │   Service    │ │
│  └──────────┘ └──────────┘ └──────────────┘ │
├─────────────────────────────────────────────┤
│              Data Layer                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │
│  │  Times-  │ │  Vector  │ │   Document   │ │
│  │  eriesDB │ │    DB    │ │     Store    │ │
│  └──────────┘ └──────────┘ └──────────────┘ │
├─────────────────────────────────────────────┤
│            Integration Layer                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌────────────┐ │
│  │Google│ │ PPLX │ │Bing  │ │  Crawler   │ │
│  │ API  │ │ API  │ │ API  │ │  (eigener) │ │
│  └──────┘ └──────┘ └──────┘ └────────────┘ │
└─────────────────────────────────────────────┘
```

---

## 5. Naming & Positioning (Brainstorming)

| Name | Vibe | Pros | Cons |
|------|------|------|------|
| Citeable | Direct, relevant | Klarer GEO-Bezug | Generisch |
| GeoSignal | Data-driven | SEO-verständlich | Wenig markant |
| Visible.AI | Modern, AI-nah | Prägnant | Overused |
| Citify | Kurz, merkfähig | Domain? | Unklar ohne Kontext |
| Cited (getcited.ai) | Actionorientiert | SEOs verstehen es | Nur ein Aspekt |
| Foundry | Plattform-Metapher | Umfassend | Kein Suchbezug |
| Search+ | Erweiterungsidee | Vertraut fÃ¼r SEOs | Weak |
| EntityRank | Entity-Fokus | Differenzierung | Nur Teilaspekt |

🔮 Brand-Name sollte GEO/SEO-Bezug haben, aber zukunftssicher sein (nicht nur Google).

---

## 6. Feature-Priorisierung (RICE-Scoring)

| Feature | Reach | Impact | Confidence | Effort | RICE |
|---------|-------|--------|------------|--------|------|
| GEO Visibility Tracker (Google AIO) | 8 | 9 | 8 | 5 | 115 |
| Citation Monitoring & Alerting | 7 | 8 | 6 | 4 | 84 |
| Content Citability Scorer | 6 | 9 | 5 | 7 | 39 |
| Multi-Engine (ChatGPT, Perplexity) | 8 | 7 | 6 | 6 | 56 |
| Competitive GEO Intelligence | 5 | 7 | 7 | 5 | 49 |
| AI Agent: Content GEO Audit | 4 | 9 | 4 | 8 | 18 |
| White-Label / Agency Dashboard | 5 | 8 | 7 | 6 | 47 |
| API Access | 3 | 7 | 7 | 7 | 21 |

**RICE = (Reach × Impact × Confidence) / Effort** (Skala 1-10)

→ **MVP-Fokus:** Tracker (Google AIO) + Alerting + Multi-Engine

---

## 7. Entwicklungspfad (18 Monate)

### Monat 1-3: Foundation
- Keyword-Datenbank und Crawling-Infrastruktur
- Google AIO Detection (welche Queries triggern AIO?)
- Basis-Webapp mit Domain-Tracking

### Monat 4-6: GEO-Tracker MVP
- AIO Domain & Competitor Tracking
- Basic Citability Score (Rule-based)
- Dashboard + Reports
- Launch in SEO-Community

### Monat 7-9: Content & Multi-Engine
- ChatGPT + Perplexity Tracking
- Content Optimizer MVP
- Integration mit CMS (WordPress Plugin)

### Monat 10-12: Intelligence
- Verbesserter Citability Score (ML-basiert, sobald genug Daten)
- Competitive Intelligence
- Agentur-Whitlabel

### Monat 13-18: Automation & Scale
- AI Agents (Audit, Monitoring, Schema)
- API Platform
- Enterprise-Sales

---

*Letzte Aktualisierung: Juni 2026 | Nächste Überprüfung: fortlaufend*
  
→ [[KI Projekt Desi|Navigator]] · [[KI Bibliothek|Bibliothek]] · [[opportunities]] · [[experiments]]
