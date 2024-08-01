import {z} from "zod";

export const verifyScahema = z.object({
    code : z.string().length(5,{message:"Verification code must contain  digits"})
})