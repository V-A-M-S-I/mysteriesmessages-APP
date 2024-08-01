import {z} from "zod"

export const singinSchema = z.object({
    email: z.string().email({message:"invalid email address"}),
    password:z.string().min(7,{message:"password must conatin min of 7 characters"})
})