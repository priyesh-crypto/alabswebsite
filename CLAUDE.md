# CLAUDE.md — AnalytixLabs Website Rebuild Instructions

> **READ THIS FILE COMPLETELY BEFORE WRITING A SINGLE LINE OF CODE.**
> Re-read the section called **"THE GOLDEN RULE"** every time you are about to touch a UI file.

---

## 1. PROJECT CONTEXT (what this project is)

I have an existing static website built from a Figma design (exported via Figma Make) that visually matches a target site at **https://www.analytixlabs.co.in/**.

The current static codebase lives in this repository and contains:

- A **Vite + React 18 + React Router v7 + TypeScript** project.
- Pages: `Home`, `About`, `Services`, `Courses`, `CourseDetail`, `Contact`, `NotFound`, plus a `Root` layout.
- Hardcoded Figma-generated layouts in `src/imports/` — these are **pixel-perfect, absolutely-positioned** components (e.g. `AlabsLandingPage.tsx`, `Pdp.tsx`, `ExploreCourses.tsx`, `Contact-9-325.tsx`). They render inside a fixed-width container of `1440px` and use `position: absolute` with `left/top/width/height` for every element.
- shadcn/ui components in `src/app/components/ui/`.
- All click handling on the Figma-generated pages is currently done with a **hacky `onClick` on the parent div** that reads `event.target.textContent` and calls `navigate()` based on the matched string.

**My job for you (Claude Code):** convert this static site into a fully dynamic, production-ready website **WITHOUT changing the visual design or layout**, AND build an admin panel to manage the content.

---

## 2. THE GOLDEN RULE (do not violate, ever)

### **DO NOT REDESIGN THE UI. DO NOT CHANGE THE LAYOUT. DO NOT REWRITE THE FIGMA-EXPORTED COMPONENTS.**

A previous attempt failed because the assistant rewrote the entire UI in "clean" Tailwind components and threw away the Figma layout. **That is forbidden.**

What this means concretely:

1. **The files in `src/imports/*` are the source of truth for the visual design.** Their structure (absolute positioning, the `1440px × Npx` containers, the SVG paths, the image imports) **must be preserved**.
2. You may **modify** these files only to:
   - Replace hardcoded strings/numbers with values read from props or a data source.
   - Replace hardcoded `<img src={imgFoo} />` with a dynamic image URL (keep the same `className`, `style`, and positioning).
   - Replace the parent-div `textContent`-sniffing `onClick` with proper `<Link>` / `<a href>` / `onClick` handlers attached to the actual anchor/button elements that already exist in the layout.
3. You may **NOT**:
   - Rewrite a Figma-exported component using flexbox/grid as a "modern" replacement.
   - Change `width: '1440px'`, `height: 'Npx'`, or any `absolute` positioning.
   - Change fonts, colors, spacing, sizes, SVG paths, or image positions.
   - Move the page structure to "responsive" Tailwind layouts. (Responsiveness is **out of scope** for this milestone — the site is fixed-width 1440 by design.)
   - Replace `imports/AlabsLandingPage` with a hand-written `Hero + Features + Courses` set of components. The Figma export IS the design.

### Visual diff test
Before submitting, run the site, take a screenshot of every page at 1440px viewport, and compare it pixel-by-pixel against the screenshot taken **before** your changes. They must be identical except for content that legitimately came from the database (e.g. a new course title).

If the screenshots differ in layout, spacing, color, or font — **you have failed the task.**

---

## 3. WHAT "MAKE IT DYNAMIC" ACTUALLY MEANS

Right now everything is hardcoded inside JSX as literal strings, e.g.:

```tsx
<p className="...top-[1740px]...">Data Analytics</p>
<p className="...top-[1452px]...">{`Data Science & Analytics `}</p>
```

"Dynamic" means: that string `"Data Analytics"` should come from the database, fetched via an API, with the admin panel able to edit it and have the change reflect on the website.

The **layout, position, classes, and surrounding markup stay exactly the same.** Only the text/image/link/number value changes.

### Dynamic things to convert (full list)

For every page in `src/imports/`, replace these hardcoded values with data from the API:

1. **Course cards** — title, description, image, duration, classes count, hours, price, batch dates, batch locations, "seats left", course slug for the detail link.
2. **Hero banners** — heading, subheading, CTA labels, CTA links, background image.
3. **Navigation menu** — top nav links (Upcoming Batches, Explore Courses, Why Us, For Corporates, Blog, Contact Us, Sign In, Create Free Account) and the mega-menu under "Explore Courses" (Artificial Intelligence / Business & Data Analytics / Data Science / Specialization Modules with their child course links).
5. **Stats / counters** — "10+ Years", "60K+ Students", "30+ Trainers", any number on the landing page.
6. **Testimonials** — name, photo, role, company, quote text, rating.
7. **Logos / "Hiring Partners" / "In Partnership with"** — array of logo image URLs.
8. **FAQ section** — question, answer pairs.
9. **Trainer / leadership cards** — name, role, photo, bio, linkedin URL.
10. **Course-detail (PDP) page** — full curriculum (modules → lessons), tools covered, certifications, projects, fee structure, EMI options, batch schedule, FAQs, brochure download URL.
11. **Footer** — column headings, link lists, address, phone, email, social URLs, city-wise course links ("Data Science Course in Delhi" etc.).
12. **Contact page** — form fields config (label/placeholder/required), office addresses with map embeds, contact emails, contact phone numbers.
13. **Blog/posts** — title, slug, cover image, author, date, body (markdown/HTML), tags. (Even though blog isn't in current pages, scaffold it because the live site has it.)
14. **Free masterclass / lead-gen banner** — image, registration URL, headline.
15. **Site settings** — logo URL, favicon URL, primary color, GTM ID, default meta description, social-share image.

### Forms to make functional

- **Contact form** — POST to `/api/leads` (creates a `Lead` record).
- **"Request a Callback" / "Download Brochure" CTAs** scattered across pages — POST to `/api/leads` with a `source` field saying which CTA was clicked.
- **Newsletter / "Create Free Account"** — POST to `/api/leads` with `source: 'newsletter'`. Do NOT actually create a user account; just store the lead.

---

## 4. TECH STACK (mandatory — do not substitute)

### Frontend (the website users see)
- **Next.js 14+ (App Router)** with TypeScript.
- **Tailwind CSS v4** (already configured in the existing project — keep the same theme tokens from `default_shadcn_theme.css` and `src/styles/`).
- **React Router v7 → migrate to Next.js App Router** (file-based routing under `app/`).
- **shadcn/ui** components from the existing `src/app/components/ui/` — copy them into the new project under `components/ui/`.
- The Figma-exported pages from `src/imports/*` — **copy them as-is** into the new project under `components/figma-pages/` and refactor only their internal hardcoded values to read from props.
- Data fetching: server components + `fetch` to the backend, with `revalidate` for ISR; mutation forms via Server Actions or route handlers.

### Backend (the API and admin)
- **Node.js + Express** (or Next.js Route Handlers if you want fewer servers — pick **one** approach and document it). My preference: a separate **Express + TypeScript** API in `apps/api/` for clarity and so the admin panel can be a separate SPA if needed.
- **Database: PostgreSQL** with **Prisma ORM**.
- **Authentication for admin: JWT + httpOnly cookies**, with bcrypt-hashed passwords. Roles: `ADMIN`, `EDITOR`. No public signup.
- **File uploads: local disk in dev (`apps/api/uploads/`) + S3-compatible storage in prod** (use an env-var switch). Serve uploaded files via a `/uploads/*` static route in dev.
- **Validation: Zod** on every API route (request body + query).

### Admin Panel
- A separate Next.js route group `(admin)` inside the same Next.js app, **OR** a small standalone React + Vite admin SPA. Pick the **route group inside Next.js** approach to keep one deployable unit unless there's a strong reason not to.
- Protected by middleware that checks the JWT cookie and redirects to `/admin/login` if absent.
- Use shadcn/ui (the same components we already have) for tables, forms, dialogs.
- CRUD for every content type listed in section 3 + the data model in section 6.

### Suggested monorepo layout
```
.
├── apps/
│   ├── web/        # Next.js — public site + /admin route group
│   └── api/        # Express + Prisma
├── packages/
│   └── shared/     # shared TS types + Zod schemas
├── prisma/         # schema.prisma, migrations, seed.ts
└── CLAUDE.md       # this file
```
Use **pnpm workspaces**.

If the monorepo feels heavy, a single Next.js app with route handlers is acceptable — but then put Prisma at the project root, put admin under `app/(admin)/`, and put public pages under `app/(site)/`.

---

## 5. DATA SOURCE FOR INITIAL CONTENT

To populate the database, **scrape / read the live site at https://www.analytixlabs.co.in/** for:

- Course list, course detail pages, batch schedules, fee structure
- Testimonials, hiring partner logos, leadership team
- Footer links, navigation structure
- Blog post titles + URLs (just metadata is fine for seeding)
- FAQs

Write a script at `prisma/seed.ts` that inserts this content into the database. **Do not hardcode it inside React components** — the React components must read from the API.

If a piece of data isn't available on the live site, fall back to whatever is currently hardcoded in the `src/imports/*` files. The seed script must produce a fully-populated database that the website can render against without any 404s or empty sections.

The live site is the **content reference** only. Do not copy its HTML/CSS/layout — our visual design comes from the Figma export.

---

## 6. DATABASE SCHEMA (Prisma — start from this)

```prisma
// prisma/schema.prisma

generator client { provider = "prisma-client-js" }
datasource db { provider = "postgresql"; url = env("DATABASE_URL") }

model AdminUser {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String   // bcrypt hash
  name      String
  role      Role     @default(EDITOR)
  createdAt DateTime @default(now())
}
enum Role { ADMIN EDITOR }

model SiteSettings {
  id              Int      @id @default(1) // singleton row
  logoUrl         String
  faviconUrl      String?
  primaryColor    String   @default("#09263f")
  contactEmail    String
  contactPhone    String
  address         String
  socialLinks     Json     // {linkedin, facebook, twitter, instagram, youtube}
  gtmId           String?
  defaultMetaDesc String?
  ogImageUrl      String?
  updatedAt       DateTime @updatedAt
}

model NavItem {
  id        String    @id @default(cuid())
  label     String
  url       String
  order     Int
  parentId  String?
  parent    NavItem?  @relation("NavTree", fields: [parentId], references: [id])
  children  NavItem[] @relation("NavTree")
  group     NavGroup  // TOP_NAV, MEGA_MENU, FOOTER_COL_1, FOOTER_COL_2, ...
  isActive  Boolean   @default(true)
}
enum NavGroup { TOP_NAV MEGA_MENU FOOTER_LINKS FOOTER_CITIES }

model Category {
  id      String   @id @default(cuid())
  name    String   // "Artificial Intelligence", "Data Science", ...
  slug    String   @unique
  order   Int
  courses Course[]
}

model Course {
  id              String   @id @default(cuid())
  slug            String   @unique
  title           String
  shortDesc       String
  longDesc        String   // markdown/HTML
  thumbnailUrl    String
  heroImageUrl    String?
  durationMonths  Int?
  classesCount    Int?
  hoursCount      Int?
  price           Int?     // in paise/cents to avoid floats
  discountedPrice Int?
  emiPerMonth     Int?
  brochureUrl     String?
  isFeatured      Boolean  @default(false)
  isPublished     Boolean  @default(true)
  order           Int      @default(0)
  categoryId      String
  category        Category @relation(fields: [categoryId], references: [id])
  modules         CourseModule[]
  batches         Batch[]
  faqs            Faq[]
  tools           Tool[]   @relation("CourseTools")
  certifications  Certification[]
  projects        Project[]
  metaTitle       String?
  metaDesc        String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model CourseModule {
  id        String   @id @default(cuid())
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  title     String
  summary   String?
  order     Int
  lessons   Lesson[]
}

model Lesson {
  id       String       @id @default(cuid())
  moduleId String
  module   CourseModule @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  title    String
  duration String?      // "45 min"
  order    Int
}

model Tool {
  id      String   @id @default(cuid())
  name    String   // "Python", "SQL", "Tableau"
  iconUrl String?
  courses Course[] @relation("CourseTools")
}

model Certification {
  id       String  @id @default(cuid())
  courseId String
  course   Course  @relation(fields: [courseId], references: [id], onDelete: Cascade)
  title    String
  issuer   String
  imageUrl String?
}

model Project {
  id        String  @id @default(cuid())
  courseId  String
  course    Course  @relation(fields: [courseId], references: [id], onDelete: Cascade)
  title     String
  desc      String
  imageUrl  String?
}

model Batch {
  id         String   @id @default(cuid())
  courseId   String
  course     Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  location   String   // "Gurgaon", "Bangalore", "Online", ...
  startDate  DateTime
  schedule   String   // "Bootcamp (9:30 AM)", "Weekends (2:00 PM)"
  seatsLeft  Int
  isActive   Boolean  @default(true)
}

model Testimonial {
  id        String  @id @default(cuid())
  name      String
  role      String?
  company   String?
  photoUrl  String?
  quote     String
  rating    Int     @default(5)
  courseId  String?
  order     Int     @default(0)
  isActive  Boolean @default(true)
}

model HiringPartner {
  id      String  @id @default(cuid())
  name    String
  logoUrl String
  order   Int     @default(0)
}

model TeamMember {
  id          String  @id @default(cuid())
  name        String
  role        String
  photoUrl    String?
  bio         String?
  linkedinUrl String?
  order       Int     @default(0)
}

model Faq {
  id       String  @id @default(cuid())
  question String
  answer   String
  scope    String  // "GLOBAL" or a courseId
  courseId String?
  course   Course? @relation(fields: [courseId], references: [id])
  order    Int     @default(0)
}

model BlogPost {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  excerpt     String?
  coverUrl    String?
  body        String   // markdown
  authorName  String
  publishedAt DateTime?
  isPublished Boolean  @default(false)
  tags        String[] // postgres text[]
  metaTitle   String?
  metaDesc    String?
}

model Page {
  // for the long-form static pages (About, Why Us, For Corporates) so admin can edit copy
  id        String   @id @default(cuid())
  slug      String   @unique // "about", "why-us", "for-corporates"
  title     String
  // store an array of "blocks" so the admin can edit per-section text
  // without changing layout.  E.g. About page has hero, mission, vision, values blocks.
  blocks    Json     // [{key: "hero.title", value: "About ALabs"}, ...]
  metaTitle String?
  metaDesc  String?
  updatedAt DateTime @updatedAt
}

model Lead {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  message   String?
  courseId  String?
  source    String   // "contact-form", "brochure-download", "callback-request", "newsletter"
  utm       Json?
  createdAt DateTime @default(now())
}

model Masterclass {
  id            String   @id @default(cuid())
  title         String
  bannerUrl     String
  registerUrl   String
  startsAt      DateTime?
  isActive      Boolean  @default(true)
}

model UploadedAsset {
  id        String   @id @default(cuid())
  url       String
  mimeType  String
  size      Int
  alt       String?
  createdAt DateTime @default(now())
}
```

Generate a migration and a seed script. The seed script must populate **at least**:
- 1 admin user (`admin@alabs.local` / `Admin@123` — print to console with a warning to change it)
- All categories, courses, batches, testimonials, hiring partners, team members, FAQs, nav items, footer links, and site settings needed to render every page exactly as the static site renders today.

---

## 7. API SURFACE

All endpoints prefixed with `/api`. Public endpoints are `GET` only and require no auth. Admin endpoints require a valid JWT in an httpOnly cookie.

### Public
- `GET /api/site-settings`
- `GET /api/nav?group=TOP_NAV|MEGA_MENU|FOOTER_LINKS|FOOTER_CITIES`
- `GET /api/categories`
- `GET /api/courses?featured=true&category=slug&limit=10`
- `GET /api/courses/:slug` — includes modules, lessons, batches, tools, certifications, projects, FAQs
- `GET /api/testimonials`
- `GET /api/hiring-partners`
- `GET /api/team`
- `GET /api/faqs?scope=global` (or `?courseSlug=...`)
- `GET /api/posts?limit=&tag=`
- `GET /api/posts/:slug`
- `GET /api/pages/:slug` — for About, Why Us, For Corporates, etc.
- `GET /api/masterclass/active`
- `POST /api/leads` — public, rate-limited (5 / IP / minute), Zod-validated, **must NOT echo back any private data**.

### Admin (all behind `/api/admin/*` and JWT-protected)
- `POST /api/admin/auth/login` `{email, password}` → sets cookie
- `POST /api/admin/auth/logout`
- `GET  /api/admin/auth/me`
- Full REST CRUD for every model: `/api/admin/courses`, `/api/admin/courses/:id`, etc.
- `POST /api/admin/uploads` (multipart) → returns `{url, id}`
- `GET  /api/admin/leads?from=&to=&source=&page=` → paginated, sortable, exportable as CSV via `?format=csv`

Every list endpoint supports `?page=` `?pageSize=` `?q=` `?sort=field:asc|desc`.

### Cross-cutting
- CORS: only allow the public web origin and the admin origin.
- Rate-limit `POST /api/leads` and `POST /api/admin/auth/login`.
- Helmet, compression, JSON body limit 1mb (10mb on upload route).
- Centralized error handler returning `{error: {code, message}}`. Never leak stack traces in prod.
- Request logging via pino.

---

## 8. HOW TO CONVERT A FIGMA-EXPORTED PAGE TO DYNAMIC (the actual recipe)

Take `src/imports/AlabsLandingPage/AlabsLandingPage.tsx` as the example. Today it has hundreds of `<p>` tags with hardcoded text and absolute positioning.

**Step-by-step:**

1. **Copy the file as-is** into `apps/web/components/figma-pages/AlabsLandingPage.tsx`.
2. **Identify every hardcoded string, number, and image import** that maps to a content concept. Make a list (course title, course image, hero heading, testimonial text, etc.). Do this by reading the file and the live site side-by-side.
3. **Convert the file from a no-prop component to a prop-driven component.** Define a `Props` type that mirrors the data the page needs:
   ```ts
   type LandingPageProps = {
     siteSettings: SiteSettings;
     navItems: NavItem[];
     featuredCourses: Course[];   // expect exactly N — if the layout has 4 hardcoded slots, render the first 4 and warn if there are fewer
     testimonials: Testimonial[];
     hiringPartners: HiringPartner[];
     stats: { years: string; students: string; trainers: string };
     faqs: Faq[];
     masterclass: Masterclass | null;
   };
   ```
4. **Replace text only — leave the surrounding `<p className="absolute ...">` 100% unchanged.** Example:
   ```tsx
   // BEFORE
   <p className="absolute ... top-[1740px]...">Data Analytics</p>

   // AFTER
   <p className="absolute ... top-[1740px]...">{featuredCourses[0]?.title ?? 'Data Analytics'}</p>
   ```
   The fallback string is the original hardcoded value — that way, if the API hiccups, the page still looks right.
5. **Replace image imports with dynamic URLs:**
   ```tsx
   // BEFORE
   import imgCourseImg from "./ab4a506e3d4b25f4f06209f40fea6fc3f23abdf2.png";
   <div style={{ backgroundImage: `url('${imgCourseImg}')` }} />

   // AFTER
   <div style={{ backgroundImage: `url('${featuredCourses[0]?.thumbnailUrl ?? defaultCourseImg}')` }} />
   ```
   Keep the original PNG imports as **fallbacks** so the design survives even if the DB is empty.
6. **Replace the parent-`onClick`-textContent-sniffing hack** with proper anchors. The Figma export already has the visual button — wrap it in a `<Link href="...">` (Next.js) so it becomes navigable. Do **not** restructure the surrounding markup.
   ```tsx
   // BEFORE (in src/app/pages/Home.tsx)
   <div onClick={handleClick}><AlabsLandingPage /></div>

   // AFTER
   // Inside AlabsLandingPage, find the "Explore Courses" button div and wrap:
   <Link href="/courses" className="contents">{/* original div */}</Link>
   ```
   Use `className="contents"` on the Link so it doesn't break absolute positioning.
7. **Repeated card layouts (e.g. 4 course cards in a row at fixed `left-[Npx]` positions)** stay as 4 explicitly-positioned blocks. Do not refactor them into a `.map()` over a flex container — that would change the layout. Instead, render the 4 blocks as 4 explicit references into the array:
   ```tsx
   {/* card 1 — keep its absolute positioning */}
   <CourseCardSlot pos={{left: 90, top: 1435}} course={featuredCourses[0]} />
   <CourseCardSlot pos={{left: 531, top: 1435}} course={featuredCourses[1]} />
   <CourseCardSlot pos={{left: 972, top: 1435}} course={featuredCourses[2]} />
   ```
   `CourseCardSlot` should reproduce the exact internal markup the Figma export had — just parameterized by `course`.
8. **Page wiring** (in `apps/web/app/(site)/page.tsx` for Home):
   ```tsx
   export default async function HomePage() {
     const [siteSettings, navItems, featuredCourses, testimonials, hiringPartners, faqs, masterclass]
       = await Promise.all([
         api.getSiteSettings(),
         api.getNav('TOP_NAV'),
         api.getCourses({ featured: true, limit: 4 }),
         api.getTestimonials(),
         api.getHiringPartners(),
         api.getFaqs({ scope: 'global' }),
         api.getActiveMasterclass(),
       ]);
     return (
       <AlabsLandingPage
         siteSettings={siteSettings}
         navItems={navItems}
         featuredCourses={featuredCourses}
         testimonials={testimonials}
         hiringPartners={hiringPartners}
         stats={derivedStats(siteSettings)}
         faqs={faqs}
         masterclass={masterclass}
       />
     );
   }
   ```
9. **Repeat for every page** in `src/imports/`: `Pdp` (CourseDetail), `ExploreCourses` (Courses list), `Contact-9-325` (Contact).

---

## 9. ADMIN PANEL REQUIREMENTS

Build it under `apps/web/app/(admin)/`. Login at `/admin/login`. Dashboard at `/admin`.

### Required pages
- **Dashboard** — counts (courses, leads this week, posts), recent leads list.
- **Site Settings** — single form (logo upload, contact info, social links, GTM, meta).
- **Navigation** — drag-to-reorder tree editor for top nav, mega menu, footer links, footer city links.
- **Categories** — list + create/edit/delete + reorder.
- **Courses** — list (search, filter by category, paginate) + full editor. Editor has tabs: Basic | Description | Curriculum (modules+lessons) | Tools | Certifications | Projects | Batches | FAQs | SEO | Publish.
- **Batches** — quick edit grid of upcoming batches across all courses.
- **Testimonials** — CRUD + reorder.
- **Hiring Partners** — CRUD + reorder + logo upload.
- **Team** — CRUD + reorder + photo upload.
- **FAQs** — CRUD with course-scope picker.
- **Blog Posts** — CRUD with markdown editor (use `react-markdown` for preview), cover image upload, publish toggle.
- **Pages** — block editor for About / Why Us / For Corporates so the marketing team can edit copy without dev help. Schema: each Page has a `blocks: Json` array of `{key, label, type: 'text'|'longtext'|'image'|'list', value}`. Render a form auto-generated from the blocks array.
- **Masterclass banner** — toggle + edit.
- **Leads** — paginated table, search, filter by source / date, **CSV export**, individual lead detail view.
- **Media library** — list of `UploadedAsset` rows with previews; delete.
- **Admin users** — only ADMIN role can manage; create/disable EDITOR users.

### UX rules
- Every form uses **react-hook-form + zod** with the same Zod schema the API uses (import from `packages/shared`).
- Every destructive action goes through an `<AlertDialog>` confirmation.
- Every list page has search + pagination + sort.
- Every save shows a `sonner` toast on success/error.
- Image uploads go through `POST /api/admin/uploads` and return a URL that's stored on the parent record.

---

## 10. ENVIRONMENT, COMMANDS, AND DEPLOYMENT

### `.env` (provide a `.env.example`)
```
# api
DATABASE_URL=postgresql://...
JWT_SECRET=change-me-32-chars
NODE_ENV=development
PORT=4000
CORS_ORIGINS=http://localhost:3000

# uploads
UPLOAD_DRIVER=local           # or 's3'
UPLOAD_DIR=./uploads          # for local
S3_BUCKET=
S3_REGION=
S3_ACCESS_KEY=
S3_SECRET_KEY=
S3_PUBLIC_BASE=

# web
NEXT_PUBLIC_API_BASE=http://localhost:4000
```

### Scripts (root `package.json`)
```
"dev"       : runs api + web concurrently
"dev:web"   : pnpm --filter web dev
"dev:api"   : pnpm --filter api dev
"build"     : builds both
"start"     : starts both in prod mode
"db:migrate": prisma migrate dev
"db:seed"   : tsx prisma/seed.ts
"db:reset"  : prisma migrate reset --force && pnpm db:seed
"lint"      : eslint
"typecheck" : tsc -b
```

### Deployment guide (write a `DEPLOY.md`)
- Web on Vercel.
- API on Railway / Render / Fly.
- DB: managed Postgres.
- Uploads: S3 / R2 in prod; local in dev.
- Outline how to set env vars on each platform.

---

## 11. ORDER OF EXECUTION (do not skip phases)

Do exactly this, in this order. Commit at the end of every phase with a clear message.

### Phase 0 — Read & Plan (no code yet)
- Read every file under `src/imports/` and `src/app/pages/`.
- Open https://www.analytixlabs.co.in/ and the Figma exports side by side.
- Produce a `PLAN.md` listing: every page, every dynamic content concept on it, and which DB model it maps to.
- **Wait for me to approve `PLAN.md` before continuing.** (If running unattended, proceed with reasonable assumptions but flag every assumption in `ASSUMPTIONS.md`.)

### Phase 1 — Repo scaffolding
- Create the pnpm-workspace monorepo (`apps/web`, `apps/api`, `packages/shared`, `prisma/`).
- Move the existing Vite project's `src/imports/`, `src/app/components/ui/`, `src/styles/`, `default_shadcn_theme.css` into `apps/web/` under appropriate folders.
- Set up Next.js 14 in `apps/web/` (App Router, TS, Tailwind v4).
- Set up Express + TS in `apps/api/`.
- Set up Prisma with the schema from section 6.
- `.env.example`, README, root scripts.

### Phase 2 — DB & API skeleton
- Prisma migrate.
- Implement all **public** read endpoints. Stub them returning empty arrays first; we'll seed in phase 3.
- Implement admin auth (login/logout/me) with bcrypt + JWT cookie.
- Implement uploads endpoint.
- Postman/REST Client `.http` file in `apps/api/requests.http` covering every route.

### Phase 3 — Seed data
- Write `prisma/seed.ts` that fills the DB by:
  1. Reading the live AnalytixLabs site (use `axios` + `cheerio`) for course list, course details, testimonials, hiring partner logos, team, FAQs, footer links, nav links.
  2. Falling back to the strings/images currently hardcoded in `src/imports/*` for anything not on the live site.
  3. Downloading any required images and storing them in `apps/api/uploads/` (or pre-uploading to S3 if `UPLOAD_DRIVER=s3`).
- Run the seed and verify with `psql` or Prisma Studio that every table has rows.

### Phase 4 — Wire the public site to the API (NO UI CHANGES)
- For each public page (Home, Courses, CourseDetail, About, Services/WhyUs, Contact, NotFound), do the conversion described in section 8.
- Every page must render with the seeded data and **look pixel-identical to the original static site** at 1440px viewport.
- Do not introduce any new visual components. Do not change Tailwind classes. Do not "improve" anything.

### Phase 5 — Forms
- Wire the contact form, brochure-download CTA, callback CTA, and newsletter form to `POST /api/leads`.
- Add client-side validation, server-side validation, success/error toasts.
- Verify rate limiting works.

### Phase 6 — Admin panel
- Build login page, layout, sidebar, all CRUD pages from section 9.
- All CRUD operations end-to-end tested.

### Phase 7 — Polish & deploy
- Lint, typecheck, fix.
- Add basic e2e tests for critical paths (load home, load course detail, submit lead, admin login, admin create course → see it on home) using Playwright.
- Write `DEPLOY.md`.

---

## 12. THINGS YOU MUST NOT DO

- ❌ Do not redesign or "modernize" the UI.
- ❌ Do not delete or rewrite files in `src/imports/` from scratch — only modify them per the recipe in section 8.
- ❌ Do not change the fixed-width `1440px` layout into a responsive one.
- ❌ Do not swap shadcn for another component library.
- ❌ Do not swap PostgreSQL/Prisma/Next.js/Express for alternatives unless I explicitly approve.
- ❌ Do not add an LMS / payment gateway / video hosting / SSO. The "Sign In" link goes to the existing external LMS URL stored in nav settings — that's it.
- ❌ Do not invent new content that isn't on the live site or in the existing static files. If unsure, ask or seed a placeholder and flag it in `ASSUMPTIONS.md`.
- ❌ Do not commit secrets. `.env` is gitignored; only `.env.example` is committed.
- ❌ Do not push directly to main. Work on a `feature/dynamic-rebuild` branch.

---

## 13. THINGS YOU MUST DO

- ✅ Preserve the Figma layout exactly.
- ✅ Use TypeScript strict mode everywhere; no `any` unless justified by a comment.
- ✅ Validate every API input with Zod.
- ✅ Use Server Components for data fetching on public pages; only use Client Components where interactivity is required (forms, mega-menu open/close, carousels).
- ✅ Cache public API responses with `revalidate: 60` and add an admin "Revalidate" button that calls Next.js `revalidatePath()`.
- ✅ Make every admin form pre-fill correctly when editing.
- ✅ Hash admin passwords with bcrypt cost ≥ 10.
- ✅ Set the JWT cookie as `httpOnly`, `secure` in prod, `sameSite=lax`.
- ✅ Sanitize any HTML rendered from the database (course longDesc, blog body) with `isomorphic-dompurify`.
- ✅ Write a `README.md` covering setup-from-zero in fewer than 10 commands.

---

## 14. DEFINITION OF DONE

A pull request is done when **all** of the following are true:

1. `pnpm install && pnpm db:reset && pnpm dev` boots the entire stack from a clean checkout.
2. Visiting `http://localhost:3000/`, `/courses`, `/courses/data-science`, `/about`, `/services`, `/contact` all load without errors and **look identical to the original static site at 1440px viewport** (compare screenshots).
3. Editing a course title in `/admin` and saving causes the change to appear on the public site after a soft refresh.
4. Submitting the contact form creates a Lead row visible in `/admin/leads` and exportable as CSV.
5. `pnpm lint && pnpm typecheck` passes with zero errors.
6. `README.md` and `DEPLOY.md` exist and are accurate.
7. No file in `src/imports/*` (now `apps/web/components/figma-pages/*`) has had its absolute-positioning classes, `1440px` width, or surrounding markup structure changed.

---

## 15. WHEN IN DOUBT

- If a requirement here conflicts with the live AnalytixLabs site → follow **this file**.
- If a requirement here conflicts with the Figma layout → follow **the Figma layout** for visuals, and **this file** for everything else.
- If you genuinely cannot tell whether a change is OK, **stop and ask me** instead of guessing.

---

**End of CLAUDE.md.** Now go read `src/imports/AlabsLandingPage/AlabsLandingPage.tsx` and `src/imports/Pdp/Pdp.tsx` before doing anything else.
