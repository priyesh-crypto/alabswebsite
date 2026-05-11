-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "alumniCount" INTEGER,
ADD COLUMN     "hasNoCodingRequired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "heroBadges" JSONB,
ADD COLUMN     "heroCtaPrimary" JSONB,
ADD COLUMN     "heroCtaSecondary" JSONB,
ADD COLUMN     "heroImage" TEXT,
ADD COLUMN     "rating" DECIMAL(3,1),
ADD COLUMN     "whoShouldJoin" JSONB;

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "pageSlug" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "contentDraft" JSONB NOT NULL,
    "contentPublished" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlobalBlock" (
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "GlobalBlock_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "diff" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursePricing" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "priceStruck" INTEGER,
    "installments" INTEGER NOT NULL DEFAULT 3,
    "hasEmi" BOOLEAN NOT NULL DEFAULT true,
    "ctaLabel" TEXT NOT NULL DEFAULT 'Enroll now',
    "ctaHref" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CoursePricing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Section_pageSlug_order_idx" ON "Section"("pageSlug", "order");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_idx" ON "AuditLog"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "AuditLog_createdAt_idx" ON "AuditLog"("createdAt");

-- AddForeignKey
ALTER TABLE "CoursePricing" ADD CONSTRAINT "CoursePricing_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
