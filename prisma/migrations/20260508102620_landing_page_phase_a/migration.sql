-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NavGroup" ADD VALUE 'FOOTER_COL_ABOUT';
ALTER TYPE "NavGroup" ADD VALUE 'FOOTER_COL_ETC';
ALTER TYPE "NavGroup" ADD VALUE 'FOOTER_COL_POPULAR';

-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "modeId" TEXT;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "color" TEXT;

-- AlterTable
ALTER TABLE "Office" ADD COLUMN     "mapEmbedUrl" TEXT;

-- CreateTable
CREATE TABLE "LearningMode" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subtitle" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "LearningMode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LearningMode_slug_key" ON "LearningMode"("slug");

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "LearningMode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
