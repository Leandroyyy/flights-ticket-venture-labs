-- DropForeignKey
ALTER TABLE `flights` DROP FOREIGN KEY `flights_airport_destination_fkey`;

-- DropForeignKey
ALTER TABLE `flights` DROP FOREIGN KEY `flights_airport_origin_fkey`;

-- AlterTable
ALTER TABLE `flights` MODIFY `airport_origin` INTEGER NULL,
    MODIFY `airport_destination` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_origin_fkey` FOREIGN KEY (`airport_origin`) REFERENCES `airports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_destination_fkey` FOREIGN KEY (`airport_destination`) REFERENCES `airports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
