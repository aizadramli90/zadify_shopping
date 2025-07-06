import { PrismaClient } from "@prisma/client";
import productDataSamples from "./productDataSamples";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany(); // Clear existing products

  await prisma.product.createMany({ data: productDataSamples.products }); // Seed with sample products
  console.log("Products seeded successfully!");
}

main();
