/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category_OptionSet" DROP CONSTRAINT "Category_OptionSet_categoryID_fkey";

-- DropForeignKey
ALTER TABLE "Category_SpecGroup" DROP CONSTRAINT "Category_SpecGroup_categoryID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryID_fkey";

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "Categori" (
    "_id" TEXT NOT NULL,
    "parentID" TEXT,
    "name" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "Categori_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "Category_OptionSet" ADD CONSTRAINT "Category_OptionSet_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Categori"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_SpecGroup" ADD CONSTRAINT "Category_SpecGroup_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Categori"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Categori"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
