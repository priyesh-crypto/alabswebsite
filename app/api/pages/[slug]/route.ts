import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, notFound, ok, withCache } from "@/lib/api";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, ctx: Ctx) {
  try {
    let { slug } = await ctx.params;
    // The CMS uses 'landing' for the home page, but the frontend calls 'home'.
    if (slug === "home") slug = "landing";
    
    const [page, sections] = await Promise.all([
      prisma.page.findUnique({ where: { slug } }),
      prisma.section.findMany({ 
        where: { pageSlug: slug, isVisible: true }, 
        orderBy: { order: "asc" } 
      })
    ]);

    const mergedBlocks = { ...(page?.blocks as Record<string, unknown> || {}) };
    
    sections.forEach(sec => {
      if (sec.contentPublished) {
        // Map the section type (e.g. "hero_landing") as a root key.
        // The frontend will use block(props, "hero_landing.headline") etc.
        mergedBlocks[sec.type] = sec.contentPublished;
        
        // Translate CMS Section data into the old legacy flat format for Figma components backward compatibility
        const content = sec.contentPublished as any;
        if (sec.type === "hero_landing") {
           if (content.headline) {
             const match = content.headline.match(/^(.*?)\*\*(.*?)\*\*(.*)$/);
             if (match) {
                mergedBlocks["hero.title.prefix"] = match[1].trim();
                mergedBlocks["hero.title.brand"] = match[2].trim();
                mergedBlocks["hero.title.suffix"] = match[3].trim();
             } else {
                mergedBlocks["hero.title.prefix"] = "";
                mergedBlocks["hero.title.brand"] = content.headline;
                mergedBlocks["hero.title.suffix"] = "";
             }
           }
           if (content.subtitle) mergedBlocks["hero.subheading"] = content.subtitle;
           if (content.eyebrow) mergedBlocks["hero.tagline"] = content.eyebrow;
           if (content.socialProofText) mergedBlocks["hero.ratedBy"] = content.socialProofText;
           if (content.ctas?.[0]) mergedBlocks["hero.cta1"] = content.ctas[0];
           if (content.ctas?.[1]) mergedBlocks["hero.cta2"] = content.ctas[1];
        } else if (sec.type === "institute_intro") {
           if (content.headline) mergedBlocks["about.heading"] = content.headline;
           if (content.body) mergedBlocks["about.body"] = content.body;
           if (content.cityIntro) mergedBlocks["about.cityIntro"] = content.cityIntro;
           if (content.bullets) {
             mergedBlocks["about.cityHighlights"] = content.bullets.map((b: any) => b.text);
           }
        } else if (sec.type === "learning_modes") {
           if (content.intro) mergedBlocks["learningModes.subtitle"] = content.intro;
        } else if (sec.type === "hero_simple" || sec.type === "about_hero" || sec.type === "contact_hero") {
           if (content.headline) {
             const html = content.headline.replace(/\*\*(.*?)\*\*/g, '<span class="bg-clip-text bg-gradient-to-r from-[#1de5b5] to-[#07b3e7] text-transparent">$1</span>');
             mergedBlocks[`${sec.type}.headline_html`] = html;
           }
        }
      }
    });

    const responseData = page 
      ? { ...page, blocks: mergedBlocks }
      : { slug, title: slug, blocks: mergedBlocks, metaTitle: null, metaDesc: null, updatedAt: new Date(), id: "virtual" };

    return ok(responseData, withCache());
  } catch (err) {
    return handleError(err);
  }
}
