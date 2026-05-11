import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { blogPostUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () =>
    prisma.blogPost.findMany({ orderBy: [{ isPublished: "desc" }, { publishedAt: "desc" }] }),
  );
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, blogPostUpsertSchema);
    const created = await prisma.blogPost.create({ data });
    revalidatePublic(["/blog", `/blog/${data.slug}`]);
    return created;
  });
}
