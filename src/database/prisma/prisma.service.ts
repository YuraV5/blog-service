import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../../prisma/generated/prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();
      console.log("✅ Connected to the database");
    } catch (error) {
      console.error("❌ Error connecting to the database:", error);
    }
  }

  async onModuleDestroy(): Promise<void> {
    try {
      await this.$disconnect();
      console.log("🛑 Disconnected from the database");
    } catch (error) {
      console.error("❌ Error disconnecting from the database:", error);
    }
  }

  getPrismaClient(): PrismaService {
    return this; // Returns an instance of the PrismaService
  }
}
