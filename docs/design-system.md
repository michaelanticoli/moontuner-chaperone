# Design System Notes

## Overview

The repository presents a very consistent and intentional visual language. Even without a formal design system package, the project clearly expresses a recognizable set of stylistic rules.

The strongest design framing is the idea of a **paper archive** or **editorial ritual ledger**.

## Core visual identity

The project consistently evokes:

- archival calm
- literary seriousness
- ceremonial pacing
- warm paper textures
- restrained luxury
- spiritual/editorial hybridity

This gives the interface a distinct tone that separates it from standard wellness or productivity applications.

## Color direction

Across the inspected files, the palette centers on:

- warm ivory / paper backgrounds
- deep charcoal / ink text
- muted gold accents
- softened stone/neutral surfaces

Representative palette values found in the repo include:

- paper-like background: `#F4F1EA` or similar warm ivory tones
- darker paper variants: `#EAE5DB`
- ink/dark text: `#1A1A18`
- muted gold accent: `#C4A77D`
- related primary brown/gold tones around `#725b37`

## Typography

The project uses a strong typography hierarchy.

### Serif display fonts
Used for:
- page titles
- workbook titles
- atmospheric quotations
- literary emphasis
- italics and expressive headers

Examples observed:
- Cormorant Garamond
- Noto Serif
- Newsreader

### Sans-serif label fonts
Used for:
- metadata
- labels
- navigation
- uppercased system text
- tracking-heavy microcopy

Example observed:
- Inter

## Typography behavior

Consistent patterns include:

- italicized display phrases
- mixed serif/sans hierarchy
- uppercase labels with generous letter spacing
- soft, literary body copy
- “editorial spread” feeling in headings and sections

## Layout principles

The layouts suggest a few recurring principles.

### 1. Asymmetry
Pages often avoid rigid symmetry and instead use offset columns, mixed spans, and editorial compositions.

### 2. Negative space
Whitespace is not incidental; it is part of the mood and pacing.

### 3. Modular panels
Cards, bordered content regions, and split sections recur across landing and workbook pages.

### 4. Display-and-metadata contrast
Large expressive type is often paired with tiny uppercase metadata for contrast and structure.

## Interface motifs

Common motifs include:

- thin borders
- paper-like containers
- sidebar/archive navigation
- radiating circles and subtle sacred geometry
- grayscale imagery with muted overlays
- ledger, archive, and marginalia references
- understated hover motion

## Interaction style

The interactions implied by the prototypes feel:

- deliberate
- calm
- lightly animated
- ceremonial rather than playful
- premium/editorial rather than app-like

Hover states tend to:
- lift slightly
- change tint subtly
- reveal accent coloration
- preserve quietness

## Copy style and naming

The interface language is highly branded and poetic.

Examples of naming conventions:
- The Great Library
- The Canonical Archive
- The Scribe’s Desk
- Sacred Ledger
- Begin Journey
- Enter the Sanctum

This is a strength, but it should be balanced with usability. In a production version, some poetic labels may need plain-language support.

Example:
- “The Great Library” could also include a subtitle like “Project Home”
- “The Lunar Chaperone Master Index” could also say “Browse all workbooks”

## Design system strengths

The current visual language already has:

- clear mood
- distinct brand character
- strong typography choices
- a reusable palette
- repeatable archive/editorial motifs
- a cohesive ritual-library metaphor

## Design system gaps

What is not yet formalized:

- component inventory
- spacing scale
- documented type scale
- interaction guidelines
- accessibility guidance
- reusable token naming
- responsive rules
- canonical button/input styles across all exports

## Recommended next design-system steps

If you want to formalize this into a reusable system, document:

1. color tokens
2. type scale
3. spacing scale
4. component patterns
5. page templates
6. navigation states
7. accessibility constraints
8. when to use poetic labels vs plain labels

## Practical implementation note

If this project becomes a real site or app, the easiest path would be to preserve the current aesthetic while extracting repeated patterns into reusable components such as:

- archive header
- workbook card
- metadata block
- ritual prompt block
- section divider
- previous/next navigation
- workbook phase table
- quote/marginalia panel
