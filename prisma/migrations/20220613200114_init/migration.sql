/*
  Warnings:

  - Made the column `airport_origin` on table `flights` required. This step will fail if there are existing NULL values in that column.
  - Made the column `airport_destination` on table `flights` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `flights` DROP FOREIGN KEY `flights_airport_destination_fkey`;

-- DropForeignKey
ALTER TABLE `flights` DROP FOREIGN KEY `flights_airport_origin_fkey`;

-- AlterTable
ALTER TABLE `flights` MODIFY `airport_origin` INTEGER NOT NULL,
    MODIFY `airport_destination` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_origin_fkey` FOREIGN KEY (`airport_origin`) REFERENCES `airports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_destination_fkey` FOREIGN KEY (`airport_destination`) REFERENCES `airports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
