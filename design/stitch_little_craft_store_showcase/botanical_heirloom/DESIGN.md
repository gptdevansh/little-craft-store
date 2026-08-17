---
name: Botanical Heirloom
colors:
  surface: '#fdf9f5'
  surface-dim: '#ddd9d6'
  surface-bright: '#fdf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ef'
  surface-container: '#f1ede9'
  surface-container-high: '#ebe7e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c19'
  on-surface-variant: '#51434b'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f4f0ec'
  outline: '#83727c'
  outline-variant: '#d5c1cc'
  surface-tint: '#91417f'
  primary: '#5f1553'
  on-primary: '#ffffff'
  primary-container: '#7b2e6b'
  on-primary-container: '#fd9ee2'
  inverse-primary: '#ffade6'
  secondary: '#755567'
  on-secondary: '#ffffff'
  secondary-container: '#ffd4e9'
  on-secondary-container: '#7a596b'
  tertiary: '#6e0037'
  on-tertiary: '#ffffff'
  tertiary-container: '#950c4e'
  on-tertiary-container: '#ffa1bd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd7ef'
  primary-fixed-dim: '#ffade6'
  on-primary-fixed: '#3a0032'
  on-primary-fixed-variant: '#752865'
  secondary-fixed: '#ffd8eb'
  secondary-fixed-dim: '#e4bbd0'
  on-secondary-fixed: '#2c1322'
  on-secondary-fixed-variant: '#5c3e4f'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c7'
  on-tertiary-fixed: '#3f001c'
  on-tertiary-fixed-variant: '#8e0248'
  background: '#fdf9f5'
  on-background: '#1c1c19'
  surface-variant: '#e5e2de'
typography:
  headline-xl:
    fontFamily: Fraunces
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Fraunces
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 20px
  gutter: 16px
  touch-target: 44px
---

## Brand & Style
The design system centers on a "Handcrafted Boutique" aesthetic, prioritizing warmth, tactility, and a premium feminine touch. It targets a demographic that values intentionality over mass production. 

The style moves away from digital-first trends like glassmorphism and heavy shadows, opting instead for **Organic Minimalism**. This approach uses generous white space (the "breathing room" of the store), subtle botanical accents, and asymmetric layouts to mirror the unique, non-uniform nature of handmade hair accessories. The emotional response is one of calm, discovery, and personal connection.

## Colors
The palette is rooted in a warm, creamy parchment background (`#FFFBF7`) to avoid the clinical feel of pure white. 

- **Primary Plum (#7B2E6B):** Used for high-level branding, primary headings, and sophisticated accents.
- **Secondary Blossom (#F3C9DE):** A soft background tint for card containers, section separators, and subtle UI differentiation.
- **CTA Pink (#E14F87):** Strictly reserved for action-oriented elements (Add to Cart, Buy Now). It must not be used for decorative elements to maintain its functional signaling.
- **Sage Green (#8FA876):** An "organic trust" color used for badges (e.g., "Handmade," "In Stock") and botanical illustrative stems.
- **Warm Charcoal (#3A2E35):** Used for all body text and icons to ensure high legibility while maintaining the palette's warmth.

## Typography
The typography strategy pairings high-character serifs with functional sans-serifs. 

**Fraunces** provides the "editorial" voice of the brand. Its soft curves and varied weights mimic the pressure of a calligraphy pen, lending a handcrafted feel to headings. Use "Soft" or "Wonky" optical sizes if available to enhance the artisanal vibe.

**Poppins** serves as the workhorse for all functional text. It is chosen for its geometric clarity and friendly, open counters. The minimum size for body text is 16px to ensure accessibility on mobile devices, with generous line heights to prevent visual fatigue during catalog browsing.

## Layout & Spacing
This design system utilizes a **Mobile-First Fluid Grid**. 

- **Grid:** A 4-column grid for mobile, scaling to 12 columns for desktop. 
- **Organic Asymmetry:** To avoid a "templated" look, product grids should utilize alternating image ratios (e.g., a 4:5 portrait image next to a 1:1 square). 
- **Margins:** 20px side margins on mobile to ensure content doesn't feel cramped against the screen edge.
- **Rhythm:** An 8px linear scale. White space should be treated as a design element; when in doubt, increase the vertical padding between sections to emphasize the premium positioning.
- **Touch Targets:** Every interactive element (links, buttons, icons) must adhere to a minimum 44x44px hit area, regardless of the visual size of the asset.

## Elevation & Depth
Depth is created through **Tonal Layering** rather than shadows. 

- **Surface Levels:** The base layer is the background parchment. Secondary surfaces (cards, sidebars) use the soft blossom pink (`#F3C9DE`) to define boundaries.
- **Outlines:** Use very thin (1px) borders in a darkened version of the background color or primary-light for subtle definition.
- **Shadows:** Avoid drop shadows. If depth is absolutely required for a floating element (like a mobile navigation bar), use a soft, non-blurred "hard shadow" of 2px offset in a low-opacity version of the text color to maintain the "cut-paper" handmade aesthetic.

## Shapes
The shape language is **Soft and Organic**. 

- **Corners:** Standard UI elements like cards and input fields use a 0.5rem (8px) radius. 
- **Buttons:** Primary CTA buttons should use a pill shape (full round) to distinguish them from informational containers and suggest a "soft" touch.
- **Imagery:** Product photos should occasionally use "organic mask" shapes—subtle, non-perfect circles or soft blobs—to integrate with the botanical theme.

## Components

### Buttons
- **Primary CTA:** Pill-shaped, background `#E14F87`, text `#FFFBF7`. No shadow. On hover, darken to `#C43A6E`.
- **Secondary Action:** Ghost style with `#7B2E6B` border and text. High-refinement.

### Cards
- Background: `#F3C9DE` or pure White.
- Border: 1px subtle stroke.
- Image: Varied aspect ratios (1:1, 4:5) to create a "scrapbook" feel in the catalog.

### Input Fields
- Underlined or softly boxed with 8px radius.
- Focus state: Primary Plum (`#7B2E6B`) 2px bottom border.

### Trust Badges & Indicators
- Small, circular or leaf-shaped icons using Sage Green (`#8FA876`).
- Use for "Eco-friendly," "Hand-stitched," or "Limited Edition."

### Botanical Accents
- Spare use of floral illustrations. These should never overlap text.
- Use them to "anchor" the corners of sections or as decorative breaks between long blocks of copy.