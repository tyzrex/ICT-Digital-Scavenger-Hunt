-- CreateTable
CREATE TABLE "Scavenger" (
    "id" SERIAL NOT NULL,
    "location_hint" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Scavenger_pkey" PRIMARY KEY ("id")
);
