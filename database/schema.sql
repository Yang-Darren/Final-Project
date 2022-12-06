set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
  "userId" serial NOT NULL,
  "username" TEXT NOT NULL UNIQUE,
  "hashedPassword" TEXT NOT NULL,
  "createdAt" timestamptz NOT NULL default now(),
  CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."wallets" (
  "walletId" serial NOT NULL,
  "cardNumber" integer NOT NULL,
  "expirationDate" DATE NOT NULL,
  "securityCode" integer NOT NULL,
  "userId" integer NOT NULL,
  CONSTRAINT "wallets_pk" PRIMARY KEY ("walletId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."reservations" (
  "reservationId" serial NOT NULL,
  "createdAt" timestamptz NOT NULL default now(),
  "transactionCompleted" BOOLEAN NOT NULL default false,
  "userId" integer NOT NULL,
  "locationId" integer NOT NULL,
  CONSTRAINT "reservations_pk" PRIMARY KEY ("reservationId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."locations" (
  "locationId" serial NOT NULL,
  "locationName" TEXT NOT NULL,
  "locationAddress" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "lat" FLOAT NOT NULL,
  "lng" FLOAT NOT NULL,
  CONSTRAINT "locations_pk" PRIMARY KEY ("locationId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "wallets" ADD CONSTRAINT "wallets_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_fk1" FOREIGN KEY ("locationId") REFERENCES "locations"("locationId");
