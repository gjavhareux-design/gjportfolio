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

---

## Update — 15 October 2026 (afternoon): new case study and About page

**What I did**
- Shipped **v3 of the MahaRERA case study**. It's a fuller, chaptered story covering the two products, user groups, research methods, survey and usability results, and a six-frame storyboard of the old website. v2 moved to `archive/maharera-v2/`. The URL didn't change, so existing links keep working.
- Added the **About page** that the homepage navigation was already pointing to.
- Filed every new upload by the page that owns it. Shared files (stylesheet, Three.js, avatar, thumbnails) went to `assets/shared/`.
- Replaced the placeholder photo on the Imagine As You Read homepage card with the real app mockup.
- Fixed "home" links on the new pages, which pointed to an old filename.

**Why**
The case study is the core of the portfolio, so it gets versioned rather than overwritten. Each version reads more like evidence and less like a description. A single-owner rule for files keeps the structure from drifting back into one flat folder as more projects arrive.

**Still to add**
- Case study images not uploaded yet: the About-MahaRERA intro graphic, three user photos, five old-site pain-point images and the hero image.
- About page: one project thumbnail (`concept-800.webp`) and testimonial photos. The testimonials fall back to initials until the photos are added.

---

## Update — 15 October 2026 (afternoon): real project visuals on the homepage

**What I did**
- Replaced the placeholder thumbnails on the homepage's academic project cards with each project's key visual: **Imagine As You Read** and **FocusXR**.
- Added a new project card, **XP Sarthi**, an AI-powered AR travel companion. The academic grid is now an even 2 × 2: Imagine, FocusXR, XP Sarthi, then ZenSphere (in progress).
- Changed the academic cards from 3:2 to 16:9 frames so the key visuals show in full. The 3:2 frame cropped the project names and logos at the left edge.

**Why**
Stock and placeholder images were one of the clearest gaps in earlier reviews of the site. A reviewer judges a project card in a second or two, so the thumbnail should be the project itself, not a random photo. Matching the frame to the artwork keeps each project's name readable at a glance.

**Next**
- Write up the Imagine As You Read, FocusXR and XP Sarthi case studies in `projects/<name>/` and link the cards to them. The cards currently link to `#`.

---

## Update — 15 October 2026 (afternoon): two more case studies

**What I did**
- Published the **Imagine As You Read** case study (`projects/imagine-as-you-read/`), rebuilt from the earlier draft in the archive. It covers research numbers, personas, MoSCoW prioritisation, four prototype fidelities, usability results and the two iterations they drove.
- Published **FocusXR** (`projects/focusxr/`) as a clearly labelled *concept study*, built from my Kingston University assignment on social superpowers in XR. It covers the research behind it, Kolb's learning cycle, the six superpowers, and the risks a real version would have to handle.
- Both pages use the same page system and five chapters as the MahaRERA case study (Introduction, Discover, Define, Develop, Deliver), so every case study reads the same way.
- On the homepage, FocusXR moved to the end of the academic grid, after ZenSphere, and is tagged "Concept". The case studies now link to each other in a loop.

**Why**
A consistent structure lets a reviewer compare projects instead of re-learning each page. Labelling FocusXR as a concept, and saying plainly that its visuals are AI-generated and nothing was tested, keeps the portfolio honest about what each project is evidence of. Tested work comes first in the grid; speculative work comes last.

**Next**
- Add real screens from the Imagine As You Read Figma prototype to its case study, plus a link to the prototype.
- Write up XP Sarthi and ZenSphere.

---

## Update — 26 October 2026: About page on phones

**What was wrong**
On a phone, the About page could be zoomed out and dragged sideways, and the journey globe ran ahead of the story. It showed the next city while you were still reading about the previous one.

**What I found**
Both problems had one cause. A hidden screen-reader label inside each testimonial link was positioned against the whole page instead of its scrolling row, so the page laid out about 1,770px wide on a 390px screen. The wider page also made the browser report the screen as roughly 3,400px tall, which made the globe's step changes fire early.

**What I changed**
- Scrolling rows now contain everything inside them, so the page is exactly as wide as the screen.
- On portrait phones, the globe switches to a new stop once its heading is clearly in view below the pinned globe, and the stop you just finished fades less.
- In landscape, phones get the side-by-side layout instead of a globe squeezed into a thin strip.

**Why it matters**
Most portfolio visits from recruiters happen on phones. A page that slides sideways reads as unfinished, and a story whose map disagrees with the text undoes the one interaction designed to make that section memorable.
