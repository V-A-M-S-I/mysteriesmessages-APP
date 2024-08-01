import {z} from "zod";

export const messageSchema = z.object({
    content:z
    .string()
    .min(10,{message:"content must be min of 10 characters"})
    .max(500,{message:"content must be max of 100 characters"})
})