# FK Booking Flow — Design Specification

> Reference document for developers implementing the FK Repairs booking flow.
> All libraries listed are free and open source.

---

## Table of Contents

1. [Fonts](#1-fonts)
2. [Colour Palette](#2-colour-palette)
3. [Typography Scale](#3-typography-scale)
4. [Spacing & Shape](#4-spacing--shape)
5. [Shadows](#5-shadows)
6. [Component Library](#6-component-library)
7. [Icons](#7-icons)
8. [Installation & Setup](#8-installation--setup)

---

## 1. Fonts

Two font families. Both free via Google Fonts.

### Import (HTML)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anybody:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Anybody — Display / Headings
- **Use for:** H1–H4, button labels, badges, step numbers, tab labels
- **Style rule:** `text-transform: uppercase; letter-spacing: 0.02em`
- **Weights used:** 600, 700, 800
- **Fallback:** `system-ui, sans-serif`

### Inter — Body / UI
- **Use for:** All body copy, labels, inputs, tooltips, alerts, metadata
- **Weights used:** 300, 400, 500, 600, 700
- **Fallback:** `system-ui, sans-serif`

---

## 2. Colour Palette

### Brand Colours

| Name | Token | Hex | Usage |
|---|---|---|---|
| FK Yellow | `fk-yellow` | `#EBFF00` | Primary CTA backgrounds, selected states, stepper active, focus rings |
| FK Yellow Tint | `fk-yellow-tint` | `#F9FFEE` | Selected card fill, hover backgrounds |
| FK Yellow Dark | `fk-yellow-dark` | `#C8E800` | Button hover state |
| FK Black | `fk-black` | `#000000` | Body text, borders, button outlines |
| FK White | `fk-white` | `#FFFFFF` | Card backgrounds, input backgrounds |
| FK Orange | `fk-orange` | `#FF5C26` | Urgency copy, stock warnings |
| FK Aqua | `fk-aqua` | `#40EFFF` | Brand accent (decorative) |
| FK Lavender | `fk-lavender` | `#9966FF` | Hero panel background (screen 1) |

### Grey Scale

| Name | Token | Hex | Usage |
|---|---|---|---|
| Grey 50 | `fk-grey-50` | `#FAFAFA` | Page background |
| Grey 100 | `fk-grey-100` | `#F5F5F5` | Disabled backgrounds, icon chip fills |
| Grey 200 | `fk-grey-200` | `#E0E0E0` | Borders, dividers, disabled states |
| Grey 300 | `fk-grey-300` | `#BDBDBD` | Placeholder text, inactive steps |
| Grey 500 | `fk-grey-500` | `#9E9E9E` | Subdued/tertiary text |
| Grey 700 | `fk-grey-700` | `#757575` | Secondary text, metadata |
| Grey 900 | `fk-grey-900` | `#212121` | Near-black panels (trust bar) |

### Semantic / Status Colours

| Name | Token | Hex | Usage |
|---|---|---|---|
| Success | `fk-success` | `#4CAF50` | Confirmed states, check icons, in-store badge text |
| Success BG | `fk-success-bg` | `#E8F5E9` | Success alert backgrounds, soft success badges |
| Error | `fk-error` | `#F44336` | Validation errors, callback-required badge, error alerts |
| Error BG | `fk-error-bg` | `#FFEBEE` | Error alert backgrounds |
| Warning | `fk-warning` | `#FF9800` | Parts-ordering alerts, ETA notes, alert left borders |
| Warning BG | `fk-warning-bg` | `#FFF9E6` | Warning alert backgrounds, soft-warning badges |

---

## 3. Typography Scale

All sizes defined as utility tokens. Headings use **Anybody**, body uses **Inter**.

### Headings (Anybody, uppercase)

| Style | Size | Line Height | Weight | Class |
|---|---|---|---|---|
| H1 | 48px | 56px | 700 | `text-h1` |
| H2 | 36px | 44px | 700 | `text-h2` |
| H3 | 24px | 32px | 600 | `text-h3` |
| H4 | 18px | 26px | 600 | `text-h4` |

### Body (Inter)

| Style | Size | Line Height | Class |
|---|---|---|---|
| Body Large | 18px | 28px | `text-body-lg` |
| Body | 16px | 24px | `text-body` |
| Body Small | 14px | 20px | `text-body-sm` |
| Body XS | 12px | 18px | `text-body-xs` |

---

## 4. Spacing & Shape

### Border Radius

| Token | Value | Applied to |
|---|---|---|
| `rounded-btn` | 8px | Buttons, inputs, time slots, alert chips |
| `rounded-input` | 8px | Text inputs, selects |
| `rounded-card` | 12px | Cards, summary panels, device list |
| `rounded-modal` | 16px | Payment modal |
| `rounded-full` | 9999px | Badges, pills, icon buttons, avatar circles |

---

## 5. Shadows

| Token | Value | Used on |
|---|---|---|
| `shadow-fk-light` | `0 2px 4px rgba(0,0,0,0.10)` | Cards (resting) |
| `shadow-fk-medium` | `0 4px 8px rgba(0,0,0,0.15)` | Cards (hover), summary panels |
| `shadow-fk-heavy` | `0 8px 24px rgba(0,0,0,0.20)` | Selected cards, modals |
| `shadow-fk-focus` | `0 0 0 3px rgba(235,255,0,0.30)` | Focus rings on all interactive elements |

---

## 6. Component Library

### Buttons

#### Primary Button
- Background: `#EBFF00` · Border: `2px solid #000` · Text: `#000` · Radius: `8px`
- Font: Inter 700, 15px/22px · Padding: `16px 30px`
- Hover: background `#C8E800`, translateY(-1px)
- Active: background `#A8C800`, scale(0.98)
- Disabled: background `#E0E0E0`, text `#BDBDBD`
- Focus: `box-shadow: 0 0 0 3px rgba(235,255,0,0.30), 0 0 0 5px #000`

#### Secondary Button
- Background: `#000` · Border: `2px solid #000` · Text: `#EBFF00` · Radius: `8px`
- Font: Inter 700, 15px/22px · Padding: `16px 30px`
- Hover: background `#1a1a1a`, translateY(-1px)

#### Ghost Button
- Background: transparent · Border: `2px solid #000` · Text: `#000` · Radius: `8px`
- Font: Inter 700, 15px/22px · Padding: `14px 28px`
- Hover: background `#EBFF00`

#### Icon Button
- Background: transparent · Padding: `12px` · Radius: `9999px`
- Hover: background `#F5F5F5`

---

### Cards

#### Standard Card (`.fk-card`)
- Background: `#fff` · Border: `1px solid #E0E0E0` · Radius: `12px`
- Padding: `24px` · Shadow: `0 2px 4px rgba(0,0,0,0.10)`
- Hover: shadow-medium, translateY(-2px)

#### Selectable Card (`.fk-card-selectable`)
- Same as card, plus cursor: pointer
- **Selected state:** border `3px solid #EBFF00`, background `#F9FFEE`, shadow-heavy, padding adjusts to `22px` (compensates for wider border)
- **Disabled:** background `#F5F5F5`, opacity `0.6`

---

### Badges

All badges: Inter 700, 11px, uppercase, letter-spacing 0.08em, padding `5px 10px`, radius `9999px`, border `1px solid #000`

| Variant | Background | Text |
|---|---|---|
| Default | `#E0E0E0` | `#000` |
| Active (selected / reserved) | `#EBFF00` | `#000` |
| Success | `#4CAF50` | `#fff` |
| Error | `#F44336` | `#fff` |
| Soft Success (in-store) | `#E8F5E9` | `#1B5E20` |
| Soft Warning (warehouse / low stock) | `#FFF9E6` | `#8a4a00` |

---

### Alerts / Inline Banners

Display: flex · Gap: 12px · Padding: 16px · Radius: 8px · Font: Inter 400, 14px/20px
Left border: 4px solid (colour varies by type)

| Variant | Left Border | Background |
|---|---|---|
| Warning | `#FF9800` | `#FFF9E6` |
| Success | `#4CAF50` | `#E8F5E9` |
| Error | `#F44336` | `#FFEBEE` |

---

### Form Inputs

- Border: `2px solid #0D0D0D` · Radius: `8px` · Height: `min 52px`
- Font: Inter 500, 16px/24px · Padding: `12px 16px`
- Placeholder: `#BDBDBD`
- Focus: border `#000`, inner shadow `inset 0 0 0 1px #EBFF00`, outer glow `0 0 0 3px rgba(235,255,0,0.40)`
- Error state: border + inner shadow `#F44336`
- Success state: border + inner shadow `#4CAF50`

---

### Pills (Filter Toggles)

- Background: `#F5F5F5` · Border: `2px solid transparent` · Radius: `9999px`
- Font: Inter 500, 14px/20px · Padding: `10px 20px`
- Selected (`aria-pressed="true"`): background `#EBFF00`, border `#000`
- Hover: background `#E0E0E0`

---

### Time Slots

- Height: `48px` · Radius: `8px` · Font: Inter 500, 14px
- Default: background `#fff`, border `1px solid #E0E0E0`
- Hover: border `#000`, background `#F9FFEE`
- Selected (`aria-pressed="true"`): background `#EBFF00`, border `2px solid #000`, font-weight 600
- Disabled: background `#F5F5F5`, text `#BDBDBD`

---

### Step Indicator (Progress Bar)

- Font: Inter 700, 11px, uppercase, letter-spacing 0.08em
- Step number circle: `24×24px`, radius `9999px`
- Done: circle background `#000`, text `#EBFF00`
- Current: circle background `#EBFF00`, text `#000`, outer glow `rgba(235,255,0,0.30)`
- Pending: circle background `#E0E0E0`, text `#757575`

---

## 7. Icons

**Library:** [Lucide](https://lucide.dev) — free, MIT licence, 1000+ icons.

### Installation

**CDN (no build step):**
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```
Then in HTML: `<i data-lucide="icon-name"></i>`  
Then in JS: `lucide.createIcons()` (call once after DOM renders)

**NPM (React / framework):**
```bash
npm install lucide-react
```
```jsx
import { Search, ArrowLeft, Check } from 'lucide-react'
```

**Individual SVGs:** Download from [lucide.dev](https://lucide.dev) and use inline or as `<img>`.

---

### Icons Used in This Prototype

#### Navigation & Actions
| Icon | Name | Used where |
|---|---|---|
| ← | `arrow-left` | All Back buttons |
| → | `arrow-right` | All Next / Continue buttons |
| ❯ | `chevron-right` | Device list row indicators |
| ∨ | `chevron-down` | Dropdown select arrows |
| ✕ | `x` | Clear device, close modal |
| ⎘ | `copy` | Copy reference number |

#### Status & Feedback
| Icon | Name | Used where |
|---|---|---|
| ✓ | `check` | Selected items, deposit confirmed |
| ✓◎ | `check-circle` | In-store stock badge, postcode confirmed |
| ✓◎ | `check-circle-2` | Details sidebar trust signals |
| ⚠ | `alert-circle` | Validation errors, not-on-shelf badge |
| ⚠ | `alert-triangle` | Device not listed warning |
| 🔥 | `flame` | Low stock urgency (≤4 parts remaining) |
| ℹ | `info` | Walk-in info note (success screen) |
| 🛡 | `shield-check` | Secure payment, warranty |

#### Parts & Logistics
| Icon | Name | Used where |
|---|---|---|
| 🔍 | `package-search` | Parts ordering needed |
| 📦✓ | `package-check` | Part hold active (success screen) |
| 🚚 | `truck` | Warehouse stock badge |
| 📞 | `phone-call` | Callback required badge |

#### Symptoms (used dynamically on symptom cards)
| Icon | Name | Symptom |
|---|---|---|
| 📱 | `smartphone` | Screen crack / buttons & frame |
| 📷 | `camera` | Camera issues |
| 🔌 | `plug` | Charging / port |
| 🔋 | `battery` | Battery |
| ⚠◎ | `alert-circle` | Won't turn on |
| 💾 | `hard-drive` | Storage / data |

#### Booking & Scheduling
| Icon | Name | Used where |
|---|---|---|
| 📅 | `calendar` | Appointment date summary |
| 📅+ | `calendar-plus` | Add to calendar CTA |
| ⏰ | `clock` | Appointment time |
| ⏱ | `timer` | 1-hour turnaround trust signal |
| 📍 | `map-pin` | Store location |

#### Payment & Account
| Icon | Name | Used where |
|---|---|---|
| 💳 | `credit-card` | Payment / deposit section |
| 🔒 | `lock` | Pay deposit button, data safety |
| 👤 | `user` | Account icon (nav) |
| 👤◎ | `user-circle` | Access portal CTA |
| 🛒 | `shopping-cart` | Cart (nav header) |

#### Comms (Success screen)
| Icon | Name | Used where |
|---|---|---|
| ✉ | `mail` | Confirmation email next step |
| 📱 | `smartphone` | SMS reminder next step |
| 🔔 | `bell` | Notification reminder |

#### Search
| Icon | Name | Used where |
|---|---|---|
| 🔍 | `search` | Device filter input, nav search |
| 🔍✕ | `search-x` | No search results state |

---

## 8. Installation & Setup

### Quick start (CDN, no build tools)
```html
<!-- Tailwind -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- FK design tokens (colours, fonts, radii, shadows) -->
<script src="assets/fk-config.js"></script>

<!-- FK base styles (components, buttons, badges etc.) -->
<link rel="stylesheet" href="assets/fk-base.css">

<!-- Lucide icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Anybody:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### For a production build (React / Next.js / similar)
1. Install Tailwind and configure `tailwind.config.js` with the tokens from `fk-config.js`
2. Install `lucide-react` via npm
3. Self-host Inter + Anybody via `next/font` or downloaded `.woff2` files
4. Port component classes from `fk-base.css` into your component system

### Key source files
| File | Contents |
|---|---|
| `assets/fk-config.js` | All design tokens as a Tailwind config object |
| `assets/fk-base.css` | All component classes (buttons, cards, badges, inputs, etc.) |
| `assets/fk-booking-nav.js` | Shared header / stepper component |
| `COPY-DOC.md` | All user-facing copy strings |
| `DESIGN-SPEC.md` | This document |

---

*Last updated: June 2026*
