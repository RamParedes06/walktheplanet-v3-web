import { z } from "zod";

const baseSchema = z.object({
  email: z
    .string()
    .email("Please input a valid email address")
    .min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  comment: z.string().optional(),
});

export const schemaLeisure = baseSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().min(1, "Middle name is required"),
  lastName: z.string().min(1, "Last name is required"),
  travelType: z.literal("Leisure Travel"),
});

export const schemaBusiness = baseSchema.extend({
  companyName: z.string().min(1, "Company name is required"),
  clientName: z.string().min(1, "Client name is required"),
  travelType: z.literal("Business Travel"),
});
