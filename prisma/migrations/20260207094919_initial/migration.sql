-- CreateEnum
CREATE TYPE "OptionSetType" AS ENUM ('TEXT', 'COLOR');

-- CreateEnum
CREATE TYPE "PageType" AS ENUM ('MAIN', 'LIST', 'PRODUCT');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "parentID" TEXT,
    "name" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category_OptionSet" (
    "_id" TEXT NOT NULL,
    "optionID" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,

    CONSTRAINT "Category_OptionSet_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "OptionSet" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "OptionSetType" NOT NULL,

    CONSTRAINT "OptionSet_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "NameValue" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "optionSetID" TEXT NOT NULL,

    CONSTRAINT "NameValue_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Category_SpecGroup" (
    "_id" TEXT NOT NULL,
    "specGroupID" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,

    CONSTRAINT "Category_SpecGroup_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "SpecGroup" (
    "_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "specs" TEXT[],

    CONSTRAINT "SpecGroup_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Product" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "desc" TEXT,
    "specialFeatures" TEXT[],
    "images" TEXT[],
    "categoryID" TEXT NOT NULL,
    "optionSets" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "salePrice" DOUBLE PRECISION,
    "specs" JSONB NOT NULL,
    "brandID" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "PageVisit" (
    "_id" TEXT NOT NULL,
    "time" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "pageType" "PageType" NOT NULL,
    "pagePath" TEXT,
    "deviceResolution" TEXT,
    "productID" TEXT,

    CONSTRAINT "PageVisit_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Account" (
    "_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "User" (
    "_id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "hashedPassword" TEXT,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_OptionSet_optionID_categoryID_key" ON "Category_OptionSet"("optionID", "categoryID");

-- CreateIndex
CREATE UNIQUE INDEX "Category_SpecGroup_specGroupID_categoryID_key" ON "Category_SpecGroup"("specGroupID", "categoryID");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Category_OptionSet" ADD CONSTRAINT "Category_OptionSet_optionID_fkey" FOREIGN KEY ("optionID") REFERENCES "OptionSet"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_OptionSet" ADD CONSTRAINT "Category_OptionSet_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NameValue" ADD CONSTRAINT "NameValue_optionSetID_fkey" FOREIGN KEY ("optionSetID") REFERENCES "OptionSet"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_SpecGroup" ADD CONSTRAINT "Category_SpecGroup_specGroupID_fkey" FOREIGN KEY ("specGroupID") REFERENCES "SpecGroup"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_SpecGroup" ADD CONSTRAINT "Category_SpecGroup_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandID_fkey" FOREIGN KEY ("brandID") REFERENCES "Brand"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageVisit" ADD CONSTRAINT "PageVisit_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
