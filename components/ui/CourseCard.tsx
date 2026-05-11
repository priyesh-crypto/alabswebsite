import Link from "next/link";

type BatchSlot = {
  location: string;
  date: string;
  schedule: string;
  seatsLeft: number;
};

type CourseCardProps = {
  image?: string;
  classesCount?: number;
  hoursCount?: number;
  experienceLabel?: string;
  title?: string;
  batches?: (BatchSlot | undefined)[];
  slug?: string;
};

const FALLBACK_BATCHES: BatchSlot[] = [
  { location: "Noida",     date: "20 April", schedule: "Weekend",    seatsLeft: 10 },
  { location: "Bangalore", date: "13 April", schedule: "Weekday",    seatsLeft: 8  },
  { location: "Gurgaon",   date: "04 May",   schedule: "Self-Placed", seatsLeft: 10 },
];

const BADGE_COLORS  = ["bg-blue-50",   "bg-yellow-50", "bg-pink-50"]   as const;
const LOCATION_COLORS = ["bg-blue-50", "bg-yellow-50", "bg-pink-50"]   as const;

export default function CourseCard({
  image,
  classesCount = 46,
  hoursCount = 500,
  experienceLabel = "Experience",
  title = "Data Analytics",
  batches = [],
  slug = "/courses",
}: CourseCardProps) {
  const slots: BatchSlot[] = [0, 1, 2].map(
    i => batches[i] ?? FALLBACK_BATCHES[i]!
  );

  const badges = [
    `${classesCount} Classes`,
    `${hoursCount}+ Hours`,
    experienceLabel,
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-5 w-[380px] flex flex-col gap-0">

      {/* ── Image ── */}
      <img
        src={image ?? "https://placehold.co/380x192/e2e8f0/94a3b8?text=Course"}
        alt={title}
        className="w-full h-48 object-cover rounded-2xl"
      />

      {/* ── Badges (overlap image bottom-right) ── */}
      <div className="flex justify-end gap-1.5 -mt-4 relative z-10 pr-1">
        {badges.map((label, i) => (
          <span
            key={i}
            className={`${BADGE_COLORS[i]} text-gray-500 text-xs rounded-full px-3 py-1 whitespace-nowrap shadow-sm`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* ── Title ── */}
      <h3 className="text-2xl font-bold text-black mt-4">{title}</h3>

      {/* ── Location & Date grid ── */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {slots.map((b, i) => (
          <div
            key={i}
            className={`${LOCATION_COLORS[i]} rounded-2xl py-3 px-2 text-center`}
          >
            <p className="text-sm font-semibold text-black leading-tight">{b.location}</p>
            <p className="text-xs text-gray-500 mt-0.5">{b.date}</p>
          </div>
        ))}
      </div>

      {/* ── Seat availability row ── */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {slots.map((b, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-full py-1.5 px-2 text-center"
          >
            <span className="text-[10px] text-gray-700 leading-tight whitespace-nowrap">
              {b.schedule}&nbsp;–&nbsp;<strong>{b.seatsLeft} Seats left</strong>
            </span>
          </div>
        ))}
      </div>

      {/* ── CTA button ── */}
      <Link href={slug} className="block mt-4">
        <button
          type="button"
          className="w-full bg-[#20D091] rounded-full py-4 text-[#09263f] font-bold text-base hover:bg-[#1bbf82] transition-colors duration-200"
        >
          Explore Course
        </button>
      </Link>

    </div>
  );
}
