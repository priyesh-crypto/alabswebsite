/**
 * Public site layout. Hosts every route under app/(site)/.
 *
 * The Figma exports under src/imports/* are 1440px-wide absolutely-
 * positioned components. This layout provides the canonical 1440px
 * canvas + horizontal scroll on smaller viewports. Per CLAUDE.md §2
 * THE GOLDEN RULE, we do NOT make the layout responsive — fixed
 * width is by design.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full overflow-x-auto bg-white">{children}</div>;
}
