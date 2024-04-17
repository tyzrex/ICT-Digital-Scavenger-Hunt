/*
  Warnings:

  - Added the required column `quote` to the `Scavenger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Scavenger" ADD COLUMN     "quote" TEXT NOT NULL;
