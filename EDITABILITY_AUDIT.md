# EDITABILITY AUDIT — AnalytixLabs Website + Admin CMS

Audit date: 2026-05-29. Scope: every visible "part" of each public page, classified by whether an admin can edit it and from which admin surface, or whether it is a HARDCODED GAP.

## Legend

- ✅ **EDITABLE** — an admin surface writes the exact value the component reads.
- ⚠️ **PARTIAL** — some of the part is editable but key sub-parts are hardcoded, or the value is editable but only via an indirect/fragile path.
- ❌ **HARDCODED GAP** — literal string/number/image in the component with no admin control (or a fallback that nothing ever overrides).

## Source types

- **MODEL** — Prisma content model with admin CRUD under `app/(admin)/admin/*`.
- **SECTION** — `Section` table, per-page editors under `app/(admin)/admin/pages/*`, driven by `lib/sections/index.ts`.
- **BLOCK** — `Page.blocks` JSON / merged published section content, surfaced as `pageBlocks.blocks[...]` via `lib/api-client.ts getPage()`.
- **SITE_SETTINGS** — `SiteSettings` singleton (`app/(admin)/admin/site-settings`).
- **GLOBAL_BLOCK** — `GlobalBlock` table editors under `app/(admin)/admin/global/*`.
- **LITERAL** — hardcoded in the component file.

---

## ⛔ ARCHITECTURAL FINDING (affects every page) — GlobalBlock editors are disconnected

The admin has four "Global" editors that write a `GlobalBlock` row: Header (`app/(admin)/admin/global/header/page.tsx`), Footer (`app/(admin)/admin/global/footer/page.tsx`), CTA banner (`global/cta-banner`), and Call-back form (`global/call-back`). **No public/site code reads `GlobalBlock` at all.** A repo-wide search for `globalBlock`/`GlobalBlock` in `lib/`, `components/layout/`, `app/(site)/` returns zero hits — it appears only in the admin pages, the API route, `prisma/`, and the admin audit page.

Consequence: editing the logo, top-nav links, mega-menu, sign-in/create-account CTAs (Header editor), or footer tagline/social/copyright/link-columns (Footer editor) in the admin **changes nothing on the site**. The header/footer instead read `getNav(...)` + hardcoded literals (see Global Header/Footer tables below). This is the single largest gap and the root cause of most ❌ rows below.

---

## Global Header (`components/layout/GlobalLayout.tsx`, rendered by `app/(site)/layout.tsx`)

| Part | Source | Editable from | Status |
|---|---|---|---|
| Logo image | LITERAL `src="/Asset_logo.png"` — `GlobalLayout.tsx:108`, `:171`, `:253` | Header editor writes `logoUrl` (`global/header/page.tsx:9`) and SiteSettings writes `logoUrl`, but neither is read | ❌ |
| Top-nav links (labels/urls) | `getNav("TOP_NAV")` prop, fallback `DEFAULT_LINKS` `GlobalLayout.tsx:86-93` | NavItem model (no admin NavItem CRUD page found) / Header editor `navLinks` (not read) | ⚠️ |
| Mega-menu (4 categories + course links + "New" badges) | LITERAL `MEGA_MENU_CATEGORIES` `GlobalLayout.tsx:23-60` | Header editor has `megaMenuCategories` (`global/header/page.tsx:25`) but it is not read; `getNav("MEGA_MENU")` exists in api-client but the navbar never calls it | ❌ |
| "Explore All Courses" button | LITERAL `GlobalLayout.tsx:234`, `:322` | none | ❌ |
| "Sign in" link + label | LITERAL `href="/signin"` `GlobalLayout.tsx:156`, `:348` | Header editor `signInLabel`/`signInHref` (not read) | ❌ |
| "Create Free Account" link + label | LITERAL `href="/signup"` `GlobalLayout.tsx:159`, `:353` | Header editor `createAccountLabel`/`createAccountHref` (not read) | ❌ |

## Global Footer (`components/layout/GlobalLayout.tsx`)

| Part | Source | Editable from | Status |
|---|---|---|---|
| Logo image | LITERAL `/Asset_logo.png` `GlobalLayout.tsx:460`, `:549` | none read | ❌ |
| "Blog" heading + "Submit a Guest Post" button | LITERAL `GlobalLayout.tsx:464-466`, `:554-556` | none | ❌ |
| Blog post links (3) | `posts` prop (`getPosts limit 3`) w/ LITERAL fallback `GlobalLayout.tsx:469-472` | BlogPost MODEL (`/admin/posts`) | ✅ |
| "About Us" column links | `footerLinks` filtered by `FOOTER_COL_ABOUT`, fallback `DEFAULT_ABOUT` `GlobalLayout.tsx:388-394` | NavItem MODEL (no admin editor located) / Footer editor `col1` (not read) | ⚠️ |
| "Etcetera" column links | same pattern, fallback `DEFAULT_ETC` `GlobalLayout.tsx:395-400` | NavItem / Footer editor `col2` (not read) | ⚠️ |
| "Popular Searches" column heading + links | `footerCities` prop, fallback `DEFAULT_SEARCHES` `GlobalLayout.tsx:401-407` | NavItem `FOOTER_CITIES` / Footer editor `cityLinks` (not read) | ⚠️ |
| Column headings "About Us" / "Etcetera" / "Popular Searches" | LITERAL `GlobalLayout.tsx:482`, `:489`, `:496` | none | ❌ |
| Office cards (city + address + directions) | `offices` prop w/ LITERAL fallbacks `GlobalLayout.tsx:413-417`, `:511`, `:517` | Office MODEL (`/admin/offices`) | ✅ |
| Social icons (Instagram/FB/YouTube/LinkedIn/Twitter/Medium) | LITERAL SVGs, **no `href` at all** `GlobalLayout.tsx:527-532`, `:608-613` | Footer editor `social.*` URLs (not read); SiteSettings `socialLinks` (not read) | ❌ |
| Copyright text | LITERAL `© {copyYear} AnalytixLabs...` `GlobalLayout.tsx:525`, `:623` | Footer editor `copyrightText` (not read) | ❌ |
| Legal links (Privacy / Terms / Sitemap) | LITERAL `GlobalLayout.tsx:535-537`, `:619-621` | none | ❌ |
| Footer tagline | not rendered (Footer editor `tagline` exists, unused) | — | ❌ |

---

## Home / Landing (`/`)

Page: `app/(site)/page.tsx` → `features/landing-page/AlabsLandingPage.tsx` → `features/landing-page/components/AlabsLandingPageDesktop.tsx`. `pageBlocks` = `getPage("home")` (maps to CMS slug `landing`).

| Part | Source | Editable from | Status |
|---|---|---|---|
| Hero "Since 2011" eyebrow | BLOCK `hero_landing.eyebrow` / `hero.tagline` `Desktop:271` | SECTION `hero_landing` (`pages/landing`) | ✅ |
| Hero title prefix / brand / suffix | BLOCK `hero.title.prefix\|brand\|suffix` `Desktop:237-240` (merged from `hero_landing.headline` `**bold**` in `api-client.ts:229-242`) | SECTION `hero_landing` | ✅ |
| Hero subheading | BLOCK `hero.subheading` `Desktop:243` | SECTION `hero_landing.subtitle` | ✅ |
| Hero CTA 1 / CTA 2 (label + url) | BLOCK `hero.cta1`/`hero.cta2` `Desktop:247-252` | SECTION `hero_landing.ctas[]` | ✅ |
| Hero "Rated by N learners" | BLOCK `hero_landing.socialProofText`/`hero.ratedBy` + `stats.ratedBy` `Desktop:263` | SECTION `hero_landing` / SITE_SETTINGS stats | ✅ |
| Hero rating value (stars + "(4.8)") | `stats.rating` / BLOCK `hero.rating` `Desktop:257`, `:266` | SITE_SETTINGS stats `rating` | ✅ |
| Hero student avatars (6 imgs) | LITERAL PNG imports `Desktop:272-301` | none | ❌ |
| Hero illustration (Asset25, GIRL, MAN) | LITERAL PNGs `Desktop:302`, `:717`, `:723` | none | ❌ |
| Lead card 1 "Fresher / Student" (title/subtitle/bestFor) | BLOCK `leadCard1.*` `Desktop:694-696` | none — **no admin editor writes `leadCard1.*`** (not a section type, not in any Page editor) | ❌ |
| Lead card 2 "Experienced Professional" (title/subtitle/bestFor) | BLOCK `leadCard2.*` `Desktop:808-810` | none — no editor writes `leadCard2.*` | ❌ |
| Lead card trust line "Secure & Private / No Spam / Takes 2 mins" | LITERAL `Desktop:726-728` | none | ❌ |
| "Find Your Perfect Learning Path!" | LITERAL `Desktop:732-736` | none | ❌ |
| Category pill marquees (labels + colors) | `categories[i].name`/`.color` MODEL w/ LITERAL fallback `Desktop:316-351` | Category MODEL (`/admin/categories`) | ✅ |
| Hiring-partner metric "15,000+ Candidates" | BLOCK `hiring_partners.metricLabel`/`metricSuffix` + `stats.candidates` `Desktop:853-855` | SECTION `hiring_partners` / SITE_SETTINGS | ✅ |
| Hiring-partner logos (marquee) | LITERAL PNGs `imgBrand…`; only `alt` comes from `hiringPartners[i].name` `Desktop:864-877` | HiringPartner MODEL supplies alt only; **logo images hardcoded** | ⚠️ |
| Certification-partners strip ("SPONSER") | LITERAL `src="/Final_Logo.png"` `Desktop:914` | none | ❌ |
| "Our Courses - 6 Months Job Challenge" headline | BLOCK `courses_challenge.headline` `Desktop:410` | SECTION `courses_challenge` | ✅ |
| Course-category tabs (4 labels) | `categories[0..3].name` w/ LITERAL fallback `Desktop:357-361` | Category MODEL | ✅ |
| Course carousel cards | `featuredCourses` MODEL (+ synthetic fallbacks when < 5) `Desktop:844-849`, `AlabsLandingPage.tsx:392-408` | Course MODEL (`/admin/courses`) | ✅ |
| "Learning Modes" headline | BLOCK `learning_modes.headline` `Desktop:413` | SECTION `learning_modes` | ✅ |
| Learning Modes intro paragraph | BLOCK `learning_modes.intro` `Desktop:422` | SECTION `learning_modes.intro` | ✅ |
| Learning-mode tab names (3) + subtitle | `learningModes[i].name`/`.subtitle` MODEL w/ LITERAL fallback `Desktop:498`, `:502`, `:427-433` | LearningMode MODEL (`/admin/learning-modes`) | ✅ |
| Learning-mode session cards (course/loc/date/time/seats) | LITERAL `MODE_MOCKS` `Desktop:740-777` | none — fully mocked, ignores `learningModes[].sessions` schema | ❌ |
| "AnalytixLabs is a top-ranked..." heading | BLOCK `about.heading` `Desktop:418` | SECTION `institute_intro.headline` (merged `api-client.ts:250`) | ✅ |
| About body paragraph | BLOCK `about.body` `Desktop:437` | SECTION `institute_intro.body` | ✅ |
| About "You can pick a data science course in:" | BLOCK `about.cityIntro` `Desktop:438` | SECTION `institute_intro` — **but `api-client.ts:252` maps `content.cityIntro`, while the section schema has no `cityIntro` field** (`instituteIntroSchema`, `sections/index.ts:84-91`); never written | ❌ |
| About city chips (Online/Bangalore/...) | BLOCK `about.cityChips` `Desktop:441` | none — `about.cityChips` is written by no editor (`institute_intro` only maps `bullets`→`about.cityHighlights`) | ❌ |
| About city highlights bullets (4) | BLOCK `about.cityHighlights` `Desktop:462` | SECTION `institute_intro.bullets` (mapped `api-client.ts:253-255`) | ✅ |
| About "Value Proposition" button → /about | LITERAL label `Desktop:481` (link target hardcoded) | none | ❌ |
| Blue CTA "Unlock Insights. Enroll Now..." | LITERAL `Desktop:419` | CTA banner GLOBAL_BLOCK exists but unused | ❌ |
| "Change the course of your career now" | LITERAL `Desktop:420` | none | ❌ |
| "Contact Us" button (→ /contact) | LITERAL label `Desktop:478` | none | ❌ |
| "Request a Call back" / "Excited? Talk to Expert Counselor" | LITERAL `Desktop:535-538` | Call-back GLOBAL_BLOCK exists but unused | ❌ |
| Call-back form field labels (Name/Email/City/Code/Mobile) | LITERAL `Desktop:545-550` | none | ❌ |
| Call-back form "To gain insights…" helper | LITERAL `Desktop:546` | none | ❌ |
| Call-back city options (Noida/Gurgaon/Bangalore) | LITERAL `CITY_LABELS` `AlabsLandingPage.tsx:15` | none (offices model not used here) | ❌ |
| Call-back map embed | LITERAL `mapEmbedUrl` (Google embed by city string) `AlabsLandingPage.tsx:40-46` | none | ❌ |
| Call-back form submit → `/api/leads` `source:"callback-request"` | functional | Lead MODEL (`/admin/leads`) | ✅ |
| "What Students Say About Us?" headline + subhead | BLOCK `testimonials_carousel.headline`/`.subhead` `Desktop:416`, `:435` | SECTION `testimonials_carousel` | ✅ |
| Testimonial content (photo/name/role/company/quote) | `testimonials[]` MODEL w/ LITERAL fallback `Desktop:645-653` | Testimonial MODEL (`/admin/testimonials`) | ✅ |
| FAQ heading + subhead | BLOCK `faqs.headline`/`.subhead` `FaqFlowSection.tsx:36-39` | SECTION `faqs` | ✅ |
| FAQ items | `faqs` prop MODEL (`getFaqs scope GLOBAL`) | Faq MODEL (`/admin/faqs`) | ✅ |
| Lead modal copy ("Start Your Data Career", etc.) | LITERAL `AlabsLandingPage.tsx:490-494` | none | ❌ |
| Masterclass banner | fetched (`getActiveMasterclass`) and passed as prop but **never rendered** anywhere | Masterclass MODEL (`/admin/masterclass`) exists but output unused | ❌ |

---

## Explore Courses (`/courses`)

Page: `app/(site)/courses/page.tsx` → `features/explore-courses/ExploreCourses.tsx`. `pageBlocks` = `getPage("courses")`.

| Part | Source | Editable from | Status |
|---|---|---|---|
| Hero headline (gradient) | BLOCK `hero_simple.headline_html` `ExploreCourses.tsx:259`, `:377` | SECTION `hero_simple` (`pages/courses`) | ✅ |
| Hero subtitle | BLOCK `hero_simple.subtitle` `ExploreCourses.tsx:261`, `:380` | SECTION `hero_simple.subtitle` | ✅ |
| Hero decorative images (3) | LITERAL PNGs `ExploreCourses.tsx:386-393` | none | ❌ |
| "All Courses" heading | LITERAL `ExploreCourses.tsx:269`, `:404` | none (SECTION `courses_grid.headline` exists but not read) | ❌ |
| Search box placeholder | LITERAL "Search" `ExploreCourses.tsx:408` | none (`courses_grid.searchPlaceholder` unused) | ❌ |
| Category bar (All + category pills) | `categories[]` MODEL `ExploreCourses.tsx:425-433` | Category MODEL | ✅ |
| Course cards (title/img/classes/hours/batches) | `courses[]` MODEL w/ LITERAL fallbacks `ExploreCourses.tsx:448-521` | Course MODEL | ✅ |
| Course card batch fallback labels (Live Online/Global/Weekends/dates) | LITERAL fallbacks `ExploreCourses.tsx:485-487` | Batch MODEL when present; else hardcoded | ⚠️ |
| "Related Articles" heading | LITERAL `ExploreCourses.tsx:528` | none (SECTION `related_articles.headline` exists but not read) | ❌ |
| Article cards (title/cover/excerpt) | `posts[]` MODEL w/ LITERAL fallback `ExploreCourses.tsx:531-577` | BlogPost MODEL | ✅ |
| Article meta "9 min read" / author "AnalytixLabs Editorial" | LITERAL `ExploreCourses.tsx:553`, `:569` | none | ❌ |
| "Explore Blogs →" button | LITERAL `ExploreCourses.tsx:355`, `:581` | none | ❌ |
| CTA banner ("Unlock Insights…", "Change the course…", "Contact Us") | LITERAL `ExploreCourses.tsx:361-363`, `:601-609` | CTA GLOBAL_BLOCK exists but unused | ❌ |
| CTA banner illustration | LITERAL PNG `ExploreCourses.tsx:597` | none | ❌ |

---

## Course Detail / PDP (`/courses/[slug]`)

Page: `app/(site)/courses/[slug]/page.tsx` → `components/pdp/CourseDetailPage.tsx`. Driven mostly by the Course record's `pdp*` JSON fields (Course editor) + `pageBlocks` = `getPage("course/<slug>")`. Note: `features/pdp/Pdp.tsx` is **not used** (no imports).

| Part | Source | Editable from | Status |
|---|---|---|---|
| Hero title / shortDesc / rating / alumni | Course fields `title`, `shortDesc`, `rating`, `alumniCount`/`pdpAlumniText` `CourseDetailPage.tsx:599-612` | Course MODEL | ✅ |
| Hero 4-stat tiles | `course.pdpStatTiles` JSON w/ derived fallback `CourseDetailPage.tsx:200-208` | Course MODEL (pdp JSON) | ✅ |
| Hero "Sign Up for Demo" button | LITERAL `CourseDetailPage.tsx:637` | none | ❌ |
| Sidebar pricing/mode tabs | `course.pricing[]` MODEL `CourseDetailPage.tsx:346-445` | Course pricing MODEL | ✅ |
| Sidebar tax note | `course.pdpTaxNote` w/ LITERAL fallback `CourseDetailPage.tsx:411` | Course MODEL | ✅ |
| Sidebar stat tiles ("Starting price"/"Program duration"/labels) | LITERAL labels; values derived `CourseDetailPage.tsx:364-369` | none (labels) | ⚠️ |
| Sidebar "Includes" list (e.g. "49 downloadable resources", "Access on mobile & TV") | LITERAL `CourseDetailPage.tsx:371-378` | none | ❌ |
| Sidebar buttons ("Download Syllabus"/"Add to Wishlist"/"Sign up for Free Demo") | LITERAL labels `CourseDetailPage.tsx:460-530` | brochureUrl link is editable; labels hardcoded | ⚠️ |
| Sidebar featured testimonial fallback (Rahul Kapoor) | `pdpTestimonialStrip[0]` MODEL w/ LITERAL fallback `CourseDetailPage.tsx:355-362` | Course MODEL (pdp JSON) | ✅ |
| Sticky anchor nav labels | LITERAL `CourseDetailPage.tsx:669-677` | none | ❌ |
| Overview body | BLOCK `pdp_overview.body` or `course.longDesc` `CourseDetailPage.tsx:717` | SECTION `pdp_overview` / Course MODEL | ✅ |
| Overview "Overview" heading + "Read more" | LITERAL `CourseDetailPage.tsx:726`, `:743` | none | ❌ |
| Curriculum heading/subheading | `course.pdpCurriculumHeading`/`Subheading` w/ LITERAL fallback `CourseDetailPage.tsx:786-789` | Course MODEL | ✅ |
| Curriculum modules + lessons | `course.modules[]` MODEL | Course MODEL | ✅ |
| Capstone Projects section title + intro | LITERAL "Data Science Capstone Projects…" `CourseDetailPage.tsx:949-953` | none | ❌ |
| Capstone project items | `pdpProjectDomains`/`projects` MODEL `CourseDetailPage.tsx:930-933` | Course MODEL | ✅ |
| Tools section title + intro | LITERAL "Data Science Tools & Technologies" `CourseDetailPage.tsx:1002-1006` | none | ❌ |
| Tools items | `course.tools[]` MODEL | Course MODEL | ✅ |
| "Who Should Join" title | LITERAL `CourseDetailPage.tsx:1045` | none | ❌ |
| Who-should-join items | `pdpWhoShouldJoinData`/`whoShouldJoin` MODEL | Course MODEL | ✅ |
| "Job Roles You Can Pursue" title + intro | LITERAL `CourseDetailPage.tsx:1072-1074` | none | ❌ |
| Job role chips | `pdpJobRolesData`/`jobRoles` MODEL | Course MODEL | ✅ |
| "Key Skills You'll Gain" title | LITERAL `CourseDetailPage.tsx:1100` | none | ❌ |
| Key skill items | `pdpKeySkillsData`/`keySkills` MODEL | Course MODEL | ✅ |
| "Learning Modes" title | LITERAL `CourseDetailPage.tsx:1123` | none | ❌ |
| Learning-mode items | `pdpLearningModesData` MODEL | Course MODEL | ✅ |
| "Course Fees" title + intro | LITERAL `CourseDetailPage.tsx:1154-1156` | none | ❌ |
| Fee cards | `course.pricing[]` MODEL | Course MODEL | ✅ |
| Certification heading/body/images | `pdpCertificationData`/`certifications` MODEL w/ LITERAL fallback `CourseDetailPage.tsx:1208-1214` | Course MODEL (+ SECTION `pdp_certification` exists; component reads Course JSON, not section) | ⚠️ |
| Career support title | LITERAL "Career Support" `CourseDetailPage.tsx:1260` | none | ❌ |
| Career support intro/features/partners | `pdpCareerSupport` MODEL | Course MODEL | ✅ |
| "How to Apply" title | LITERAL `CourseDetailPage.tsx:1320` | none | ❌ |
| How-to-apply steps | `pdpHowToApply` MODEL (SECTION `pdp_how_to_apply` exists but component reads Course JSON) | Course MODEL | ⚠️ |
| Testimonial strip title "What Our Learners Say" | LITERAL `CourseDetailPage.tsx:883` | none | ❌ |
| Testimonial strip items | `pdpTestimonialStrip` MODEL | Course MODEL | ✅ |
| "Student Success Stories" title | LITERAL `CourseDetailPage.tsx:1346` | none | ❌ |
| Student stories | `pdpStudentStories` MODEL | Course MODEL | ✅ |
| "Related Articles" title | LITERAL `CourseDetailPage.tsx:1392` | none | ❌ |
| Related articles | `pdpRelatedArticles` MODEL | Course MODEL | ✅ |
| CTA banner (headline/sub/cta) | `pdpCtaBanner` MODEL w/ LITERAL fallback `CourseDetailPage.tsx:222-224` | Course MODEL | ✅ |
| Contact block heading/desc | `pdpContactBlock` MODEL w/ LITERAL fallback `CourseDetailPage.tsx:225-227` | Course MODEL | ✅ |
| Contact form (fields, city options, "Request Callback") | LITERAL field labels/options `CourseDetailPage.tsx:1521-1565` | none (posts `source:"pdp-contact"` → Lead MODEL) | ⚠️ |
| FAQ "Frequently Asked Questions" title | LITERAL `CourseDetailPage.tsx:1585` | none | ❌ |
| FAQ items | `pdpFaqsData`/`course.faqs` MODEL | Course MODEL | ✅ |
| Batches table title + column headers | LITERAL `CourseDetailPage.tsx:1626`, `:1631-1635` | none | ❌ |
| Batch rows | `course.batches[]` MODEL | Batch MODEL | ✅ |
| Mobile sticky CTA "Sign Up for Demo" | LITERAL `CourseDetailPage.tsx:652` | none | ❌ |

---

## About (`/about`)

Page: `app/(site)/about/page.tsx` → `features/about-us/AboutUs.tsx`. `pageBlocks` = `getPage("about")`.

| Part | Source | Editable from | Status |
|---|---|---|---|
| Hero headline (gradient) | BLOCK `about_hero.headline_html` `AboutUs.tsx:745`, `:844` | SECTION `about_hero` (`pages/about`) | ✅ |
| Hero subtitle | BLOCK `about_hero.subtitle` `AboutUs.tsx:747`, `:916` | SECTION `about_hero.subtitle` | ✅ |
| "Why Trust AnalytixLabs?" heading | LITERAL `AboutUs.tsx:770`, `:899-900` | none | ❌ |
| "Deep Industry Experience That Shapes How We Teach" + Accenture/McKinsey paragraph | LITERAL `AboutUs.tsx:901`, `:912` | none | ❌ |
| Stats (candidates/training hours/companies/avg rating) | SITE_SETTINGS `stats.*` w/ LITERAL fallback `AboutUs.tsx:921-934` | SITE_SETTINGS (`/admin/site-settings`) | ✅ |
| "What Students Say About Us?" heading | LITERAL `AboutUs.tsx:790`, `:953` | none | ❌ |
| Testimonials | `testimonials[]` MODEL w/ LITERAL fallback `AboutUs.tsx:1230` | Testimonial MODEL | ✅ |
| "Frequently Asked Questions" heading | LITERAL `AboutUs.tsx:954` | none | ❌ |
| FAQ items | `faqs[]` MODEL | Faq MODEL | ✅ |
| All other body copy / illustrations | LITERAL throughout | none | ❌ |

---

## Why Us (`/why-us`)

Page: `app/(site)/why-us/page.tsx`. **No API calls at all** — 100% hardcoded constants.

| Part | Source | Editable from | Status |
|---|---|---|---|
| Hero title + lede + 2 CTAs | LITERAL (`PageHero` props) `why-us/page.tsx:108-119` | none | ❌ |
| Stats strip (`WHY_OUTCOMES`) | LITERAL `why-us/page.tsx:51-56` | none | ❌ |
| Pillars (`WHY_PILLARS`, 6) | LITERAL `why-us/page.tsx:12-49` | none | ❌ |
| Comparison table (`WHY_COMPARE`) | LITERAL `why-us/page.tsx:58-65` | none | ❌ |
| How-it-works (`WHY_HOW`) | LITERAL `why-us/page.tsx:72-77` | none | ❌ |
| Hiring partners (`WHY_PARTNERS`, 12) | LITERAL `why-us/page.tsx:67-70` | HiringPartner MODEL exists but unused | ❌ |
| Testimonials (`WHY_TESTIMONIALS`) | LITERAL `why-us/page.tsx:79-83` | Testimonial MODEL exists but unused | ❌ |
| CTA banner | LITERAL (`CTABanner` propless) | none | ❌ |

---

## For Corporates (`/for-corporates`)

Page: `app/(site)/for-corporates/page.tsx` → `features/corporate/ForCorporate.tsx`. **Does not even fetch `getPage`; `block()` is used 0 times.** No `corporate`/`for-corporates` section types in the registry. Entire page body is LITERAL.

| Part | Source | Editable from | Status |
|---|---|---|---|
| Hero, all headings, body copy, stats, feature cards, program lists, CTAs, images | LITERAL throughout `ForCorporate.tsx` | none | ❌ |
| Header/footer | shared GlobalLayout | see Global tables | ⚠️ |

---

## Contact (`/contact`)

Page: `app/(site)/contact/page.tsx` → `features/contact/Contact-12-1208.tsx`. `pageBlocks` = `getPage("contact")`.

| Part | Source | Editable from | Status |
|---|---|---|---|
| Hero headline | BLOCK `contact_hero.headline_html` `Contact-12-1208.tsx:578`, `:648` | SECTION `contact_hero` | ✅ |
| Hero subtitle | BLOCK `contact_hero.subtitle` `Contact-12-1208.tsx:580`, `:657` | SECTION `contact_hero.subtitle` | ✅ |
| Contact email | `siteSettings.contactEmail` w/ LITERAL fallback `Contact-12-1208.tsx:589`, `:668` | SITE_SETTINGS | ✅ |
| Contact phone | `siteSettings.contactPhone` w/ LITERAL fallback `Contact-12-1208.tsx:593`, `:669`, `:439` | SITE_SETTINGS | ✅ |
| Office address cards | `offices[]` MODEL w/ LITERAL fallback `Contact-12-1208.tsx:618-627`, `:756-757` | Office MODEL | ✅ |
| Office city fallbacks (Noida/Gurgaon/Bangalore + addresses) | LITERAL fallback when offices empty `Contact-12-1208.tsx:621-623` | Office MODEL when seeded | ⚠️ |
| Callback form fields/labels | LITERAL (`ContactCallbackForm.tsx`) | none (posts to `/api/leads` → Lead MODEL) | ⚠️ |
| Map embeds | LITERAL Google embed by city | none | ❌ |

---

## Simpler / static pages

| Route | Page file | Dynamic data? | Status |
|---|---|---|---|
| `/faculty` | `faculty/page.tsx` | None — `FACULTY_MEMBERS`, `FACULTY_VALUES`, `FACULTY_CRITERIA` LITERAL (`:12-35`). TeamMember MODEL + `/admin/team` exist but unused | ❌ |
| `/placements` | `placements/page.tsx` | None — `PLACEMENT_STATS`, `RECENT_PLACEMENTS`, `HIRING_PARTNERS`, `PLACEMENT_PROCESS` LITERAL (`:12-43`). HiringPartner MODEL unused | ❌ |
| `/reviews` | `reviews/page.tsx` | None — `REVIEW_STATS`, `REVIEWS` LITERAL (`:7-25`). Testimonial MODEL unused | ❌ |
| `/colleges`, `/free-resources`, `/offers`, `/legal`, `/system-requirements`, `/submit-guest-post`, `/thank-you` | resp. page.tsx | None (static marketing/legal copy) | ❌ |
| `/batches` | `batches/page.tsx` → `UpcomingBatches.tsx` | `getBatches()` + `getCategories()` | ✅ |
| Shared `PageHero` / `StatsStrip` / `CTABanner` (`components/shared/*`) | — | Propless `CTABanner` is fully LITERAL (`CTABanner.tsx:4-19`); `PageHero`/`StatsStrip` take props but callers pass literals | ❌ |

---

# GAPS TO FIX (prioritized)

### P0 — Wire the disconnected Global editors (one root cause, site-wide impact)

The admin already has the editors and data; the components just don't read them.

1. **Header logo** — `components/layout/GlobalLayout.tsx:108,171,253` hardcode `src="/Asset_logo.png"`. Read `GlobalBlock("header").logoUrl` (or `SiteSettings.logoUrl`). Surface: `app/(admin)/admin/global/header` (already writes `logoUrl`).
2. **Mega-menu** — `GlobalLayout.tsx:23-60` `MEGA_MENU_CATEGORIES` is hardcoded. Read `getNav("MEGA_MENU")` (already available in `api-client.ts`) or `GlobalBlock("header").megaMenuCategories`. Surface: Header editor / NavItem MEGA_MENU.
3. **Sign in / Create Free Account CTAs** — `GlobalLayout.tsx:156,159,348,353`. Read `GlobalBlock("header").signInLabel/signInHref/createAccountLabel/createAccountHref`.
4. **Footer social links** — `GlobalLayout.tsx:527-532,608-613` render icons with no `href`. Wrap in `<a>` reading `GlobalBlock("footer").social.*` (or `SiteSettings.socialLinks`). Surface: `app/(admin)/admin/global/footer`.
5. **Footer copyright + legal links** — `GlobalLayout.tsx:525,535-537,619-623` hardcoded. Read `GlobalBlock("footer").copyrightText` and add editable legal-links array.
6. **Footer column headings** ("About Us"/"Etcetera"/"Popular Searches") — `GlobalLayout.tsx:482,489,496` hardcoded; add to footer block.

### P1 — Landing page lead cards & call-back/CTA copy (blocks read but nothing writes them)

7. **Lead card 1/2 copy** — `Desktop:694-696,808-810` read `leadCard1.*`/`leadCard2.*` but no editor writes those keys. Add fields to the `landing` Page editor or a new section type.
8. **Landing call-back form labels + heading** — `Desktop:535-550` ("Request a Call back", "Excited?…", Name/Email/City/Code/Mobile, helper text) hardcoded. Wire to `GlobalBlock("call-back")` (editor exists, unused).
9. **Landing blue CTA banner** ("Unlock Insights…", "Change the course…", "Contact Us") — `Desktop:419,420,478` hardcoded. Wire to `GlobalBlock("cta-banner")` (editor exists, unused).
10. **About-block key mismatches** — `about.cityIntro` (`Desktop:438`) and `about.cityChips` (`Desktop:441`) are read but `institute_intro` section (`lib/sections/index.ts:84-91`) has no `cityIntro`/`cityChips` fields; `api-client.ts:252` references a non-existent `content.cityIntro`. Add those fields to `instituteIntroSchema` + the merge in `getPage()`.
11. **Learning-mode session cards** — `Desktop:740-777` `MODE_MOCKS` ignore the `learningModes[].sessions` schema (`sections/index.ts:74-81`) that the admin can fill. Render from `learningModes[activeLearningMode].sessions`.
12. **Masterclass banner** — fetched (`getActiveMasterclass`) but never rendered. Either render it on the landing page or remove the dead `/admin/masterclass` editor.

### P1 — PDP & Explore section titles (read no block)

13. **PDP section titles** — `CourseDetailPage.tsx:883,949,1002,1045,1072,1100,1123,1154,1260,1320,1346,1392,1585,1626` (Capstone/Tools/Who Should Join/Job Roles/Key Skills/Learning Modes/Course Fees/Career Support/How to Apply/Testimonials/Student Stories/Related Articles/FAQ/Batches headings + intros) hardcoded. Add to per-course `pdp*` JSON or the PDP section editors (which exist but the component reads Course JSON, not the section — reconcile the two).
14. **PDP sidebar "Includes" list** — `CourseDetailPage.tsx:371-378` ("49 downloadable resources", etc.) hardcoded. Drive from `pdpCurriculumSummary.includes`.
15. **Explore Courses headings** — `ExploreCourses.tsx:269/404` ("All Courses"), `:528` ("Related Articles"), `:408` search placeholder hardcoded though `courses_grid`/`related_articles` SECTION types already define these fields; wire them.
16. **Explore CTA banner** — `ExploreCourses.tsx:361-363,601-609` hardcoded; wire to `GlobalBlock("cta-banner")`.

### P2 — Whole pages bypassing existing models

17. **`/why-us`** (`why-us/page.tsx`) — entirely hardcoded; pillars/comparison/how-it-works have no model, but `WHY_PARTNERS`/`WHY_TESTIMONIALS` duplicate HiringPartner/Testimonial models. Add a `why-us` Page/Section editor and wire partners/testimonials to existing models.
18. **`/for-corporates`** (`for-corporates/page.tsx`, `ForCorporate.tsx`) — fully hardcoded, doesn't even fetch `getPage`. Add `for-corporates` to the section registry + fetch `getPage("for-corporates")`.
19. **`/faculty`** — `FACULTY_MEMBERS` (`faculty/page.tsx:12-21`) hardcoded; wire to TeamMember MODEL (`/admin/team`).
20. **`/placements`** — `RECENT_PLACEMENTS`/`HIRING_PARTNERS` (`placements/page.tsx:19-30`) hardcoded; wire hiring partners to HiringPartner MODEL.
21. **`/reviews`** — `REVIEWS`/`REVIEW_STATS` (`reviews/page.tsx:7-25`) hardcoded; wire to Testimonial MODEL.
22. **Shared `CTABanner`** (`components/shared/CTABanner.tsx:4-19`) — propless literal used by faculty/why-us/placements; make it read `GlobalBlock("cta-banner")`.

### P2 — Image assets (design fallbacks never overridable)

23. Hiring-partner logos (`Desktop:864-877`), certification strip `/Final_Logo.png` (`Desktop:914`), hero/illustration PNGs, Explore/Corporate illustrations — all hardcoded PNG imports. Where a model field exists (e.g. `HiringPartner.logoUrl`) wire it; otherwise add an UploadedAsset/SiteSettings field.
