/**
 * Admin shell — sidebar + top bar + content slot.
 *
 * The login route lives in a SEPARATE route group (`app/(admin-public)/admin/login/`)
 * so it does NOT inherit this layout. That keeps this file simple: by the time
 * this layout runs, the user is already authenticated (middleware redirects
 * unauth'd users to /admin/login) — we just verify the JWT and grab the user.
 */
import Link from "next/link";
import { redirect } from "next/navigation";
import { readSession } from "@/lib/auth";
import SignOutButton from "./_components/SignOutButton";

export const dynamic = "force-dynamic";

const NAV_GROUPS: { heading: string; items: { label: string; href: string }[] }[] = [
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
    <div className="min-h-screen bg-[#f4fafa] text-[#09263f]">
      <div className="grid grid-cols-[260px_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="bg-white border-r border-gray-200 px-5 py-6 flex flex-col gap-6">
          <Link href="/admin" className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-lg text-[#09263f]">
            AnalytixLabs <span className="text-[#1de5b5]">Admin</span>
          </Link>

          <nav className="flex flex-col gap-5 text-sm">
            {NAV_GROUPS.map(group => (
              <div key={group.heading} className="flex flex-col gap-1">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">{group.heading}</p>
                {group.items.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 rounded-md hover:bg-[#f4fafa] hover:text-[#09263f] text-[#09263f]/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500">
            <p className="font-semibold text-[#09263f] truncate">{session.name}</p>
            <p className="truncate">{session.email}</p>
            <p className="text-[10px] uppercase tracking-wider mt-1 text-[#1de5b5] font-semibold">{session.role}</p>
            <div className="mt-3">
              <SignOutButton />
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="p-8 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
