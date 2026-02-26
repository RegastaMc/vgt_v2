/*
  Warnings:

  - You are about to drop the `Categori` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `images` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Category_OptionSet" DROP CONSTRAINT "Category_OptionSet_categoryID_fkey";

-- DropForeignKey
ALTER TABLE "Category_SpecGroup" DROP CONSTRAINT "Category_SpecGroup_categoryID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryID_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "images",
ADD COLUMN     "images" JSONB NOT NULL,
ALTER COLUMN "specs" DROP NOT NULL;

-- DropTable
DROP TABLE "Categori";

-- CreateTable
CREATE TABLE "Category" (
    "_id" TEXT NOT NULL,
    "parentID" TEXT,
    "name" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "ProductSpec" (
    "_id" TEXT NOT NULL,
    "specGroupID" TEXT NOT NULL,
    "specValues" TEXT[],
    "productID" TEXT NOT NULL,

    CONSTRAINT "ProductSpec_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "Category_OptionSet" ADD CONSTRAINT "Category_OptionSet_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_SpecGroup" ADD CONSTRAINT "Category_SpecGroup_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSpec" ADD CONSTRAINT "ProductSpec_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
