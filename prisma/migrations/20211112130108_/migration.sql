/*
  Warnings:

  - You are about to drop the column `authorId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuthorsOnBooks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AuthorsOnBooks" DROP CONSTRAINT "AuthorsOnBooks_authorId_fkey";

-- DropForeignKey
ALTER TABLE "AuthorsOnBooks" DROP CONSTRAINT "AuthorsOnBooks_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "authorId",
ADD COLUMN     "author" TEXT NOT NULL;

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "AuthorsOnBooks";
