import { z } from "zod"

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .email("Invalid email format")
    .trim()
    .max(100, "Email must be less than 100 characters"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password too long"),
})

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password is required"),
})

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email format")
})

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
})