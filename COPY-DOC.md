# FK Repairs booking flow — copy document

Single reference for **user-facing strings** across static HTML prototypes in this folder.  
**Last aligned to repo:** generated as a snapshot; update when pages change.

**Pages covered:** `index.html`, `screen-1-device.html`, `screen-2-symptoms-v2.html` (primary step 2), `screen-2-symptoms.html` (legacy card grid), `screen-3-details.html`, `screen-4-schedule.html`, `screen-5-confirmation.html`, `screen-6-success.html`, `screen-edge-callback.html`.  
**Not fully inventoried:** `design-system.html` (component gallery; see file for labels).

---

## Global / navigation

| Location | Copy |
|----------|------|
| Skip link (most pages) | Skip to content |
| Brand | FK · Fone King |
| Stepper labels | Device · Symptoms · Details · Schedule · Confirm |
| Footer phone (device page) | Need help? Call **1800 FK REBORN** (`tel:1800357326`) |
| Index footer | Fone King · 22 years of phone resurrection · 7,000+ five-star reviews · Lifetime warranty |

---

## `index.html` — overview

| Element | Copy |
|---------|------|
| Meta title | FK Repairs · Booking flow: overview |
| Meta description | Six-screen Fone King booking flow plus design system. Click any screen to open it. |
| H1 | Your Phone **Reborn**: Booking Flow |
| Intro | Six interactive screens plus a full design system. Open any screen to walk through it, or load design-system.html to see every component on one page. |
| Section: The 6 booking screens | (card titles and blurbs; see page) |
| Step 1 card | Your Phone Reborn · Pick device + store · **Device & store** · Hero, category & brand pills, scrollable device list. |
| Step 2 card | Symptom dropdown · Category tabs + select, detail panel, add · **Symptoms & parts (v2)** · Easier BE mapping: one control per category list. |
| Step 3 | Begin the resurrection · Contact form with conditional fields & live validation. |
| Step 4 | Schedule appointment · Date dropdown + 15-min time slot grid. |
| Step 5 | Pay $69 deposit · Refundable · reserves your slot · **Confirm & pay** · Booking summary, deposit highlight, payment modal. |
| Step 6 | **Confirmation** · Reference number, what-happens-next, calendar download. |
| Step 2 alternate | card-grid prototype (screen-2-symptoms.html) |
| Reference: Design system | Colors, type, buttons, inputs, cards, badges, alerts: all in one screenshottable page. |
| Reference: How to use | Open any HTML file directly in a browser. Resize the window between 375 px (mobile) and 1440 px (desktop) to verify responsive behaviour. |
| At a glance | Brand colors / Type families / Spacing grid / Breakpoints (see page for body text) |

---

## `screen-1-device.html` — Step 1: device

| Element | Copy |
|---------|------|
| Meta title | FK Repairs · Step 1: Choose your device |
| Meta description | Pick your device to start a Fone King repair booking. Choose your store on the details step. |
| Hero kicker | Phone repairs · Australia-wide |
| H1 | Your Phone **Reborn** |
| Hero sub | We don't just fix phones. We bring them back to life. |
| Trust row | 22 years · 7,000+ reviews · Lifetime warranty |
| H2 | Select a category of your device |
| Category pills | Phones · Computers · Tablets · Wearables |
| H3 | Select from major brands |
| Brand pills | Apple · Google · Samsung · Other |
| Search | Filter device list (sr-only) · Placeholder: Filter (e.g. iPhone 15) |
| Checkbox | My device is not listed |
| List heading | Choose your model · **N** models |
| Selected device card | Your selected device · Apple · Lifetime warranty on parts & labour |
| Clear button aria | Clear selected device |
| Edge alert | Device not listed. Continue and our technicians will contact you to source parts and confirm next steps. |
| Back / Next | Back · Next |

---

## `screen-2-symptoms-v2.html` — Step 2 (dropdown, canonical)

| Element | Copy |
|---------|------|
| Title | FK Repairs · Step 2: Symptoms (dropdown v2) |
| Eyebrow | Your device (dynamic: device name from storage when set) |
| H1 | What is your issue? |
| Step 1 label | Step 1 · Part quality |
| H2 | Aftermarket vs OEM |
| Intro | Pick one: line prices below update from the same payload the card UI used. |
| OEM tile | OEM · **Original Parts** · 12-month warranty |
| Aftermarket tile | Aftermarket · **Compatible Parts** · 12-month warranty |
| Step 2 label | Step 2 · Symptom (dropdown) |
| Tabs | Display · Electrical · Mechanical · Power · Data |
| Dropdown label | Select to view details and add |
| Dropdown placeholder option | Choose a symptom… |
| Detail CTAs | Yes, add this issue · Remove from list |
| Selected block title | Selected symptoms |
| List footer actions | **Remove** (per line, rendered in JS) |
| Warning alert title | Part not available for instant booking |
| Warning alert body | Your selections include a line that needs ordering. Continue to details. We’ll confirm timing once stock is available. |
| Step 3 label | Step 3 |
| Path H2 | Choose your booking option |
| Option A | Option A: Reserve part · $59-$69 refundable deposit, deducted in-store. |
| Option B | Option B: Walk-in · No deposit. No part guarantee. |
| Sidebar title | Online quote summary |
| Empty state | No symptoms selected. |
| Sidebar rows | Part quality · Path · Estimated total |
| Sidebar footnote | Stacking: highest line at full price; other lines at 50% each. |
| Sidebar conditional | At least one line needs ordering. Earliest booking date follows stock ETA. |
| Footer | Back · Continue to details |

### Dynamic / JS-only strings (symptom detail)

| Context | Copy |
|---------|------|
| Stock: available | Parts in store now |
| Stock: not available | Not on shelf · order / confirm |
| Line price label pattern | Line price: $**X** (Original parts \| Compatible parts) |
| Tag on line item when ordering | (needs ordering) |
| Summary path values | Reserve with deposit · Walk-in |
| Summary part quality values | Original parts · Compatible parts |

### Mock symptom content (CMS-style fields)

| Public name | Category | Public explained (abridged / full in HTML) |
|-------------|-----------|-----------------------------------------------|
| Screen Trauma | display | Cracked glass, dead pixels, touch failure, or black spots: we inspect and quote exact glass/LCD work. |
| Camera lens / module | display | Blurry photos, cracked lens glass, or camera app errors: front or rear module replacement. |
| Charging & data port | electrical | Loose Lightning/USB-C port, intermittent charging, or computer not detecting the device. |
| Buttons & housing | mechanical | Stuck or mushy buttons, bent frame, or speaker grille damage affecting assembly. |
| Power drained | power | Poor battery health, unexpected shutdowns, or slow charging: battery service. |
| Memory rescue | data | Storage errors, performance issues, or backup assist before other repairs. |
| Get your data onto a drive | data | We create a backup of your data onto a portable drive you can take with you (drive capacity priced in-store). |

*(Prices and availability flags are in `screen-2-symptoms-v2.html` script; not duplicated here.)*

---

## `screen-2-symptoms.html` — Step 2 (legacy card grid)

Same product framing as v2 for part quality tiles (**Original Parts** / **Compatible Parts**), path options, warnings, and online summary. Card body adds per-symptom short **desc**, **In stock · ready to book** / **Not on shelf · order / confirm**, and a **Public explanation + helpful media** disclosure. **Remove** appears on summary lines; cards still toggle select on click.

---

## `screen-3-details.html` — Step 3: your details

| Element | Copy |
|---------|------|
| Title | FK Repairs · Step 3: Your details |
| H1 | Begin the **Resurrection** (Resurrection is display-styled) |
| Intro | Share your details so we can send confirmations, reminders, and booking updates. |
| Mobile: button | Change store |
| Mobile: H2 | Selected symptoms |
| Mobile parts line (success) | Parts confirmed in store for your selection. |
| Mobile parts line (ordering) | At least one part needs ordering. We will confirm before your visit. |
| Staff follow-up banner | A selected repair line **needs ordering**. Submit your details. We’ll confirm the part and timing; your earliest booking slot will align with expected stock. |
| Fields | Your name * · Contact phone number * · We'll call you within 2 hours. · This number can't receive calls. We'll use your email or alternate number. · Alternative contact number * · Email address * · Preferred Resurrection Center * · Tell us your device's story (optional) · Placeholders as on page |
| Store placeholder (select) | Select a store… (from `fk-stores.js`) |
| Terms | I agree to the terms and conditions and FK's privacy policy. |
| Buttons | Back · Schedule time |
| Aside title | Your resurrection summary |
| Labels | Device · Selected symptoms · Estimated total · Store · Booking path |
| Desktop empty symptoms | Complete step 2 to see your selected symptoms here. |
| Parts success alert | Parts confirmed in store for your selected lines and part quality. |
| Parts warning alert | At least one selected line **needs ordering**. We’ll confirm parts before your visit. Your schedule will start from the expected in-stock date. |
| Trust bullets | Usually revived in 1 hour · Resurrection guarantee · Your memories stay safe |

### Validation messages

Please enter your name · Enter a valid Australian phone number · Enter a valid email address · Please enter an alternative number

---

## `screen-4-schedule.html` — Step 4: schedule

| Element | Copy |
|---------|------|
| Title | FK Repairs · Step 4: Schedule appointment |
| H1 | When would you like to book? |
| Intro | Select a date and time for your resurrection. Slots reflect your store's tech roster and current workload. |
| Chips | No more than 7 days able to book · Time selected before payment |
| Day label | Select a day |
| Appointment card heading | Your appointment |
| Placeholders | Not chosen yet (date/time before selection) |
| Store line | FK [store name] |
| Helper (desktop) | Available times based on tech roster and current workload. You can book up to 7 days ahead. Lunch break shown 12:00 to 1:00 PM. |
| Slot legend | Available · Selected · Unavailable |
| Helper (mobile) | Lunch break shown 12:00 to 1:00 PM. Booking window: 7 days. |
| Footer | Back · Confirmation |

### Dynamic (JS)

| Condition | Copy |
|-----------|------|
| Walk-in | Walk-in path selected: choose your intended arrival window (no part guarantee). |
| Reserve | Reserve path selected: choose a precise appointment time. |
| Walk-in slots label | Select a window |
| Reserve slots label | Select a time |
| Ordering + ETA | At least one part needs ordering. The first day you can book is when stock is expected ([formatted date]), per inventory. |
| Walk-in windows | Morning (9:00 AM-12:00 PM) · Midday (12:00 PM-3:00 PM) · Afternoon (3:00 PM-6:00 PM) |
| Slot grid | Lunch / unavailable slots as generated |

---

## `screen-5-confirmation.html` — Step 5: confirm & pay

| Element | Copy |
|---------|------|
| Title | FK Repairs · Step 5: Confirm & pay deposit |
| H1 | Thank you and what happens next |
| Sub | Your booking is created with **part soft-reservation** pending store confirmation. |
| Section title | Your resurrection request |
| Badge | Soft-Reserved |
| Reference label | Reference |
| DL labels | Device · Issues · Estimated cost · Deposit (refundable) |
| Appointment H3 | Appointment details |
| Address note | Full street address is in your confirmation email. |
| Deposit section H2 | Pay deposit to reserve parts and time |
| Deposit body | Secure your appointment with a **$59-$69 refundable deposit**. The amount comes off your final bill. |
| Bullets | Your parts will be put aside · Your store will be expecting you at your chosen time. (dynamic) · Deposit comes off your final bill · Fully refundable if you cancel |
| Primary CTA | Pay deposit now |
| Secondary | Skip deposit, walk in instead |
| Manage booking | Manage booking · From your portal you can cancel or reschedule before the booking window closes. · Cancel booking · Reschedule |
| Legal line | By continuing you agree to our terms and conditions. |
| Modal title | Take CC payment |
| Modal body | Payment reserves your parts. You don't have to pay now if you'd rather just turn up. · If payment is not completed, we can send a reminder email with links to continue or switch to walk-in. |
| Modal amount line | Amount · AUD · Refundable |
| Form labels | Cardholder name · Card number · Expiry · CVC |
| Modal primary | Take payment · Processing… |
| Modal footer | Secure payment via Eway / Square. Confirmation email sent immediately after payment. |
| Abandon hint (on modal close) | Draft booking saved. Reminder email trigger queued for ~15 minutes if no payment. |

---

## `screen-6-success.html` — Booking confirmed

| Element | Copy |
|---------|------|
| Title | FK Repairs · Booking confirmed |
| Badge (default) | Soft-Reserved |
| H1 | Your booking is in motion! |
| Default note | Your part is currently **soft-reserved**. Store staff will confirm physical part availability shortly. |
| Reference | Reference number · Copied to clipboard |
| DL | Device · Issues |
| Financial rows | Estimated cost · Deposit paid · Balance due in-store |
| Part hold | Part hold countdown active: **7 days from booking** |
| Walk-in variant (query) | You're booked in as a walk-in. No part guarantee is applied until technician confirmation. · Walk-in: part availability checked on arrival. |
| Confirmed variant | Part is **hard-reserved**. Confirmation email sent. |
| What happens next | Check your email · Prepare your device · We'll remind you |
| Automated follow-ups | T+1hr / T+24hrs / T+6 months / T+11 months (see page) |
| CTAs | Access your portal · Add to calendar |
| Footer links | Need to reschedule? Manage booking · Cancel booking · Questions? Call us: 1800 FK REBORN |
| Page footer | Fone King · 22 years of phone resurrection · Lifetime warranty on every repair |

---

## `screen-edge-callback.html` — Device not listed

| Element | Copy |
|---------|------|
| Title | FK Repairs · Device not listed |
| H1 | Device not listed yet |
| Intro | No stress: our technicians can still help. Send your details and we will call you back with sourcing options and next steps. |
| Alert | Edge case routed inline: unknown models / unsupported parts / international variants. |
| Labels | Name · Phone · Email · Model details |
| Buttons | Back · Submit callback request |

---

## Editorial notes

1. **Prices** ($59-$69, $69.00, ranges on success screen) are prototype placeholders; sync with pricing team before launch.  
2. **Step 2 v2** is the primary symptoms flow; **screen-2-symptoms.html** is the alternate card-grid prototype.  
3. **Store names** live in `assets/fk-stores.js`, not repeated here.  
4. Update this file when marketing or legal change headings, disclaimers, or deposit terms.
