/*
  Warnings:

  - The `transactionDate` column on the `MpesaTransaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `alt` on the `ProductBanner` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `ProductBanner` table. All the data in the column will be lost.
  - You are about to drop the `Msg` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Msg" DROP CONSTRAINT "Msg_bannerId_fkey";

-- AlterTable
ALTER TABLE "MpesaTransaction" DROP COLUMN "transactionDate",
ADD COLUMN     "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ProductBanner" DROP COLUMN "alt",
DROP COLUMN "url",
ADD COLUMN     "categoryID" TEXT;

-- DropTable
DROP TABLE "Msg";

-- AddForeignKey
ALTER TABLE "ProductBanner" ADD CONSTRAINT "ProductBanner_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("_id") ON DELETE SET NULL ON UPDATE CASCADE;
