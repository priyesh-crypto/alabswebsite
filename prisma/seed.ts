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
        order: 2,
      },
    ],
  });
  console.log("✓ offices (3)");
}

async function seedCategories() {
  const categories = [
    { name: "Artificial Intelligence", slug: "artificial-intelligence", order: 0 },
    {
      name: "Business & Data Analytics",
      slug: "business-and-data-analytics",
      order: 1,
    },
    { name: "Data Science", slug: "data-science", order: 2 },
    { name: "Specialization Modules", slug: "specialization-modules", order: 3 },
  ];
  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      create: c,
      update: { name: c.name, order: c.order },
    });
  }
  console.log(`✓ categories (${categories.length})`);
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
    batches: [
      { location: "Noida", daysFromNow: 14, schedule: "Weekend (10:00 AM)", seatsLeft: 10 },
      { location: "Bengaluru", daysFromNow: 21, schedule: "Weekday (Bootcamp 9:30 AM)", seatsLeft: 8 },
      { location: "Online", daysFromNow: 7, schedule: "Self-Paced", seatsLeft: 25 },
    ],
  };
}

const COURSE_SPECS: CourseSpec[] = [
  buildCourse({
    slug: "data-science",
    title: "Data Science",
    category: "data-science",
    hours: 700,
    classes: 60,
    months: 8,
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
  }),
  buildCourse({
    slug: "data-analytics",
    title: "Data Analytics",
    category: "business-and-data-analytics",
    hours: 500,
    classes: 46,
    months: 6,
    experience: "Beginner-friendly",
    jobRoles: ["Data Analyst", "Analytics Consultant", "Business Analyst"],
    keySkills: ["Excel", "SQL", "Tableau", "Power BI", "Python basics"],
    toolNames: ["Excel", "SQL", "Tableau", "Power BI", "Python"],
    isFeatured: true,
    order: 1,
  }),
  buildCourse({
    slug: "business-analytics",
    title: "Business Analytics",
    category: "business-and-data-analytics",
    hours: 450,
    classes: 42,
    months: 6,
    experience: "Mid-level practitioner",
    jobRoles: ["Business Analyst", "Strategy Analyst", "Operations Analyst"],
    keySkills: ["Excel", "SQL", "R / Python", "Storytelling with Data"],
    toolNames: ["Excel", "SQL", "R", "Python", "Tableau"],
    isFeatured: true,
    order: 2,
  }),
  buildCourse({
    slug: "agentic-ai",
    title: "Agentic AI",
    category: "artificial-intelligence",
    hours: 350,
    classes: 32,
    months: 4,
    experience: "Advanced practitioner",
    jobRoles: ["AI Engineer", "Agentic AI Developer", "Applied LLM Engineer"],
    keySkills: ["LLMs", "Agents & Tool Use", "Vector DBs", "RAG", "Eval & Safety"],
    toolNames: ["Python", "LangChain", "OpenAI APIs", "Pinecone", "Anthropic API"],
    isFeatured: true,
    order: 3,
  }),
  buildCourse({
    slug: "full-stack-ai",
    title: "Full Stack AI",
    category: "artificial-intelligence",
    hours: 600,
    classes: 54,
    months: 7,
    experience: "Mid-level practitioner",
    jobRoles: ["Full Stack AI Engineer", "ML Engineer", "AI Product Engineer"],
    keySkills: ["Python", "ML/DL", "MLOps", "APIs", "Frontend basics"],
    toolNames: ["Python", "PyTorch", "FastAPI", "Docker", "AWS"],
    isFeatured: false,
    order: 4,
  }),
  buildCourse({
    slug: "data-visualization",
    title: "Data Visualization",
    category: "specialization-modules",
    hours: 200,
    classes: 22,
    months: 3,
    experience: "Beginner-friendly",
    jobRoles: ["Visualization Specialist", "BI Analyst"],
    keySkills: ["Tableau", "Power BI", "Looker", "Storytelling"],
    toolNames: ["Tableau", "Power BI", "Looker"],
    isFeatured: false,
    order: 5,
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
        "hero.tagline": "Since 2011",
        "hero.heading":
          "Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects.",
        "hero.cta1": { label: "Explore Courses", url: "/courses" },
        "hero.cta2": { label: "Book Free Career Consultation", url: "/contact" },
        "hero.rating": "4.8",
        "whyUs.items": [
          "Data Science & Analytics",
          "Artificial Intelligence (AI)",
          "Full Stack AI",
          "Agentic AI Course",
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
    { label: "Upcoming Batches", url: "/courses?filter=upcoming" },
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

async function main() {
  console.log("Seeding…");
  await seedAdmin();
  await seedSiteSettings();
  await seedOffices();
  await seedCategories();
  await seedCoursesAndDescendants();
  await seedTestimonials();
  await seedHiringPartners();
  await seedTeamMembers();
  await seedGlobalFaqs();
  await seedBlogPosts();
  await seedPages();
  await seedNavItems();
  await seedMasterclass();
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
