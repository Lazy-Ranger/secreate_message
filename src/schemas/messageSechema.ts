import { z } from "zod";


export const messageSchema = z.object({
  content: z.string().min(10, 'Message must be at least 10 character').max(1000, 'Message must not contain 1000 character').trim(),
});