# Moontuner Chaperone

A static archive of MoonTuner's **Lunar Chaperone** workbook system: an editorial, ritual-styled collection of HTML prototypes, workbook modules, dashboards, and CSV source maps for a 26-workbook lunar guidance series.

## What this repository contains

This repository currently centers on the `stitch_lunar_chaperone/` project directory, which includes:

- A landing page and overview index for the workbook collection
- Multiple HTML prototype screens for archive, navigation, and product framing
- Workbook-specific prototype folders with `code.html` and preview assets
- CSV datasets describing workbook titles, journeys, and chaperone concepts
- Supporting artifacts such as dashboard, index, research, ritual, and template modules

In short: this repo looks like a design/export package for a lunar workbook experience rather than a conventional app codebase with build tooling.

## Project concept

**Lunar Chaperone** is framed as a 26-workbook system built around recurring lunar transitions:

- **24 core workbooks** covering cyclical sign-to-sign energetic journeys
- **2 eclipse portal workbooks** for special transitional periods
- A strong emphasis on **somatic inquiry**, **ritual structure**, **editorial design**, and **archival narrative language**

The artifacts in this repo present the project as a hybrid of:

- content system
- static website/prototype
- design system exploration
- workbook publishing archive

## Repository structure

```text
.
├── stitch_lunar_chaperone/
│   ├── index.html
│   ├── 22_lunar_chaperones.csv
│   ├── lunar_chaperone_workbooks.csv
│   ├── lunar_chaperone_project_export_map.html
│   ├── prototype_narrative_navigation_map.html
│   ├── the_canonical_archive_prd.html
│   ├── the_great_library/
│   │   ├── code.html
│   │   └── screen.png
│   ├── the_lunar_chaperone_master_index/
│   │   ├── code.html
│   │   └── screen.png
│   ├── workbook_01_ignition_to_depth/
│   │   ├── code.html
│   │   └── screen.png
│   └── ... many additional workbook, dashboard, index, ritual, and template folders
```

## Key files

### `stitch_lunar_chaperone/index.html`
A high-level landing page for the 26-workbook series. It presents the workbook catalog, workbook summaries, cycle types, and call-to-action links.

### `stitch_lunar_chaperone/lunar_chaperone_workbooks.csv`
A structured workbook list containing workbook titles, sign journeys, phase grouping codes, and short descriptions.

### `stitch_lunar_chaperone/22_lunar_chaperones.csv`
A concept/art direction CSV that pairs named transitions with image prompt text.

### `stitch_lunar_chaperone/the_canonical_archive_prd.html`
A compact design specification describing the visual language: paper archive aesthetics, typography hierarchy, palette, graphic language, and composition principles.

### `stitch_lunar_chaperone/prototype_narrative_navigation_map.html`
A narrative map for the intended user journey through the archive, master index, workbook loop, and eclipse portal transitions.

### `stitch_lunar_chaperone/lunar_chaperone_project_export_map.html`
A project/export reference describing screen groupings, master modules, and intended navigation architecture.

## Design language

The project consistently uses an editorial “paper archive” aesthetic:

- warm ivory / paper-toned backgrounds
- dark ink typography
- muted gold accents
- serif-forward display typography with sans-serif metadata labels
- asymmetrical layouts and generous whitespace
- archive, ledger, library, sanctum, and ritual metaphors throughout

This makes the repository feel closer to a narrative publishing prototype than a traditional software product.

## How to view the project

Because the repo is primarily static HTML and assets, the easiest way to explore it is:

1. Open files directly in GitHub for inspection, or
2. Clone the repository and open HTML files in a browser locally

Suggested starting points:

- `stitch_lunar_chaperone/index.html`
- `stitch_lunar_chaperone/the_great_library/code.html`
- `stitch_lunar_chaperone/the_lunar_chaperone_master_index/code.html`
- `stitch_lunar_chaperone/workbook_01_ignition_to_depth/code.html`

## Documentation included in this repo

This README provides a project-level overview. Additional documentation has also been added under `docs/` to help explain:

- repository architecture
- content model
- navigation flow
- design system cues
- practical next steps for development or publishing

## Suggested next steps

If you want to evolve this repository further, useful next moves would be:

1. Standardize file naming and workbook naming conventions
2. Add a single canonical sitemap/index for all workbook folders
3. Introduce a simple static site structure for navigation between pages
4. Separate content, presentation, and data into cleaner layers
5. Add screenshots and/or GitHub Pages deployment instructions
6. Document which HTML files are source-of-truth versus exported artifacts

## Status

Current state appears to be:

- **prototype/archive export:** yes
- **static HTML experience:** yes
- **build system:** not evident
- **application runtime:** not evident
- **formal developer docs:** now added

---

If you'd like, I can also next:

- add screenshots to the README,
- make the docs more product-facing vs developer-facing,
- or create a cleaner docs landing page with cross-links.
