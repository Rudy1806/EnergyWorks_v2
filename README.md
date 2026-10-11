# Energy Works — Static Frontend

This repository contains a static frontend skeleton for the Energy Works website (landing page, booking flow placeholder, and a static admin mock). It's intended for free static hosting (GitHub Pages, Netlify, Vercel) and to be connected to a backend later.

What you'll find
- `index.html` — public landing page (hero, pricing, CTA)
- `booking.html` — static booking flow & booking form placeholder
- `admin.html` — static admin UI mock with comments where APIs will be used
- `assets/styles.css` — small brand CSS

Where backend logic will go (notes for later)
- Booking form: will POST to `/api/book` (or `/bookings`) and call Razorpay checkout. After payment success the backend marks a booking `confirmed` and schedules reminder campaigns.
- WhatsApp campaigns: backend endpoint `/api/whatsapp_campaigns` to create scheduled blasts. A scheduler (APScheduler) will run and call the Meta WhatsApp Cloud API for campaigns that are due.
- Availability rules & schedules: backend endpoints under `/api/schedules` and `/api/availability_rules` will validate requested slots before accepting them.

Free hosting options
- GitHub Pages: push the `main` branch and enable Pages for the repository. Use the repository root as the publishing source.
- Netlify / Vercel: drag-and-drop the repository or connect the Git provider and deploy — both have free tiers and support custom domains.

How to preview locally
Open `index.html` in a browser. For a small local server (recommended):

```bash
# Python 3 (serves current directory at http://localhost:8000)
python3 -m http.server 8000

# or with Node (if you prefer):
npx serve .
```

Next steps (suggested)
1. Add a minimal FastAPI backend with SQLite and the 4 tables (`customers`, `schedules`, `whatsapp_campaigns`, `availability_rules`).
2. Implement secure admin login and replace `admin.html` with Jinja templates served by FastAPI.
3. Integrate Razorpay checkout on `booking.html` and verify payments server-side.
4. Add APScheduler job that sends WhatsApp campaigns using Meta's Cloud API.

If you want, I can now:
- convert these static pages to Jinja2 templates and scaffold a minimal FastAPI backend (SQLite + SQLAlchemy) so the site can be deployed with both frontend and backend.
- or generate a GitHub Pages-ready repository and a deployment guide.

Deployment configs included
- GitHub Actions workflow: `/.github/workflows/deploy.yml` — deploys the repository root to GitHub Pages on push to `main` using `peaceiris/actions-gh-pages`.
- Netlify config: `netlify.toml` — a minimal file for publishing the repo root when you connect the repo to Netlify.
- `.gitignore` — minimal ignores for common files.

Instructions to publish

GitHub Pages (recommended for static frontend):

1. Push this repository to GitHub (create a repo and push the `main` branch).
2. In the repository settings > Pages, the Actions workflow will deploy the site's content. The workflow uses the `GITHUB_TOKEN` automatically; no extra secrets are required for basic deployment.

Netlify:

1. Create a Netlify account and "New site from Git" → connect your Git provider and select this repository.
2. Use the default build settings (no build command) and set the publish directory to `.` (root). The included `netlify.toml` helps Netlify pick up this configuration.

Vercel:

1. Connect your repo in Vercel and import the project. No special configuration is required for static sites — Vercel will publish the repository root.

Notes on custom domains & HTTPS
- GitHub Pages, Netlify and Vercel all provide HTTPS for custom domains. Follow the provider's docs to add a CNAME or configure DNS.

Security & production tips
- If you later add a backend, do not deploy server code to GitHub Pages — use a separate server or platform (Heroku, Render, Railway, DigitalOcean App Platform, or a VPS). The static site can communicate with the backend via fetch/XHR to API endpoints.

Next steps I can take for you
- Scaffold the FastAPI backend and convert the static pages to Jinja templates served by the backend (full stack deployable).
- Create a demo deployment branch and show example Git commands to push and enable GitHub Pages.
