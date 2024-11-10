"use server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { ProductSchema } from "@/schemas";

export async function addProduct(values) {
  const validatedValues = ProductSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid fields" };
  }

  const user = await currentUser();

  if (!user) {
    return { error: "User not found" };
  }

  if (user.role !== "FARMER") {
    return { error: "Only farmers can add products" };
  }

  try {
    const { name, price, images, description, quantity, unit, category } =
      validatedValues.data;

    const data = {
      name,
      price: parseFloat(price),
      images,
      availability: true,
      description,
      quantity: parseInt(quantity, 10),
      unit,
      category,
      farmerId: user.id,
    };

    await db.product.create({
      data: data,
    });
    return { success: "Product added successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to add product!" };
  }
}
