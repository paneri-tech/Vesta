# Vesta Home Services — Website

A complete, responsive multi-page website for **Vesta Home Services** — a premium Bay Area home services marketplace.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, why Vesta, how it works, services preview, earnings calculator |
| Services | `services.html` | Full service catalog with filters, pricing table, trust banner |
| About | `about.html` | Mission, values, personas, roadmap, market sizing |
| Contact | `contact.html` | Contact form, FAQs, location info, social links |

## File Structure

```
vesta-site/
├── index.html          # Home page
├── services.html       # Services catalog
├── about.html          # About / story / roadmap
├── contact.html        # Contact form + FAQ
├── assets/
│   ├── css/
│   │   └── vesta.css   # Shared stylesheet (design tokens, nav, footer, utils)
│   └── js/
│       └── vesta.js    # Shared JavaScript (nav, modals, animations, calculator)
└── README.md
```

## Design

- **Color palette**: Deep navy (`#080f1e`) with gold accents (`#c9a84c`) and cream text (`#f4ede0`)
- **Typography**: Cormorant Garamond (serif display) + DM Sans (body) + Space Mono (monospace/data)
- **Responsive**: Mobile-first, hamburger nav on < 900px, all grids stack gracefully
- **Animations**: Scroll-triggered reveal animations, hero entrance, carousel auto-play

## Features

- ✅ Fully responsive — mobile, tablet, desktop
- ✅ Shared CSS + JS across all pages (no duplication)
- ✅ Active nav link highlighting per page
- ✅ Hamburger mobile menu
- ✅ Modal system (Book / Join as Pro)
- ✅ Interactive earnings calculator
- ✅ Hero service carousel with auto-play + progress bar
- ✅ Service filter tabs (Services page)
- ✅ Expandable FAQ accordion
- ✅ Contact form with topic quick-routing
- ✅ Scroll-triggered reveal animations
- ✅ Toast notifications

## Deploy

### GitHub Pages
1. Push to a GitHub repo
2. Go to Settings → Pages → Deploy from branch (`main`, `/root`)
3. Your site will be live at `https://yourusername.github.io/vesta-site/`

### Netlify Drop
1. Drag the `vesta-site/` folder to [netlify.com/drop](https://netlify.com/drop)
2. Instant deploy with a shareable URL

### Local Preview
Open `index.html` directly in a browser, or run:
```bash
npx serve .
# or
python3 -m http.server 3000
```

## Customization

All design tokens live in `assets/css/vesta.css` under `:root { ... }`. Change colors, spacing, and typography there. Shared nav/footer/modal HTML is duplicated across pages for simplicity (no build step required).

---

© 2025 Vesta Home Services, LLC · Bay Area, California
