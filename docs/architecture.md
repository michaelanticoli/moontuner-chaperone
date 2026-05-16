# Repository Architecture

## High-level structure

The repository is currently simple at the top level and heavily concentrated in one project directory.

```text
.
├── README.md
└── stitch_lunar_chaperone/
```

Inside `stitch_lunar_chaperone/`, there is a mixture of:

- root-level HTML documents
- CSV data files
- many feature/workbook/module directories
- prototype exports containing `code.html` and `screen.png`

## Architectural character

This is best described as a **content-rich static prototype repository** rather than a conventional application repository.

It does not yet present the usual boundaries of:

- `src/`
- `components/`
- `public/`
- `tests/`
- `package.json`
- deployment config
- backend services

Instead, the repo is organized around **artifact type** and **conceptual module**.

## Main architectural layers

### 1. Project root layer
The root repository currently acts as a container around the `stitch_lunar_chaperone/` project.

Files here should ideally remain minimal and include:
- top-level README
- docs
- future deployment/config files if the project matures

### 2. Project content layer
The `stitch_lunar_chaperone/` directory is the main working archive.

This layer includes:
- overview entrypoints
- workbook indexes
- design specs
- navigation specs
- CSV source data
- screen exports

### 3. Screen export layer
Many subdirectories appear to represent individual screens or modules exported from a design/prototyping workflow.

Common pattern:

```text
some_module/
├── code.html
└── screen.png
```

Interpretation:
- `code.html` = exported implementation or HTML prototype
- `screen.png` = visual preview of the same module

### 4. Content/data layer
CSV files hold structured content summaries.

Examples:
- workbook catalogs
- chaperone/image prompt mappings

This is the closest thing in the repo to a reusable data layer.

## Folder naming patterns

The naming conventions suggest several content categories.

### Workbook folders
Examples:
- `workbook_01_ignition_to_depth`
- `workbook_02_depth_to_root`
- `workbook_03_root_to_vision`
- etc.

These likely represent individual workbook-specific screens or experiences.

### Functional/support folders
Examples:
- `context_framing`
- `energy_mapping`
- `daily_inquiry_practice`
- `research_seminar_prompts`
- `ritual_scripts`
- `sacred_geometry`

These appear to represent repeatable workbook sections, support modules, or thematic content categories.

### Archive/index/navigation folders
Examples:
- `the_great_library`
- `the_lunar_chaperone_master_index`
- `the_scribe_s_desk`
- `the_chronological_index`
- `lunar_chaperone_sequential_master_index`

These likely represent global navigation hubs or archive-level structures.

### Template/dashboard folders
Examples:
- `master_workbook_template_1`
- `master_workbook_template_2`
- `14_day_arc_dashboard`
- `fortnight_dashboard`
- `lunar_half_cycle_dashboard`

These appear to represent repeatable patterns, dashboards, or reusable structural layouts.

## Architectural strengths

The current structure has some strengths:

- conceptually rich naming
- clear editorial identity
- modular screen exports
- lightweight data files for workbook indexing
- easy manual browsing in GitHub

## Architectural risks

There are also risks if the project grows without cleanup:

### 1. Unclear source of truth
It is not yet obvious whether the canonical source is:
- the CSV files
- the top-level HTML files
- the `code.html` exports
- an external design tool

### 2. Mixed concerns
The repo mixes:
- product concepts
- design specs
- exports
- content data
- navigational experiments

This is workable for exploration, but harder for long-term maintenance.

### 3. Naming drift
There are multiple naming styles and overlapping conceptual areas, which may become confusing as the number of workbooks and modules grows.

### 4. No shared code structure
If the goal becomes a maintainable site or app, repeated HTML/CSS patterns will eventually need consolidation.

## Suggested future architecture

If you later want to turn this into a more maintainable project, a possible direction would be:

```text
.
├── README.md
├── docs/
├── data/
│   ├── workbooks.csv
│   └── chaperones.csv
├── prototypes/
│   ├── archive/
│   ├── indexes/
│   ├── dashboards/
│   └── workbooks/
├── public/
│   └── assets/
└── src/   # only if/when a real app is introduced
```

## Recommended architectural decisions to make next

To reduce ambiguity, decide:

1. Which files are canonical content sources
2. Which files are export artifacts only
3. Whether workbook folders should follow a single naming standard
4. Whether global navigation/index pages should live in a dedicated subfolder
5. Whether the project is staying static HTML or moving toward a framework/site generator
