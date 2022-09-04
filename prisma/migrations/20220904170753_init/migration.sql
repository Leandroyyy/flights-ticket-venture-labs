-- CreateTable
CREATE TABLE "clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "passport" TEXT
);

-- CreateTable
CREATE TABLE "flights" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "arrival_day" DATETIME NOT NULL,
    "arrival_time" TEXT NOT NULL,
    "departure_day" DATETIME NOT NULL,
    "departure_time" TEXT NOT NULL,
    "number_seats" INTEGER NOT NULL,
    "ticket_price" TEXT NOT NULL,
    "airline" TEXT NOT NULL,
    "cabin" TEXT NOT NULL,
    "is_international" BOOLEAN NOT NULL,
    "airport_origin" INTEGER,
    "airport_destination" INTEGER,
    CONSTRAINT "flights_airport_origin_fkey" FOREIGN KEY ("airport_origin") REFERENCES "airports" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "flights_airport_destination_fkey" FOREIGN KEY ("airport_destination") REFERENCES "airports" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "airports" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "seat_number" TEXT NOT NULL,
    "purchase_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_flight" INTEGER NOT NULL,
    "id_client" INTEGER NOT NULL,
    CONSTRAINT "tickets_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tickets_id_flight_fkey" FOREIGN KEY ("id_flight") REFERENCES "flights" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");
