import { z } from "zod";

export const verifyCodeValidation = z.string().min(6, 'Verify code must be at least 6 character').max(20, 'Verify code must not contain 20 character').trim();

export const signInSchema = z.object({
  code: verifyCodeValidation,
});