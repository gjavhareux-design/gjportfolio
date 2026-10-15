# gjuxdesign.in — UX Portfolio of Ganesh Javhare

**Live site:** [www.gjuxdesign.in](https://www.gjuxdesign.in)

I'm a UX designer based in London with 7+ years of experience designing regulatory and public-facing digital services. Most of that time was spent at **MahaRERA** (Maharashtra Real Estate Regulatory Authority) in Mumbai, working on PropTech and LegalTech products used at population scale. I hold an **MSc in User Experience Design** from Kingston University London and a B.Tech in Town Planning from College of Engineering Pune.

This repository is the source of my portfolio. I design and build it myself, and I treat it like a product: it's versioned, iterated and documented.

---

## Featured work

| Project | What it covers | Link |
|---|---|---|
| **MahaRERA Portal & Website Redesign** | Redesigning a state regulator's public website and portal for homebuyers, promoters and agents | [Read the case study](https://www.gjuxdesign.in/projects/maharera/maharera-case-study.html) |
| Imagine As You Read *(in progress)* | Research-led exploration of modern reading habits with AI-assisted, immersive storytelling (MSc project) | Coming back soon |
| FocusXR *(in progress)* | Academic project | Coming soon |

---

## Repository structure

```
.
├── index.html                  Homepage (must stay at root; GitHub Pages serves from here)
├── assets/
│   └── home/                   Images used only by the homepage
├── projects/
│   └── maharera/
│       ├── maharera-case-study.html
│       └── assets/             Images used only by this case study
├── docs/
│   └── PROCESS.md              Design log: what changed, why, and how I iterate
├── archive/                    Earlier versions and unused assets, kept for reference
│   ├── pages/                  Previous homepages, coming-soon page, IYR draft
│   ├── maharera-case1-old/     First MahaRERA case-study draft with its images
│   └── assets/                 Retired icons, logos, media, resumes
├── sitemap.xml                 For search engines
├── CNAME                       Custom domain (www.gjuxdesign.in)
└── googlef879fc9d873e2131.html Google Search Console verification
```

**Conventions**

- **Homepage and projects are kept apart.** Homepage files live in `assets/home/`. Each project gets its own folder, `projects/<name>/`, with its page and an `assets/` folder. A project can be added, updated or retired as one unit without touching the homepage.
- **Nothing is deleted outright.** Work that's no longer live moves to `archive/`, so earlier iterations stay visible and recoverable.
- **Every commit explains itself.** Commit messages say what changed and *why*, so the history reads as a design log.

---

## Built with

- Hand-written HTML, CSS and JavaScript
- [Tailwind CSS](https://tailwindcss.com) (homepage)
- [D3.js](https://d3js.org) and IntersectionObserver (case-study data visuals and section navigation)
- Google Fonts: Syne, DM Sans, Inter
- Hosted on GitHub Pages with a custom domain

---

## How I work on this site

I iterate on the portfolio in the open, the way I would on a product: review, find the biggest gap, fix it, ship. The full reasoning is in **[docs/PROCESS.md](docs/PROCESS.md)**.

---

## Contact

- Portfolio: [gjuxdesign.in](https://www.gjuxdesign.in). The contact section on the site is the best way to reach me.

© Ganesh Javhare. The design, writing and case-study content in this repository are my own work. Please don't reuse them without permission.
