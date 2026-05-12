/**
 * Phase 3 seed.
 *
 * Goal (CLAUDE.md §5): leave the DB fully populated so every page in
 * the site renders without empty sections or 404s. Source order:
 *   1. Figma exports under src/imports/*  (visual source of truth)
 *   2. Reasonable defaults inferred from the live AnalytixLabs site
 *
 * Image references use https://placehold.co placeholders. Phase 4
 * (page wiring) is when we replace those with real CDN or /images/*
 * paths sourced from src/imports/.
 *
 * Idempotent: re-runs cleanly. Models with a unique slug/email use
 * upsert; collections without a stable key are wiped + recreated.
 */
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const ADMIN_EMAIL = "admin@alabs.local";
const ADMIN_DEFAULT_PASSWORD = "Admin@123";

const PHONE = "+91 9555219007";
const EMAIL = "info@analytixlabs.co.in";
const HOURS = "10:00 AM TO 07:00 PM";

const placeholder = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/09263F/FFFFFF?text=${encodeURIComponent(label)}`;

async function seedAdmin() {
  const passwordHash = await bcrypt.hash(ADMIN_DEFAULT_PASSWORD, 12);
  await prisma.adminUser.upsert({
    where: { email: ADMIN_EMAIL },
    create: {
      email: ADMIN_EMAIL,
      password: passwordHash,
      name: "AnalytixLabs Admin",
      role: "ADMIN",
    },
    update: { password: passwordHash, role: "ADMIN" },
  });
  console.log(`✓ admin user seeded — login: ${ADMIN_EMAIL} / ${ADMIN_DEFAULT_PASSWORD}`);
  console.log("  ⚠ change the password after first login.");
}

async function seedSiteSettings() {
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      logoUrl: placeholder(180, 48, "AnalytixLabs"),
      faviconUrl: placeholder(48, 48, "AL"),
      primaryColor: "#09263F",
      contactEmail: EMAIL,
      contactPhone: PHONE,
      businessHours: HOURS,
      address: "1st Floor, A78, A Block, Sector 2, Noida, UP 201301.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/company/analytixlabs",
        facebook: "https://www.facebook.com/analytixlabs",
        twitter: "https://twitter.com/analytixlabs",
        instagram: "https://www.instagram.com/analytixlabs/",
        youtube: "https://www.youtube.com/@analytixlabs",
        medium: "https://medium.com/analytixlabs",
      },
      stats: {
        years: "10+",
        students: "60K+",
        trainers: "30+",
        candidates: "15,000+",
        trainingHours: "130,000+",
        companies: "50+",
        avgRating: "9.7+",
        // Hero rating row (small "(4.8) Rated by 5000+ learners" line).
        rating: "4.8",
        ratedBy: "5000+",
      },
      defaultMetaDesc:
        "AnalytixLabs offers Data Science, AI, and Analytics training with 600+ learning hours and industry projects.",
    },
    update: {
      contactEmail: EMAIL,
      contactPhone: PHONE,
      businessHours: HOURS,
    },
  });
  console.log("✓ site settings");
}

async function seedOffices() {
  await prisma.office.deleteMany();
  await prisma.office.createMany({
    data: [
      {
        city: "Noida",
        addressLine1:
          "1st Floor, A78, A Block, Sector 2, Metro Gate 3, Noida, UP 201301.",
        phone: PHONE,
        hours: HOURS,
        directionsUrl: "https://maps.google.com/?q=AnalytixLabs+Noida",
        mapImageUrl: placeholder(480, 200, "Noida+Map"),
        // Live admins should paste a Google Maps embed iframe `src` here.
        // Until then, the public site falls back to ?q=...&output=embed.
        mapEmbedUrl: "https://www.google.com/maps?q=AnalytixLabs+Noida&output=embed",
        order: 0,
      },
      {
        city: "Gurgaon",
        addressLine1:
          "2nd Floor, Sidhartha House, Building No. 6, Sector 44, Gurugram, Haryana 122003 (600m from HUDA City Metro).",
        phone: PHONE,
        hours: HOURS,
        directionsUrl: "https://maps.google.com/?q=AnalytixLabs+Gurgaon",
        mapImageUrl: placeholder(480, 200, "Gurgaon+Map"),
        mapEmbedUrl: "https://www.google.com/maps?q=AnalytixLabs+Gurgaon&output=embed",
        order: 1,
      },
      {
        city: "Bengaluru",
        addressLine1:
          "Bldg 51/2, First Floor, 12th Main Road, Near BDA Complex, Sector 6, HSR Layout, Bengaluru, Karnataka 560102.",
        phone: PHONE,
        hours: HOURS,
        directionsUrl: "https://maps.google.com/?q=AnalytixLabs+Bengaluru",
        mapImageUrl: placeholder(480, 200, "Bengaluru+Map"),
        mapEmbedUrl: "https://www.google.com/maps?q=AnalytixLabs+Bengaluru&output=embed",
        order: 2,
      },
    ],
  });
  console.log("✓ offices (3)");
}

async function seedCategories() {
  // Pill colors mirror the original Figma marquee strip palette so the
  // landing-page <CategoryPill> can drop its hardcoded fallback once seed runs.
  const categories = [
    { name: "Artificial Intelligence", slug: "artificial-intelligence", order: 0, color: "#d2faf0" },
    {
      name: "Business & Data Analytics",
      slug: "business-and-data-analytics",
      order: 1,
      color: "#fffad2",
    },
    { name: "Data Science", slug: "data-science", order: 2, color: "#f0fbff" },
    { name: "Specialization Modules", slug: "specialization-modules", order: 3, color: "#fff2fa" },
  ];
  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      create: c,
      update: { name: c.name, order: c.order, color: c.color },
    });
  }
  console.log(`✓ categories (${categories.length})`);
}

async function seedLearningModes() {
  // Subtitles mirror what the LearningModes UI hardcodes today
  // (components/ui/LearningModes.tsx). Idempotent via slug upsert.
  const modes = [
    {
      slug: "weekday-bootcamp",
      name: "Weekday Bootcamp",
      subtitle: "Intensive full-day sessions for rapid upskilling.",
      order: 0,
    },
    {
      slug: "weekday-batches",
      name: "Weekday Batches",
      subtitle: "Experiential learning with in-person mentorship!",
      order: 1,
    },
    {
      slug: "self-paced-blended",
      name: "Self-paced Blended",
      subtitle: "Learn at your own speed with weekend doubt sessions.",
      order: 2,
    },
  ];
  for (const m of modes) {
    await prisma.learningMode.upsert({
      where: { slug: m.slug },
      create: m,
      update: { name: m.name, subtitle: m.subtitle, order: m.order },
    });
  }
  console.log(`✓ learning modes (${modes.length})`);
}

// Heuristic: classify a Batch.schedule string into a LearningMode slug.
function inferLearningModeSlug(schedule: string): string | null {
  const s = schedule.toLowerCase();
  if (s.includes("bootcamp")) return "weekday-bootcamp";
  if (s.includes("self") || s.includes("anytime")) return "self-paced-blended";
  if (s.includes("weekday") || s.includes("evening") || s.includes("weekend") || s.includes("am") || s.includes("pm"))
    return "weekday-batches";
  return null;
}

async function backfillBatchLearningModes() {
  const modes = await prisma.learningMode.findMany();
  const bySlug = new Map(modes.map(m => [m.slug, m.id]));
  const batches = await prisma.batch.findMany({ where: { modeId: null } });
  let tagged = 0;
  for (const b of batches) {
    const slug = inferLearningModeSlug(b.schedule);
    if (!slug) continue;
    const modeId = bySlug.get(slug);
    if (!modeId) continue;
    await prisma.batch.update({ where: { id: b.id }, data: { modeId } });
    tagged++;
  }
  console.log(`✓ batches tagged with learning mode (${tagged}/${batches.length})`);
}

type CourseSpec = {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  durationMonths: number;
  classesCount: number;
  hoursCount: number;
  experienceLabel: string;
  price: number;
  discountedPrice: number;
  emiPerMonth: number;
  brochureUrl: string;
  isFeatured: boolean;
  order: number;
  jobRoles: string[];
  keySkills: string[];
  careerSupportText: string;
  categorySlug: string;
  modules: { title: string; summary?: string; lessons: { title: string; duration?: string }[] }[];
  toolNames: string[];
  certifications: { title: string; issuer: string }[];
  projects: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  batches: { location: string; daysFromNow: number; schedule: string; seatsLeft: number }[];
};

function buildCourse(opts: {
  slug: string;
  title: string;
  category: string;
  hours: number;
  classes: number;
  months: number;
  experience: string;
  jobRoles: string[];
  keySkills: string[];
  toolNames: string[];
  isFeatured?: boolean;
  order?: number;
  batches?: { location: string; daysFromNow: number; schedule: string; seatsLeft: number }[];
}): CourseSpec {
  return {
    slug: opts.slug,
    title: opts.title,
    shortDesc: `${opts.title} with placement assistance — ${opts.hours}+ learning hours, capstone projects, and 0% EMI options.`,
    longDesc: `AnalytixLabs' Advanced Certification in ${opts.title} is a ${opts.hours}+ hour, ${opts.months}-month program for learners with no prior coding background. Cover fundamentals through advanced topics with hands-on capstones, then move into ${opts.experience.toLowerCase()} territory with mentor-led practice.`,
    thumbnailUrl: placeholder(640, 360, opts.title.replace(/ /g, "+")),
    heroImageUrl: placeholder(1200, 600, opts.title.replace(/ /g, "+")),
    durationMonths: opts.months,
    classesCount: opts.classes,
    hoursCount: opts.hours,
    experienceLabel: opts.experience,
    price: 8500000,
    discountedPrice: 6500000,
    emiPerMonth: 1200000,
    brochureUrl: "/uploads/brochure-placeholder.pdf",
    isFeatured: opts.isFeatured ?? false,
    order: opts.order ?? 0,
    jobRoles: opts.jobRoles,
    keySkills: opts.keySkills,
    careerSupportText:
      "Access to job postings, upskilling resources, and career counselling beyond the placement window. Long-term career partner, not just a training provider.",
    categorySlug: opts.category,
    modules: [
      {
        title: "Foundations",
        summary: "Pre-requisites, environment setup, basic concepts.",
        lessons: [
          { title: "Welcome and program overview", duration: "20 min" },
          { title: "Environment setup", duration: "30 min" },
          { title: "Core concepts walkthrough", duration: "45 min" },
        ],
      },
      {
        title: "Core Curriculum",
        summary: "Daily-driver skills used by practitioners.",
        lessons: [
          { title: "Module 1 — fundamentals", duration: "60 min" },
          { title: "Module 2 — applied techniques", duration: "75 min" },
          { title: "Module 3 — case studies", duration: "60 min" },
        ],
      },
      {
        title: "Advanced & Capstone",
        summary: "Industry projects, interviews, certification prep.",
        lessons: [
          { title: "Capstone briefing", duration: "30 min" },
          { title: "Interview preparation", duration: "45 min" },
          { title: "Certification submission", duration: "30 min" },
        ],
      },
    ],
    toolNames: opts.toolNames,
    certifications: [
      { title: "Industry-aligned Certification", issuer: "AnalytixLabs" },
      { title: "FutureSkills Prime (FSP)", issuer: "NASSCOM" },
    ],
    projects: [
      {
        title: "Capstone Project A",
        desc: "End-to-end mini-project mirroring real industry scope.",
      },
      {
        title: "Capstone Project B",
        desc: "Stakeholder-facing analytics deliverable with presentation.",
      },
    ],
    faqs: [
      {
        question: `Do I need prior coding experience for ${opts.title}?`,
        answer:
          "No. The curriculum starts from the absolute basics and ramps up. Pre-recorded primer modules are available for refresher or beginner needs.",
      },
      {
        question: "Are there EMI / scholarship options?",
        answer:
          "Yes — 0% EMI through our financing partners, plus merit and referral-based scholarships. Speak to admissions for current offers.",
      },
      {
        question: "What does placement support look like?",
        answer:
          "Resume reviews, mock interviews, profile-aligned job referrals, and access to our hiring-partner network. Career support continues beyond the placement window.",
      },
    ],
    batches: opts.batches ?? [
      { location: "Noida", daysFromNow: 14, schedule: "Weekends (2:00 PM)", seatsLeft: 10 },
      { location: "Gurgaon", daysFromNow: 21, schedule: "Bootcamp (9:30 AM)", seatsLeft: 8 },
      { location: "Interactive Live Online", daysFromNow: 7, schedule: "Weekends (10:00 AM)", seatsLeft: 15 },
    ],
  };
}

const COURSE_SPECS: CourseSpec[] = [
  buildCourse({
    slug: "data-science",
    title: "Advanced Certification in Data Science",
    category: "data-science",
    hours: 675,
    classes: 65,
    months: 9,
    experience: "Mid-level practitioner",
    jobRoles: [
      "Data Scientist",
      "Data Analyst",
      "Data Science Consultant",
      "Data Science Specialist",
      "Business Analyst",
    ],
    keySkills: [
      "Python for Data Analysis",
      "Statistics & Probability",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
    ],
    toolNames: ["Python", "SQL", "Tableau", "Power BI", "scikit-learn", "TensorFlow"],
    isFeatured: true,
    order: 0,
    batches: [
      { location: "Gurgaon", daysFromNow: 6, schedule: "Weekends (2:00 PM)", seatsLeft: 3 },
      { location: "Noida", daysFromNow: 13, schedule: "Weekends (2:00 PM)", seatsLeft: 10 },
      { location: "Gurgaon", daysFromNow: -7, schedule: "Bootcamp (9:30 AM)", seatsLeft: 0 },
      { location: "Bangalore", daysFromNow: 10, schedule: "Bootcamp (9:30 AM)", seatsLeft: 8 },
      { location: "Noida", daysFromNow: 10, schedule: "Bootcamp (9:30 AM)", seatsLeft: 6 },
      { location: "Interactive Live Online", daysFromNow: 103, schedule: "Evening (7:30 PM)", seatsLeft: 0 },
      { location: "Bangalore", daysFromNow: 105, schedule: "Weekends (2:00 PM)", seatsLeft: 0 },
    ],
  }),
  buildCourse({
    slug: "data-analytics",
    title: "Certified Data Analytics & AI Course",
    category: "business-and-data-analytics",
    hours: 445,
    classes: 43,
    months: 6,
    experience: "Beginner-friendly",
    jobRoles: ["Data Analyst", "Analytics Consultant", "Business Analyst"],
    keySkills: ["Excel", "SQL", "Tableau", "Power BI", "Python basics"],
    toolNames: ["Excel", "SQL", "Tableau", "Power BI", "Python"],
    isFeatured: true,
    order: 1,
    batches: [
      { location: "Gurgaon", daysFromNow: -7, schedule: "Bootcamp (9:30 AM)", seatsLeft: 0 },
      { location: "Bangalore", daysFromNow: 10, schedule: "Bootcamp (9:30 AM)", seatsLeft: 8 },
      { location: "Noida", daysFromNow: 10, schedule: "Bootcamp (9:30 AM)", seatsLeft: 6 },
      { location: "Interactive Live Online", daysFromNow: 103, schedule: "Evening (7:30 PM)", seatsLeft: 0 },
    ],
  }),
  buildCourse({
    slug: "business-analytics",
    title: "Advanced Certification in Business Analytics",
    category: "business-and-data-analytics",
    hours: 445,
    classes: 43,
    months: 6,
    experience: "Mid-level practitioner",
    jobRoles: ["Business Analyst", "Strategy Analyst", "Operations Analyst"],
    keySkills: ["Excel", "SQL", "R / Python", "Storytelling with Data"],
    toolNames: ["Excel", "SQL", "R", "Python", "Tableau"],
    isFeatured: true,
    order: 2,
    batches: [
      { location: "Gurgaon", daysFromNow: 6, schedule: "Weekends (2:00 PM)", seatsLeft: 2 },
      { location: "Noida", daysFromNow: 13, schedule: "Weekends (2:00 PM)", seatsLeft: 7 },
      { location: "Bangalore", daysFromNow: 105, schedule: "Weekends (2:00 PM)", seatsLeft: 0 },
    ],
  }),
  buildCourse({
    slug: "agentic-ai",
    title: "Low Code Agentic AI Course | Build and Deploy Intelligent Agents",
    category: "artificial-intelligence",
    hours: 335,
    classes: 33,
    months: 5,
    experience: "Advanced practitioner",
    jobRoles: ["AI Engineer", "Agentic AI Developer", "Applied LLM Engineer"],
    keySkills: ["LLMs", "Agents & Tool Use", "Vector DBs", "RAG", "Eval & Safety"],
    toolNames: ["Python", "LangChain", "OpenAI APIs", "Pinecone", "Anthropic API"],
    isFeatured: true,
    order: 3,
    batches: [
      { location: "Interactive Live Online", daysFromNow: -1, schedule: "Weekends (10:00 AM)", seatsLeft: 0 },
      { location: "Interactive Live Online", daysFromNow: 126, schedule: "Weekends (10:00 AM)", seatsLeft: 20 },
    ],
  }),
  buildCourse({
    slug: "full-stack-ai",
    title: "Full Stack Applied AI Course: Applied AI Mastery — GenAI, Computer Vision & Deep Learning",
    category: "artificial-intelligence",
    hours: 417,
    classes: 35,
    months: 6,
    experience: "Mid-level practitioner",
    jobRoles: ["Full Stack AI Engineer", "ML Engineer", "AI Product Engineer"],
    keySkills: ["Python", "ML/DL", "MLOps", "APIs", "Frontend basics"],
    toolNames: ["Python", "PyTorch", "FastAPI", "Docker", "AWS"],
    isFeatured: true,
    order: 4,
    batches: [
      { location: "Interactive Live Online", daysFromNow: -1, schedule: "Weekends (10:00 AM)", seatsLeft: 0 },
      { location: "Interactive Live Online", daysFromNow: 126, schedule: "Weekends (10:00 AM)", seatsLeft: 20 },
    ],
  }),
  buildCourse({
    slug: "generative-ai",
    title: "Generative AI Course: Hands-On Training for Career Advancement",
    category: "artificial-intelligence",
    hours: 100,
    classes: 12,
    months: 2,
    experience: "Mid-level practitioner",
    jobRoles: ["Generative AI Developer", "Prompt Engineer", "AI Specialist"],
    keySkills: ["Prompt Engineering", "LLMs", "RAG", "Fine-tuning", "Multimodal AI"],
    toolNames: ["Python", "OpenAI API", "LangChain", "Hugging Face"],
    isFeatured: true,
    order: 5,
    batches: [
      { location: "Interactive Live Online", daysFromNow: -1, schedule: "Weekends (10:00 AM)", seatsLeft: 0 },
      { location: "Interactive Live Online", daysFromNow: 126, schedule: "Weekends (10:00 AM)", seatsLeft: 20 },
    ],
  }),
  buildCourse({
    slug: "data-visualization",
    title: "Data Visualization & Analytics",
    category: "business-and-data-analytics",
    hours: 148,
    classes: 16,
    months: 3,
    experience: "Beginner-friendly",
    jobRoles: ["Visualization Specialist", "BI Analyst"],
    keySkills: ["Tableau", "Power BI", "Looker", "Storytelling"],
    toolNames: ["Tableau", "Power BI", "Looker"],
    isFeatured: false,
    order: 6,
    batches: [
      { location: "Gurgaon", daysFromNow: 6, schedule: "Weekends (2:00 PM)", seatsLeft: 0 },
      { location: "Noida", daysFromNow: 13, schedule: "Weekends (2:00 PM)", seatsLeft: 5 },
      { location: "Bangalore", daysFromNow: 105, schedule: "Weekends (2:00 PM)", seatsLeft: 0 },
    ],
  }),
  buildCourse({
    slug: "machine-learning",
    title: "Job-oriented Python Machine Learning Certification Course",
    category: "specialization-modules",
    hours: 455,
    classes: 33,
    months: 5,
    experience: "Advanced practitioner",
    jobRoles: ["ML Engineer", "Data Scientist", "AI Researcher"],
    keySkills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "NLP", "Feature Engineering"],
    toolNames: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas"],
    isFeatured: false,
    order: 7,
    batches: [
      { location: "Gurgaon", daysFromNow: -21, schedule: "Weekends (2:00 PM)", seatsLeft: 4 },
      { location: "Bangalore", daysFromNow: -21, schedule: "Weekends (2:00 PM)", seatsLeft: 5 },
      { location: "Noida", daysFromNow: -21, schedule: "Weekends (2:00 PM)", seatsLeft: 6 },
      { location: "Interactive Live Online", daysFromNow: 60, schedule: "Weekends (10:00 AM)", seatsLeft: 20 },
    ],
  }),
  buildCourse({
    slug: "data-science-python",
    title: "Data Science Using Python",
    category: "data-science",
    hours: 265,
    classes: 23,
    months: 4,
    experience: "Beginner-friendly",
    jobRoles: ["Python Data Analyst", "Junior Data Scientist", "Data Engineer"],
    keySkills: ["Python", "Pandas", "NumPy", "Matplotlib", "ML basics"],
    toolNames: ["Python", "Pandas", "NumPy", "Jupyter"],
    isFeatured: false,
    order: 8,
    batches: [
      { location: "Bangalore", daysFromNow: 202, schedule: "Weekends (2:00 PM)", seatsLeft: 0 },
      { location: "Interactive Live Online", daysFromNow: 45, schedule: "Weekends (10:00 AM)", seatsLeft: 15 },
    ],
  }),
];

async function seedCoursesAndDescendants() {
  // distinct tools across all courses; deterministic ids so re-runs don't dup
  const toolNames = Array.from(new Set(COURSE_SPECS.flatMap((c) => c.toolNames)));
  for (const name of toolNames) {
    const id = nameToId(name);
    await prisma.tool.upsert({
      where: { id },
      create: { id, name },
      update: { name },
    });
  }

  // wipe + recreate per-course descendants for idempotency
  await prisma.batch.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.courseModule.deleteMany();
  await prisma.certification.deleteMany();
  await prisma.project.deleteMany();
  // disconnect tools from all courses, then re-link below
  const allCourses = await prisma.course.findMany({ select: { id: true } });
  for (const c of allCourses) {
    await prisma.course.update({
      where: { id: c.id },
      data: { tools: { set: [] } },
    });
  }
  // course-scoped FAQs only — leave GLOBAL/ABOUT FAQs alone
  await prisma.faq.deleteMany({ where: { courseId: { not: null } } });

  for (const spec of COURSE_SPECS) {
    const category = await prisma.category.findUnique({ where: { slug: spec.categorySlug } });
    if (!category) throw new Error(`category ${spec.categorySlug} missing — seed order issue`);

    const tools = await prisma.tool.findMany({ where: { name: { in: spec.toolNames } } });

    const course = await prisma.course.upsert({
      where: { slug: spec.slug },
      create: {
        slug: spec.slug,
        title: spec.title,
        shortDesc: spec.shortDesc,
        longDesc: spec.longDesc,
        thumbnailUrl: spec.thumbnailUrl,
        heroImageUrl: spec.heroImageUrl,
        durationMonths: spec.durationMonths,
        classesCount: spec.classesCount,
        hoursCount: spec.hoursCount,
        experienceLabel: spec.experienceLabel,
        price: spec.price,
        discountedPrice: spec.discountedPrice,
        emiPerMonth: spec.emiPerMonth,
        brochureUrl: spec.brochureUrl,
        isFeatured: spec.isFeatured,
        order: spec.order,
        jobRoles: spec.jobRoles,
        keySkills: spec.keySkills,
        careerSupportText: spec.careerSupportText,
        categoryId: category.id,
        tools: { connect: tools.map((t) => ({ id: t.id })) },
      },
      update: {
        title: spec.title,
        shortDesc: spec.shortDesc,
        longDesc: spec.longDesc,
        thumbnailUrl: spec.thumbnailUrl,
        heroImageUrl: spec.heroImageUrl,
        durationMonths: spec.durationMonths,
        classesCount: spec.classesCount,
        hoursCount: spec.hoursCount,
        experienceLabel: spec.experienceLabel,
        price: spec.price,
        discountedPrice: spec.discountedPrice,
        emiPerMonth: spec.emiPerMonth,
        brochureUrl: spec.brochureUrl,
        isFeatured: spec.isFeatured,
        order: spec.order,
        jobRoles: spec.jobRoles,
        keySkills: spec.keySkills,
        careerSupportText: spec.careerSupportText,
        categoryId: category.id,
        tools: { connect: tools.map((t) => ({ id: t.id })) },
      },
    });

    // Modules + lessons
    for (let m = 0; m < spec.modules.length; m++) {
      const mod = spec.modules[m];
      const created = await prisma.courseModule.create({
        data: {
          courseId: course.id,
          title: mod.title,
          summary: mod.summary,
          order: m,
        },
      });
      for (let l = 0; l < mod.lessons.length; l++) {
        const lesson = mod.lessons[l];
        await prisma.lesson.create({
          data: {
            moduleId: created.id,
            title: lesson.title,
            duration: lesson.duration,
            order: l,
          },
        });
      }
    }

    // Certifications
    for (const cert of spec.certifications) {
      await prisma.certification.create({
        data: {
          courseId: course.id,
          title: cert.title,
          issuer: cert.issuer,
          imageUrl: placeholder(360, 240, cert.issuer.replace(/ /g, "+")),
        },
      });
    }

    // Projects
    for (const p of spec.projects) {
      await prisma.project.create({
        data: {
          courseId: course.id,
          title: p.title,
          desc: p.desc,
          imageUrl: placeholder(640, 360, p.title.replace(/ /g, "+")),
        },
      });
    }

    // Batches
    for (const b of spec.batches) {
      await prisma.batch.create({
        data: {
          courseId: course.id,
          location: b.location,
          startDate: new Date(Date.now() + b.daysFromNow * 24 * 60 * 60 * 1000),
          schedule: b.schedule,
          seatsLeft: b.seatsLeft,
        },
      });
    }

    // Course-scoped FAQs
    for (let i = 0; i < spec.faqs.length; i++) {
      const f = spec.faqs[i];
      await prisma.faq.create({
        data: {
          courseId: course.id,
          scope: course.id,
          question: f.question,
          answer: f.answer,
          order: i,
        },
      });
    }
  }
  console.log(`✓ courses (${COURSE_SPECS.length}) with modules / lessons / batches / tools / certs / projects / faqs`);
}

function nameToId(name: string): string {
  // deterministic cuid-ish id for tools so re-runs don't duplicate
  return "tool_" + name.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 40);
}

async function seedTestimonials() {
  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Piyush Ganar",
        role: "Assistant General Manager — Sales Marketing",
        company: "Findability Sciences",
        photoUrl: placeholder(160, 160, "PG"),
        quote:
          "The course material is very easy to understand and the case studies were based on real time business problems. The gates of AnalytixLabs are always open for students for any kind of help and guidance. I would recommend ALabs to all.",
        rating: 5,
        order: 0,
      },
      {
        name: "Anika Sharma",
        role: "Senior Data Analyst",
        company: "Accenture",
        photoUrl: placeholder(160, 160, "AS"),
        quote:
          "Mentors went deep on the why, not just the how. Capstones felt like a real on-the-job sprint. Six months later I was leading a small reporting team.",
        rating: 5,
        order: 1,
      },
      {
        name: "Rohit Verma",
        role: "Data Scientist",
        company: "American Express",
        photoUrl: placeholder(160, 160, "RV"),
        quote:
          "I came in with zero coding background. The pacing was honest about that — slow start, real ramp, and by capstone I was deploying models with confidence.",
        rating: 5,
        order: 2,
      },
      {
        name: "Priya Iyer",
        role: "Business Analyst",
        company: "McKinsey & Company",
        photoUrl: placeholder(160, 160, "PI"),
        quote:
          "Placement support didn't stop at offer day. They kept checking in months in, suggested upskilling tracks, and helped me prep for an internal promotion.",
        rating: 5,
        order: 3,
      },
    ],
  });
  console.log("✓ testimonials (4)");
}

async function seedHiringPartners() {
  await prisma.hiringPartner.deleteMany();
  const partners = [
    "Accenture",
    "American Express",
    "AbsolutData",
    "Axtria",
    "Bank of America",
    "McKinsey",
    "Capgemini",
    "Tiger Analytics",
  ];
  await prisma.hiringPartner.createMany({
    data: partners.map((name, i) => ({
      name,
      logoUrl: placeholder(180, 60, name.replace(/ /g, "+")),
      order: i,
    })),
  });
  console.log(`✓ hiring partners (${partners.length})`);
}

async function seedTeamMembers() {
  await prisma.teamMember.deleteMany();
  await prisma.teamMember.createMany({
    data: [
      {
        name: "Sumeet Bansal",
        role: "Founder & Lead Faculty",
        photoUrl: placeholder(280, 280, "SB"),
        bio: "15+ years across analytics consulting and applied AI. Founded AnalytixLabs in 2011 to bridge the gap between academic ML and industry practice.",
        linkedinUrl: "https://www.linkedin.com/in/sumeetbansal",
        order: 0,
      },
      {
        name: "Anuradha Mehta",
        role: "Head of Curriculum",
        photoUrl: placeholder(280, 280, "AM"),
        bio: "Designs program tracks, capstone briefs, and the placement-readiness program.",
        linkedinUrl: "https://www.linkedin.com/in/anuradha-mehta",
        order: 1,
      },
      {
        name: "Vikram Joshi",
        role: "Senior Faculty — Data Engineering",
        photoUrl: placeholder(280, 280, "VJ"),
        bio: "Spent a decade across BFSI data platforms. Leads the SQL, warehousing, and pipelines stream.",
        linkedinUrl: "https://www.linkedin.com/in/vikram-joshi-de",
        order: 2,
      },
    ],
  });
  console.log("✓ team members (3)");
}

async function seedGlobalFaqs() {
  // delete only GLOBAL/ABOUT/CONTACT-scoped — leave course-scoped untouched
  await prisma.faq.deleteMany({
    where: { scope: { in: ["GLOBAL", "ABOUT", "CONTACT"] } },
  });

  const global = [
    {
      question: "Does the institute offer any discounts?",
      answer:
        "We believe in delivering high-quality learning at fair value. Pricing is transparent and identical for every learner. Merit and referral-based scholarships are available — speak to an admissions counselor for ongoing offers.",
    },
    {
      question: "What is the best course to get started with data analytics?",
      answer:
        "If you're new to analytics, the Data Analytics certification is the most direct path. It assumes no prior coding background and builds Excel → SQL → Python → BI fluency.",
    },
    {
      question: "What distinguishes AnalytixLabs as a data analytics institute?",
      answer:
        "Faculty with real industry tenure, structured post-class mentorship, capstones that mirror real client engagements, and a placement-readiness program rather than just lectures.",
    },
    {
      question: "How many candidates have trained under AnalytixLabs?",
      answer:
        "Over 15,000 candidates across our cohort programs since 2011, with 130,000+ training hours delivered.",
    },
  ];
  for (let i = 0; i < global.length; i++) {
    await prisma.faq.create({
      data: { ...global[i], scope: "GLOBAL", order: i },
    });
  }

  const about = [
    {
      question: "What is a dual / co-branded certification?",
      answer:
        "Select programs offer a co-branded credential alongside an industry partner — adding signal weight to your resume in addition to the AnalytixLabs certificate.",
    },
    {
      question: "What does Deep Learning with Python training cover?",
      answer:
        "Foundations of neural networks, CNNs, RNNs/transformers, model deployment, and a capstone end-to-end project. Python + PyTorch focused.",
    },
    {
      question: "What is the Analytics Edge course?",
      answer:
        "A short-format applied analytics course aimed at working professionals who want sharper decision-modelling skills without the full data-science depth.",
    },
    {
      question: "What comes under the Machine Learning course?",
      answer:
        "Statistical foundations, supervised + unsupervised learning, model selection and evaluation, intro to deep learning, and capstone deployment.",
    },
  ];
  for (let i = 0; i < about.length; i++) {
    await prisma.faq.create({
      data: { ...about[i], scope: "ABOUT", order: i },
    });
  }
  console.log(`✓ global FAQs (${global.length}) + about FAQs (${about.length})`);
}

async function seedBlogPosts() {
  const posts = [
    {
      slug: "parametric-vs-non-parametric-test",
      title:
        "Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?",
      excerpt:
        "Picking the right test is half the work. A practical decision guide grounded in real cases.",
      authorName: "AnalytixLabs Editorial",
    },
    {
      slug: "what-is-agentic-ai",
      title: "What is Agentic AI – A Technical Guide for Beginners",
      excerpt:
        "From prompt-and-response chatbots to tool-using autonomous agents — what changed and what's coming next.",
      authorName: "AnalytixLabs Editorial",
    },
    {
      slug: "list-vs-tuple-in-python",
      title: "List vs Tuple in Python: Understanding Key Differences",
      excerpt:
        "Same shape, different intent. When the immutability of a tuple is the right tool.",
      authorName: "AnalytixLabs Editorial",
    },
  ];
  for (const p of posts) {
    await prisma.blogPost.upsert({
      where: { slug: p.slug },
      create: {
        ...p,
        coverUrl: placeholder(800, 450, p.title.split(" ").slice(0, 3).join("+")),
        body: `# ${p.title}\n\n${p.excerpt}\n\nFull article body to be migrated from the live blog in a follow-up pass.`,
        publishedAt: new Date(),
        isPublished: true,
        tags: ["analytics", "career"],
      },
      update: { excerpt: p.excerpt, isPublished: true },
    });
  }
  console.log(`✓ blog posts (${posts.length})`);
}

async function seedPages() {
  const pages = [
    {
      slug: "home",
      title: "Home",
      blocks: {
        // Hero title — three editable slots that compose into the rich-text headline.
        // Locked structure: prefix " " brand-gradient " " suffix (gradient styling stays in code).
        "hero.title.prefix": "Become a",
        "hero.title.brand": "Data Scientist",
        "hero.title.suffix": "with Real Industry Projects & Placement Support",
        "hero.tagline": "Since 2011",
        // The subtitle below the hero title (was previously "hero.heading").
        "hero.subheading":
          "Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects.",
        // Legacy alias, kept for one release so any external admin previews don't break.
        "hero.heading":
          "Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects.",
        "hero.cta1": { label: "Explore Courses", url: "/courses" },
        "hero.cta2": { label: "Book Free Career Consultation", url: "/contact" },
        "hero.rating": "4.8",
        "hero.ratedBy": "5000+",
        "whyUs.items": [
          "Data Science & Analytics",
          "Artificial Intelligence (AI)",
          "Full Stack AI",
          "Agentic AI Course",
        ],
        // Lead-capture cards (Phase B2)
        "leadCard1.title": "Fresher / Student",
        "leadCard1.subtitle": "Starting or preparing to start your carrer",
        "leadCard1.bestFor": "Best for",
        "leadCard2.title": "Experienced Professional",
        "leadCard2.subtitle": "Working, switching roles, or restarting your career",
        "leadCard2.bestFor": "Best for",
        // About + city highlights (Phase B4)
        "about.heading": "AnalytixLabs is a top-ranked Data Science Institute",
        "about.body":
          "When it comes to industry-relevant data analytics courses and certifications. Offering a wide array of meticulously curated curriculums for students from various backgrounds, AnalytixLabs has led thousands of aspirants to desired job roles in data engineering, data science, artificial intelligence, and business analytics since 2011.",
        "about.cityIntro": "You can pick a data science course in :",
        "about.cityHighlights": [
          "One to one mentorship",
          "Industry driven curriculum curated",
          "Experiential learning",
          "Extensive post-class sessions",
        ],
      },
    },
    {
      slug: "courses",
      title: "Courses",
      blocks: {
        "hero.heading": "AI & Data Science",
        "filterPills": ["Agentic AI Course", "Data Science", "Full Stack AI"],
      },
    },
    {
      slug: "pdp",
      title: "Course Detail",
      blocks: {
        "fees.note":
          "We deliver high-quality learning experience at a good value for your hard-earned money. Our fee structure is competitive considering the curriculum, hours, and student support — and scholarships and referral benefits are available based on candidate profile. Contact admissions for current offers.",
      },
    },
    {
      slug: "contact",
      title: "Contact",
      blocks: {
        "hero.heading": "CONTACT US",
        "hero.subheading":
          "Analytixlabs is here to support you at every step of your journey.",
        "getInTouch.heading": "Get in touch",
        "getInTouch.description":
          "Get in touch with our team to explore solutions, training, or partnerships — we're here to help.",
        "form.heading": "Request a Call back",
        "form.fields": [
          { key: "name", label: "Name", placeholder: "Your Name", type: "text", required: true },
          { key: "code", label: "Code", placeholder: "+91", type: "text", required: false },
          { key: "phone", label: "Mobile", placeholder: "Mobile", type: "tel", required: true },
          { key: "email", label: "Email", placeholder: "Your Email", type: "email", required: true },
          { key: "city", label: "Select City", placeholder: "Select City", type: "select", required: false },
        ],
        "form.signupCta": { label: "Sign up→", source: "newsletter" },
        "form.submitCta": { label: "Send", source: "callback-request" },
        "closingCta.heading": "Unlock Insights. Enroll Now. Transform Tomorrow.",
        "closingCta.subheading": "Change the course of your career now",
        "closingCta.button": { label: "Contact Us", url: "/contact" },
      },
    },
    {
      slug: "about",
      title: "About AnalytixLabs",
      blocks: {
        "hero.heading":
          "Others focus on completing a syllabus. We focus on building a career.",
        "hero.headingHighlight": "building a career.",
        "hero.trustStrip": "Rated by 5000+ learners",
        "whyTrust.heading": "Why Trust AnalytixLabs?",
        "whyTrust.items": [
          {
            iconKey: "shield-check",
            title: "Job Guarantee Assurance",
            description:
              "We back our training with a clear commitment. Put in the work, and we ensure you land the right role.",
          },
          {
            iconKey: "rocket",
            title: "Placement Readiness Program (PRP)",
            description:
              "Resume reviews, mocks, and profile-aligned referrals — structured rather than ad-hoc.",
          },
          {
            iconKey: "users",
            title: "Structured Post-Class Mentorship",
            description:
              "Office-hours, capstone reviews, and 1:1 sessions continue past the live module.",
          },
          {
            iconKey: "code",
            title: "Industry-Relevant, Hands-On Curriculum",
            description:
              "Capstones built around real client briefs, not toy datasets.",
          },
          {
            iconKey: "academic-cap",
            title: "Faculty With Real Industry Experience",
            description:
              "Mentors with active or recent practitioner tenure across BFSI, retail, healthcare, and tech.",
          },
          {
            iconKey: "clock",
            title: "Flexible Learning + Continuous Access",
            description:
              "Recordings, refresher modules, and lifetime access to selected resources.",
          },
        ],
        "industryExperience.heading":
          "Deep Industry Experience That Shapes How We Teach",
        "industryExperience.body":
          "Since 2011, AnalytixLabs has been teaching data science, AI, and analytics — long before these fields became mainstream. Our learners are now at Accenture, American Express, AbsolutData, Axtria, Bank of America, and McKinsey, applying analytics independently and growing into leadership roles.",
        "industryExperience.companies": [
          "Accenture",
          "American Express",
          "AbsolutData",
          "Axtria",
          "Bank of America",
          "McKinsey",
        ],
        "testimonials.heading": "What Students Say About Us?",
        "faqs.heading": "Frequently Asked Questions",
        "closingCta.heading": "Still have questions?",
        "closingCta.body":
          "Not sure which course is right for you? Talk to our program advisors and get personalized guidance on curriculum, career outcomes, and the best learning path based on your goals.",
        "closingCta.button": { label: "Call Us", url: `tel:${PHONE.replace(/\s/g, "")}` },
      },
    },
    {
      slug: "for-corporates",
      title: "For Corporates",
      blocks: {
        "hero.heading":
          "Corporate Training Programs Built Around Your Team's Real Workflows",
        "hero.subheading":
          "Custom curriculum, dedicated cohorts, and outcomes measured against your business KPIs.",
        "comparison.columns": [
          { title: "Self-Paced", subtitle: "Async, learner-driven" },
          { title: "Live Cohort", subtitle: "Mentor-led, fixed schedule" },
          { title: "Enterprise", subtitle: "Customized for your team" },
        ],
        "comparison.rows": [
          { label: "Curated curriculum", values: [true, true, true] },
          { label: "Live mentor sessions", values: [false, true, true] },
          { label: "Cohort-private Slack / Teams", values: [false, true, true] },
          { label: "Custom capstones using your data", values: [false, false, true] },
          { label: "Dedicated program manager", values: [false, false, true] },
        ],
        "services.items": [
          {
            iconKey: "settings",
            title: "Tailored Curriculum",
            description:
              "Skills mapped to your team's role-by-role gap analysis — not a one-size-fits-all syllabus.",
          },
          {
            iconKey: "monitor",
            title: "Flexible Delivery",
            description:
              "On-site, virtual, or hybrid. Your timezone, your toolchain, your security posture.",
          },
          {
            iconKey: "users",
            title: "Outcome Tracking",
            description:
              "Per-cohort dashboards on completion, capstone quality, and post-program application.",
          },
        ],
        "form.heading": "Talk to our corporate team",
        "form.subheading":
          "Tell us about your team and goals — we'll come back with a tailored proposal.",
      },
    },
    {
      slug: "why-us",
      title: "Why Us",
      blocks: {
        "hero.heading": "Why learners choose AnalytixLabs",
        "hero.subheading":
          "Industry-tenured faculty, capstones that look like real work, and placement support that doesn't end on offer day.",
      },
    },
    {
      slug: "not-found",
      title: "Page Not Found",
      blocks: {
        heading: "We couldn't find that page.",
        body: "The link may have moved or expired. Try the home page or use the menu to find your course.",
        cta: { label: "Back to home", url: "/" },
      },
    },
  ];
  for (const p of pages) {
    await prisma.page.upsert({
      where: { slug: p.slug },
      create: { slug: p.slug, title: p.title, blocks: p.blocks },
      update: { title: p.title, blocks: p.blocks },
    });
  }
  console.log(`✓ pages (${pages.length})`);
}

async function seedNavItems() {
  await prisma.navItem.deleteMany();

  const topNav = [
    { label: "Upcoming Batches", url: "/batches" },
    { label: "Explore Courses", url: "/courses" },
    { label: "Why Us", url: "/why-us" },
    { label: "For Corporates", url: "/for-corporates" },
    { label: "Blog", url: "https://www.analytixlabs.co.in/blog/" },
    { label: "Contact Us", url: "/contact" },
    { label: "Sign in", url: "https://lms.analytixlabs.co.in/" },
    { label: "Create Free Account", url: "https://lms.analytixlabs.co.in/signup" },
  ];
  for (let i = 0; i < topNav.length; i++) {
    await prisma.navItem.create({
      data: { ...topNav[i], group: "TOP_NAV", order: i },
    });
  }

  const footerLinks = [
    // About Us column
    { label: "Why Us", url: "/why-us", section: "About" },
    { label: "Courses", url: "/courses", section: "About" },
    { label: "About Faculty", url: "/about", section: "About" },
    { label: "Contact Us", url: "/contact", section: "About" },
    { label: "AnalytixLabs Placements", url: "/why-us#placements", section: "About" },
    { label: "System Requirements", url: "/about#requirements", section: "About" },
    // Etcetera column
    { label: "System Requirements", url: "/about#requirements", section: "Etcetera" },
    { label: "Free Resources", url: "/blog?tag=resources", section: "Etcetera" },
    { label: "Success Stories", url: "/about#testimonials", section: "Etcetera" },
    {
      label: "Colleges Universities Training Courses",
      url: "/for-corporates",
      section: "Etcetera",
    },
    // Blog column (just the static link; latest 3 posts pulled live)
    { label: "Submit a Guest Post", url: "/contact?topic=guest-post", section: "Blog" },
    // Legal
    { label: "Privacy Policy", url: "/privacy", section: "Legal" },
    { label: "Terms and Conditions", url: "/terms", section: "Legal" },
    { label: "Sitemap", url: "/sitemap.xml", section: "Legal" },
  ];
  for (let i = 0; i < footerLinks.length; i++) {
    await prisma.navItem.create({
      data: {
        label: footerLinks[i].label,
        url: footerLinks[i].url,
        group: "FOOTER_LINKS",
        order: i,
      },
    });
  }

  const footerCities = [
    "Data Analyst Training Course In Delhi",
    "Data Analyst Training Course In Noida",
    "Data Analyst Training Course In Gurgaon",
    "Data Analyst Training Course In Bangalore",
    "Data Science Course in Delhi",
    "Data Science Course In Noida",
    "Data Science Course In Gurgaon",
    "Data Science Course In Bangalore",
    "Business Analyst Course In Bangalore",
    "Business Analyst Course In Delhi",
    "Artificial Intelligence Course in Bangalore",
    "Artificial Intelligence Course in Delhi",
    "Generative AI Course",
  ];
  for (let i = 0; i < footerCities.length; i++) {
    await prisma.navItem.create({
      data: {
        label: footerCities[i],
        url: `/courses?city=${encodeURIComponent(footerCities[i])}`,
        group: "FOOTER_CITIES",
        order: i,
      },
    });
  }

  console.log(
    `✓ nav items: top (${topNav.length}) + footer-links (${footerLinks.length}) + footer-cities (${footerCities.length})`,
  );
}

async function seedMasterclass() {
  await prisma.masterclass.deleteMany();
  await prisma.masterclass.create({
    data: {
      title: "Free Masterclass: Building Your First Agentic AI App",
      bannerUrl: placeholder(1200, 400, "Free+Masterclass"),
      registerUrl: "/contact?source=masterclass",
      startsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      isActive: true,
    },
  });
  console.log("✓ masterclass (1 active)");
}

async function seedGlobalBlocks() {
  const blocks = [
    {
      key: "header",
      label: "Header & Navigation",
      data: {
        logoUrl: "",
        logoAlt: "AnalytixLabs",
        signInLabel: "Sign In",
        signInHref: "https://lms.analytixlabs.co.in",
        createAccountLabel: "Create Free Account",
        createAccountHref: "https://lms.analytixlabs.co.in/register",
        navLinks: [
          { label: "Upcoming Batches", href: "/batches" },
          { label: "Explore Courses", href: "/courses" },
          { label: "Why Us", href: "/why-us" },
          { label: "For Corporates", href: "/for-corporates" },
          { label: "Blog", href: "/blog" },
          { label: "Contact Us", href: "/contact" },
        ],
        megaMenuCategories: [
          { label: "Artificial Intelligence", href: "/courses?category=artificial-intelligence" },
          { label: "Business & Data Analytics", href: "/courses?category=business-analytics" },
          { label: "Data Science", href: "/courses?category=data-science" },
          { label: "Data Visualization & Analytics", href: "/courses?category=data-visualization" },
        ],
      },
    },
    {
      key: "footer",
      label: "Footer",
      data: {
        tagline: "AnalytixLabs — India's #1 Data Science & AI Training Institute since 2011.",
        copyrightText: "© 2024 AnalytixLabs. All rights reserved.",
        phone: "+91-8010-841-841",
        email: "enquiry@analytixlabs.co.in",
        address: "Sector 44, Gurgaon, Haryana — 122003",
        social: {
          linkedin: "https://www.linkedin.com/school/analytixlabs/",
          facebook: "https://www.facebook.com/AnalytixLabs",
          twitter: "",
          instagram: "https://www.instagram.com/analytixlabs/",
          youtube: "https://www.youtube.com/c/AnalytixLabs",
        },
        col1: [
          { label: "About Us", href: "/about" },
          { label: "Why Us", href: "/why-us" },
          { label: "For Corporates", href: "/for-corporates" },
          { label: "Contact Us", href: "/contact" },
          { label: "Blog", href: "/blog" },
        ],
        col2: [
          { label: "Data Science Course", href: "/courses/data-science" },
          { label: "Agentic AI Course", href: "/courses/agentic-ai" },
          { label: "Business Analytics", href: "/courses/business-analytics" },
          { label: "Data Analyst Course", href: "/courses/data-analytics" },
          { label: "Explore All Courses", href: "/courses" },
        ],
        col3: [
          { label: "Upcoming Batches", href: "/batches" },
          { label: "Free Masterclass", href: "/contact?source=masterclass" },
          { label: "Download Brochure", href: "/contact?source=brochure" },
          { label: "Careers", href: "https://www.analytixlabs.co.in/careers" },
          { label: "Privacy Policy", href: "/privacy" },
        ],
        cityLinks: [
          { label: "Data Science Course in Delhi", href: "/courses/data-science?city=Delhi" },
          { label: "Data Science Course in Noida", href: "/courses/data-science?city=Noida" },
          { label: "Data Science Course in Gurgaon", href: "/courses/data-science?city=Gurgaon" },
          { label: "Data Science Course in Bangalore", href: "/courses/data-science?city=Bangalore" },
        ],
      },
    },
    {
      key: "cta_banner",
      label: "CTA Banner",
      data: {
        headline: "Unlock Insights. Enroll Now.",
        subhead: "Join 60,000+ professionals who have transformed their careers with AnalytixLabs.",
        ctaLabel: "Explore Courses",
        ctaHref: "/courses",
        image: { url: "", alt: "" },
        isActive: true,
      },
    },
    {
      key: "call_back",
      label: "Call-back Form",
      data: {
        headline: "Request a Call Back",
        subhead: "Our counsellors will get back to you within 24 hours.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        phonePlaceholder: "Your Phone",
        messagePlaceholder: "How can we help?",
        submitLabel: "Request a Call Back",
        successMessage: "Thank you! We'll get back to you within 24 hours.",
        recipientEmails: ["enquiry@analytixlabs.co.in"],
        cityOptions: ["Gurgaon", "Noida", "Bangalore", "Online"],
      },
    },
  ] as const;

  for (const block of blocks) {
    await prisma.globalBlock.upsert({
      where: { key: block.key },
      update: {},
      create: block,
    });
  }

  console.log(`✓ global blocks (${blocks.length})`);
}

async function seedPdpReferenceCourse() {
  // Target both the spec slug and the existing seed slug. Whichever exists
  // gets the full PDP block written.
  const candidateSlugs = [
    "data-science-course-with-certification-and-placement",
    "data-science",
  ];

  const pdpData = {
    pdpAlumniText: "20,000+",
    pdpStarsTotal: 675,
    pdpRatingScale: 10.0,
    pdpTaxNote: "Inclusive of all taxes",
    pdpEmiNote: "Easy EMI available",
    pdpCities: ["Noida", "Gurgaon", "Bangalore"],
    pdpStatTiles: [
      { label: "Total Hours", value: "675" },
      { label: "Live Classes", value: "65" },
      { label: "Modules", value: "11" },
    ],
    pdpOverviewHighlights: [
      { title: "Industry-aligned curriculum", description: "Co-designed with hiring managers at top analytics firms." },
      { title: "100% placement assistance", description: "Dedicated career services until you land your role." },
      { title: "Live project portfolio", description: "Build 6 capstone projects across domains." },
      { title: "1:1 mentorship", description: "Personal mentor from day one through placement." },
      { title: "Lifetime LMS access", description: "Re-watch every recorded session forever." },
    ],
    pdpCurriculumHeading: "Comprehensive Data Science Curriculum",
    pdpCurriculumSubheading: "11 modules covering everything from statistics to deep learning, designed by industry experts.",
    pdpCurriculumSummary: {
      liveHours: "300",
      selfStudyHours: "375",
      placementWeeks: "12",
      includes: [
        "Live instructor-led classes",
        "Hands-on labs every week",
        "6 capstone projects",
        "Resume + LinkedIn review",
        "Mock interviews",
        "Job placement support",
      ],
    },
    pdpTestimonialStrip: [
      {
        quote: "The hands-on projects gave me real confidence going into interviews. Within 3 months I had three offers.",
        name: "Priya Sharma",
        role: "Data Scientist",
        company: "Accenture",
        stars: 5,
        photoUrl: "https://placehold.co/120x120/0EC9C9/FFFFFF?text=PS",
      },
      {
        quote: "Best decision I made for my career. The mentors are world-class.",
        name: "Rohit Kumar",
        role: "ML Engineer",
        company: "Flipkart",
        stars: 5,
        photoUrl: "https://placehold.co/120x120/C8F032/0B1B3B?text=RK",
      },
    ],
    pdpProjectDomains: [
      { domain: "Healthcare", title: "Diabetes Risk Prediction", description: "Build an ML model on real patient data to predict diabetes risk.", icon: "🏥" },
      { domain: "Retail", title: "Customer Churn Analysis", description: "Predict customer churn for an e-commerce brand with 1M+ users.", icon: "🛒" },
      { domain: "Finance", title: "Credit Card Fraud Detection", description: "Detect fraudulent transactions in real-time using anomaly detection.", icon: "💳" },
      { domain: "NLP", title: "Sentiment Analyzer", description: "Build a sentiment analysis model on Twitter data using transformers.", icon: "💬" },
    ],
    pdpCareerSupport: {
      intro: "Our placement team works with 500+ hiring partners to match you with the right role.",
      features: [
        { title: "Resume Building", body: "Industry-standard resume crafting with our career coaches." },
        { title: "Mock Interviews", body: "Unlimited mock interviews with hiring managers." },
        { title: "Portfolio Review", body: "Curated GitHub portfolio that showcases your best work." },
        { title: "Job Referrals", body: "Direct referrals to open roles at our hiring partners." },
      ],
      partnerLogos: [
        { name: "Accenture", logoUrl: "https://placehold.co/120x60/FFFFFF/0B1B3B?text=Accenture" },
        { name: "Amex", logoUrl: "https://placehold.co/120x60/FFFFFF/0B1B3B?text=Amex" },
        { name: "Flipkart", logoUrl: "https://placehold.co/120x60/FFFFFF/0B1B3B?text=Flipkart" },
        { name: "Wipro", logoUrl: "https://placehold.co/120x60/FFFFFF/0B1B3B?text=Wipro" },
        { name: "Genpact", logoUrl: "https://placehold.co/120x60/FFFFFF/0B1B3B?text=Genpact" },
        { name: "TCS", logoUrl: "https://placehold.co/120x60/FFFFFF/0B1B3B?text=TCS" },
      ],
    },
    pdpHowToApply: [
      { stepNumber: "1", title: "Apply Online", description: "Submit your application in under 2 minutes." },
      { stepNumber: "2", title: "Counseling Call", description: "Speak with an advisor about your goals and fit." },
      { stepNumber: "3", title: "Choose Batch", description: "Pick a learning mode and start date that suits you." },
      { stepNumber: "4", title: "Begin Learning", description: "Get LMS access and start your first module." },
    ],
    pdpStudentStories: [
      { photoUrl: "https://placehold.co/200x200/0EC9C9/FFFFFF?text=AB", name: "Anjali B.", credential: "Placed @ Accenture", role: "Senior Data Scientist", quote: "Went from finance background to senior data scientist in 9 months." },
      { photoUrl: "https://placehold.co/200x200/C8F032/0B1B3B?text=RM", name: "Rahul M.", credential: "Placed @ Genpact", role: "ML Engineer", quote: "The capstone projects were exactly what hiring managers wanted to see." },
      { photoUrl: "https://placehold.co/200x200/0B1B3B/FFFFFF?text=SK", name: "Sneha K.", credential: "Promoted at TCS", role: "Lead Data Analyst", quote: "Got promoted internally within 6 months of completing the course." },
    ],
    pdpRelatedArticles: [
      { category: "Career", readTime: "6 min read", title: "How to break into data science in 2026", excerpt: "A practical roadmap based on what's working for our alumni.", author: "AnalytixLabs Team", url: "/blog/break-into-data-science", imageUrl: "https://placehold.co/600x340/0B1B3B/FFFFFF?text=Career" },
      { category: "Tutorial", readTime: "10 min read", title: "Top 10 Python libraries for data scientists", excerpt: "The must-know tooling every working data scientist relies on.", author: "AnalytixLabs Team", url: "/blog/python-libraries", imageUrl: "https://placehold.co/600x340/0EC9C9/FFFFFF?text=Python" },
      { category: "Insights", readTime: "8 min read", title: "Salary trends for data scientists in India", excerpt: "What you can expect to earn at every experience level.", author: "AnalytixLabs Team", url: "/blog/salary-trends", imageUrl: "https://placehold.co/600x340/C8F032/0B1B3B?text=Salary" },
    ],
    pdpCtaBanner: {
      headline: "Ready to become a Data Scientist?",
      subheadline: "Join 20,000+ alumni who transformed their careers with AnalytixLabs.",
      ctaText: "Talk to a Counselor",
      ctaUrl: "#contact",
      bgColor: "#0B1B3B",
    },
    pdpContactBlock: {
      heading: "Have questions? Let's talk.",
      description: "Our advisors will help you choose the right batch and answer any questions you have.",
    },
    pdpFaqsData: [
      { question: "What is the eligibility to enroll?", answer: "Any graduate with a basic understanding of mathematics. No prior coding experience required." },
      { question: "What's the placement support like?", answer: "Dedicated career services with mock interviews, resume reviews, and direct referrals to 500+ hiring partners." },
      { question: "Can I attend live classes if I miss one?", answer: "Yes — every session is recorded and available on the LMS within 24 hours." },
      { question: "Is EMI available?", answer: "Yes, we offer no-cost EMI options across 3, 6, and 12 month tenures." },
      { question: "Will I get a certificate?", answer: "Yes — an industry-recognized AnalytixLabs certificate, plus an optional co-branded certificate from our university partner." },
    ],
    pdpLearningModesData: [
      { name: "Classroom Bootcamp", description: "Immersive in-person bootcamp at our city campuses. Best for full-time career-switchers.", icon: "🏫" },
      { name: "Live Online", description: "Instructor-led weekend or weekday batches. Same content, same outcomes, from anywhere.", icon: "💻" },
      { name: "Self-paced Blended", description: "Pre-recorded sessions + weekly live mentor sessions. Perfect for busy professionals.", icon: "🎯" },
    ],
    pdpCertificationData: {
      heading: "Industry-Recognized Certification",
      body: "Earn an AnalytixLabs certificate recognized by 500+ hiring partners across India and globally. Includes an optional co-branded certificate from our university partner.",
      certificateImageUrl: "https://placehold.co/800x550/F7F8FA/0B1B3B?text=Certificate",
      coBrandedName: "Jain University (Deemed-to-be)",
      coBrandedDesc: "Optional UGC-recognized co-branded certificate.",
      coBrandedLogoUrl: "https://placehold.co/120x120/FFFFFF/0B1B3B?text=Jain",
    },
    pdpWhoShouldJoinData: [
      { icon: "🎓", title: "Fresh Graduates", description: "Recent graduates from any stream looking to start a data career." },
      { icon: "💼", title: "Working Professionals", description: "Non-tech professionals who want to switch into data roles." },
      { icon: "📊", title: "Analysts", description: "Existing analysts looking to upskill into full data scientist roles." },
      { icon: "🏆", title: "Career Switchers", description: "Anyone serious about a 9-month career transformation." },
    ],
    pdpJobRolesData: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Analyst",
      "Data Science Consultant",
      "Analytics Manager",
      "AI Engineer",
      "Research Analyst",
    ],
    pdpKeySkillsData: [
      "Python for Data Analysis",
      "Statistics & Probability",
      "SQL & Databases",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Time-series Forecasting",
      "Data Visualization (Tableau, Power BI)",
      "Cloud (AWS/GCP) Basics",
      "MLOps Fundamentals",
      "Storytelling with Data",
    ],
  } as const;

  let updated = 0;
  for (const slug of candidateSlugs) {
    const existing = await prisma.course.findUnique({ where: { slug } });
    if (!existing) continue;
    await prisma.course.update({
      where: { slug },
      // The Prisma client treats Json columns as JsonValue — pdpData is JSON-compatible.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: pdpData as any,
    });
    updated++;
    console.log(`✓ PDP reference data seeded for slug=${slug}`);
  }
  if (!updated) {
    console.log("  (no matching course slug found for PDP reference data; skipped)");
  }
}

async function main() {
  console.log("Seeding…");
  await seedAdmin();
  await seedSiteSettings();
  await seedOffices();
  await seedCategories();
  await seedLearningModes();
  await seedCoursesAndDescendants();
  await backfillBatchLearningModes();
  await seedTestimonials();
  await seedHiringPartners();
  await seedTeamMembers();
  await seedGlobalFaqs();
  await seedBlogPosts();
  await seedPages();
  await seedNavItems();
  await seedMasterclass();
  await seedGlobalBlocks();
  await seedPdpReferenceCourse();
  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
