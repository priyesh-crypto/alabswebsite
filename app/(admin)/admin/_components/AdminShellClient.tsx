"use client";

/**
 * Client shell that wraps the admin layout.
 * Handles the mobile sidebar drawer open/close state.
 * On ≥ lg the sidebar is always visible; on < lg it slides in as a drawer.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };
type NavGroup = { heading: string; items: NavItem[] };

type Props = {
  navGroups: NavGroup[];
  userName: string;
  userEmail: string;
  userRole: string;
  children: React.ReactNode;
  signOutButton: React.ReactNode;
};

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/admin" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
        active
          ? "bg-[#1de5b5]/15 text-[#09263f] font-semibold"
          : "text-[#09263f]/70 hover:bg-[#f4fafa] hover:text-[#09263f]"
      }`}
    >
      {label}
    </Link>
  );
}

function Sidebar({ navGroups, userName, userEmail, userRole, signOutButton, onClose }: Omit<Props, "children"> & { onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
        <Link
          href="/admin"
          onClick={onClose}
          className="font-semibold text-lg text-[#09263f] leading-none"
        >
          AnalytixLabs <span className="text-[#1de5b5]">Admin</span>
        </Link>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-md text-gray-400 hover:text-[#09263f] hover:bg-gray-100 transition"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-5">
        {navGroups.map(group => (
          <div key={group.heading} className="flex flex-col gap-0.5">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold px-3 mb-1">
              {group.heading}
            </p>
            {group.items.map(item => (
              <NavLink key={item.href} href={item.href} label={item.label} onClick={onClose} />
            ))}
          </div>
        ))}
      </nav>

      {/* User footer */}
      <div className="px-5 py-4 border-t border-gray-100 shrink-0">
        <p className="text-sm font-semibold text-[#09263f] truncate">{userName}</p>
        <p className="text-xs text-gray-500 truncate mt-0.5">{userEmail}</p>
        <p className="text-[10px] uppercase tracking-wider mt-1.5 text-[#1de5b5] font-semibold">{userRole}</p>
        <div className="mt-3">{signOutButton}</div>
      </div>
    </div>
  );
}

export default function AdminShellClient({ navGroups, userName, userEmail, userRole, children, signOutButton }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <div className="min-h-screen bg-[#f4fafa] text-[#09263f]">
      {/* ── Desktop: static sidebar ── */}
      <div className="hidden lg:flex min-h-screen">
        <aside className="w-64 shrink-0 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen overflow-hidden">
          <Sidebar
            navGroups={navGroups}
            userName={userName}
            userEmail={userEmail}
            userRole={userRole}
            signOutButton={signOutButton}
          />
        </aside>
        <main className="flex-1 min-w-0 p-8 overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* ── Mobile: top bar + drawer ── */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 flex items-center gap-3 px-4 h-14 shrink-0">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-md text-gray-500 hover:text-[#09263f] hover:bg-gray-100 transition"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/admin" className="font-semibold text-base text-[#09263f]">
            AnalytixLabs <span className="text-[#1de5b5]">Admin</span>
          </Link>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* ── Mobile drawer overlay ── */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer panel */}
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl flex flex-col lg:hidden animate-in slide-in-from-left duration-200">
            <Sidebar
              navGroups={navGroups}
              userName={userName}
              userEmail={userEmail}
              userRole={userRole}
              signOutButton={signOutButton}
              onClose={() => setDrawerOpen(false)}
            />
          </div>
        </>
      )}
    </div>
  );
}
