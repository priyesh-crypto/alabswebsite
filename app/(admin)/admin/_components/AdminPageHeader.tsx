import Link from "next/link";

export default function AdminPageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <header className="flex items-end justify-between mb-6">
      <div>
        <h1 className="text-2xl font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f]">{title}</h1>
        {description && <p className="text-sm text-gray-500 mt-1 max-w-2xl">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="bg-[#1de5b5] text-[#09263f] rounded-full px-4 py-2 text-sm font-semibold hover:brightness-95 transition"
        >
          {action.label}
        </Link>
      )}
    </header>
  );
}
