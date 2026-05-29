-- AlterTable
ALTER TABLE "TeamMember" ADD COLUMN     "experienceLabel" TEXT,
ADD COLUMN     "expertise" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "group" TEXT NOT NULL DEFAULT 'TEAM';
