-- CreateEnum
CREATE TYPE "UsersRoles" AS ENUM ('user', 'admin');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "provider_id" TEXT,
    "profile" JSONB,
    "photo_link" TEXT,
    "role" "UsersRoles" NOT NULL DEFAULT 'user',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_provider_id_key" ON "users"("provider_id");
