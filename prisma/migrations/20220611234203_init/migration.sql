/*
  Warnings:

  - You are about to drop the `(airports` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flights` DROP FOREIGN KEY `flights_airport_destination_fkey`;

-- DropForeignKey
ALTER TABLE `flights` DROP FOREIGN KEY `flights_airport_origin_fkey`;

-- DropTable
DROP TABLE `(airports`;

-- CreateTable
CREATE TABLE `airports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_origin_fkey` FOREIGN KEY (`airport_origin`) REFERENCES `airports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_destination_fkey` FOREIGN KEY (`airport_destination`) REFERENCES `airports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
