# Experiments – GEO Hypotheses to Test

> **Stand:** Juni 2026 | **Status:** Kontinuierlich aktualisiert  
> Legende: 🟢 Geplant | 🟡 In DurchfÃ¼hrung | 🔵 Abgeschlossen | 🔴 Invalide

---

## 1. Content-Struktur Experimente

### EXP-001: Definitions-First vs. Storytelling-First 🟢

**Hypothese:** Content, der mit einer klaren Definition beginnt (erste 100 Wörter), wird häufiger in AI Overviews zitiert als Content mit narrativem Einstieg.

**Setup:**
- 10 Keyword-Paare, zwei nahezu identische Artikel
- Variante A: Definition in ersten 100 Wörtern
- Variante B: Narrativer Einstieg (Story, Anekdote, Kontext)
- Tracken: AIO-Zitation über 8 Wochen

**Messgröße:** AIO Citation Rate (%)

---

### EXP-002: FAQ-Struktur vs. Fließtext 🟢

**Hypothese:** Content mit Q&A-Struktur (FAQ-Schema ausgezeichnet) wird häufiger zitiert als identischer Content im Fließtext.

**Setup:**
- 10 Keyword-Paare
- Variante A: FAQ-Struktur mit schema.org/FAQPage
- Variante B: Gleicher Content als zusammenhängender Fließtext
- Tracken: AIO-Zitation + ChatGPT/Perplexity Citation

---

### EXP-003: Stat-Density Experiment 🟢

**Hypothese:** Inhalte mit einer höheren Dichte an statistischen Datenpunkten (Zahlen, Prozente, konkrete Messwerte) werden häufiger extrahiert und zitiert.

**Setup:**
- 3 Content-Varianten mit unterschiedlicher Stat-Density
  - Niedrig (0-1 Stat-Points pro 500 Wörter)
  - Mittel (2-3 Stat-Points)
  - Hoch (5+ Stat-Points)
- Gleiche Keywords, gleiche Domains

**Messgröße:** Extraction-Rate in AI-Engines

---

### EXP-004: Heading-Struktur-Tiefe 🟢

**Hypothese:** Content mit tiefer, logischer Heading-Struktur (H1 → H2 → H3 → H4) wird von RAG-Systemen besser chunkiniert und häufiger zitiert.

**Setup:**
- Variante A: Nur H1 + H2 (flach)
- Variante B: H1 → H2 → H3 → H4 (tief)
- Gleicher Content-Inhalt, nur unterschiedlich strukturiert

**Messgröße:** AIO-Zitationshäufigkeit + Chunk-Qualität (manuelle Inspektion)

---

## 2. Authority & Trust Experimente

### EXP-010: Author E-E-A-T vs. No-Author 🟢

**Hypothese:** Content mit vollständiger Author-Attribution (Name, Bio, Foto, Schema.org/Person, Social Links) wird häufiger zitiert als Content ohne Author-Angaben.

**Setup:**
- 10 Content-Paare
- Variante A: Volle E-E-A-T-Signale
- Variante B: Keine Author-Info, keine Bio, kein Schema
- Inhalt identisch

**Bekannte Baseline:** Google hat E-E-A-T mehrfach als Qualitätsfaktor bestätigt, aber nicht spezifisch fÃ¼r AIO.

---

### EXP-011: Outbound-Links zu Authority-Quellen 🟢

**Hypothese:** Content, der selbst Authority-Quellen zitiert (Wikipedia, Regierungsseiten, Studien), wird von AI-Engines als vertrauenswürdiger eingestuft und häufiger zitiert.

**Setup:**
- Variante A: 3-5 Citations zu .gov, .edu, Wikipedia
- Variante B: Keine externen Zitate
- Gleicher Artikel-Inhalt

**Messgröße:** AIO/LLM-Zitation

---

### EXP-012: Domain-Frische-Signal 🟢

**Hypothese:** Ein regelmäßig aktualisierter "Last Updated" Timestamp erhöht die AI-Zitationsrate.

**Setup:**
- Variante A: Sichtbares "Updated: [Datum]" (alle 2 Wochen aktualisiert, auch bei minimalen Änderungen)
- Variante B: Kein Update-Datum (oder altes Datum >6 Monate)

---

## 3. Technische Experimente

### EXP-020: Schema-Markup-Only 🟢

**Hypothese:** Structured Data (Schema.org) allein, ohne Content-Änderung, erhöht die AI-Zitationsrate.

**Setup:**
- 20 URLs, die bisher kein Schema-Markup haben
- Hälfte der URLs: Füge Article + FAQ + Organization Schema hinzu
- Content unverändert lassen
- Tracken 4-8 Wochen

**Wichtig:** Dies testet den isolierten Einfluss von Structured Data – einer der umstrittensten GEO-Faktoren.

---

### EXP-021: RAG-Chunking-Simulation 🟢

**Hypothese:** Die Art, wie ein typisches RAG-System (z.B. LangChain mit OpenAI Embeddings) Content chunkiniert, korreliert mit tatsächlicher AI-Zitation.

**Setup:**
- Content-Datenbank mit 100+ dokumentierten Fällen (zitiert vs. nicht zitiert)
- RAG-Chunking mit verschiedenen Strategien (Fixed-size, Sentence, Semantic, Recursive)
- Vergleiche Chunk-Qualität mit tatsächlicher Citation-Performance
- Finde Chunking-Pattern, die mit Citation korrelieren

**Output:** "Optimaler Chunking-Score" als GEO-Signal

---

## 4. Plattform-Vergleichs Experimente

### EXP-030: Same Content, Different Engines 🟢

**Hypothese:** Derselbe Content wird von verschiedenen Engines (Google AIO, ChatGPT, Perplexity) unterschiedlich bewertet und zitiert.

**Setup:**
- Identifizierte Content-Stücke, die in mindestens einer Engine zitiert werden
- Tracke Zitation in allen 5 Ziel-Engines
- Identifiziere Muster: Welcher Engine-Typ bevorzugt welche Content-Eigenschaften?

---

### EXP-031: Engine Retrieval Prompt Testing 🟢

**Hypothese:** Durch systematisches Prompting lassen sich die Retrieval-Muster der Engines reverse-engineeren.

**Setup:**
- Definiere 50 standardisierte Queries
- Stelle jede Query in Google AIO, ChatGPT, Perplexity, Gemini, Copilot
- Dokumentiere zitierte Quellen
- Analysiere: Welche Quellentypen bevorzugt welche Engine?

---

## 5. Competitive & Business Experimente

### EXP-040: GEO-Lücke als Lead-Magnet 🟢

**Hypothese:** Ein einfaches Tool ("Checke deine GEO-Visibility in 30 Sekunden") generiert hochqualifizierte Leads.

**Setup:**
- Landing Page mit Domain-Eingabe
- Einfaches Backend: Crawlt Google AIO fÃ¼r 10 Keywords
- Zeigt "Du erscheinst in X/Y AI Overviews"
- Opt-in fÃ¼r detaillierten Report

**KPIs:** Conversion Rate, Lead-to-Demo Rate, virale Verbreitung in SEO-Community

---

### EXP-041: GEO Content-Briefing als Paid-Feature 🟢

**Hypothese:** Content-Marketer sind bereit, für GEO-optimierte Content-Briefings zu bezahlen (>$10/Briefing).

**Setup:**
- 10 Testkunden aus SEO-Community
- Manuelle GEO Content Briefings
- Messung: Zahlungsbereitschaft, Wiederkaufsrate, Weiterempfehlung

---

## 6. Messmethodik

### Standardisiertes Experiment-Design:

1. **Baseline:** Vorher-Zustand dokumentieren
2. **Intervention:** Änderung implementieren
3. **Wartezeit:** 2-4 Wochen (braucht Zeit bis Crawling/Indexierung)
4. **Messung:** AIO-Präsenz messen (manuell + automatisiert)
5. **Kontrolle:** Kontrollgruppe ohne Änderung
6. **Statistische Signifikanz:** Mindestens n=10 pro Bedingung

### Citation Tracking Toolchain (vorgeschlagen):

```
1. Keyword-Liste definieren
2. Wöchentliche Queries an AI-Engines senden
3. Zitierte URLs extrahieren
4. In Datenbank speichern (Keyword, Engine, URL, Position, Datum)
5. Dashboard: Citation-Trends visualisieren
```

### Herausforderungen:

- **Google AIO erscheint nicht bei jedem Query** – Inkonsistente Daten
- **IP-/Location-abhängige AIOs** – Geotargeting beeinflusst Ergebnisse
- **Personalisierung** – Eingeloggte vs. nicht eingeloggte User sehen unterschiedliche AIOs
- **AIO-Layout ändert sich** – Formatänderungen können Tracking brechen

---

## 7. Priorisierte Experimente (nächste Schritte)

1. **EXP-002** (FAQ vs. Fließtext) – Höchste erwartete Aussagekraft
2. **EXP-001** (Definitions-First) – Einfach umsetzbar, klares Signal
3. **EXP-020** (Schema-Markup-Only) – Umstritten, hoher Erkenntnisgewinn
4. **EXP-030** (Cross-Engine-Vergleich) – Plattform-Strategie validieren
5. **EXP-040** (Lead-Magnet-Test) – Geschäftsvalidierung

---

*Letzte Aktualisierung: Juni 2026 | Nächste Überprüfung: fortlaufend*
  
→ [[KI Projekt Desi|Navigator]] · [[KI Bibliothek|Bibliothek]] · [[Marktanalyse]]
