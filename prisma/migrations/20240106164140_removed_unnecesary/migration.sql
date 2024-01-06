/*
  Warnings:

  - You are about to drop the `ScavengerRoute1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScavengerRoute2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScavengerRoute3` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Route" AS ENUM ('Route1', 'Route2', 'Route3');

-- DropTable
DROP TABLE "ScavengerRoute1";

-- DropTable
DROP TABLE "ScavengerRoute2";

-- DropTable
DROP TABLE "ScavengerRoute3";

-- CreateTable
CREATE TABLE "Scavenger" (
    "id" SERIAL NOT NULL,
    "location_hint" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "Route" NOT NULL,

    CONSTRAINT "Scavenger_pkey" PRIMARY KEY ("id")
);
