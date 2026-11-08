# abhishek.site — personal bio

A single-page, zero-build site. No framework, no server, no database bill.

```
index.html     page shell (rarely touched)
styles.css     design (rarely touched)
app.js         renderer (never touched)
content.js     ← YOUR DATABASE. Edit this to update the site.
images/        photos, screenshots, thumbnails
slides/        PDFs: decks, résumé
```

## Deploy on GitHub Pages (free, ~5 minutes)

1. Create a repo at github.com/new. Name it `<your-username>.github.io` to get
   the URL `https://<your-username>.github.io`, or any other name to get
   `https://<your-username>.github.io/<repo-name>`. Make it Public.
2. Click **uploading an existing file**, drag in everything from this folder
   (including the `images` and `slides` folders), and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, Branch **main**, folder **/ (root)**, and Save.
4. Wait about a minute, refresh the Pages screen, and your live URL appears.

Prefer the terminal?

```bash
cd site
git init && git add . && git commit -m "Launch"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

### Optional: custom domain
Buy a domain (about $10–12 per year at Cloudflare or Porkbun). In **Settings → Pages →
Custom domain** enter it, then add the DNS records GitHub shows you. Tick
**Enforce HTTPS** once it's available.

## Updating the site (the easy-maintenance part)

- **Text, projects, links:** open `content.js` on github.com, click the pencil,
  edit, commit. Live in about a minute. Press `.` on the repo page to open a full
  VS Code editor in the browser if you prefer.
- **Photos:** upload into `images/` (Add file → Upload files), then point a
  `gallery`, `projects`, or `slides` entry at `images/your-file.jpg`.
  Keep photos under ~400 KB (squoosh.app is free) so the page stays fast.
- **Slides:** upload a PDF into `slides/`, or paste a Google Slides / Canva
  "publish to web" link as the `url`.
- **Headshot:** upload a square photo as `images/headshot.jpg`. Until then the site shows your initials.
- **Booking:** create a free Calendly account, make a 30-minute event, and paste its link into `calendly` in content.js. The booking calendar then appears on the page. Leave it empty and the section asks visitors to email you instead.
- **Research and press:** add papers to `research` and articles to `press` in content.js.
- **Case studies:** each entry in `cases` opens as a full reader with role, problem, what you did, outcome and lessons. Share one directly with `yoursite/#case-aqua`.
- **Ask panel:** on GitHub Pages it answers from your content with built-in keyword matching (no API key, no cost). Inside claude.ai it uses Claude.
- **Hide a section:** set its array to `[]`.
- **Career chip:** each entry in `chapters` is a block; `caseId` links it to a case study. `size` is `l`, `m`,
  `s`, or `w`; the layout fills best with one `l`, two `m`, three `s`, one `w`.

## Why there is no "real" database
Content changes a few times a month, so a file in Git is the right database:
free, versioned (every edit can be undone from History), and nothing to keep
alive. If you later want to edit from your phone without touching code, two
free upgrades work with this setup: a Google Sheet published as CSV, or
Decap CMS (a free admin panel that commits to this repo).

## Preview locally
`python3 -m http.server` in this folder, then open http://localhost:8000.

## Keyboard
`/` or `Ctrl/⌘ K` opens the jump menu. Arrow keys move around the chip.
