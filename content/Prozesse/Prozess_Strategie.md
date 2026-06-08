---
title: Prozess – Strategie (Woche 2)
date: 2026-06-08
tags: [Prozess, Strategie]
---

# Prozess: Strategie (Woche 2)

Aus den Audit-Daten einen konkreten, priorisierten Aktionsplan ableiten. Die Strategie-Phase entscheidet, WAS in Woche 3 optimiert wird und WARUM.

---

## Schritt 1: Entity-Extraktion & Priorisierung (Claude)

### Durchfuhrung
1. Claude-Prompt: "Extrahiere alle Entitaten aus [Audit-Bericht + Website-Content]. Klassifiziere nach Organization, Product, Person, Place, Concept. Bewerte nach ERS."
2. Output: `entity_map.json`

### Entity-Priorisierung nach ERS

| ERS Range | Prioritat | Aktion |
|-----------|-----------|--------|
| 0.8-1.0 | P1 - Kritisch | Sofort optimieren (Schema + Content) |
| 0.6-0.8 | P2 - Hoch | In Woche 2-3 bearbeiten |
| 0.4-0.6 | P3 - Mittel | In Content-Plan aufnehmen |
| <0.4 | P4 - Niedrig | Nur bei Kundenwunsch |

---

## Schritt 2: Content-Gap-Analyse (Ahrefs)

### Durchfuhrung
1. Ahrefs Content-Gap: Kunden-Domain vs. Top-3-Wettbewerber
2. Export: Keywords die Wettbewerber ranken, Kunde nicht
3. Filtern: Suchvolumen > 50/Monat, KD < 50, Relevanz zur Branche

### Content-Gap-Keywords priorisieren

| Kriterium | Gewicht | Warum? |
|-----------|---------|--------|
| Suchvolumen | 30% | Hoheres Volumen = mehr Potenzial |
| Keyword Difficulty | 20% | Niedriger KD = schnellerer Erfolg |
| Relevanz | 30% | Passt das Keyword zum Kunden? |
| SERP-Feature-Potenzial | 20% | Featured Snippet moglich? |

---

## Schritt 3: Wettbewerbsanalyse (Sistrix, Silber+)

### Durchfuhrung
1. Sistrix: Top-3/10 Wettbewerber-Domains identifizieren
2. Sichtbarkeits-Trends vergleichen: Wer wachst? Wer fallt?
3. Keyword-Uberschneidungen: Wo uberschneiden wir uns? Wo nicht?
4. SERP-Feature-Vergleich: Welche Features besetzen Wettbewerber?

---

## Schritt 4: Content-Briefings erstellen

### Tier-System (Silber, 15 Keywords)

| Tier | Anzahl | ERS | SV | CG | NLP-Ziel | Schema | Zeit/Briefing |
|------|--------|-----|----|----|----------|--------|--------------|
| **Tier 1** | Top 5 | >0.6 | >500 | >0.5 | >=75 | Ja | 45-60 Min |
| **Tier 2** | Mitte 5 | >0.4 | >100 | - | >=70 | Optional | 20-30 Min |
| **Tier 3** | Basis 5 | Rest | Rest | - | >=65 | Nein | 10-15 Min |

### Ablauf pro Briefing
1. Keyword + SERP-Daten an Claude -> Briefing generieren
2. SurferSEO Content Editor: NLP-Score + LSI-Keywords abrufen
3. Briefing mit SurferSEO-Daten anreichern (Wortanzahl, H2-Struktur)
4. Entity-Vorgaben aus Entity-Map ins Briefing
5. Schema-Typ festlegen (Organization, Article, FAQ, HowTo, Product)

---

## Schritt 5: Schema-Vorschlage

### Schema-Typen nach Relevanz

| Schema-Typ | Wann? | Bronze | Silber | Gold |
|-----------|-------|--------|--------|------|
| **Organization** | Immer (Basis) | 1x | 1x | 1x |
| **LocalBusiness** | Bei physischem Standort | - | 1x | 1x |
| **Article** | Blog-Artikel | - | 2x | Alle |
| **FAQ** | FAQ-Seiten | - | 1x | Alle |
| **HowTo** | Anleitungen | - | - | Alle |
| **Product** | E-Commerce | - | - | Alle |
| **BreadcrumbList** | Navigation | 1x | 1x | 1x |

### Schema-Validierung
Alle Vorschlage werden vor dem Briefing-Versand mit validator.schema.org gepruft.

---

## QA-Check vor Freigabe

- [ ] Briefings vollstandig? (alle Pflichtfelder)
- [ ] Schema-Vorschlage validiert?
- [ ] Keyword-Recherche plausibel? (Stichprobe 3)
- [ ] Entity-Vorgaben relevant?
- [ ] Tier-Zuordnung korrekt?

---

## Deliverables der Strategie-Phase

| Deliverable | Format | Bronze | Silber | Gold |
|------------|--------|--------|--------|------|
| Entity-Map | JSON/Markdown | - | Top 30 | Vollstandig |
| Content-Gap-Report | CSV/Markdown | - | Ja | Ja |
| Wettbewerbsanalyse | Markdown | - | Top 3 | Top 10 |
| Content-Briefings | Markdown | 5 Keywords | 15 (3 Tiers) | Pro Artikel |
| Schema-Vorschlage | JSON-LD Snippets | 1x | 5x | Alle fehlenden |
| Strategie-Dokument | PDF | - | 8-10 S. | 15-20 S. |

-> [[Prozess_Audit]] . [[Prozess_Optimierung]] . [[Prozess_Content-Briefing]] . [[../KI Projekt Desi|Navigator]]
