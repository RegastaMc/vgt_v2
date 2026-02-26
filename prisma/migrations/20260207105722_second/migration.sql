/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - The required column `_id` was added to the `Category` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Category_OptionSet" DROP CONSTRAINT "Category_OptionSet_categoryID_fkey";

-- DropForeignKey
ALTER TABLE "Category_SpecGroup" DROP CONSTRAINT "Category_SpecGroup_categoryID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryID_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("_id");

-- AddForeignKey
ALTER TABLE "Category_OptionSet" ADD CONSTRAINT "Category_OptionSet_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_SpecGroup" ADD CONSTRAINT "Category_SpecGroup_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
