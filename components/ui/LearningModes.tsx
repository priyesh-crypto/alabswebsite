"use client";
import { useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────
type Course = {
  courseName: string;
  location: string;
  date: string;
  time: string;
  seats: number;
};

type LearningMode = {
  id: string;
  tabLabel: string;
  contentTitle: string;
  contentSubtitle: string;
  courses: Course[];
};

const learningModesData: LearningMode[] = [
  {
    id: "weekday-bootcamp",
    tabLabel: "Weekday Bootcamp",
    contentTitle: "Weekday Bootcamp",
    contentSubtitle: "Intensive full-day sessions for rapid upskilling.",
    courses: [
      {
        courseName: "Data Science Bootcamp",
        location: "In-Person (Noida)",
        date: "21 April 2025",
        time: "10:00 AM – 5:00 PM",
        seats: 6,
      },
      {
        courseName: "AI & ML Bootcamp",
        location: "In-Person (Noida)",
        date: "28 April 2025",
        time: "10:00 AM – 5:00 PM",
        seats: 4,
      },
      {
        courseName: "Business Analytics Bootcamp",
        location: "In-Person (Noida)",
        date: "05 May 2025",
        time: "10:00 AM – 5:00 PM",
        seats: 8,
      },
    ],
  },
  {
    id: "weekday-batches",
    tabLabel: "Weekday Batches",
    contentTitle: "Weekday Batches",
    contentSubtitle: "Experiential learning with in-person mentorship!",
    courses: [
      {
        courseName: "Data Science & Analytics",
        location: "Hybrid",
        date: "22 April 2025",
        time: "Evening Batches",
        seats: 10,
      },
      {
        courseName: "Machine Learning Mastery",
        location: "Hybrid",
        date: "15 April 2025",
        time: "Evening Batches",
        seats: 5,
      },
      {
        courseName: "Business Intelligence",
        location: "Hybrid",
        date: "06 May 2025",
        time: "Evening Batches",
        seats: 12,
      },
    ],
  },
  {
    id: "self-paced",
    tabLabel: "Self-paced Blended",
    contentTitle: "Self-paced Blended",
    contentSubtitle: "Learn at your own speed with weekend doubt sessions.",
    courses: [
      {
        courseName: "Data Analytics Fundamentals",
        location: "Online",
        date: "Enroll Anytime",
        time: "Self-Paced",
        seats: 50,
      },
      {
        courseName: "Python for Data Science",
        location: "Online",
        date: "Enroll Anytime",
        time: "Self-Paced",
        seats: 50,
      },
      {
        courseName: "SQL & Tableau Mastery",
        location: "Online",
        date: "Enroll Anytime",
        time: "Self-Paced",
        seats: 50,
      },
    ],
  },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function CheckCircleIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CourseCard({ course }: { course: Course }) {
  const details: { label: string; value: string; accent?: boolean }[] = [
    { label: "Location",        value: course.location },
    { label: "Date",            value: course.date },
    { label: "Time",            value: course.time },
    { label: "Available seats", value: `${course.seats} seats left`, accent: true },
  ];

  return (
    <div className="bg-[#09263f] rounded-2xl p-4 text-white flex flex-col gap-3">
      <p className="font-bold text-base leading-snug">{course.courseName}</p>
      <div className="bg-white/10 rounded-xl px-3 py-2 flex flex-col gap-2">
        {details.map(({ label, value, accent }) => (
          <div key={label} className="flex items-center justify-between gap-2">
            <span className="text-blue-200 text-xs shrink-0">{label}</span>
            <span
              className={`text-xs font-semibold text-right ${
                accent ? "text-[#1de5b5]" : "text-white"
              }`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function LearningModes() {
  const [activeMode, setActiveMode] = useState<string>("weekday-batches");
  const [visible, setVisible] = useState(true);

  const currentMode = learningModesData.find(m => m.id === activeMode)!;

  const handleTabClick = (id: string) => {
    if (id === activeMode) return;
    // fade out → swap content → fade in
    setVisible(false);
    setTimeout(() => {
      setActiveMode(id);
      setVisible(true);
    }, 150);
  };

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex gap-8 w-full max-w-5xl mx-auto">

      {/* ── Left navigation ── */}
      <nav className="flex flex-col gap-3 w-60 shrink-0" aria-label="Learning modes">
        {learningModesData.map(mode => {
          const isActive = mode.id === activeMode;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => handleTabClick(mode.id)}
              className={[
                "flex items-center gap-3 rounded-2xl px-4 py-4 text-left text-sm font-semibold",
                "transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg shadow-blue-900/30"
                  : "bg-white text-[#09263f] border border-gray-200 hover:shadow-md hover:border-blue-200",
              ].join(" ")}
            >
              {isActive && (
                <span className="text-white shrink-0">
                  <CheckCircleIcon />
                </span>
              )}
              {mode.tabLabel}
            </button>
          );
        })}
      </nav>

      {/* ── Right content ── */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div
          className={[
            "transition-all duration-150",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <h2 className="text-2xl font-bold text-[#09263f]">
            {currentMode.contentTitle}
          </h2>
          <p className="text-sm text-gray-500 mt-1 mb-5">
            {currentMode.contentSubtitle}
          </p>

          {/* Course cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentMode.courses.map(course => (
              <CourseCard key={course.courseName} course={course} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
