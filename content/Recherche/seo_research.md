# Classical SEO Research – Foundation for GEO

> **Stand:** Juni 2026 | **Status:** Kontinuierlich aktualisiert  
> Legende: ✅ Bestätigt | ⚡ Wahrscheinlich | 🔮 Spekulation | 📢 Marketing-Behauptung

---

## 1. Onpage SEO

### 1.1 Title Tags & Meta Descriptions

✅ **Title Tags sind der wichtigste Onpage-Faktor** für klassische Rankings  
- Optimal: 50-60 Zeichen, Keyword am Anfang
- Google überschreibt ~60% der Meta Titles dynamisch (oft basierend auf H1)
Quelle: Google Search Central, empirische Studien

⚡ **Meta Descriptions sind kein direkter Rankingfaktor mehr** seit 2009 (Google bestätigt), aber:
- Hohe CTR = indirektes Signal für Qualität (wenn auch kein bestätigter Rankingfaktor)
- Werden oft in AI-Engines als Beschreibungstext verwendet
🔮 Die Rolle von Meta Descriptions könnte in AI-Retrieval-Systemen neu relevant werden, da sie eine prägnante Content-Zusammenfassung bieten.

### 1.2 Heading-Struktur

✅ **Eine logische, hierarchische Heading-Struktur (H1 → H2 → H3) ist entscheidend:**
- Hilft Suchmaschinen, die Content-Struktur zu verstehen
- H1 = Hauptthema (einmalig)
- H2 = Hauptsections
- H3 = Untersektionen
- Keine Überschriften überspringen

⚡ **Für GEO besonders relevant**, da Heading-Struktur oft als Chunking-Signal für RAG-Systeme dient.

### 1.3 Content-Qualität

✅ **"Helpful Content" Update (2022-2024):** Google hat mehrfach bestätigt, dass inhaltslose SEO-Seiten (thin content, nur für Rankings optimiert) abgestraft werden.

✅ **E-E-A-T:** Experience, Expertise, Authoritativeness, Trustworthiness – von Google in den Search Quality Rater Guidelines dokumentiert.

⚠️ **ABER:** Google's SEO Starter Guide stellt klar: E-E-A-T ist ein Konzept aus den Quality Rater Guidelines, **kein direkter Ranking-Faktor**. Es beschreibt, was Google's Algorithmen zu erreichen versuchen, nicht einen messbaren Score.

🔮 "Helpful" im Kontext von AI-Engines bedeutet zunehmend: "Kann eine KI diesen Content verstehen, verarbeiten und daraus Antworten generieren?"

✅ **Duplicate Content** ist problematisch für Crawling-Budget, nicht direkt eine "Penalty". Canonical Tags lösen die meisten Duplicate-Issues.

✅ **Google: Keine minimale/maximale Content-Länge, kein Meta-Keywords-Tag, Domain-Keywords haben "kaum Effekt"** (SEO Starter Guide, Juni 2026).

### 1.4 Internal Linking

✅ **Essenziell für Crawling und Topic-Authority:**
- Verteil PageRank innerhalb der Domain
- Definiert Content-Hierarchien
- "Topic Clusters" (Pillar Page + Cluster Content) sind bewährtes Modell

⚡ **Internal Linking wird vermutlich auch von AI-Retrieval-Systemen genutzt**, um Topic-Authority zu erkennen und verwandte Inhalte zu gruppieren.

### 1.5 Content Freshness

✅ **Aktualisierte Inhalte werden bevorzugt** – Google's "Query Deserves Freshness" (QDF) Mechanismus  
⚡ Besonders relevant für AI-Engines: Neuere Daten = relevantere Antworten  
✅ **Letztes-Aktualisierungs-Datum zeigen** erhöht Klickrate und Vertrauen

---

## 2. Technical SEO

### 2.1 Crawling & Indexierung

✅ **robots.txt** definiert, was gecrawlt werden darf. KEIN Garant für Indexierung.  
✅ **noindex-Tag** entfernt Seiten aus dem Index.  
✅ **XML Sitemaps** sind weiterhin wichtig für Discovery.  
⚡ **Crawl Budget** wird wichtiger je größer die Seite – besonders bei AI-Engines, die crawl-lastig arbeiten können.

### 2.2 Core Web Vitals

✅ **LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift)** – von Google als Ranking-Signale bestätigt (2021).  
✅ Page Experience Update: CWV + Mobile-Friendly + HTTPS + No Intrusive Interstitials.  
⚡ **Einfluss auf AI-Retrieval ist minimal** – Page Speed beeinflusst Crawling-Effizienz, nicht Content-Qualität für LLMs.

### 2.3 Structured Data (Schema.org)

✅ **Google empfiehlt Structured Data** für Rich Results (Reviews, Recipes, Events, Products, FAQ, HowTo, Articles, etc.)  
✅ **JSON-LD ist das empfohlene Format** (Microdata/RDFa noch unterstützt, aber veraltet)  
✅ **Schema-Typen wachsen stetig** – aktuell über 800 Types in schema.org

| Schema-Type | Klassische Rich Results? | GEO-Relevanz |
|-------------|--------------------------|--------------|
| Article | ✅ | ⚡ Hilft Content-Klassifizierung |
| FAQPage | ✅ (reduziert ab 2023) | ✅ Direkt von AIOs genutzt |
| HowTo | ✅ | ✅ Strukturierte Anleitungen |
| Organization | ✅ | ✅ Entity-Building |
| Person | ✅ | ✅ Author-Attribution |
| WebSite + SearchAction | ✅ | Gering |
| BreadcrumbList | ✅ | ⚡ Site-Struktur |
| Product | ✅ | ⚡ E-Commerce |
| Review | ✅ | ⚡ Social Proof |
| Event | ✅ | Gering |
| VideoObject | ✅ | ⚡ Multimedia-Retrieval |

🔮 **Neue Schema-Types könnten speziell für AI-Retrieval entstehen** (z.B. "CitationReady", "AIExtractable" – bisher nicht existent, aber denkbar).

### 2.4 International SEO

✅ **hreflang** für mehrsprachige Seiten – korreliert nicht direkt mit GEO, aber essenziell für richtige Zuordnung in verschiedenen Märkten.  
⚡ **AI-Engines unterscheiden primär nach Sprache, nicht nach Land** – die Bedeutung von hreflang für GEO ist unklar.

---

## 3. Entity SEO & Semantic SEO

### 3.1 Knowledge Graph & Entitäten

✅ **Google's Knowledge Graph** enthält Milliarden von Entitäten und Fakten.  
✅ Seiten, die als Entität im KG erkannt werden, haben Vorteile: Knowledge Panels, höhere Authority.  
✅ **Google's Natural Language API** und die Search Quality Rater Guidelines bestätigen die Relevanz von Entitäts-Erkennung.

⚡ **Entity SEO ist für GEO fundamental:** AI-Engines, besonders Google AIO, nutzen Knowledge Graph für Entity Disambiguation und Source Selection.

### 3.2 Entity Building

**Wie baut man Entitäts-Erkennung auf?**

✅ Wikipedia-Eintrag (wenn relevant) – stärkster Einzel-Indikator für Entity-Status  
✅ Google Business Profile (ehemals GMB) für lokale Entitäten  
✅ Wikidata-Eintrag (strukturierte Entitätsdaten)  
✅ **Consistent NAP** (Name, Adresse, Telefon) über das gesamte Web  
✅ Schema.org Organization, Person, LocalBusiness  
⚡ **Erwähnungen in vertrauenswürdigen Quellen** (Zeitungen, Branchenportale, DBpedia)

### 3.3 Semantic Content

✅ **Topical Authority:** Eine Seite, die ein Thema umfassend abdeckt, wird als Autorität wahrgenommen.  
✅ **TF-IDF / LSI Keywords** sind veraltete Konzepte – moderne Systeme nutzen Transformer-basierte Embeddings (BERT, später).  
⚡ **Semantische Tiefe** (Related Entities, Related Topics, Subtopic Coverage) ist der moderne Schlüssel zu Topical Authority.  
🔮 **LLM-basierte Content-Analyse** kann Topical Coverage messen und optimieren – dies ist ein primäres Feature für ein zukünftiges GEO-Tool.

---

## 4. Offpage SEO

### 4.1 Backlinks

✅ **Weiterhin der stärkste klassische Rankingfaktor** (neben Content)  
✅ Qualität > Quantität (PageRank, vertrauenswürdige Domains)  
✅ **Link-Typen matter:** Editorial Links > Guest Posts > Directory Links > PBNs (Penalty-Risiko)  
⚡ **Backlinks als Signal für LLM-Retrieval:** Authority-Domains (viele gute Backlinks) werden auch in AI-Engines bevorzugt.

### 4.2 Brand Building

✅ **Brand Search Volume** korreliert mit Rankings – User suchen explizit nach der Marke.  
⚡ Brand-Awareness als indirekter Treiber für AI-Zitation: Eine Marke, die bekannt ist, wird häufiger als Quelle akzeptiert.  
🔮 **"Brand Entity" könnte der neue "Domain Authority" für AI-Engines werden.**

---

## 5. SEO-Tooling Landschaft (Referenz für GEO-Tools)

### Standard-Features jedes SEO-Tools:
- Rank Tracking (SERP-Positionen)
- Backlink-Analyse
- Site Audit (technisches SEO)
- Keyword-Recherche
- Wettbewerber-Analyse

### Was GEO-Tools darüber hinaus brauchen:
- **AI Overview Tracking** (welche Queries triggern AIOs, wer erscheint)
- **Cross-Engine Citation Tracking** (Google AIO + ChatGPT + Perplexity)
- **Content-Citability-Scoring** (wie zitierbar ist ein Content-Stück)
- **Entity-Monitoring** (Knowledge Graph, Wikipedia, Wikidata)
- **RAG-Optimierungs-Empfehlungen** (Chunking, Strukturierung)
- **Generative-Traffic-Attribution** (welcher Traffic kommt aus KI-Engines)

---

## 6. Bestätigte SEO-Evolutionen von 2023-2026

✅ **Google Helpful Content System** – Thin Content wird entwertet  
✅ **Google AI Overviews** – SGE wird produktiv, verändert SERP-Layout fundamental  
✅ **E-E-A-T** – Experience als neuer Faktor (zusätzlich zu E-A-T)  
✅ **Core Web Vitals** – INP ersetzt FID (2024)  
✅ **FAQ Rich Results reduziert** – Google zeigt weniger FAQ-Snippets in SERPs, aber Daten werden weiter verarbeitet  
✅ **Parasite-SEO-Angriffe** – Google geht gegen Reputation-Abuse vor  
⚡ **Search Generative Experience** – Ausweitung auf mehr Märkte und Query-Typen

---

## 7. Wichtige offene SEO-Fragen

- Inwieweit ersetzen AI-Übersichten klassische SERP-Klicks dauerhaft?
- Verändert sich das Link-Graph-Gewicht durch AI-Engines?
- Wird "User Intent Matching" durch "LLM Answerability" ersetzt?
- Entstehen neue Datenformate speziell für AI-Retrieval?
- Wie verändern sich Crawling-Patterns von Engines wie ChatGPT, Perplexity?

---

*Letzte Aktualisierung: Juni 2026 | Nächste Überprüfung: fortlaufend*
  
→ [[KI Projekt Desi|Navigator]] · [[KI Bibliothek|Bibliothek]] · [[geo_research]] · [[../SEO/SEO_OnPage]]
