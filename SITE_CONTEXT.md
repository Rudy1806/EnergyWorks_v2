# Energy Works — Site Context

Summary: A small static frontend for the Energy Works website (landing, booking placeholder, static admin mock). Intended to be served as a static site and later paired with a small backend service.

Contents
- `index.html` — public landing page (hero, pricing, CTA).
- `booking.html` — booking flow placeholder and booking form (client-side only).
- `admin.html` — static admin mock with comments where backend APIs will be used.
- `assets/` — `styles.css`, `main.js` (styles and client JS).
- `netlify.toml` — minimal config for Netlify deployments.
- `README.md` — developer notes and deployment guidance.

How to preview locally

1. Open `index.html` in a browser (quickest).
2. Or run a small static server from the repo root:

```bash
# Python 3
python3 -m http.server 8000

# then open http://localhost:8000
```

Deployment notes
- This is a pure static site — suitable for GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
- For a custom domain point DNS to the provider (GitHub Pages uses A/CNAME records; Netlify/Vercel provide instructions and automatic HTTPS).

Planned backend integration (for later)
- Backend will be hosted separately (e.g., small EC2 instance or managed service).
- Frontend will call backend API endpoints (examples):
  - `POST /api/book` — create a booking and start payment checkout.
  - `POST /api/whatsapp_campaigns` — schedule WhatsApp campaign sends.
  - `GET/POST /api/schedules` — manage availability and worker schedules.
  - `GET/POST /api/availability_rules` — validate and store booking rules.
- Make sure the backend enables CORS for the frontend origin (or use subdomains and proper DNS routing).

Notes for another AI
- This repo is static-only now; any references to server behavior in the HTML are placeholders and should be implemented server-side later.
- Keep responses concise and reference these files when asked about site structure or deployment.
