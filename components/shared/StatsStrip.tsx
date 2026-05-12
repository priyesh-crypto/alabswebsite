export default function StatsStrip({
  stats,
}: {
  stats: { num: string; label: string }[];
}) {
  return (
    <div className="bg-[#1de5b5] py-8 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-[#09263f]">{s.num}</div>
            <div className="text-sm text-[#09263f]/70 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
