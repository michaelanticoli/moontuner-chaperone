# Content Model

## Overview

The Lunar Chaperone project appears to organize content around a repeating workbook framework tied to lunar transitions, archetypal movement, and somatic/ritual inquiry.

Even though the repository is not modeled as a formal CMS, the files imply a clear content model.

## Primary content object: Workbook

The central content unit is the **workbook**.

A workbook appears to include:

- title
- sequence number
- moon-sign journey
- phase direction or cycle type
- descriptive summary
- somatic framing
- practices/protocols
- ritual language
- integration plan
- research or reflection prompts

## Workbook categories

The workbook system appears to have three major categories.

### 1. Core cycle workbooks
These make up the main recurring progression.

In the CSV, these are grouped with codes that distinguish major cycle types.

### 2. Opposite-direction or alternate phase workbooks
The `lunar_chaperone_workbooks.csv` suggests at least two main phase groupings:
- one group for one lunar direction/period
- one group for the opposite direction/period

These map to the two main halves of the 24-workbook system.

### 3. Eclipse portal workbooks
The final two workbooks appear to function as special-event or threshold modules:
- Virgo–Aries Eclipse Portal
- Pisces–Virgo Eclipse Portal

These differ from the standard cyclical workbooks by being framed as intensified or nonlinear transitional experiences.

## Implied workbook schema

A practical schema for each workbook would look like this:

```yaml
id: workbook_01
title: From Bone to Heart
journey: Capricorn → Leo
phase_type: Full Moon → New Moon
sequence_number: 1
category: core
summary: Structure shifting into expressive heart-based creativity
body_axis:
  from: Bones / Knees / Structure
  to: Heart / Solar Plexus
sections:
  - Context & Framing
  - Energy Mapping
  - Practices & Protocols
  - Integration Plan
  - Ritual Scripts
  - Research Prompts
```

## Workbook section model

Across the repository, workbooks seem to recur through a standard multi-part internal structure.

Likely section pattern:

1. **Context & Framing**
   - conceptual introduction
   - archetypal interpretation
   - attunement language

2. **Energy Mapping**
   - bodily focus
   - transition dynamics
   - elemental or energetic framing

3. **Practices & Protocols**
   - exercises
   - routines
   - rituals
   - prompts for action

4. **14-Day Integration Plan**
   - phased practice over a half-cycle
   - day ranges or stage-based sequencing

5. **Ritual Scripts**
   - ceremonial or intentional language
   - closing or transitional text

6. **Research / Seminar Prompts**
   - reflective inquiry
   - synthesis prompts
   - study-oriented framing

## CSV-backed content sources

### `lunar_chaperone_workbooks.csv`
This file appears to be the strongest structured inventory of workbooks.

Columns:
- `Workbook Title`
- `Moon Sign Journey`
- `Date Period Code`
- `Further Details`

This is effectively a workbook registry.

### `22_lunar_chaperones.csv`
This file appears to map concept names to image prompt direction.

Columns:
- `card name`
- `image prompt`

This acts more like a creative direction or visual prompt dataset than a user-facing content model.

## Cross-cutting content traits

The workbook content consistently uses these dimensions:

### Archetypal transition
Every workbook is built around movement from one energetic state to another.

### Body-based mapping
Many workbook descriptions include a somatic correspondence:
- bones
- heart
- mind
- gut
- voice
- womb
- root
- soul
- balance
- fire
- depth

### Editorial metaphors
The project frequently frames content through archive/library metaphors:
- archive
- ledger
- library
- sanctum
- scribe
- canonical index

### Ritual framing
The language often treats interaction as ceremony rather than standard web navigation.

## Suggested future structured model

If you later formalize the content system, consider storing workbooks in JSON, YAML, or a CMS using fields like:

- `slug`
- `title`
- `sequence_number`
- `phase_type`
- `start_sign`
- `end_sign`
- `body_start`
- `body_end`
- `summary`
- `archetypal_journey`
- `cycle_group`
- `is_eclipse`
- `sections[]`
- `art_prompt`
- `related_workbooks[]`

## Recommended content decisions

To strengthen the project, define:

1. the official workbook sequence
2. the exact internal section model for every workbook
3. whether every workbook must use the same module structure
4. whether CSV remains the main source of truth
5. how eclipse workbooks differ structurally from core workbooks
