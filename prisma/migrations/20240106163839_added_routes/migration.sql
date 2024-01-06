/*
  Warnings:

  - You are about to drop the `Scavenger` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Scavenger";

-- CreateTable
CREATE TABLE "ScavengerRoute1" (
    "id" SERIAL NOT NULL,
    "location_hint" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ScavengerRoute1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScavengerRoute2" (
    "id" SERIAL NOT NULL,
    "location_hint" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ScavengerRoute2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScavengerRoute3" (
    "id" SERIAL NOT NULL,
    "location_hint" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ScavengerRoute3_pkey" PRIMARY KEY ("id")
);
