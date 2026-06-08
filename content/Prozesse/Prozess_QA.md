---
title: Prozess – Qualitatssicherung (QA)
date: 2026-06-08
tags: [Prozess, QA, Qualitat]
---

# Prozess: Qualitatssicherung (QA)

Jeder Arbeitsschritt durchlauft ein QA-Gate, bevor das Deliverable an den Kunden geht. Das verhindert Fehler, sichert Qualitat und schutzt vor Haftungsrisiken.

---

## QA-Gates im Workflow

### Gate 1: Nach dem Audit (Woche 1)

**Was wird gepruft?**

| Check | Wie? | Wer? |
|-------|------|------|
| Alle Datenquellen vollstandig? (Ahrefs + Sistrix + GSC + Claude) | Checkliste | SEO-Senior |
| Fehler korrekt klassifiziert? (Critical/High/Medium/Low) | Stichprobe: 5 Fehler manuell prufen | SEO-Senior |
| Scores plausibel? (nicht 0/100, nicht identisch) | Plausibilitats-Check | SEO-Senior |
| Claude-Output auf Halluzinationen gepruft? | Stichprobe: 3 Fakten gegen Quelle checken | SEO-Senior |
| Audit-Bericht verstandlich? (auch fur Nicht-SEOler) | Gegenlesen durch Projektmanager | Projektmanager |

**Freigabe:** SEO-Senior gibt Audit-Bericht frei -> Projektmanager versendet an Kunden.

---

### Gate 2: Nach der Strategie (Woche 2)

**Was wird gepruft?**

| Check | Wie? | Wer? |
|-------|------|------|
| Briefings vollstandig? (alle Pflichtfelder) | Template-Check | SEO-Senior |
| Schema-Vorschlage korrekt? | validator.schema.org | SEO-Senior |
| Keyword-Recherche plausibel? (Volumen, Difficulty) | Stichprobe: 3 Keywords | SEO-Senior |
| Entity-Vorgaben relevant? (Bezug zur Kunden-Branche) | Manueller Abgleich | SEO-Senior |
| Tier-Zuordnung korrekt? (SV, ERS, CG) | ERS-Matrix prufen | SEO-Senior |

**Freigabe:** SEO-Senior gibt Strategie frei -> Projektmanager sendet Briefings an Kunden zur Freigabe (3 Werktage).

---

### Gate 3: Nach der Optimierung (Woche 3)

**Was wird gepruft?**

| Check | Wie? | Wer? |
|-------|------|------|
| Optimierte Seiten: Vorher/Nachher-Vergleich | Manuell: Title, Meta, H1, Content | SEO-Senior |
| Schema validiert? | validator.schema.org + GSC Rich Results | SEO-Senior |
| Content auf Plagiate gepruft? | SurferSEO oder Copyscape | Content-Redakteur |
| CWV-Werte verbessert? (Gold) | PageSpeed Insights vor/nach | SEO-Senior |
| Keine neuen Fehler eingebaut? (Redirects, 404) | Ahrefs Site Audit (nach Deployment) | SEO-Senior |
| EU AI Act: KI-Kennzeichnung vorhanden? | Quelltext-Check | Content-Redakteur |

**Freigabe:** SEO-Senior gibt Deployment frei -> Projektmanager informiert Kunden.

---

### Gate 4: Nach dem Reporting (Woche 4)

**Was wird gepruft?**

| Check | Wie? | Wer? |
|-------|------|------|
| Zahlen gegen Rohdaten gegengecheckt? | Stichprobe: 3 KPIs | SEO-Senior |
| Claude-Report-Zusammenfassung auf Halluzinationen gepruft? | Vollstandig lesen | SEO-Senior |
| MaBnahmenplan realistisch? (3-5 Aktionen, priorisiert) | Plausibilitats-Check | Projektmanager |
| Report verstandlich? (Executive Summary in 3-5 Satzen) | Gegenlesen | Projektmanager |

**Freigabe:** SEO-Senior gibt Report frei -> Projektmanager versendet an Kunden + terminiert Call.

---

## Fehler-Protokoll

Jeder im QA entdeckte Fehler wird dokumentiert. Das Protokoll dient der Prozessverbesserung.

### Template

| Feld | Beschreibung |
|------|-------------|
| **Datum** | Wann entdeckt? |
| **Phase** | Audit / Strategie / Optimierung / Reporting |
| **Fehler** | Kurze Beschreibung |
| **Schweregrad** | Critical / High / Medium / Low |
| **Ursache** | Warum ist der Fehler passiert? (Tool-Fehler, menschlicher Fehler, Prozesslucke) |
| **MaBnahme** | Was wurde getan? |
| **Status** | Behoben / In Arbeit / Eskaliert |
| **Verantwortlich** | Wer hat es behoben? |

### Schweregrad-Definition

| Grad | Definition | Reaktion |
|------|-----------|----------|
| **Critical** | Fehler wurde an Kunden ausgeliefert, konnte Ranking schaden | Sofort-Eskalation an Projektleitung, Korrektur innerhalb 24h, Kundeninfo |
| **High** | Fehler vor Auslieferung entdeckt, hatte Impact gehabt | Im nachsten Team-Meeting besprechen, Prozess anpassen |
| **Medium** | Qualitatsmangel ohne direkten Impact | In QA-Liste aufnehmen, nachste Iteration beheben |
| **Low** | Kosmetischer Fehler (Tippfehler, Formatierung) | Korrigieren, kein Prozess-Change notig |

---

## Eskalationsprozess

### Wer wird wann informiert?

| Schweregrad | Informiert | Wann? | Wie? |
|------------|-----------|-------|------|
| **Critical** | Projektleitung + Kunden-Team | Sofort (innerhalb 1h) | Telefon/Slack + E-Mail |
| **High** | Projektleitung | Innerhalb 4h | Slack + E-Mail |
| **Medium** | SEO-Senior | Nachstes Daily | Task-Board |
| **Low** | SEO-Senior | Nachstes Weekly | Task-Board |

### Eskalationskette

1. **Entdecker** meldet Fehler an **SEO-Senior**
2. **SEO-Senior** bewertet Schweregrad und entscheidet uber Eskalation
3. Bei Critical/High: **Projektleitung** entscheidet uber Kunden-Kommunikation
4. Fehler wird im **Fehler-Protokoll** dokumentiert
5. **Retrospektive** im nachsten Team-Meeting: Was lernen wir daraus?

---

## QA-Tools

| Tool | Einsatz |
|------|---------|
| **validator.schema.org** | Schema-Validierung |
| **PageSpeed Insights** | CWV vor/nach Deployment |
| **SurferSEO Plagiarism Check** | Plagiats-Check (Standard-Plan+) |
| **Ahrefs Site Audit** | Nach-Deployment-Check auf neue Fehler |
| **GSC Rich Results Report** | Schema-Erfolgskontrolle |
| **Google Natural Language API** | Entity-Density prufen |

-> [[Prozess_Audit]] . [[Prozess_Strategie]] . [[Prozess_Optimierung]] . [[Prozess_Reporting]] . [[../KI Projekt Desi|Navigator]]
