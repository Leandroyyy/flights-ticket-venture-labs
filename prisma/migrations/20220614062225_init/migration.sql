-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `passport` VARCHAR(191) NULL,

    UNIQUE INDEX `clients_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `flights` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `arrival_day` DATETIME(3) NOT NULL,
    `arrival_time` VARCHAR(191) NOT NULL,
    `departure_day` DATETIME(3) NOT NULL,
    `departure_time` VARCHAR(191) NOT NULL,
    `number_seats` INTEGER NOT NULL,
    `ticket_price` VARCHAR(191) NOT NULL,
    `airline` VARCHAR(191) NOT NULL,
    `cabin` VARCHAR(191) NOT NULL,
    `is_international` BOOLEAN NOT NULL,
    `airport_origin` INTEGER NULL,
    `airport_destination` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `airports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seat_number` VARCHAR(191) NOT NULL,
    `purchase_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_flight` INTEGER NOT NULL,
    `id_client` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_origin_fkey` FOREIGN KEY (`airport_origin`) REFERENCES `airports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flights` ADD CONSTRAINT `flights_airport_destination_fkey` FOREIGN KEY (`airport_destination`) REFERENCES `airports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_id_flight_fkey` FOREIGN KEY (`id_flight`) REFERENCES `flights`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
