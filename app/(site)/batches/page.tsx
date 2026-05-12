import type { Metadata } from "next";
import UpcomingBatches from "@/components/figma-pages/UpcomingBatches/UpcomingBatches";
import {
  getBatches,
  getCategories,
} from "@/lib/api-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Upcoming Batches | AnalytixLabs",
  description:
    "Browse upcoming course batches for Data Science, AI, Business Analytics and more. Find a batch in Gurgaon, Noida, Bangalore or Online.",
};

export default async function BatchesPage() {
  const [courses, categories] = await Promise.all([
    getBatches(),
    getCategories(),
  ]);

  return (
    <UpcomingBatches
      courses={courses}
      categories={categories}
    />
  );
}
