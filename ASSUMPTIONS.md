# ASSUMPTIONS.md

> Companion to [PLAN.md](PLAN.md). Every assumption I had to make to produce the plan is logged here so you can correct or confirm before I start coding.

---

## 1. **MAJOR — repo state does not match the kickoff prompt**

The kickoff prompt told me I'd find a clean static Vite + React Router v7 codebase that needed to be converted to a Next.js + Postgres + Express monorepo per `CLAUDE.md`. **That's not the current state of the repo.** What's actually here:

| Thing `CLAUDE.md` / kickoff says | What's actually in the repo |
|---|---|
| Vite + React 18 + React Router v7 static site | Both. The Vite-era pages are still in [src/app/pages/](src/app/pages/) and the Figma exports in [src/imports/](src/imports/). But there is **also** a Next.js 16 app sitting at the repo root. |
| Migrate **to** Next.js 14 (App Router) | Already on **Next.js 16.2.5** (App Router). [package.json](package.json), [next.config.ts](next.config.ts), [app/layout.tsx](app/layout.tsx). |
| Postgres + Prisma | **SQLite + Prisma 7** with `@prisma/adapter-better-sqlite3`. [dev.db](dev.db) exists. |
| Separate Express API at `apps/api/` | No separate API — uses **Next.js Route Handlers** at [app/api/](app/api/). The `apps/web` and `apps/api` monorepo split was not adopted. |
| Auth: bcrypt + JWT + httpOnly cookies, hand-rolled | **NextAuth v5 (beta)** with credentials provider. [lib/auth.ts](lib/auth.ts) (per memory). |
| Admin under Next.js `(admin)` route group | At [app/admin/](app/admin/) — same idea, slightly different folder name. |
| Validation: Zod | Zod 4 — note `.issues` not `.errors` per Zod 4 breaking change. |
| pnpm workspaces | Single npm project (`package.json` `name: "alabs-web"`). |

The persistent project memory says "Build passes cleanly. All routes 200. Lead submission API working. Admin auth + redirect working." as of today (2026-05-07). Translation: **Phases 1–6 of `CLAUDE.md` §11 appear to have been done already in a prior session**, but with a stack that diverges from `CLAUDE.md`'s prescription.

### What I assumed
I produced [PLAN.md](PLAN.md) as a pure content-map (page → concept → Prisma model). That work is **stack-agnostic** — it's true regardless of whether you keep the existing Next.js 16 + SQLite scaffold or restart from `CLAUDE.md`'s Postgres + Express version.

### What I need from you
Pick one and tell me explicitly:

- **Option A — Continue with the existing Next.js 16 + SQLite + NextAuth scaffold.** I audit what's been built, identify what's missing per `CLAUDE.md` §3 (dynamic content concepts) and §9 (admin coverage), and finish the gaps. This is faster but means accepting `CLAUDE.md` §4 ("mandatory — do not substitute") is overridden.
- **Option B — Restart from `CLAUDE.md`'s exact stack.** Wipe current code, build the pnpm monorepo with Express + Postgres as specified. Slower; the prior work is discarded.
- **Option C — Hybrid.** Keep Next.js 16 + Route Handlers (i.e. drop Express, keep Postgres + bcrypt/JWT and the Prisma schema as `CLAUDE.md` §6 wrote it). Migrate from SQLite to Postgres, swap NextAuth for hand-rolled JWT.

**Until you choose, I am NOT writing code.** This is the largest unconfirmed assumption in the project and it controls every following phase.

---

## 2. Repo is not a git repository

The environment header says `Is a git repository: false`. `CLAUDE.md` §11 says "Commit at the end of every phase" and §12 says "Do not push directly to main." Both presuppose a git repo.

### What I assumed
I'll ask you to `git init` (or share the remote URL) before Phase 1. I will not run `git init` myself because creating the initial repo and committing the existing tree without your input is a non-trivial decision (which files to track, which to gitignore, who's the author).

---

## 3. Memory record vs. reality

The persistent memory record [project_alabs_nextjs.md](file:///Users/scaletrix/.claude/projects/-Users-scaletrix-Documents-Create-AlabsWebsite-Pages/memory/project_alabs_nextjs.md) says all current work is at `/Users/scaletrix/Documents/Create AlabsWebsite Pages/alabs-web/`. That folder **does not exist** — the rebuild is at the project root. Memory is stale; I'll update it once you confirm Option A/B/C above.

---

## 4. Live site scraping — fall-backs assumed

`CLAUDE.md` §5 says seed from https://www.analytixlabs.co.in/ via `axios + cheerio`, falling back to whatever is hardcoded in `src/imports/*` for anything not on the live site. I have **not yet read the live site** — that happens in Phase 3. Assumptions I'll carry into seeding:

- The live site's course list is the canonical course catalog. Local Figma values like "Data Analytics" / "Business Analytics" with "46 Classes / 500+ Hours / 3 batch options" are **placeholders** in the export, not real catalog data.
- Hiring-partner logos: 6 are visible in the Figma export but the live site shows more — I'll seed from the live site list and use the Figma logos as last-resort fallbacks.
- Course-detail copy in `Pdp.tsx` (the "Advanced Certification in Data Science… 700+ hour, 8-month program") is **specific to one course** even though the file is the template for all PDPs. I'll treat it as the seed body for the Data Science course only and pull other courses' bodies from the live site.

---

## 5. New schema additions in `PLAN.md` §9

I proposed:

- **New model `Office`** (city, address, phone, hours, directionsUrl, mapImageUrl)
- **New fields on `Course`:** `experienceLabel`, `jobRoles: String[]`, `keySkills: String[]`, `careerSupportText`
- **New field on `SiteSettings`:** `stats: Json` (`{years, students, trainers}`)

Assumption: you accept these additions as part of Phase 2's Prisma migration. If you'd rather shoehorn the office data into `SiteSettings.address` as JSON and stuff job-roles/skills into `Course.longDesc` as markdown, say so and I'll adjust the plan. I made the schema-additive choice because the admin panel (`CLAUDE.md` §9) needs structured CRUD on these fields.

`String[]` requires Postgres `text[]`. If you go with **Option A (SQLite)**, those need to become `Json` columns instead. Another reason the stack decision matters.

---

## 6. Page model for `/about`, `/services`, `/404`

`CLAUDE.md` §6 defines `Page` with `blocks: Json` for "About / Why Us / For Corporates." I extended that to also cover the Home, Courses, PDP, and Contact pages for the bits that aren't already in another model — i.e. hero copy, form-field config, the shared "fee narrative" paragraph.

Assumption: you're OK with `Page` rows for `home`, `courses`, `pdp`, `contact`, `about`, `why-us`, `for-corporates`, `not-found`. If you prefer to hardcode hero copy into the Figma exports (as ultimate fallbacks) and only use `Page` for the standalone pages, that's also workable — say so.

---

## 7. Mega-menu source

`CLAUDE.md` §6 has both `NavItem` (with `group=MEGA_MENU` and `parentId` for tree) **and** `Category` + `Course`. The mega menu is logically `Category → Course`, so storing it as `NavItem` rows would duplicate data.

### What I assumed
The mega menu is rendered by joining `Category` with `Course` (filtered by `isActive=true`, `isPublished=true`). The `MEGA_MENU` value of the `NavGroup` enum stays in the schema for forward-compat but is unused in seed data. If you'd rather have an admin-editable arbitrary mega menu (i.e. some courses excluded, custom labels), I'll seed `NavItem` rows instead — let me know.

---

## 8. Footer "blog" column

The "Blog" footer column shows 3 specific blog post titles in the Figma export. I'm treating that as "latest 3 published posts, sorted DESC by `publishedAt`" rather than admin-pinned. If you want the admin to **manually pin** which 3 posts appear in the footer, that's a new field (`BlogPost.isPinnedFooter Boolean`) — flag it.

---

## 9. Sign In / Create Free Account / Upcoming Batches links

These three top-nav links go to (presumably) the external LMS / batches calendar. `CLAUDE.md` §12 says "do not add an LMS / SSO" and "the 'Sign In' link goes to the existing external LMS URL stored in nav settings". So:

### What I assumed
These three are stored as `NavItem` rows with their `url` field set to the external URL you give me. **I don't know the URLs yet.** Listed in PLAN.md §11 question 4.

---

## 10. Iconify icons in the Figma exports

Strings like `wpf:online`, `mdi:location`, `streamline:group-meeting-call-remix` are Iconify icon keys baked into the Figma export's JSX. I treat these as **layout/visual** (Golden Rule § stays put), not content. The text *next to* the icon is dynamic; the icon key isn't.

If you later want the admin to change icons too, that's a per-block icon picker addition — out of scope for Phase 4.

---

## 11. CTA destinations & courses-listing slot count

Two layout-bound questions I made guesses on:

- "Explore Course" CTA on home cards → `/courses/{course.slug}`. The Figma's text-content `onClick` hack hardcodes `/courses/data-science` regardless of the card. That's a bug; the dynamic version routes per card.
- `/courses` grid: I assumed N explicit slots equal to the Figma's grid count. I haven't measured exactly; I'll count when I open the file in Phase 4. If the live site paginates ~12 courses per page, that's the number I'll target.

Both flagged in PLAN.md §11 questions 2.

---

## 13. New contact page is canonical; old one is dropped

A second Figma export, [Contact-12-1208.tsx](src/imports/Contact-2/Contact-12-1208.tsx), was added on 2026-05-07. It's a complete redesign of the contact page — adds a hero `CONTACT US`, a split "Get in touch" panel + "Request a Call back" form, three pastel-tinted office cards (mint / yellow / pink) with embedded map images, and a closing "Unlock Insights. Enroll Now. Transform Tomorrow." CTA banner.

### What I assumed
- The new file [Contact-12-1208.tsx](src/imports/Contact-2/Contact-12-1208.tsx) is canonical for `/contact`.
- The old [Contact-9-325.tsx](src/imports/Contact-1/Contact-9-325.tsx) is **superseded and unused**. It will not be wired to any route. (I won't delete the file in Phase 0; we can `rm -rf src/imports/Contact-1/` later if you confirm.)
- The form's two buttons ("Sign up→" green, "Send" yellow) submit to two different `Lead.source` values — `newsletter` and `callback-request`. I'm guessing the green one is a marketing-list signup. **Confirm intent.**
- The "Select City" dropdown options come from `Office.city` (i.e. Noida / Gurgaon / Bengaluru) — not a free list. If the live site exposes more cities, I'll widen.

### What I need from you
Confirm the new file is canonical, or point me to whichever variant you actually want.

---

## 14. "Bangalore" vs "Bengaluru"

The original AlabsLandingPage, ExploreCourses, Pdp, and old Contact pages all spell the city `Bangalore`. The new contact page spells it `Bengaluru`. The address text is also slightly different between the two contact pages (the new one shortens "Backgate of BDA Complex" → "Backgate, BDA Complex").

### What I assumed
I'll seed `Office.city = 'Bengaluru'` (modern spelling, matches new design) and update the footer copy on every page to match. The footer is rendered from data, so the change propagates automatically. **Confirm.**

---

## 15. About-page FAQs — separate scope or shared?

The About page has its own 8-question FAQ block (`Does the institute offer any discounts?`, `What is the best course to get started with data analytics?`, …). The home page also has a global FAQ block per `CLAUDE.md` §6.

### What I assumed
The About FAQs are a **distinct list** with `Faq.scope = 'ABOUT'`. Pros: admin can curate the About list separately. Cons: schema needs a new scope value (currently `CLAUDE.md` §6 only documents `'GLOBAL'` and per-course scopes).

### Alternative
Merge into `'GLOBAL'`. That keeps the schema simpler but means the home and about pages would show the **same** FAQs.

Pick one.

---

## 16. For Corporates page — body copy is partially image-only

Significant portions of [ForCorporate.tsx](src/imports/ForCorporate/ForCorporate.tsx) appear to be rendered as embedded PNG screenshots rather than live text — the cataloging agent could only identify section *positions* (icon classes, grid coordinates), not the actual headings/descriptions for the comparison matrix's column titles, row labels, or service-card copy.

### What I assumed
- The comparison matrix has 3 columns × 4–5 rows of feature checks. The column titles are likely something like `Self-Paced` / `Live Cohort` / `Enterprise` (typical industry split) but I do not have the actual strings.
- The service cards' three icons (`lets-icons:setting-fill`, `icon-park-outline:setting-computer`, `material-symbols:manage-accounts-rounded`) probably correspond to "Customization" / "Tech Setup" / "Account Management" but again I'm guessing.
- The inquiry form fields (Name / Email / Phone / Company / Team Size / City / Message) are guessed — the export's field list isn't fully readable.

### What I need from you
Either (a) confirm the live site at https://www.analytixlabs.co.in/corporate-training (or wherever the For Corporates page lives) is the source of truth for body copy and we seed from it in Phase 3, OR (b) provide the copy directly. **Until then, the For Corporates content blocks in [PLAN.md](PLAN.md) §6B are placeholders.**

I'm storing the comparison matrix as a single `Json` block on `Page(slug='for-corporates')`. If you'd prefer a dedicated `ComparisonMatrix` model so it gets a richer admin editor, say so — I'll add it to §9.1.

---

## 17. TeamMember model has no rendering surface

`CLAUDE.md` §6 defines a `TeamMember` model (name, role, photo, bio, linkedin) and §3 mentions "Trainer / leadership cards" as a content concept. The original PLAN.md tied `TeamMember` to the About page's team grid — but the new [AboutUs.tsx](src/imports/AboutUs/AboutUs.tsx) export doesn't have a team grid. It has stats, testimonials, and FAQs instead.

### What I assumed
I'm leaving `TeamMember` in the schema (and as an admin page in `CLAUDE.md` §9) **unused on the public site for now**. The admin can still add team members for future use. If you want the model removed entirely, it's a 5-minute schema cleanup — let me know.

Possible homes for it later: a `/about/team` subpage, a "Faculty" link in the footer (already exists as `About Faculty`), or a section in For Corporates.

---

## 18. New `Lead` columns and the existing `dev.db`

[ASSUMPTIONS.md](ASSUMPTIONS.md) §1 already flags that the existing scaffold uses SQLite. The new fields proposed in [PLAN.md](PLAN.md) §9.2 (`Lead.countryCode`, `Lead.city`, `Lead.company`, `Lead.teamSize`, `SiteSettings.businessHours`, widened `SiteSettings.stats`) require a Prisma migration on the existing [dev.db](dev.db).

### What I assumed
This is a Phase 2 task, not a Phase 0 task. **No migration runs until you approve the plan.** When it does, the existing seed data will be preserved (additive migration, no destructive changes).

---

## 19. Stop point

Per `CLAUDE.md` §11 Phase 0 and the kickoff prompt, **I am stopping here** and waiting for you to:

1. Approve [PLAN.md](PLAN.md), AND
2. Answer the 11 open questions in PLAN.md §11, AND
3. Pick A / B / C in §1 of this file.

After that, I'll proceed with whichever phase is next.
