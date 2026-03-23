import { z } from "zod";

export const productSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters"),

    brand: z
        .string()
        .min(2, "Brand must be at least 2 characters"),

    model: z
        .string()
        .min(1, "Model is required"),

    year: z
        .number()
        .int()
        .min(1990, "Year must be after 1990"),

    price: z
        .number()
        .int()
        .positive("Price must be positive"),

    kilometersDriven: z
        .number()
        .int()
        .min(0, "Kilometers cannot be negative"),

    fuelType: z
        .enum(["Petrol", "Electric"])
        .optional(),

    ownerType: z
        .enum(["First Owner", "Second Owner", "Third Owner"])
        .optional(),

    location: z
        .string()
        .min(2, "Location required"),

    description: z
        .string()
        .optional(),

    image: z
        .string()
        .url("Image must be a valid URL")
        .optional(),

    status: z
        .enum(["Available", "Sold"])
        .optional()
});