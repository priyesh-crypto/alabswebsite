import { redirect } from "next/navigation";
import { readSession } from "@/lib/auth";
import AdminShellClient from "./_components/AdminShellClient";
import SignOutButton from "./_components/SignOutButton";

export const dynamic = "force-dynamic";

const NAV_GROUPS = [
  {
    heading: "Overview",
    items: [{ label: "Dashboard", href: "/admin" }],
  },
  {
    heading: "Pages",
    items: [
      { label: "Landing page", href: "/admin/pages/landing" },
      { label: "Explore Courses", href: "/admin/pages/courses" },
      { label: "All pages", href: "/admin/pages" },
    ],
  },
  {
    heading: "Courses",
    items: [
      { label: "All courses", href: "/admin/courses" },
      { label: "Categories", href: "/admin/categories" },
      { label: "Batches", href: "/admin/batches" },
      { label: "Learning modes", href: "/admin/learning-modes" },
    ],
  },
  {
    heading: "Global blocks",
    items: [
      { label: "Header & Nav", href: "/admin/global/header" },
      { label: "Footer", href: "/admin/global/footer" },
      { label: "CTA banner", href: "/admin/global/cta-banner" },
      { label: "Call-back form", href: "/admin/global/call-back" },
      { label: "Testimonials", href: "/admin/testimonials" },
      { label: "Hiring partners", href: "/admin/hiring-partners" },
      { label: "FAQs", href: "/admin/faqs" },
    ],
  },
  {
    heading: "Content",
    items: [
      { label: "Team", href: "/admin/team" },
      { label: "Offices", href: "/admin/offices" },
      { label: "Masterclass", href: "/admin/masterclass" },
      { label: "Blog posts", href: "/admin/posts" },
    ],
  },
  {
    heading: "Site",
    items: [
      { label: "Site settings", href: "/admin/site-settings" },
      { label: "Navigation", href: "/admin/nav" },
    ],
  },
  {
    heading: "Operations",
    items: [
      { label: "Leads", href: "/admin/leads" },
      { label: "Media library", href: "/admin/media" },
      { label: "Admin users", href: "/admin/users" },
      { label: "Audit log", href: "/admin/audit" },
    ],
  },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await readSession();
  if (!session) redirect("/admin/login");

  return (
    <AdminShellClient
      navGroups={NAV_GROUPS}
      userName={session.name}
      userEmail={session.email}
      userRole={session.role}
      signOutButton={<SignOutButton />}
    >
      {children}
    </AdminShellClient>
  );
}
