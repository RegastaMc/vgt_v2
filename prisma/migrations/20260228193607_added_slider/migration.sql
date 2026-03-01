-- CreateTable
CREATE TABLE "ProductBanner" (
    "id" TEXT NOT NULL,
    "imgUrl" JSONB,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "ProductBanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Msg" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "bannerId" TEXT,

    CONSTRAINT "Msg_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Msg_bannerId_key" ON "Msg"("bannerId");

-- AddForeignKey
ALTER TABLE "Msg" ADD CONSTRAINT "Msg_bannerId_fkey" FOREIGN KEY ("bannerId") REFERENCES "ProductBanner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
