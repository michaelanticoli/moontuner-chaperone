# Navigation and User Flow

## Overview

The repository includes both explicit and implied navigation systems for the Lunar Chaperone experience.

These suggest the product is meant to feel less like a traditional website and more like a guided passage through an archive, directory, and sequential workbook journey.

## Main navigation concepts

Several recurring navigation hubs appear in the repo:

- **The Great Library**
- **The Lunar Chaperone Master Index**
- **The Scribe's Desk**
- chronological and sequential indexes
- workbook-specific pages
- dashboard and half-cycle pages

These names imply a layered navigation model rather than a flat site map.

## Likely top-level flow

The highest-level user journey appears to be:

1. **Entry point / landing page**
2. **Archive or master index**
3. **Workbook selection**
4. **Internal workbook progression**
5. **Return to archive or continue to next workbook**

This is consistent with the narrative documents in the repository.

## Entry point

### The Great Library
This appears to function as an evocative landing page.

Purpose:
- set tone
- establish the archive metaphor
- invite entry into the system
- route users toward the main directory/index

This page is more atmospheric and brand-defining than operational.

## Master index

### The Lunar Chaperone Master Index
This appears to be the clearest candidate for the main workbook directory.

Purpose:
- list the workbook collection
- organize the series
- support discovery and browsing
- provide entry into individual workbook experiences

This should likely become the canonical navigational hub if the project is turned into a deployable site.

## Sequential navigation model

The repo’s narrative/spec files imply a **linear sequence** across workbooks.

That means each workbook should ideally know:
- its position in the total sequence
- the previous workbook
- the next workbook
- whether it belongs to a standard cycle or eclipse sequence

A sequence-driven model would support:
- previous/next controls
- “continue journey” actions
- progress tracking
- a consistent workbook loop

## Internal workbook flow

The narrative map suggests a repeating internal workbook progression such as:

1. Context & Framing
2. Energy Mapping & Transition
3. Practices & Protocols
4. 14-Day Integration Plan
5. Ritual Scripts & Commitments
6. Research & Seminar Prompts

This means navigation exists at two levels:

### 1. Global navigation
Between archive, library, index, and workbooks

### 2. Local navigation
Within a workbook’s internal sections

## Current state of navigation in the repo

At the moment, navigation appears mostly conceptual or prototype-level rather than fully wired.

Some pages include:
- buttons
- links
- archive metaphors
- section labels
- “begin journey” language

But the repository does not yet clearly show a fully unified routing system across all exports.

## Recommended navigation hierarchy

A practical navigation hierarchy would be:

### Global
- Home / Landing
- Archive
- Master Index
- Research / Notes
- Special Portals

### Workbook-level
- Overview
- Context & Framing
- Energy Mapping
- Practices
- Integration Plan
- Ritual Scripts
- Research Prompts

### Sequential controls
- Previous workbook
- Next workbook
- Return to index
- Continue current phase

## Suggested canonical user journey

A clean experience could work like this:

1. User lands on **The Great Library**
2. User enters **The Lunar Chaperone Master Index**
3. User chooses a workbook
4. User moves through that workbook’s sections
5. User finishes with:
   - next workbook
   - back to index
   - save/record reflection
6. During special periods, user can access eclipse portal workbooks

## Risks in the current navigation approach

### 1. Too many poetic entry points
The naming is rich, but without a canonical map, users may not know which page is the main entry.

### 2. Multiple indexes may overlap
Sequential index, chronological index, master index, archive index, and dashboard pages may confuse each other if their roles are not clearly separated.

### 3. Export artifacts may not be linked consistently
Prototype screens may exist in isolation unless explicit navigation is added.

## Recommended decisions

To clarify navigation, define:

1. the canonical landing page
2. the canonical master index
3. the canonical path through a workbook
4. the relationship between dashboards and workbooks
5. whether the system prioritizes browsing or sequential progression
