---
title: Prozess – Optimierung (Woche 3)
date: 2026-06-08
tags: [Prozess, Optimierung]
---

# Prozess: Optimierung (Woche 3)

Die geplanten MaBnahmen aus der Strategie-Phase auf der Website umsetzen.

---

## Optimierungs-Pipeline

```
Content-Briefings -> Claude generiert/optimiert -> SurferSEO NLP-Check
-> Human-Feinschliff -> Schema-Implementierung -> OnPage -> QA
```

---

## Schritt 1: OnPage-Optimierung

### Checkliste pro Seite

- [ ] Title-Tag: Keyword enthalten, 50-60 Zeichen
- [ ] Meta-Description: Keyword enthalten, 120-155 Zeichen, Call-to-Action
- [ ] H1: 1x pro Seite, Keyword enthalten
- [ ] H2/H3: Keyword-Varianten, klare Struktur
- [ ] URL: Kurz, lesbar, Keyword im Slug (nur bei neuen Seiten)
- [ ] Interne Verlinkung: Mind. 1-2 neue interne Links gesetzt
- [ ] Alt-Texte: Alle Bilder beschrieben, Keywords wo sinnvoll

---

## Schritt 2: Content-Optimierung

### Pipeline: Claude -> SurferSEO -> Human-QA

1. **Claude generiert** Rohtext basierend auf Briefing
2. **SurferSEO** pruft NLP-Score und fehlende LSI-Keywords
3. **Human** verfeinert: Faktencheck, Brand Voice, Lesbarkeit
4. **SurferSEO** erneuter Check: Score >= Ziel erreicht?
5. **Final** einpflegen ins CMS

### NLP-Score-Ziele

| Paket | Ziel-Score | Bei Unterschreitung |
|-------|-----------|-------------------|
| Silber | >=70 | Fehlende LSI-Keywords nachrusten, Struktur prufen |
| Gold | >=75 | Komplette Uberarbeitung, Briefing neu bewerten |

---

## Schritt 3: Schema-Implementierung

### Deployment-Prozess

1. JSON-LD-Snippet aus Claude-Briefing kopieren
2. In den <head>-Bereich der Seite einfugen (CMS oder manuell)
3. Validierung: validator.schema.org
4. GSC: URL zur Indexierung einreichen
5. GSC Rich Results Report: Nach 3-7 Tagen prufen

### Haufige Schema-Fehler

| Fehler | Ursache | Losung |
|--------|---------|--------|
| "Missing field 'name'" | Pflichtfeld nicht ausgefullt | Claude-Briefing checken |
| "Invalid URL format" | URL ohne https:// | Protokoll erganzen |
| "Price not valid" | Punkt statt Komma | Format prufen |
| "Not eligible for rich results" | Falscher Schema-Typ | Typ andern |

---

## Schritt 4: CWV-Fixes (Gold)

### Prioritat nach Impact

| Fix | Impact | Aufwand | Prio |
|-----|--------|---------|------|
| Bilder komprimieren (WebP) | Hoch | Niedrig | P1 |
| Caching aktivieren | Hoch | Mittel | P1 |
| CSS/JS minifizieren | Mittel | Niedrig | P2 |
| CDN einrichten | Mittel | Hoch | P3 |
| Lazy Loading | Mittel | Niedrig | P2 |
| Third-Party-Scripts reduzieren | Hoch (34ms/Script) | Variabel | P1 |

---

## Schritt 5: Deployment & QA

### Vor Deployment

- [ ] Alle Anderungen auf Staging/Test-Umgebung gepruft?
- [ ] Schema validiert? (validator.schema.org)
- [ ] Content auf Plagiate gepruft? (SurferSEO/Copyscape)
- [ ] EU AI Act: KI-Kennzeichnung vorhanden?
- [ ] Redirects gesetzt? (bei URL-Anderungen)
- [ ] Sitemap aktualisiert? (bei neuen URLs)

### Nach Deployment

- [ ] Ahrefs Site Audit: Neue Fehler?
- [ ] GSC: URL zur Indexierung eingereicht?
- [ ] PageSpeed Insights: CWV vorher/nachher?
- [ ] Manueller Check der wichtigsten Seiten

### Rollback-Prozess

Falls ein Deployment fehlschlagt:
1. Anderungen im CMS ruckgangig machen (Versionierung)
2. Ggf. Backup einspielen
3. Fehler analysieren -> korrigieren -> erneut deployen
4. Kunden nur bei sichtbaren Fehlern informieren

---

## Pro Paket

| | Bronze | Silber | Gold |
|---|--------|--------|------|
| Seiten optimiert | 5 | 15 | 15 + Bestand (20) |
| Schema-Typen | 1x | 5x | Alle fehlenden |
| Neue Artikel | - | - | 4-8 |
| CWV-Fixes | - | - | Ja |
| Zeit (gesch.) | 3-5h | 8-12h | 20-30h |

-> [[Prozess_Strategie]] . [[Prozess_Reporting]] . [[Prozess_QA]] . [[Prozess_Content-Briefing]] . [[../KI Projekt Desi|Navigator]]
