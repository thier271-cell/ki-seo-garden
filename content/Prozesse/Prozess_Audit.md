---
title: Prozess – Audit (Woche 1)
date: 2026-06-08
tags: [Prozess, Audit]
---

# Prozess: Audit (Woche 1)

Den aktuellen Zustand der Kunden-Website technisch, inhaltlich und strategisch erfassen. Das Audit ist die Basis fur alle weiteren MaBnahmen.

---

## Schritt 1: Ahrefs Site Audit (30-60 Min)

### Durchfuhrung
1. Domain in Ahrefs Site Audit eintragen -> Crawl starten
2. Export als CSV: `audit_export.csv`
3. Filter anwenden (siehe unten)

### Kritische Filter und Schwellwerte

| Fehler-Typ | Schwellwert | Schweregrad | MaBnahme |
|-----------|------------|-------------|----------|
| Status-Code != 200 | Jeder | Critical | Redirect oder Seite reparieren |
| Title-Tag fehlt | Jeder | High | Title-Tag erstellen |
| Title-Tag > 60 Zeichen | Jeder | Medium | Kurzen |
| Meta-Description fehlt | Jeder | Medium | Erstellen (120-155 Zeichen) |
| H1 fehlt | Jeder | High | H1 setzen |
| H1 mehrfach | >1 pro Seite | High | Auf 1x reduzieren |
| Canonical != self | Jeder | Critical | Canonical korrigieren |
| Langsame LCP (Proxy) | > 2,5s | Medium | Bilder komprimieren, Caching |
| Broken Internal Links | Jeder | Medium | Links reparieren |
| Orphan Pages | Jeder | Medium | Interne Verlinkung herstellen |

### Felder im CSV-Export

```
URL, Status-Code, Title, Title-Lange, Meta-Description, Meta-Lange,
H1, H1-Anzahl, Canonical, Indexability, Interne Links, Externe Links,
PageSpeed-LCP-Proxy, Content-Wortanzahl, Crawl-Tiefe
```

---

## Schritt 2: Sistrix Sichtbarkeits-Check (15-30 Min)

### Durchfuhrung
1. Domain eingeben -> Sichtbarkeitsindex abrufen
2. Export: `visibility_export.csv`

### Felder im CSV-Export

```
Datum, Sichtbarkeitsindex, Top-100-Keywords (Keyword, Position, URL, SERP-Feature),
Top-5-Wettbewerber (Domain, Sichtbarkeitsindex), Keyword-Uberschneidungen
```

### Sichtbarkeitsindex interpretieren

| Index-Wert | Bedeutung |
|-----------|-----------|
| 0-1 | Sehr geringe Sichtbarkeit (neue/kleine Website) |
| 1-10 | Grundlegende Sichtbarkeit |
| 10-50 | Gute Sichtbarkeit |
| 50-100 | Starke Sichtbarkeit |
| 100+ | Marktfuhrer |

---

## Schritt 3: GSC Performance-Export (15 Min)

### Durchfuhrung
1. Performance-Report -> Letzte 3 Monate (oder langer bei Gold)
2. Export: `gsc_export.csv`

### Felder im CSV-Export

```
Query, Clicks, Impressions, CTR, Position, URL
```

### Zusatzliche GSC-Reports (Silber+)

| Report | Was exportieren? | Nutzen |
|--------|-----------------|--------|
| **CWV** | Page-Gruppen mit LCP/INP/CLS | Technik-Bewertung |
| **Index Coverage** | Fehler, Ausgeschlossene, Gultige | Crawling-Status |
| **Crawl-Statistik** | Seiten pro Tag (Gold) | Crawl-Budget-Analyse |

---

## Schritt 4: Claude GEO-Check (15-30 Min)

### Claude-Prompt (Standard)

```
Analysiere die Website [domain] auf GEO-Prasenz. Priffe:
1. Knowledge Panel vorhanden? (Google-Suche: "[Brand] knowledge panel")
2. Wikidata Q-ID vorhanden? (Perplexity-Check)
3. Schema Markup Typen auf der Homepage? (Organization? LocalBusiness?)
4. Welche sind die 10 wichtigsten Entities auf der Website?
5. Welche Entity-Lucken fallen auf? (Marke nicht in Wikidata, kein Schema, etc.)

Output als strukturierte JSON.
```

### Claude-Prompt (Gold - Entity-Map)

```
Erstelle eine vollstandige Entity-Map der Website [domain].
Extrahiere ALLE genannten Entitaten. Klassifiziere: Organization, Person, Product, Place, Concept.
Bewerte jede Entity nach ERS (Entity Relevance Score) auf 5 Dimensionen:
- OP (On-Page Presence): 0-1
- KC (KG Connectivity): 0-1
- SV (Search Volume): 0-1
- SC (Schema Coverage): 0-1
- CG (Competitor Gap): 0-1

Output als JSON-Array, sortiert nach ERS absteigend.
```

---

## Schritt 5: Audit-Bericht erstellen (30-60 Min)

### Claude-Prompt (Bericht-Generator)

```
Erstelle einen Audit-Bericht aus folgenden Datenquellen:
- audit_export.csv (Ahrefs)
- visibility_export.csv (Sistrix)
- gsc_export.csv (GSC)
- entity_check.json (Claude GEO-Check)

Struktur:
1. Executive Summary (3-5 Satze)
2. TOP 10 Kritische Fehler (sortiert nach Impact x Urgency)
3. Technische SEO-Bewertung (Score 0-100):
   - Indexability (max 30)
   - Crawl-Effizienz (max 20)
   - CWV (max 20)
   - OnPage-Grundlagen (max 30)
4. Content-Bewertung (Score 0-100):
   - Keyword-Abdeckung (max 40)
   - Content-Qualitat (max 30)
   - SERP-Feature-Prasenz (max 30)
5. GEO-Prasenz (Score 0-100):
   - Schema (max 40)
   - KG-Connectivity (max 30)
   - Entity-Density (max 30)
6. Top-3 MaBnahmen (mit Aufwand und erwartetem Impact)
```

---

## Fehler-Schwellwerte fur Auto-Flag

| Fehler | Critical | High | Medium |
|--------|----------|------|--------|
| Status-Code | != 200, != 301 | 302 temp. | 404 (wenige) |
| Title | Fehlt | >60 Zeichen | <30 Zeichen |
| Meta-Description | Fehlt | >160 Zeichen | Duplikate |
| H1 | Fehlt oder >1 | - | - |
| Canonical | != self | Fehlt | - |
| LCP | >4s | >2,5s | >2s |

---

## QA-Check vor Versand

- [ ] Alle Datenquellen vollstandig?
- [ ] Fehler korrekt klassifiziert? (Stichprobe 5)
- [ ] Scores plausibel? (nicht 0/100, nicht identisch)
- [ ] Claude-Output auf Halluzinationen gepruft? (3 Fakten checken)
- [ ] Audit-Bericht verstandlich? (Gegenlesen durch Projektmanager)

---

## Pro Paket

| | Bronze | Silber | Gold |
|---|--------|--------|------|
| Seiten gescannt | Bis 100 | Bis 500 | Alle |
| GSC-Daten | 3 Monate | 6 Monate | 12+ Monate |
| Wettbewerbsanalyse | Nein | Top 3 | Top 10 |
| CWV Deep-Dive | Nein | Nein | Ja (Page-Gruppen) |
| Logfile-Analyse | Nein | Nein | Ja |
| Entity-Extraktion | Basis (KG-Check) | Detailliert (Top 30) | Vollstandig (Entity-Map) |
| Deliverable | 2-3 S. | 8-10 S. | 15-20 S. |
| Zeit (reine Tool-Zeit) | 1-2h | 2-3h | 4-6h |
| Zeit (inkl. Bericht) | 3-4h | 6-8h | 10-14h |

-> [[Prozess_Strategie]] . [[Prozess_QA]] . [[Tools/Ahrefs]] . [[../KI Projekt Desi|Navigator]]
