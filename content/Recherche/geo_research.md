# GEO Research – Generative Engine Optimization

> **Stand:** Juni 2026 | **Status:** Kontinuierlich aktualisiert  
> Legende: ✅ Bestätigt | ⚡ Wahrscheinlich | 🔮 Spekulation | 📢 Marketing-Behauptung

---

## 0. Google's Offizielle Position (Stand Juni 2026)

**Quelle:** [Google Search Central: Optimizing for generative AI search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

✅ **"GEO" und "AEO" sind Marketing-Begriffe** – aus Google's Perspektive ist Optimierung für AI Search einfach SEO.  
✅ **Keine speziellen Anforderungen** fÃ¼r AI Overviews / AI Mode – Standard-SEO-Best-Practices reichen.  
✅ **Keine speziellen Markups** nötig: kein `llms.txt`, kein AI-Text, kein spezielles Schema.org.  
✅ **Query Fan-Out**: Google AIO stellt mehrere parallele, verwandte Suchen, um Antworten aus diverseren Quellen zu generieren als klassische Suche.  
✅ **RAG-basiert**: AI-Features nutzen Google's Core-Search-Ranking-Systeme fÃ¼r Retrieval und "grounden" dann AI-Antworten in diesen gecrawlten Seiten.  
✅ **"Preferred Sources"**: Nutzer kÃ¶nnen bevorzugte Quellen auswÃ¤hlen, die dann prominenter erscheinen und 2x hÃ¶here CTR haben (345.000+ Preferred Sources selected).  
✅ **Opt-Out**: `nosnippet`, `data-nosnippet`, `max-snippet` kontrollieren, was aus Seiten in AI-Features erscheint. `Google-Extended` fÃ¼r AI-Training/Grounding.

📢 **Google debunkt explizit:**
- llms.txt / spezielle AI-Dateien → "You don't need to create new machine readable files"
- Content-Chunking fÃ¼r AI → "There's no requirement to break your content into tiny pieces"
- Spezielles AI-Schema-Markup → "There's no special schema.org structured data"
- Inauthentische Mentions → "Seeking inauthentic 'mentions' across the web isn't as helpful"
- Spezielle AI-Schreibweise → "You don't need to write in a specific way just for generative AI search"

⚠️ **Wichtig zu verstehen:** Dies ist Google's offizielle Kommunikation. Das bedeutet nicht, dass GEO-Optimierung nicht funktioniert – es bedeutet, dass Google sie nicht als separaten Disziplin anerkennt. Die akademische Forschung (siehe Abschnitt 7) zeigt, dass strukturelle, Content- und Authority-Faktoren sehr wohl AI-Zitation beeinflussen.

---

## 1. Was wir sicher wissen (Confirmed)

### AI Overviews (Google SGE → AI Overviews)

✅ **AI Overviews erscheinen für komplexe, informationsgetriebene Queries**  
Quelle: Google Search Central Blog, Mai 2024

✅ **AI Overviews generieren Antworten aus mehreren Quellen** – nicht nur aus dem Top-Ranking-Dokument  
Quelle: Beobachtung, Google AI Overviews Dokumentation

✅ **Klassisches SEO-Ranking korreliert stark mit AIO-Zitation, ist aber nicht identisch**  
- Top-10-Ranking-Seiten werden häufiger zitiert als Seiten auf Position 11+
- Aber: Auch Seiten auf Position 1 werden nicht immer zitiert
- Und: Nicht jede AIO-Quelle ist auch ein Top-10-Ranking  
Quelle: Multiple Studien (BrightEdge, Authoritas, ZipTie, Search Engine Land, 2024)

✅ **Structured Data hilft, aber ist keine Garantie**  
- FAQ-Schema, HowTo-Schema können AIO-Erscheinung begünstigen
- Google hat FAQ-Schema-Rich-Results reduziert (2023), aber die strukturierten Daten werden weiter verarbeitet  
Quelle: Google Search Central, Beobachtungen

✅ **E-E-A-T-Signale sind relevant**  
- Author-Attribution, Expertise-Nachweise, About-Us-Seiten
- Aktualität (freshness) als starkes Signal  
Quelle: Google Search Quality Rater Guidelines, Korrelationsstudien

✅ **Content-Format beeinflusst Zitation**  
- Kurze, prägnante Antworten (40-60 Wörter) werden bevorzugt extrahiert
- Listen, Tabellen, Definitionen erhöhen Zitierwahrscheinlichkeit
- FAQ-Strukturen mit klaren Q&A-Paaren funktionieren  
Quelle: Empirical studies (BrightEdge 2024, ZipTie 2024)

### ChatGPT / Perplexity / Claude

✅ **ChatGPT Search nutzt Bing-Index als Basis**, reichert mit eigenem Knowledge an  
✅ **Perplexity nutzt eine Mischung aus eigenem Index und Live-Search (Google/Bing)**  
✅ **Claude (ohne Web-Suche) kann nur aus Trainingsdaten antworten**, kein Live-Retrieval  
✅ **Alle Systeme zeigen zunehmend Quellenangaben** (unterschiedlich granular)

🔮 **RAG-Pipeline-Details** sind für die meisten kommerziellen Systeme Black Boxes – wir beobachten Output, nicht die Verarbeitung.

---

## 2. GEO-Faktoren im Detail

### 2.1 Content-Faktoren

| Faktor | Einfluss | Evidenz |
|--------|----------|---------|
| Content-Länge | Umstritten. Längere Inhalte ranken klassisch besser, aber Extraktion bevorzugt prägnante Passagen. Optimal: Umfangreicher Content MIT kurzen, extrahierbaren Abschnitten. | ⚡ |
| Überschriften-Struktur (H1-H3) | Starke Korrelation mit AIO-Zitation. Klare, deskriptive Überschriften helfen Retrieval-Systemen. | ⚡ |
| Listen & Tabellen | Werden von AI-Engines bevorzugt als strukturierte Daten erkannt und zitiert. | ✅ |
| FAQ-Sektionen | Mit klaren, kurzen Antworten (40-60 Wörter) hoch effektiv für AIO-Zitation. | ✅ |
| Definitionen am Content-Anfang | "What is X?" → Definition in ersten 100 Wörtern erhöht Zitationsrate. | ⚡ |
| Zitate & Quellenangaben im Content | Zeigen "Citability" – eigene Quellenarbeit signalisiert Vertrauenswürdigkeit an Retrieval-Systeme. | 🔮 |
| Statistische Datenpunkte | Werden von LLMs bevorzugt extrahiert (Zahlen, Prozente, konkrete Daten). | ⚡ |
| Multimedia (Bilder, Videos) | AI Overviews zeigen zunehmend Bilder/Video-Thumbnails. Alt-Text, strukturierte Bilddaten werden wichtiger. | ⚡ |

### 2.2 Technische Faktoren

| Faktor | Einfluss | Evidenz |
|--------|----------|---------|
| Structured Data (Schema.org) | FAQ, HowTo, Article, Organization – von AI-Engines gelesen, indirekter Einfluss. | ✅ |
| Crawlbarkeit / Indexierbarkeit | Grundvoraussetzung – nichts Neues, aber ohne keine AI-Zitation möglich. | ✅ |
| Page Speed / Core Web Vitals | Indirekter Ranking-Faktor → indirekter GEO-Faktor. Geringer Einfluss auf Retrieval-Qualität. | ⚡ |
| Mobile-Friendliness | Basis-Anforderung. Kein spezifischer GEO-Faktor. | ✅ |
| HTTPS | Basis-Anforderung. | ✅ |
| Sitemap / Crawl Budget | Indirekt – je besser gecrawlt, desto höher die Chance auf Aufnahme in AI-Indizes. | ⚡ |

### 2.3 Authority & Trust-Faktoren

| Faktor | Einfluss | Evidenz |
|--------|----------|---------|
| Backlinks (Quantity + Quality) | Stärkster klassischer Rankingfaktor → stark korreliert mit AIO-Zitation. | ✅ |
| Domain Authority / DR | Einflussreich – starke Domains werden häufiger zitiert. | ✅ |
| Brand Searches | Eigenmarken-Suchvolumen korreliert mit AIO-Präsenz (Brand als Entity). | ⚡ |
| Author E-E-A-T | Experience, Expertise, Authoritativeness, Trustworthiness – von Google bestätigt als Qualitätskriterien. | ✅ |
| Wikipedia-Präsenz | Entity in Wikipedia → höhere Wahrscheinlichkeit, als Quelle erkannt zu werden. | ⚡ |
| Knowledge Graph Entry | Google Knowledge Graph Einträge erhöhen Entity-Erkennung in AI-Systemen. | ⚡ |
| Social Proof / Erwähnungen | Unklar, ob LLMs soziale Signale direkt werten. Indirekt durch Brand-Building relevant. | 🔮 |

---

## 3. Plattform-spezifische Unterschiede

### Google AI Overviews

| Eigenschaft | Wertung |
|-------------|---------|
| Retrieval-Basis | Google Search Index |
| Quellenanzahl | 3-5 Quellen pro Overview (variabel) |
| Quellen-Variation | Hoch – versucht verschiedene Quellen zu kombinieren |
| International | USA, UK, EU zunehmend ausgerollt |
| Ads | Keine Ads IN AIOs (noch), aber Ads oberhalb/unterhalb |
| Opt-Out | Kein offizieller Opt-Out (nur nosnippet verhindert Anzeige des Snippets) |
| Besonderheit | "Gemini-powered" answers, integriert Shopping Graph, Maps |

### ChatGPT Search (OpenAI)

| Eigenschaft | Wertung |
|-------------|---------|
| Retrieval-Basis | Bing-Index + OpenAI-eigene Crawls (GPTBot) |
| Quellenanzahl | Variabel, oft mehrere Quellen mit Links |
| Quellen-Variation | Mittel – tendiert zu Authority-Domains |
| Ads | Keine |
| Opt-Out | `robots.txt`: GPTBot blockierbar |
| Besonderheit | Konversationskontext beeinflusst Quellenauswahl; Personalisierung möglich |

### Perplexity

| Eigenschaft | Wertung |
|-------------|---------|
| Retrieval-Basis | Eigener Web-Index + Live-Suche über APIs |
| Quellenanzahl | 3-6 Quellen mit Links |
| Quellen-Variation | Hoch – gut darin, diverse Quellen zu zeigen |
| Ads | Keine |
| Opt-Out | PerplexityBot in robots.txt blockierbar |
| Besonderheit | "Pro Search" mit Follow-up-Fragen und Multi-Step-Retrieval |

### Gemini (Google)

| Eigenschaft | Wertung |
|-------------|---------|
| Retrieval-Basis | Google Search + Knowledge Graph |
| Quellenanzahl | Weniger Quellen als Perplexity/ChatGPT (Stand 2025) |
| Quellen-Variation | Geringer – bevorzugt starke Authority-Domains |
| Ads | Keine |
| Besonderheit | Google-Ökosystem-Integration (Gmail, Docs, Drive) |

### Microsoft Copilot / Bing Chat

| Eigenschaft | Wertung |
|-------------|---------|
| Retrieval-Basis | Bing-Index |
| Quellenanzahl | 3-4 Quellen |
| Ads | Ja, experimentell |
| Opt-Out | Über Bing Webmaster Tools steuerbar |
| Besonderheit | Enterprise-Integration (Microsoft 365), "Work" vs "Web" Modus |

### Claude (Anthropic)

| Eigenschaft | Wertung |
|-------------|---------|
| Retrieval-Basis | Kein Live-Retrieval (in Basis-Version) |
| Web-Zugriff | Auf Anfrage, kein natives Search wie ChatGPT |
| Quellenanzahl | N/A |
| Besonderheit | 200K Token Context – kann große Dokumente direkt verarbeiten; kein SEO-Kanal im klassischen Sinne |

---

## 4. RAG-Systeme und Retrieval-Pipelines

### Wie Retrieval-Augmented Generation typischerweise funktioniert

```
User Query → Query Rewriting → Document Retrieval → Re-Ranking → Context Assembly → LLM Generation → Answer
```

✅ **Query Rewriting:** Suchanfragen werden von LLMs umformuliert, um bessere Retrieval-Ergebnisse zu erzielen. Das heißt: Die Suchmaschine sucht nicht unbedingt nach dem, was der User eingibt.

⚡ **Document Retrieval:** Meist über Vector Embedding Search + Keyword Search (Hybrid). Google nutzt vermutlich eine komplexere Mischung aus klassischem PageRank, semantischen Embeddings und Knowledge Graph.

⚡ **Re-Ranking:** Retrieval-Ergebnisse werden durch ein zweites Modell neu bewertet. Dies ist der kritische Schritt, bei dem "GEO" ansetzen muss: Was bringt ein Dokument in die Top-N für die LLM-Verarbeitung?

🔮 **Context Assembly:** Die ausgewählten Dokument-Chunks werden in den LLM-Context geladen. Chunking-Strategie im Retrieval entscheidet, welche Teile des Dokuments relevant sind. Dies ist weitgehend undokumentiert und variiert pro Engine.

---

## 5. Spezifische GEO-Strategien

### 5.1 Content Chunking für LLM-Retrieval

Eine der wichtigsten GEO-Strategien: Content so strukturieren, dass einzelne Chunks eigenständig verständlich sind.

**Empfehlungen (basierend auf Retrieval-Theorie):**
- Jeder H2/H3-Abschnitt sollte eine autarke Informationseinheit sein
- Kernaussage in den ersten 1-2 Sätzen
- Klare Definitionen vor langen Erklärungen
- "Inverted Pyramid" Schreibstil

⚡ Evidenz: Logisch aus Retrieval-Pipeline abgeleitet, empirisch noch nicht systematisch getestet.

### 5.2 Citability Engineering

"Inhalte so schreiben, dass sie zitierbar sind."

**Ansätze:**
- **"Statistable" Content:** Klare Datenpunkte, die extrahiert werden können
- **Zitierfähige Statements:** Kurze, prägnante Sätze, die isoliert Bedeutung tragen
- **Source Clustering:** Eigene Quellen im Content klar ausweisen (zirkuläre Vertrauensbildung?)
- **Attribution Hooks:** Content so formulieren, dass die Quelle "natürlich" im extrahierten Text erscheint

🔮 Weitgehend theoretisch – Bedarf an systematischen Experimenten.

### 5.3 Multi-Engine Visibility

Unterschiedliche Engines bevorzugen unterschiedliche Quellen. Eine GEO-Strategie muss plattformübergreifend denken.

| Engine | Was sie bevorzugt |
|--------|-------------------|
| Google AIO | Authority-Domains, EEAT-Signale, Structured Data |
| ChatGPT | Bing-Index-Qualität, Semantic Relevance |
| Perplexity | Frische Quellen, diverse Perspektiven |
| Claude | (Kein Live-Retrieval) |

⚡ Plattform-spezifische Optimierung ist theoretisch möglich, aber der Aufwand für die meisten Unternehmen nicht gerechtfertigt. Eine solide GEO-Basis (Structured Data, EEAT, prägnante Content-Struktur) deckt die meisten Engines ab.

---

## 6. GEO-Messung & KPIs

### Erfolgsmetriken (vorgeschlagen, nicht standardisiert)

| Metrik | Beschreibung |
|--------|-------------|
| AIO Visibility Score | % der relevanten AI-Übersichten, in denen die Domain erscheint |
| Citation Frequency | Wie oft wird die Domain in AI-Antworten zitiert? |
| Citation Prominence | Position der Quelle innerhalb der AI-Antwort (erste vs. letzte Quelle) |
| AI Share of Voice | Anteil der AI-Zitationen im Vergleich zu Wettbewerbern |
| AI Traffic Attribution | Traffic aus AI-Links (messbar via UTM / Referrer, aber fragmentiert) |
| Generative Dwell Time | Verweildauer in AI-generierten Inhalten (kaum messbar) |

📢 **Viele Tools behaupten, diese Metriken zu messen.** Tatsächlich ist die Messung extrem fragmentiert:
- Google AI Overviews: kein eigener Referrer, Links werden wie normale SERP-Klicks getrackt
- ChatGPT: Referrer von chatgpt.com
- Perplexity: Referrer von perplexity.ai
- Kein standardisierter Visibility-Index (anders als bei klassischen SERP-Rankings)

---

## 7. Akademische Forschung (20+ Papers analysiert)

### 7.1 Bestätigte GEO-Faktoren aus Peer-Review-Forschung

| Faktor | Evidenzlevel | Quelle |
|--------|-------------|--------|
| Topical Relevance ist der #1 Citation-Treiber | ⚡ 252.000 Trials | Vishwakarma et al. 2026, KDD |
| Quellen-Position in Retrieval-Liste | ⚡ Mixed-effects-Modelle | Vishwakarma et al. 2026 |
| Preisinformationen erhÃ¶hen Zitation | ⚡ Paired comparison | Vishwakarma et al. 2026 |
| Aktuelle Timestamps helfen | ⚡ Paired comparison | Vishwakarma et al. 2026 |
| Content-Struktur (Headings, Organisation) | ⚡ 6-Engine-Studie | GEO-SFE, Yu et al. 2026 |
| AI Search bevorzugt Earned Media vor Brand-Owned | ⚡ Cross-Engine | Chen & Koudas 2025 |
| Einmalige Visibility-Messungen sind unzuverlässig | ⚡ Empirisch | Schulte et al. 2026 |
| Dokument-Level-Eigenschaften > isolierte lexikalische Edits | ⚡ Feature-Studie | Liu & Xu 2026 |
| GEO kann Visibility um bis zu 40% steigern | ✅ KDD 2024 | Aggarwal et al. |
| Bis zu 30% der AI-Zitationen verzerren Quellen | ⚡ 112K Responses | CITETRACE 2026 |

### 7.2 Zentrale Papers

**"GEO: Generative Engine Optimization"** (Aggarwal et al., KDD 2024)  
→ Erste formale GEO-Definition, GEO-Bench Benchmark, bis 40% Visibility-Boost.

**"What Gets Cited: Competitive GEO in AI Answer Engines"** (Vishwakarma et al., Mai 2026)  
→ 252.000 Trials, 6 LLMs, 18 Content-Faktoren. Topical relevance + Listenposition stÃ¤rkste Treiber.

**"From Citation Selection to Citation Absorption"** (Zhang et al., Apr 2026)  
→ Unterscheidet Citation Breadth (Anzahl Quellen) von Citation Depth (Einfluss auf Antwort). ChatGPT zitiert weniger Quellen aber mit hÃ¶herem Einfluss als Perplexity/Google.

**"AgenticGEO: A Self-Evolving Agentic System for GEO"** (Yuan et al., MÃ¤rz 2026)  
→ MAP-Elites-Archiv evolviert diverse Content-Strategien. Outperformt 14 Baselines.

**"EcoGEO: Trajectory-Aware Evidence Ecosystems"** (Ye et al., Mai 2026)  
→ Shift von Page-Level zu Ecosystem-Level GEO. Navigation Pages + Support Pages mit Shared Terminology und Internal Links.

**"The Discovery Gap"** (Sharma, Dez 2025)  
→ LLMs erkennen Produkte zu 99.4% namentlich, aber Discovery-Queries nur 3.32%. GEO-Scores korrelieren NICHT mit Discovery. Klassische SEO (Referring Domains) tut es.

**"Don't Measure Once"** (Schulte et al., Apr 2026)  
→ AI-Suchergebnisse variieren Ã¼ber Runs, Prompts und Zeit. Visibility muss als Distribution gemessen werden, nicht als Einpunkt-Ergebnis.

### 7.3 Laufende GEO-Forschungsthemen

- **Multi-Agent GEO** – Reusable Strategy Learning (MAGEO, Wu et al., 2026)
- **E-Commerce GEO** – Produkt-Discovery in AI-Engines (E-GEO, Bagga et al., 2025)
- **GEO Defense** – Semantic Integrity Scoring gegen Manipulation (SCI-Defense, Yu et al., 2026)
- **Citation Failures** – Taxonomie von Fehlermodi + Auto-Repair (AgentGEO, Tian et al., 2026)
- **Cross-Cultural GEO** – Chinesische LLMs zeigen 30pp hÃ¶here Brand-Mentions als internationale (Huang et al., 2025)

---

## 8. Ungeklärte Fragen

- Wie verarbeitet Google AIO Quellen, die Ã¼bereinstimmende Informationen liefern? (Consensus vs. Diversity)
- Werden zitierte Inhalte aus dem AIO-Text tatsÃ¤chlich geklickt? Google sagt "Higher quality clicks", aber unabhÃ¤ngige Studien fehlen.
- Lernen AI-Engines aus Nutzer-Interaktion? (Feedback Loops?)
- Wie stark zÃ¤hlt die Position einer Quelle im AIO?
- Was ist der Unterschied zwischen "Cited" und "Absorbed"? (Citation ohne Einfluss auf Antwort)
- Wie stabil sind GEO-Effekte Ã¼ber Model-Updates hinweg? Keine longitudinale Forschung.

---

*Letzte Aktualisierung: Juni 2026 | Nächste Prüfung: fortlaufend*
  
→ [[KI Projekt Desi|Navigator]] · [[KI Bibliothek|Bibliothek]] · [[Marktanalyse]] · [[seo_research]]
