---
title: GEO – Schema Markup (JSON-LD)
date: 2026-06-08
tags: [GEO, Schema, JSON-LD]
---

# GEO – Schema Markup (JSON-LD)

Unsichtbarer Code auf der Website, der Google und KI-Systemen sagt, was die Inhalte **bedeuten** – nicht nur, welche Wörter da stehen.

## Die wichtigsten Schema-Typen

| Typ | Wofür? | Paket |
|-----|--------|-------|
| `Organization` | Firmeninfo (Name, Logo, URL) | Bronze+ |
| `LocalBusiness` | Lokales Geschäft (+Adresse, Öffnungszeiten) | Bronze+ |
| `Article` | Blog-Artikel (Autor, Datum) | Silber+ |
| `FAQ` | Frage-Antwort (für Featured Snippets) | Silber+ |
| `HowTo` | Schritt-für-Schritt-Anleitungen | Gold |
| `Product` | Produktseiten (Preis, Verfügbarkeit) | Gold |
| `BreadcrumbList` | Navigation (Pfad-Anzeige) | Alle |

## Beispiel: Organization (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Firmenname GmbH",
  "url": "https://www.example.com",
  "logo": "https://www.example.com/logo.png",
  "sameAs": ["https://www.facebook.com/example"]
}
```

## Google unterstützt 26+ Rich Result Types

Nicht nur FAQ und Organization – auch Course, Dataset, Discussion Forum, Education Q&A, Software App, Vacation Rental. Diese Vielfalt nutzen wir für Gold-Kunden.

→ [[GEO_Entity]] · [[GEO_Knowledge_Graph]] · [[../KI Projekt Desi|Navigator]]
