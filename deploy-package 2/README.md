# Lunar Chaperone — corrected deploy package

Fixes the mislabeled workbook pairings on moontuner.xyz. Root cause: the CSV
registry and rendered pages dropped phase direction and labeled every step
"New → Full", which turned valid waning (Full → New) steps into impossible-
looking oppositions (e.g. "Aries → Scorpio", "Cancer → Aquarius"). The canon
in the repo (stitch_lunar_chaperone/data/lunar-canon.json) was already correct.

## HOW TO DEPLOY — drag-and-drop, then commit

This zip mirrors the repo's own folder layout. Everything under
`stitch_lunar_chaperone/` here goes straight into the same path in
michaelanticoli/moontuner-chaperone, overwriting where noted.

1. stitch_lunar_chaperone/the_canonical_archive/code.html   ← NEW screen folder
   Self-contained (no assets to wire). Served as the corrected canonical archive.
   Then add a link to it from the_lunar_chaperone_master_index/code.html.

2. stitch_lunar_chaperone/lunar_chaperone_workbooks.csv      ← OVERWRITE existing
   The registry the pages build from. Now carries explicit start_phase / end_phase
   so direction can't be dropped again. Matches lunar-canon.json 1:1 (24 steps).

3. workbook-titles-corrected.csv                             ← feed to generator
   Not part of the repo tree — upload in the lunar-workbook-generator app UI to
   regenerate cover art. Each title states phase (New/Full Moon) + element shift.

## After dropping the files in
- git add -A && git commit -m "Fix workbook phase pairings; add canonical archive"
- git push
- Re-run the page-generation step against the corrected registry.
- Regenerate covers from workbook-titles-corrected.csv.

## Key facts baked in
- 24-step continuous loop (not 12+12, not 24+2). Each step's end = next step's start.
- Steps alternate New→opposite Full and Full→opposite New.
- Opposition axes only: Fire↔Air, Earth↔Water. Any "Fire→Water" label is a red flag.
- Eclipse is TAGGED on wb09 for 2026 (Aquarius–Leo axis), not a separate workbook.
  Re-check yearly against a live ephemeris as the nodes migrate.

## Note on why this is a zip and not a direct push
Claude's GitHub access here is READ-ONLY — it can read/search the repos but cannot
commit or open PRs. This package is laid out so the deploy is drag-drop + commit.
