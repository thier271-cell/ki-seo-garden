---
title: Prozess – Content-Briefing erstellen
date: 2026-06-08
tags: [Prozess, Content, Briefing]
---

# Prozess: Content-Briefing erstellen

Jeder zu optimierenden oder neu zu erstellenden Seite liegt ein strukturiertes Content-Briefing zugrunde. Das Briefing wird von Claude erstellt und von SurferSEO validiert.

---

## Briefing-Template (Claude-generiert)

### Pflichtfelder pro Briefing

| Feld | Beschreibung | Quelle |
|------|-------------|--------|
| **Primar-Keyword** | Haupt-Suchbegriff | Ahrefs Keywords Explorer |
| **Keyword-Varianten** | 3-5 verwandte Keywords | Ahrefs + Sistrix |
| **Suchintention** | Informational / Commercial / Transactional / Agentic | SERP-Analyse (Claude) |
| **Zielgruppe** | Wen spricht der Text an? | Fragebogen + Buyer Persona |
| **Ziel-URL** | Welche Seite wird optimiert/erstellt? | Audit-Daten |
| **Empfohlene Wortanzahl** | Von SurferSEO (basierend auf Top-10-Durchschnitt) | SurferSEO |
| **H2-Struktur** | 3-5 Uberschriften-Vorschlage | Claude (aus SERP-Analyse) |
| **LSI-Keywords** | Fehlende verwandte Begriffe | SurferSEO NLP-Report |
| **Entity-Vorgaben** | 3-5 Entities die GENANNT werden mussen | Claude Entity-Extraktion |
| **Schema-Typ** | Article, FAQ, HowTo, Product | Claude-Vorschlag |
| **NLP-Ziel-Score** | Mindest-Score (Silber: >=65, Gold: >=75) | SurferSEO |

### Beispiel-Briefing (gekurzt)

```
Primar-Keyword: "nachhaltige Verpackung fur E-Commerce"
Suchintention: Commercial (Kaufer will Losung finden)
Zielgruppe: E-Commerce-Manager, mittelstandische Online-Shops
Empfohlene Wortanzahl: 1.200-1.500 Worter
H2-Struktur:
  1. Warum nachhaltige Verpackung 2026 Pflicht ist
  2. Die 5 besten Materialien im Vergleich
  3. Kosten: Was nachhaltige Verpackung wirklich kostet
  4. So stellst du dein E-Commerce-Verpackungskonzept um
  5. Haufige Fehler und wie du sie vermeidest
Entity-Vorgaben: [Kunden-Marke], DIN EN 13432, DHL GoGreen, FSC, Blauer Engel
Schema-Typ: Article
NLP-Ziel: >=70
```

---

## Keyword-Integration im Briefing

### Regeln fur Texter

| Regel | Beschreibung |
|-------|-------------|
| **H1** | Primar-Keyword MUSS in der H1 stehen |
| **Erste 100 Worter** | Primar-Keyword im ersten Absatz nennen |
| **H2s** | Varianten und Long-Tail-Keywords in H2s einbauen |
| **Naturlich** | Kein Keyword-Stuffing, 5-8x im Text reicht |
| **Alt-Texte** | Keywords in Bild-Beschreibungen wo sinnvoll |
| **URL** | Primar-Keyword im URL-Slug |

---

## Entity-Vorgaben

Jedes Briefing definiert 3-5 Entities, die zwingend im Text vorkommen mussen. Entities werden aus der Claude Entity-Extraktion der Kunden-Website abgeleitet.

### Beispiel

| Entity | Typ | Warum wichtig? |
|--------|-----|---------------|
| [Kunden-Marke] | Organization | Brand-Embedded Copy |
| [Produktname] | Product | Entity-Dichte fur KI-Zitierungen |
| [Wettbewerber A] | Organization | Co-Citation-Signal |
| [Branchen-Begriff] | Concept | Semantische Relevanz |

---

## SurferSEO-Integration

### Ablauf

1. **Briefing erstellen** (Claude) - Keyword, Zielgruppe, erste Struktur
2. **SurferSEO Content Editor offnen** - Primar-Keyword eingeben
3. **NLP-Score prufen** - Ziel: >=70 (Silber), >=75 (Gold)
4. **Fehlende LSI-Keywords** aus SurferSEO-Report ins Briefing ubertragen
5. **Empfohlene Wortanzahl** aus SurferSEO ubernehmen
6. **H2-Vorschlage** aus SurferSEO mit Claude-Vorschlagen abgleichen

### NLP-Score-Bewertung

| Score | Bewertung | MaBnahme |
|-------|-----------|----------|
| 80-100 | Exzellent | Keine Anderung notig |
| 70-79 | Gut | Feinschliff: LSI-Keywords einbauen |
| 60-69 | Ausreichend | Struktur uberarbeiten, fehlende Themen erganzen |
| <60 | Mangelhaft | Komplett uberarbeiten, Briefing neu erstellen |

---

## Qualitatskriterien fur Content

### Vor der Veroffentlichung prufen:

- [ ] **Faktencheck:** Alle Claims gegen Quellen gepruft?
- [ ] **Brand Voice:** Passt der Ton zum Kunden? (formell/locker/technisch)
- [ ] **Entity-Density:** 3-5 verwandte Entities pro 500 Worter?
- [ ] **Brand-Embedded Copy:** Jedes zitierfahige Statement enthalt Markenname?
- [ ] **EU AI Act:** KI-Kennzeichnung vorbereitet ("KI-unterstutzt erstellt")?
- [ ] **Plagiatscheck:** Kein kopierter Content? (SurferSEO Plagiatsprufung)
- [ ] **NLP-Score erreicht:** >=70 (Silber) / >=75 (Gold)?
- [ ] **Lesbarkeit:** Kurze Satze, keine Schachtelsatze, aktive Sprache?

---

## Tier-System fur Briefings (Silber/Gold)

| Tier | Anzahl | Tiefe | NLP-Score | Schema | Zeit/Briefing |
|------|--------|-------|-----------|--------|--------------|
| **Tier 1** | Top 5 | Detail-Briefing mit Entity-Vorgaben | >=75 | Ja | 45-60 Min |
| **Tier 2** | Mitte 5 | Standard-Briefing | >=70 | Optional | 20-30 Min |
| **Tier 3** | Basis 5 | Kurz-Briefing (Ziel + 3 Punkte) | >=65 | Nein | 10-15 Min |

-> [[Prozess_Strategie]] . [[Prozess_Optimierung]] . [[../Vorlagen/Audit-Report]] . [[../KI Projekt Desi|Navigator]]
