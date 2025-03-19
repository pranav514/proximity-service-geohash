-- CreateTable
CREATE TABLE "Business" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeohashIndex" (
    "id" SERIAL NOT NULL,
    "geohash" TEXT NOT NULL,
    "businessId" INTEGER NOT NULL,

    CONSTRAINT "GeohashIndex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GeohashIndex_businessId_key" ON "GeohashIndex"("businessId");

-- CreateIndex
CREATE INDEX "GeohashIndex_geohash_idx" ON "GeohashIndex"("geohash");

-- AddForeignKey
ALTER TABLE "GeohashIndex" ADD CONSTRAINT "GeohashIndex_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
