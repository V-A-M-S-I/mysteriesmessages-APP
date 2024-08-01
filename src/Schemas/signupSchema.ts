import {z} from "zod";

export const usernameValidation = z
    .string()
    .min(3,"Username must conatin min of 3 characters")
    .max(15,"Username must contain max of 15 charcters ")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must contain only letters and numbers  only");

export const signupSchema = z.object({
    Username : usernameValidation,
    email: z.string().email({message:"invalid email address"}),
    password:z.string().min(7,{message:"password must conatin min of 7 characters"})
})