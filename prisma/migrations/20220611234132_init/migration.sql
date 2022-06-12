/*
  Warnings:

  - You are about to drop the column `destination_airport` on the `flights` table. All the data in the column will be lost.
  - You are about to alter the column `airport_origin` on the `flights` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `airport_destination` to the `flights` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `flights` DROP COLUMN `destination_airport`,
    ADD COLUMN `airport_destination` INTEGER NOT NULL,
    MODIFY `airport_origin` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `DestinationAirports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `(airports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_origin_fkey` FOREIGN KEY (`airport_origin`) REFERENCES `(airports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_destination_fkey` FOREIGN KEY (`airport_destination`) REFERENCES `(airports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
