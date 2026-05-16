# Design System Document: The Sacred Ledger

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Curator"**

This design system is an exercise in academic restraint and ritualistic precision. It moves away from the "app-like" density of modern software, favoring the spatial breathing room of a rare manuscript or a high-end editorial journal. To achieve this, we reject standard symmetrical grids in favor of **Intentional Asymmetry**. 

The layout should feel like a curated desk: objects placed with purpose, balanced by weight rather than alignment. We break the "template" look by layering delicate typography over expansive negative space, creating a "Digital Grimoire" that feels both ancient and technologically superior.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the tactile world of scholarship: aged paper, carbon ink, and leafed gold.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. We define space through **Tonal Transitions**. To separate the sidebar from the main stage, move from `surface` to `surface-container-low`. The eye should perceive a change in the "weight" of the paper, not a digital stroke.

### Surface Hierarchy & Nesting
Treat the UI as a stack of physical vellum. 
- **Base Layer:** `surface` (#fcf9f2) for the primary reading area.
- **Sub-Sections:** Use `surface-container-low` to "sink" secondary content.
- **Floating Elements:** Use `surface-container-lowest` (#ffffff) for cards or menus to create a subtle "lift" against the cream-toned background.

### Signature Textures
Main CTAs or focal points should utilize a subtle linear gradient from `primary` (#725b37) to `primary_container` (#c4a77d). This mimics the way light hits metallic gold leaf, providing a "visual soul" that flat hex codes cannot replicate.

---

## 3. Typography
Our typography is the primary vehicle for the "mystical ritual" vibe. It is a dialogue between the structured modern world (Inter) and the romantic academic past (Cormorant Garamond/Newsreader).

- **Display & Headlines (`notoSerif` / `Cormorant Garamond`):** Used for titles and poetic "asides." Always prioritize Light or Regular weights. Use *Italic* sparingly for high-end emphasis.
- **Body & Prose (`newsreader`):** Designed for deep immersion. Set with generous line-height (1.6+) to honor the editorial feel.
- **Structural Labels (`inter`):** The "functional" layer. These must be **Uppercase** with **Wide Tracking (0.1em - 0.15em)**. This creates a mechanical contrast to the fluid serif text, acting as the "coordinates" of the archive.

---

## 4. Elevation & Depth
We eschew the heavy shadows of Material Design for **Tonal Layering** and **Atmospheric Depth**.

### The Layering Principle
Depth is achieved by stacking containers. A `surface-container-highest` element placed on a `surface` background creates immediate hierarchy without a single pixel of shadow.

### Ambient Shadows
If an element must "float" (e.g., a modal or dropdown), use an **Extra-Diffused Ambient Shadow**:
- **Blur:** 40px - 60px
- **Opacity:** 4% - 6%
- **Color:** A tinted version of `on-surface` (#1c1c18) to simulate light passing through paper.

### The "Ghost Border" Fallback
Where containment is required for accessibility, use a **Ghost Border**: `outline-variant` at 15% opacity. It should be felt, not seen.

### Glassmorphism
For ritualistic overlays, use `surface` at 80% opacity with a `backdrop-filter: blur(12px)`. This creates a "frosted vellum" effect, softening the content beneath it rather than obscuring it.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with `on-primary` text. Rectangular (0px radius). No shadow.
- **Secondary:** A "Ghost Border" frame with `inter` uppercase text.
- **Tertiary:** Pure text with a 0.5px `primary` underline, offset by 4px.

### Journal-Style Inputs
Input fields should not be boxes. They are **Underlined Paths**.
- **Default:** A 1px bottom border using `outline-variant`.
- **Focus:** The border transitions to `primary` (Gold), and the label (Inter, Uppercase) shifts slightly to the right, mimicking a hand-drawn margin note.

### Cards & Lists
**Strict Rule:** No divider lines. 
- Separate list items using **Vertical White Space** (scale: 24px, 32px, or 48px). 
- For cards, use a subtle background shift to `surface-container-low` on hover to indicate interactivity.

### Additional Component: The Marginalia
A unique component for this system. Small, `label-sm` notes in `inter` placed in the far margins of the layout, used for metadata, timestamps, or "system whispers."

---

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Place a title on the left and the body text 30% shifted to the right. 
- **Use "Thin Lines":** Use 0.5px strokes for decorative accents or "ritualistic" framing, but never for functional containment.
- **Prioritize Negative Space:** If you think there is enough space, add 20% more.

### Don’t:
- **No Rounded Corners:** `0px` radius across the entire system. Sharp edges signify authority and archival quality.
- **No Heavy Shadows:** Never use high-opacity or tight-blur shadows. They break the "paper" metaphor.
- **No Standard Grids:** Avoid 12-column layouts that feel "boxy." Use a modular scale that allows for overlapping elements.
- **No Pure Blacks:** Always use `on-surface` (#1c1c18) for text to maintain the "Ink on Paper" softness.

---

**Director’s Final Note:**
This system is a sanctuary of information. Every element should feel like it was placed by a librarian’s hand. If it feels like an "app," you have failed the ritual. If it feels like a "discovery," you have succeeded.