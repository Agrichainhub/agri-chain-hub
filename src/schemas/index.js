import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum of 6 characters required" }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Email is required" }),
    username: z.string().min(4, { message: "Name is required" }),
    password: z
      .string()
      .min(6, { message: "Minimum of 6 characters required" }),
    confirmPassword: z.string(),
    firstname: z.string().min(1, { message: "Name is required" }),
    lastname: z.string().min(1, { message: "Name is required" }),
    role: z.string().min(1, { message: "role is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const ProductSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Price must be a valid number.",
  }),
  quantity: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Quantity must be a valid number.",
  }),
  unit: z.string().min(1, {
    message: "Please select a unit.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  images: z.array(z.string()), // Validation for image URLs
});
