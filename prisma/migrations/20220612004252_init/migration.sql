/*
  Warnings:

  - You are about to drop the column `class` on the `flights` table. All the data in the column will be lost.
  - Added the required column `cabin` to the `flights` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `flights` DROP COLUMN `class`,
    ADD COLUMN `cabin` VARCHAR(191) NOT NULL;
