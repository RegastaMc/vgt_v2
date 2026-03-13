-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentID_fkey" FOREIGN KEY ("parentID") REFERENCES "Category"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
