---
title: Prozess – Reporting (Woche 4)
date: 2026-06-08
tags: [Prozess, Reporting]
---

# Prozess: Reporting (Woche 4)

Dem Kunden zeigen, was wir erreicht haben – datenbasiert, verstandlich und mit klarem Ausblick.

---

## Report-Struktur (Standard)

### 1. Executive Summary (Claude-generiert)
- 3-5 Satze, die die wichtigsten Ergebnisse zusammenfassen
- Positive KPIs zuerst, dann Verbesserungspotenzial
- Kein Fachjargon, verstandlich fur Entscheider

### 2. Ranking-Entwicklung

| Keyword | Position Vormonat | Position aktuell | Delta | SERP-Feature |
|---------|-------------------|-----------------|-------|-------------|
| [KW 1] | 12 | 8 | +4 | - |
| [KW 2] | 5 | 3 | +2 | Featured Snippet |

- Zusammenfassung: X Keywords in Top 10, Y in Top 3, Z neu in Top 100

### 3. Sichtbarkeit (Sistrix)
- Sichtbarkeitsindex aktuell vs. Vormonat
- Trend-Linie (12 Monate wenn verfugbar)
- Interpretation: "Ihre Sichtbarkeit ist um X% gestiegen/gefallen."

### 4. Traffic (GSC)

| Metrik | Vormonat | Aktuell | Delta | Delta % |
|--------|----------|---------|-------|---------|
| Klicks | 1.200 | 1.450 | +250 | +20,8% |
| Impressionen | 45.000 | 52.000 | +7.000 | +15,6% |
| CTR | 2,7% | 2,8% | +0,1 | +3,7% |
| Durchschnittsposition | 18,3 | 16,1 | -2,2 | -12,0% |

### 5. GEO/KG-Entwicklung (Silber+)
- Neue Schema-Typen implementiert: X
- Knowledge Panel Status: [vorhanden / beansprucht / fehlt]
- Wikidata Q-ID: [vorhanden / erstellt / fehlt]
- Entity-Wachstum: X neue ERS >0.6

### 6. CWV-Ampel (Silber+)

| Metrik | Status | Wert | Ziel |
|--------|--------|------|------|
| LCP | Grun/Gelb/Rot | X.Xs | <2,5s |
| INP | Grun/Gelb/Rot | XXXms | <200ms |
| CLS | Grun/Gelb/Rot | X.XX | <0,1 |

### 7. MaBnahmenplan (nachster Monat)
- 3-5 priorisierte Aktionen
- Pro Aktion: Ziel, Aufwand, erwarteter Impact

---

## Claude-Prompt fur Report-Generierung

```
Erstelle einen Monatsreport aus folgenden Daten:
- gsc_export.csv (aktueller Monat + Vormonat)
- visibility_export.csv (Sistrix)
- rank_tracking.csv (Ahrefs)
- entity_status.json (GEO-Status)

Struktur: [siehe oben]

Regeln:
- ALLE Zahlen aus den Rohdaten generieren. Keine Platzhalter.
- Executive Summary in 3-5 Satzen.
- Positives zuerst, dann Ausblick.
- Bei negativen Trends: Ursachenanalyse (z.B. Google Update? Saison?).
- MaBnahmenplan mit 3-5 priorisierten Aktionen.
- Sprache: deutsch, verstandlich, professionell.
```

---

## KPI-Definitionen und Ziele

| KPI | Definition | Datenquelle | Erwarteter Trend |
|-----|-----------|------------|-----------------|
| **Sichtbarkeitsindex** | Sistrix SEO-Gesundheitswert | Sistrix | Steigend |
| **Keywords Top 10** | Anzahl Keywords auf Position 1-10 | Ahrefs | Steigend |
| **Organische Klicks** | Klicks aus Google Search | GSC | Steigend |
| **CTR** | Klicks / Impressionen | GSC | Stabil/Steigend |
| **Durchschnittsposition** | Mittlere Position aller Keywords | GSC | Sinkend (=besser) |
| **Neue Schema-Typen** | Neu implementierte JSON-LD Typen | GSC Rich Results | Wachsend |
| **Entity-Wachstum** | Neue Entitaten mit ERS >0.6 | Claude | Wachsend |

---

## Report-Formate pro Paket

| | Bronze | Silber | Gold |
|---|--------|--------|------|
| **Umfang** | 1 Seite | 3-5 Seiten | 8-12 Seiten |
| **Rhythmus** | Monatlich (Woche 4) | Monatlich (Woche 4) | Wochentlich (KW 1-3) + Monatlich |
| **Mid-Month-Update** | 1-Satz E-Mail (KW 3) | - | - |
| **Call** | - | 30 Min | 2h |
| **Report-Format** | PDF (Claude-generiert) | PDF (Claude-generiert) | PDF + Live-Dashboard |
| **Versand** | E-Mail | E-Mail | E-Mail + Call-Besprechung |

---

## Follow-up nach Report-Versand

1. **Silber/Gold:** Call-Termin innerhalb 3 Werktage nach Versand
2. **Call-Agenda:** Report durchgehen (15 Min), Fragen klaren (10 Min), nachste Schritte (15/45 Min)
3. **MaBnahmenplan** aus dem Call-Protokoll aktualisieren
4. **Nachster Audit-Termin** bestatigen (Monatsanfang)

---

## QA-Check vor Versand

- [ ] Zahlen gegen Rohdaten gegengecheckt? (Stichprobe 3 KPIs)
- [ ] Claude-Zusammenfassung auf Halluzinationen gepruft?
- [ ] MaBnahmenplan realistisch und priorisiert?
- [ ] Report verstandlich? (Executive Summary in 3-5 Satzen)
- [ ] Korrekte Nomenklatur? (Kundenname, Monat, Paket)
- [ ] EU AI Act: KI-generierte Teile gekennzeichnet?

-> [[Prozess_Optimierung]] . [[Prozess_QA]] . [[../Vorlagen/Monatsreport]] . [[../KI Projekt Desi|Navigator]]
