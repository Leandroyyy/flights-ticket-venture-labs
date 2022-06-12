/*
  Warnings:

  - You are about to drop the `destinationairports` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `destinationairports`;

-- CreateTable
CREATE TABLE `destination_airpots` (
    `time` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`time`, `date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
