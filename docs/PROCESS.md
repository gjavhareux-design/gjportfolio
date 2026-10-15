# Design log: how this portfolio evolves

This is a running record of what I change on my portfolio, why I change it, and how I decide what to do next. I'm keeping it public so that anyone reviewing my work can see the reasoning behind the result as well as the result itself.

---

## Why treat a portfolio like a product

A portfolio is a product with one job: help a hiring manager decide, within a few minutes, whether to talk to me. It has users (recruiters, design leads, peers), a core task (understand who I am and judge the quality of my work), and success measures (time to the first case study, case studies read to the end, contact made).

So I work on it the way I'd work on anything I design:

1. **Review** the live site from the user's side, asking what a recruiter sees in the first 30 seconds and where they get stuck.
2. **Find the biggest gap**, the one issue that most weakens their impression.
3. **Fix it in a small, reversible change.**
4. **Ship and record it** here and in the commit message.
5. **Repeat.**

Small iterations mean the site is always live and always in a usable state, and every change can be traced and undone.

---

## How iterations happen

- **Feedback.** Each round starts from a structured review of the live site from a recruiter's point of view. That covers clarity of positioning, how fast the work can be reached, the depth of case studies, and the quality of visual evidence. Recent reviews pointed to *surgical* rather than structural gaps: too few accessible case studies, stock imagery where real UI screenshots belong, and too little visible UI work on the homepage.
- **Versions are kept, not overwritten.** When a page is substantially redesigned, the previous version moves to `archive/` instead of being deleted. The archive shows how my positioning and visual language developed.
- **Commits are written as design notes.** Every commit message explains *what* changed and *why*. Reading `git log` should feel like reading a changelog written by a designer.

---

## Iteration history

### Homepage
The `archive/pages/` folder holds the earlier homepages:

| Version | File | Positioning in the page title |
|---|---|---|
| Early | `archive/pages/indexOld.html` | "Senior UX & Product Designer Portfolio" |
| v1 | `archive/pages/indexv1.html` | "Product Designer" |
| Current | `index.html` | "UX Designer" |

**Why it changed:** each version narrowed the message. The current homepage leads with one clear identity (UX Designer), puts the strongest case study first (MahaRERA), and separates professional work from academic projects so reviewers can tell them apart at a glance.

### MahaRERA case study
- **First draft:** `archive/maharera-case1-old/`. It was a single long page built around images.
- **Current:** `projects/maharera/maharera-case-study.html`. It's restructured into chapters with section navigation and data visuals (D3.js) so the impact of the work is visible rather than only described.

**Why it changed:** a regulatory platform serving a whole state is complex. The first draft explained it. The redesign helps a reviewer *scan* it: problem, users, decisions, outcomes.

---

## Update — 15 October 2026: repository restructure

**What I did**
- Moved every file not used by the live homepage or MahaRERA case study into `archive/`. That includes old homepages, the coming-soon page, unused icons and logos, and large media files such as a 12 MB 3D model and a 4.5 MB GIF.
- Separated the homepage from projects. Homepage images now live in `assets/home/`, and each project gets its own folder, `projects/<name>/`, with its own `assets/`.
- Fixed navigation: the homepage's MahaRERA card linked to a page that didn't exist, and the case study had no way back to the homepage. Both now work.
- Replaced `sitemap.xml`, which was actually a copy of an HTML page, with a valid sitemap so search engines can index the site.
- Added this log and a README.

**Why**
The repo had grown to 50 loose files in one folder, which made it hard to tell what was live and easy to break. A clean structure makes the next iterations faster, such as adding the Imagine As You Read and FocusXR case studies. It also makes the repo itself something I'm comfortable showing, because how a designer organises their own work says something about how they'll organise a team's.

**Next**
- Bring the Imagine As You Read case study back from the archive into `projects/imagine-as-you-read/` and link it from the homepage.
- Build the About page the homepage navigation already points to.
- Replace placeholder stock images on the homepage cards with real UI screenshots from each project.
