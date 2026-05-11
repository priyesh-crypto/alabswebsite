import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { pageUpdateSchema } from "@/lib/zod-schemas";
import { notFound } from "@/lib/api";

export const runtime = "nodejs";

const PAGE_REVALIDATE: Record<string, string> = {
  home: "/",
  courses: "/courses",
  pdp: "/courses",
  contact: "/contact",
  about: "/about",
  "for-corporates": "/for-corporates",
};

export async function GET(req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  return withAdmin(req, async () => {
    const row = await prisma.page.findUnique({ where: { slug } });
    if (!row) return notFound();
    return row;
  });
}

export async function PUT(req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, pageUpdateSchema);
    // Prisma's Json input is invariant; the Zod-validated Record is structurally
    // a JSON object, so cast at the boundary.
    const blocks = data.blocks as Prisma.InputJsonValue;
    const updated = await prisma.page.upsert({
      where: { slug },
      create: { slug, title: data.title, blocks, metaTitle: data.metaTitle, metaDesc: data.metaDesc },
      update: { title: data.title, blocks, metaTitle: data.metaTitle, metaDesc: data.metaDesc },
    });
    const path = PAGE_REVALIDATE[slug];
    revalidatePublic(path ? [path] : []);
    return updated;
  });
}
