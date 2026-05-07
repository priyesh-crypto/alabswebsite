# PLAN.md — AnalytixLabs Dynamic Rebuild (Phase 0)

> Produced per `CLAUDE.md` §11 Phase 0. **No application code has been written.** This plan maps every dynamic content concept on every page to a Prisma model from `CLAUDE.md` §6, calls out gaps where a new model or field is needed, and lists open questions.
>
> See [ASSUMPTIONS.md](ASSUMPTIONS.md) for important context — including a **major state mismatch** between what the kickoff prompt assumed and what is actually in the repo today.

---

## 0. Scope and ground rules

- **The Golden Rule** (`CLAUDE.md` §2) governs everything below: layouts in [src/imports/](src/imports/) are the source of truth, every dynamic conversion follows `CLAUDE.md` §8 (replace strings/images/links only; preserve absolute positioning, 1440px width, classes, SVG paths, and surrounding markup).
- "Dynamic content concept" = a hardcoded string, number, image, or link inside a Figma export that should come from the database.
- Where the original Figma export hardcodes N visual slots (e.g. 4 course cards), the dynamic version still renders **N explicit slots** indexing into the result array — never a `.map()` over a flex container (`CLAUDE.md` §8 step 7).

---

## 1. Pages in scope

| Route | Page wrapper today | Figma export it composes | Approx height |
|---|---|---|---|
| `/` | [src/app/pages/Home.tsx](src/app/pages/Home.tsx) | [AlabsLandingPage.tsx](src/imports/AlabsLandingPage/AlabsLandingPage.tsx) | 8343px |
| `/courses` | [src/app/pages/Courses.tsx](src/app/pages/Courses.tsx) | [ExploreCourses.tsx](src/imports/ExploreCourses/ExploreCourses.tsx) | TBD |
| `/courses/[slug]` | [src/app/pages/CourseDetail.tsx](src/app/pages/CourseDetail.tsx) | [Pdp.tsx](src/imports/Pdp/Pdp.tsx) | TBD |
| `/contact` | [src/app/pages/Contact.tsx](src/app/pages/Contact.tsx) | [Contact-12-1208.tsx](src/imports/Contact-2/Contact-12-1208.tsx) **(canonical, new)** — supersedes [Contact-9-325.tsx](src/imports/Contact-1/Contact-9-325.tsx) | TBD |
| `/about` | [src/app/pages/About.tsx](src/app/pages/About.tsx) | [AboutUs.tsx](src/imports/AboutUs/AboutUs.tsx) **(new)** | TBD |
| `/for-corporates` | new route (currently `/services` in Vite-era wrapper) | [ForCorporate.tsx](src/imports/ForCorporate/ForCorporate.tsx) **(new)** | TBD |
| `/why-us` (optional) | TBD — top-nav has "Why Us" item; no dedicated Figma export | *(use `Page` blocks)* | n/a |
| `/404` | [src/app/pages/NotFound.tsx](src/app/pages/NotFound.tsx) | *(no Figma export)* | n/a |

The Figma-exported pages — Home, Courses, Course Detail, Contact (new variant), About, For Corporates — are the ones the Golden Rule binds. The old [Contact-9-325.tsx](src/imports/Contact-1/Contact-9-325.tsx) is **assumed superseded** by [Contact-12-1208.tsx](src/imports/Contact-2/Contact-12-1208.tsx) — see [ASSUMPTIONS.md](ASSUMPTIONS.md) §13. Why Us / 404 are plain pages backed by the `Page` model with `blocks: Json` per `CLAUDE.md` §6.

---

## 2. Cross-page concepts (header + footer)

These appear identically on every Figma-exported page. Convert once, reuse via shared header/footer components that the Figma exports already render inline (do not lift them out — wrap the existing markup in props).

### 2.1 Top navigation

| Hardcoded value | Model | Notes |
|---|---|---|
| `Upcoming Batches`, `Explore Courses`, `Why Us`, `For Corporates`, `Blog`, `Contact Us`, `Sign in`, `Create Free Account` | `NavItem` where `group=TOP_NAV` | "Sign In" URL points to external LMS — store as `NavItem.url`, no auth logic |
| Phone number `+91 9555219007` shown in top bar | `SiteSettings.contactPhone` | |
| AnalytixLabs logo (`imgAlabsLogo` / `imgImage14`) | `SiteSettings.logoUrl` | |

### 2.2 Mega menu under "Explore Courses"

| Hardcoded value | Model |
|---|---|
| Category headers (`Artificial Intelligence`, `Business & Data Analytics`, `Data Science`, `Specialization Modules`) | `Category` |
| Course links inside each category (e.g. `Agentic AI`, `Full Stack AI`, `Data Science`, `Data Visualization`, `Data Analytics`, `Bootcamp`, `Business Analytics`) | `Course` (filtered by `Category.slug`) |

The mega-menu structure is just `Category → Course[]`, served by `GET /api/categories` joined with `GET /api/courses` (or a single `GET /api/nav?group=MEGA_MENU` that joins them). Either is fine.

### 2.3 Footer

| Hardcoded value | Model | Notes |
|---|---|---|
| Column 1: `Why Us`, `Courses`, `About Faculty`, `Contact Us`, `AnalytixLabs Placements`, `System Requirements` | `NavItem` where `group=FOOTER_LINKS` | Subgroup by `parentId` per column |
| Column 2 (Etcetera): `System Requirements`, `Free Resources`, `Success Stories`, `Colleges Universities Training Courses` | `NavItem` where `group=FOOTER_LINKS` | |
| Column 3 (Blog): "Submit a Guest Post" + 3 latest posts | `NavItem` for "Submit a Guest Post"; latest posts fetched live from `BlogPost` `ORDER BY publishedAt DESC LIMIT 3` | "3 latest posts" is dynamic per render, not a stored nav item |
| Column 4 (Popular Searches): 13 city-specific course links (`Data Analyst Training Course In Delhi`, …) | `NavItem` where `group=FOOTER_CITIES` | |
| Copyright `© 2026 AnalytixLabs. All Rights Reserved.` | Derive from year + `SiteSettings` | Don't store the year; render `new Date().getFullYear()` |
| `Privacy Policy`, `Terms and Conditions`, `Sitemap` | `NavItem` where `group=FOOTER_LINKS` (legal subgroup) | |
| 3 office address blocks (Noida, Gurgaon, Bangalore) with phone, hours, "Get Directions →" | **NEW MODEL — `Office`** (see §6.1) | `SiteSettings.address` is too narrow |
| Social icons: LinkedIn, Facebook, YouTube, Twitter, Medium, Instagram | `SiteSettings.socialLinks` (Json) | Already in schema |

---

## 3. Home (`/`) — `AlabsLandingPage.tsx`

### 3.1 Hero

| Concept | Model field |
|---|---|
| Tag `Since 2011` | `Page(slug='home').blocks` key `hero.tagline` |
| Heading `Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects.` | `Page(slug='home').blocks` key `hero.heading` |
| CTA 1 label `Explore Courses` + link | `Page(slug='home').blocks` key `hero.cta1` |
| CTA 2 label `Book Free Career Consultation` + link | `Page(slug='home').blocks` key `hero.cta2` |
| Rating block `★★★★★ (4.8)` | `Page(slug='home').blocks` key `hero.rating` |
| Hero background/people image (`imgStudents`, `imgManRed`, `imgGirlSmiling`, etc.) | `Page(slug='home').blocks` key `hero.image*` (image-typed blocks) |

### 3.2 Featured course cards

The Figma export renders course cards with **2 visible cards × 3 batch rows each** in the home variant. Per §8 step 7, render explicit slots (card[0], card[1], …) into the array.

| Concept | Model |
|---|---|
| Course title (`Data Analytics`, `Business Analytics`) | `Course.title` |
| Classes count (`46 Classes`) | `Course.classesCount` |
| Hours (`500+ Hours`) | `Course.hoursCount` |
| Experience badge | Derive from `Course.durationMonths` or store as `Course.experienceLabel` *(NEW field — see §6.2)* |
| Locations per card (`Noida`, `Bangalore`, `Gurgaon`) | `Batch.location` |
| Start dates (`20 April`, `13 April`, `04 May`) | `Batch.startDate` |
| `10 Seats left`, `08 Seats left` | `Batch.seatsLeft` |
| Schedule labels (`Weekend`, `Weekday`, `Self-Paced`) | `Batch.schedule` |
| Card thumbnail (`imgCourseImg`, `imgCourseImg1`) | `Course.thumbnailUrl` |
| `Explore Course` CTA → course detail | `Course.slug` → `/courses/{slug}` |

### 3.3 Course-category strip ("Agentic AI / Full Stack AI / Data Science / …")

8 category pills.

| Concept | Model |
|---|---|
| Pill labels | `Category.name` (filter `isActive=true`, order by `Category.order`) |
| Pill links | `Category.slug` → `/courses?category={slug}` |

### 3.4 "Why Us" feature list (4 ticked items)

`Data Science & Analytics`, `Artificial intelligence (AI)`, `Full Stack AI`, `Agentic AI Course`.

| Concept | Model |
|---|---|
| 4 feature labels | `Page(slug='home').blocks` key `whyUs.items` (list type) |

### 3.5 Learning Modes (6 mode cards w/ icons)

Online / Location / Schedule combinations.

| Concept | Model |
|---|---|
| Mode label, icon, location list, schedule | `Page(slug='home').blocks` key `learningModes.items` (list type) — each item `{label, iconKey, locations[], schedule}` |

Iconify keys (`wpf:online`, `mdi:location`, etc.) are layout — keep them hardcoded in the JSX. The strings beside them are content.

### 3.6 Stats / counters

| Concept | Model |
|---|---|
| `10+ Years`, `60K+ Students`, `30+ Trainers`, etc. | `SiteSettings.stats` *(NEW field — Json)* — see §6.2 |

### 3.7 Testimonials section

| Concept | Model |
|---|---|
| Name, role, company, photo, quote, 5-star rating | `Testimonial.*` |

Render as N explicit slots indexing into `testimonials[]`.

### 3.8 Hiring partners / "In Partnership with"

6 logos.

| Concept | Model |
|---|---|
| Logo image | `HiringPartner.logoUrl`, ordered by `HiringPartner.order` |

### 3.9 FAQ section

| Concept | Model |
|---|---|
| Question / answer pairs | `Faq` where `scope='GLOBAL'` |

### 3.10 Free masterclass / lead-gen banner

| Concept | Model |
|---|---|
| Banner image, headline, register URL | `Masterclass` (latest active row, fallback to hidden if none) |

---

## 4. Courses listing (`/courses`) — `ExploreCourses.tsx`

### 4.1 Page header

| Concept | Model |
|---|---|
| Heading `AI & Data Science` | `Page(slug='courses').blocks` key `hero.heading` |
| Filter pills `Agentic AI Course`, `Data Science`, `Full Stack AI` | `Category.name` (or hardcoded subset of categories) |

### 4.2 Course grid

Same field set as §3.2 (Course + Batch). The page renders 3 explicit demo cards in the export — when seeded, render N slots that match the Figma's grid count exactly. **Open question:** how many slots does the live grid have? See §7.

### 4.3 Footer

Per §2.3.

---

## 5. Course detail (`/courses/[slug]`) — `Pdp.tsx`

This page is content-heavy and almost every section is dynamic.

| Section header (Figma) | Model |
|---|---|
| Hero — `Data Science Course with Certification & Placement` + subheading | `Course.title` + `Course.shortDesc` |
| About-the-course paragraph (`AnalytixLabs' Advanced Certification…`) | `Course.longDesc` (sanitize w/ DOMPurify) |
| Job roles strip (`Data Scientist`, `Data Analyst`, …) | **NEW field — `Course.jobRoles: String[]`** *(see §6.2)* |
| `Data Science Course Curriculum` — modules → lessons | `CourseModule` + `Lesson` |
| `Data Science Capstone Projects & Assignments` | `Project` |
| `Data Science Tools & Technologies` (Python for Data Analysis, Data Visualization, …) | `Tool` (M:N via `CourseTools`) |
| `Data Science Key skills you'll gain` | **NEW field — `Course.keySkills: String[]`** *(see §6.2)* |
| `Data Science Learning Modes` — Online + 3 office cards | `Office` *(new — §6.1)* + `Page(slug='pdp').blocks` for "Online" intro copy |
| `Data Science Course Fees` — 3 EMI columns | `Course.price`, `Course.discountedPrice`, `Course.emiPerMonth` + `Page(slug='pdp').blocks` for fee narrative |
| `Data Science Certification` (NASSCOM FutureSkills Prime…) | `Certification` |
| `Data Science Career Support` paragraph | **NEW field — `Course.careerSupportText`** *(see §6.2)* |
| Pricing-note paragraph (`Seeking hands-on-time payment…`) | `Page(slug='pdp').blocks` key `fees.note` (shared across all PDPs) |
| Course-specific FAQs | `Faq` where `courseId={course.id}` |
| `Brochure` download CTA | `Course.brochureUrl` |
| `Request Callback` / `Download Brochure` CTAs | `POST /api/leads` with `source` |

---

## 6. Contact (`/contact`) — `Contact-12-1208.tsx` (new canonical variant)

The old [Contact-9-325.tsx](src/imports/Contact-1/Contact-9-325.tsx) had three office cards and a basic field set. The new [Contact-12-1208.tsx](src/imports/Contact-2/Contact-12-1208.tsx) is a **redesigned** contact page with a hero, a split "Get in touch" left panel + "Request a Call back" right form, three pastel-tinted office cards with embedded map images, and a closing "Unlock Insights. Enroll Now." CTA banner. Treat the new file as canonical (see [ASSUMPTIONS.md](ASSUMPTIONS.md) §13).

### 6.1 Hero

| Concept | Model |
|---|---|
| Heading `CONTACT US` | `Page(slug='contact').blocks` key `hero.heading` |
| Subtext `Analytixlabs is here to support you at every step of your journey.` | `Page(slug='contact').blocks` key `hero.subheading` |

### 6.2 Left "Get in touch" panel (teal background)

| Concept | Model |
|---|---|
| Panel heading `Get in touch` | `Page(slug='contact').blocks` key `getInTouch.heading` |
| Panel description (`Get in touch with our team to explore solutions, training, or partnerships—we're here to help.`) | `Page(slug='contact').blocks` key `getInTouch.description` |
| Email label + value (`info@analytixlabs.co.in`) | `SiteSettings.contactEmail` |
| Phone label + value (`+91 95552 19007`) | `SiteSettings.contactPhone` |
| Timing label + value (`10:00 AM TO 07:00 PM`) | `SiteSettings.businessHours` *(NEW field — see §9.2)* |

### 6.3 Right "Request a Call back" form

| Concept | Model |
|---|---|
| Form heading `Request a Call back` | `Page(slug='contact').blocks` key `form.heading` |
| Field: `Name` (placeholder `Your Name`) | `Page(slug='contact').blocks` key `form.fields[]` |
| Field: `Code` (country code) + `Mobile` (side-by-side row) | same |
| Field: `Email` (placeholder `Your Email`) | same |
| Field: `Select City` (dropdown — options seed from `Office.city`) | same |
| Button (green): `Sign up→` | `Page(slug='contact').blocks` key `form.signupCta` (or wire to a separate "newsletter" action) |
| Button (yellow): `Send` | submit → `POST /api/leads` with `source='callback-request'` |

`POST /api/leads` body shape becomes `{name, countryCode, phone, email, city, source}`. Add `countryCode` and `city` columns to `Lead` *(see §9.2)*.

### 6.4 Three office cards (full-width, pastel tints)

| Concept | Model |
|---|---|
| Card backgrounds (mint `#d2faf0`, yellow `#fffad2`, pink `#fff2fa`) | Layout — keep hardcoded |
| City name (`Noida`, `Gurgaon`, `Bengaluru`) | `Office.city` |
| Address text | `Office.addressLine1` (+`addressLine2`) |
| Phone (`+91 95552 19007`, identical for all 3) | `Office.phone` (allows per-city override) |
| Hours (`10:00 AM to 07:00 PM`, identical for all 3) | `Office.hours` |
| Map image | `Office.mapImageUrl` |

Note: the new variant labels Bangalore as **`Bengaluru`**. The old contact page and footers say `Bangalore`. Pick one and seed consistently — flagged in [ASSUMPTIONS.md](ASSUMPTIONS.md) §14.

### 6.5 Closing CTA banner

| Concept | Model |
|---|---|
| Heading `Unlock Insights. Enroll Now. Transform Tomorrow.` | `Page(slug='contact').blocks` key `closingCta.heading` |
| Subtext `Change the course of your career now` | `Page(slug='contact').blocks` key `closingCta.subheading` |
| Button `Contact Us` + link | `Page(slug='contact').blocks` key `closingCta.button` |

---

## 6A. About (`/about`) — `AboutUs.tsx` (new)

### 6A.1 Hero

| Concept | Model |
|---|---|
| Heading `Others focus on completing a syllabus. We focus on building a career.` (gradient on "building a career") | `Page(slug='about').blocks` key `hero.heading` (with `hero.headingHighlight` for the gradient portion) |
| Trust strip: `Rated by 5000+ learners` + 4.8 stars | `Page(slug='about').blocks` key `hero.trustStrip` |

### 6A.2 "Why Trust AnalytixLabs?" — 6-card grid

| Concept | Model |
|---|---|
| Section heading `Why Trust AnalytixLabs?` | `Page(slug='about').blocks` key `whyTrust.heading` |
| 6 cards: icon + title + description (e.g. `Job Guarantee Assurance`, `Placement Readiness Program (PRP)`, `Structured Post-Class Mentorship`, `Industry-Relevant, Hands-On Curriculum`, `Faculty With Real Industry Experience`, `Flexible Learning + Continuous Access`) | `Page(slug='about').blocks` key `whyTrust.items[]` (list type, each `{iconKey, title, description}`) |

### 6A.3 "Deep Industry Experience That Shapes How We Teach"

| Concept | Model |
|---|---|
| Section heading | `Page(slug='about').blocks` key `industryExperience.heading` |
| Multi-paragraph narrative | `Page(slug='about').blocks` key `industryExperience.body` (longtext) |
| Companies list (`Accenture`, `American Express`, `AbsolutData`, `Axtria`, `Bank of America`, `McKinsey`) | `Page(slug='about').blocks` key `industryExperience.companies[]` (list of `{name, logoUrl?}`) |

### 6A.4 Stats strip

| Concept | Model |
|---|---|
| `15,000+ Candidates`, `130,000+ Training Hours`, `50+ Companies`, `9.7+ Avg Rating` | `SiteSettings.stats` (Json) — same field as the home stats; widen the schema to `{candidates, trainingHours, companies, avgRating, years, students, trainers}` |

### 6A.5 Testimonials

| Concept | Model |
|---|---|
| Section heading `What Students Say About Us?` | `Page(slug='about').blocks` key `testimonials.heading` |
| Cards (visible: `Piyush Ganar`, `Class of 2012 IIM Ahmedabad / Assistant General Manager Sales Marketing, Findability Sciences`, full quote, 5★) | `Testimonial` rows — render as N explicit slots |

### 6A.6 FAQ section

| Concept | Model |
|---|---|
| Section heading `Frequently Asked Questions` | `Page(slug='about').blocks` key `faqs.heading` |
| 8 visible Q/A items (`Does the institute offer any discounts?`, `What is the best course to get started with data analytics?`, …) | `Faq` rows where `scope='ABOUT'` (or reuse `'GLOBAL'` — see [ASSUMPTIONS.md](ASSUMPTIONS.md) §15) |

### 6A.7 "Still have questions?" CTA

| Concept | Model |
|---|---|
| Heading `Still have questions?` | `Page(slug='about').blocks` key `closingCta.heading` |
| Description (`Not sure which course is right for you? Talk to our program advisors…`) | `Page(slug='about').blocks` key `closingCta.body` |
| Button `Call Us` | `Page(slug='about').blocks` key `closingCta.button` (link to `tel:+919555219007` from `SiteSettings.contactPhone`) |

---

## 6B. For Corporates (`/for-corporates`) — `ForCorporate.tsx` (new)

This page renders a corporate-training pitch with a hero, a feature-comparison matrix, three corporate-service cards, and an inquiry form. The exact body copy is partially obscured by image-only sections in the export; values below are best-effort and will be confirmed when seeding from the live site (see [ASSUMPTIONS.md](ASSUMPTIONS.md) §16).

### 6B.1 Hero

| Concept | Model |
|---|---|
| Heading + subheading (corporate-training pitch) | `Page(slug='for-corporates').blocks` keys `hero.heading`, `hero.subheading` |
| Hero image | `Page(slug='for-corporates').blocks` key `hero.image` |

### 6B.2 Comparison matrix (3 plans/columns × N feature rows)

| Concept | Model |
|---|---|
| Column headers (3 plans/tiers) | `Page(slug='for-corporates').blocks` key `comparison.columns[]` (list of `{title, subtitle?, ctaLabel?, ctaUrl?}`) |
| Feature rows (4–5) with checkmarks per column | `Page(slug='for-corporates').blocks` key `comparison.rows[]` (list of `{label, values: boolean[3]}`) |

This is the only genuinely structured matrix in the site. Storing it as a `Json` block on `Page` (rather than a dedicated `ComparisonMatrix` model) is fine — admin edits the matrix as a 2-D editor in the Pages section. See [ASSUMPTIONS.md](ASSUMPTIONS.md) §16.

### 6B.3 Corporate service cards (3)

| Concept | Model |
|---|---|
| 3 cards with icons (`lets-icons:setting-fill`, `icon-park-outline:setting-computer`, `material-symbols:manage-accounts-rounded`) + titles + descriptions | `Page(slug='for-corporates').blocks` key `services.items[]` (list of `{iconKey, title, description}`) |

### 6B.4 Inquiry form

| Concept | Model |
|---|---|
| Form heading + supporting copy | `Page(slug='for-corporates').blocks` keys `form.heading`, `form.subheading` |
| Form fields (Name, Email, Phone, City, Company, Team size — exact set TBC) | `Page(slug='for-corporates').blocks` key `form.fields[]` |
| Submit | `POST /api/leads` with `source='corporate-enquiry'` |

`Lead` model needs a `company` and `teamSize` column for this to be useful. Listed in §9.2.

### 6B.5 Footer

Per §2.3 (identical to all other pages).

---

## 7. Why Us / NotFound (no Figma export)

These two pages don't have Figma exports — they render from generic React markup. Per `CLAUDE.md` §6, they map to the `Page` model with `blocks: Json`:

| Page | `Page.slug` | Block keys (proposed) |
|---|---|---|
| `/why-us` | `why-us` | `hero.*`, `features[]`, `cta.*` |
| `/404` | `not-found` | `heading`, `body`, `cta` |

(About and For Corporates now have their own Figma exports — see §6A and §6B.)

The `TeamMember` model in `CLAUDE.md` §6 has no rendering home in the new About export — see [ASSUMPTIONS.md](ASSUMPTIONS.md) §17.

---

## 8. Forms wired in this rebuild

All POST to `/api/leads` per `CLAUDE.md` §3:

| Form / CTA | `Lead.source` |
|---|---|
| Contact-page "Request a Call back" form (new) | `callback-request` |
| Contact-page "Sign up" green button | `newsletter` (assuming it captures email for marketing — confirm in [ASSUMPTIONS.md](ASSUMPTIONS.md) §13) |
| For Corporates inquiry form | `corporate-enquiry` |
| "Download Brochure" CTAs (PDP) | `brochure-download` |
| "Request a Callback" CTAs (home, PDP) | `callback-request` |
| "Create Free Account" / newsletter footer | `newsletter` |
| Free Masterclass banner CTA | `masterclass-register` |
| About-page "Call Us" button | not a form — `tel:` link |

---

## 9. Schema gaps — proposed additions

### 9.1 NEW model: `Office`

The current schema flattens addresses into `SiteSettings.address` (single string). Both the footer and the contact and PDP pages render **three full office blocks** with map images, hours, phone overrides, and a "Get Directions →" external link. Add:

```prisma
model Office {
  id            String   @id @default(cuid())
  city          String   // "Noida", "Gurgaon", "Bangalore"
  addressLine1  String
  addressLine2  String?
  phone         String
  hours         String   // "Mon–Sat, 9:30 AM – 6:30 PM"
  directionsUrl String   // Google Maps link
  mapImageUrl   String?  // static map screenshot used in Figma export
  order         Int      @default(0)
  isActive      Boolean  @default(true)
}
```

`SiteSettings.address` becomes redundant once `Office` exists — keep it for short, footer-summary use OR remove and migrate; either is fine, but flag in the Phase 2 PR.

### 9.2 NEW fields on existing models

| Model | Field | Reason |
|---|---|---|
| `Course` | `experienceLabel: String?` | Free-text label like "Beginner-friendly" / "Mid-level" shown on home cards |
| `Course` | `jobRoles: String[]` | The "Job roles you can target" strip on PDP — 5 short labels |
| `Course` | `keySkills: String[]` | "Key skills you'll gain" section on PDP |
| `Course` | `careerSupportText: String?` | The career-support paragraph on PDP (per-course, not global) |
| `SiteSettings` | `stats: Json` | Wider than originally planned — must hold `{years, students, trainers, candidates, trainingHours, companies, avgRating}` to cover home + about pages |
| `SiteSettings` | `businessHours: String` | "10:00 AM TO 07:00 PM" shown on contact page; not currently in schema |
| `Lead` | `countryCode: String?` | New contact form has separate Code+Mobile fields |
| `Lead` | `city: String?` | New contact form "Select City" dropdown |
| `Lead` | `company: String?` | For Corporates inquiry form |
| `Lead` | `teamSize: String?` | For Corporates inquiry form |
| `Faq` | extend `scope` enum/values to include `'ABOUT'`, `'CONTACT'` | About page has its own FAQ list distinct from PDP/global; see [ASSUMPTIONS.md](ASSUMPTIONS.md) §15 |

### 9.3 No new model needed for blog feed in footer

The "3 latest blog posts" footer column reads live from `BlogPost ORDER BY publishedAt DESC LIMIT 3`. Already covered.

---

## 10. Page-load wiring summary (per `CLAUDE.md` §8 step 8)

| Route | Calls in parallel |
|---|---|
| `/` | `getSiteSettings`, `getNav('TOP_NAV')`, `getNav('MEGA_MENU')`, `getNav('FOOTER_LINKS')`, `getNav('FOOTER_CITIES')`, `getCategories`, `getCourses({featured:true, limit:N})`, `getTestimonials`, `getHiringPartners`, `getFaqs({scope:'GLOBAL'})`, `getActiveMasterclass`, `getOffices`, `getPage('home')`, `getLatestPosts(3)` |
| `/courses` | site/nav/footer + `getCategories`, `getCourses({category, page})`, `getOffices`, `getPage('courses')` |
| `/courses/[slug]` | site/nav/footer + `getCourse(slug)` (includes modules, lessons, batches, tools, certifications, projects, faqs), `getOffices`, `getPage('pdp')` |
| `/contact` | site/nav/footer + `getOffices`, `getPage('contact')` |
| `/about` | site/nav/footer + `getPage('about')` + `getTestimonials({limit:N})` + `getFaqs({scope:'ABOUT'})` |
| `/for-corporates` | site/nav/footer + `getPage('for-corporates')` |
| `/why-us`, `/404` | site/nav/footer + `getPage(slug)` |

---

## 11. Open questions for the user

1. **Existing scaffold:** the repo already has a Next.js 16 + SQLite + NextAuth implementation at the root that appears to cover Phases 1–6. Do you want me to (a) audit and complete what's there, or (b) start over per `CLAUDE.md`'s exact stack (Postgres + Express + monorepo)? See [ASSUMPTIONS.md](ASSUMPTIONS.md) §1 for the full mismatch list.
2. **Course-card slot count on `/courses`:** the Figma export shows ~3 demo slots. Should the grid render a fixed 9/12/15 explicit slots, or paginate? `CLAUDE.md` is silent.
3. **About / Why Us / For Corporates copy:** do you have approved final copy, or should I seed from whatever the live site has? (For Corporates body copy in the Figma export is partly image-only — see [ASSUMPTIONS.md](ASSUMPTIONS.md) §16.)
4. **Sign In / Create Free Account links:** confirm both go to the existing external LMS URL — what's the URL?
5. **Office data:** I'll seed the three offices from the addresses already visible in the Figma export. Confirm those are current.
6. **Footer "Etcetera" column heading:** is that the literal heading you want, or a placeholder from the Figma export?
7. **Old vs new contact page:** the new [Contact-12-1208.tsx](src/imports/Contact-2/Contact-12-1208.tsx) appears to supersede [Contact-9-325.tsx](src/imports/Contact-1/Contact-9-325.tsx). Confirm I should treat the new one as canonical and ignore the old one. ([ASSUMPTIONS.md](ASSUMPTIONS.md) §13.)
8. **Bangalore vs Bengaluru:** the new contact page says `Bengaluru`; the footer and old contact page say `Bangalore`. Pick one for consistency. ([ASSUMPTIONS.md](ASSUMPTIONS.md) §14.)
9. **About FAQs:** the About page has 8 FAQs that look distinct from the global FAQ list. Are they (a) a separate `Faq.scope='ABOUT'` set, or (b) the same global FAQs the home page shows? ([ASSUMPTIONS.md](ASSUMPTIONS.md) §15.)
10. **For Corporates comparison matrix:** I'm storing it as a single `Json` block on `Page(slug='for-corporates')` rather than a dedicated `ComparisonMatrix` model. Confirm that's fine — admin will edit it as a 2-D grid editor. ([ASSUMPTIONS.md](ASSUMPTIONS.md) §16.)
11. **TeamMember model:** the new About page does not show a leadership team grid (it's stats + testimonials + FAQs instead). Should `TeamMember` stay in the schema unused (admin can populate; we add a section later) or be dropped? ([ASSUMPTIONS.md](ASSUMPTIONS.md) §17.)

I'll wait for sign-off on this plan (and answers to the questions in §11) before touching any code, per `CLAUDE.md` §11 Phase 0.
