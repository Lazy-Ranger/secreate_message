import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(3, "Username must be at least 3 character")
  .max(20, "Username must not contain 20 character")
  .trim()
  .regex(/^[a-zA-Z0-9_]+s/, "Username must contain only letters, numbers and underscores");
export const emailValidation = z.email({message: 'Invalid Email Address'}).trim();
export const passwordValidation = z.string().min(6, 'Password must be at least 6 character').max(20, 'Password must not contain 20 character').trim();
export const verifyCodeValidation = z.string().min(6).max(20).trim();

export const signUpSchema = z.object({
  username: userNameValidation,
  email: emailValidation,
  password: passwordValidation,
  verifyCode: verifyCodeValidation,
});
