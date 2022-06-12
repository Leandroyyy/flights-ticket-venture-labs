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
    `departure_time` DATETIME(3) NOT NULL,
    `arrival_time` DATETIME(3) NOT NULL,
    `airport_origin` VARCHAR(191) NOT NULL,
    `destination_airport` VARCHAR(191) NOT NULL,
    `number_seats` INTEGER NOT NULL,
    `ticket_price` VARCHAR(191) NOT NULL,
    `airline` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `is_international` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_flight` INTEGER NOT NULL,
    `id_client` INTEGER NOT NULL,
    `seat_number` VARCHAR(191) NOT NULL,
    `purchase_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_id_flight_fkey` FOREIGN KEY (`id_flight`) REFERENCES `flights`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
