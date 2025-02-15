import { z, infer as _infer } from "zod";

export const CreateAccountSchema = z.object({
    firstName: z.string().min(3, { message: "Please provide first name" }),
    lastName: z.string().min(3, { message: "Please provide last name" }),
    email: z.string({  required_error: "Email is Required" }).email({ message: "Please provide valid email address" } ),
    password: z.string({ required_error: "Password is required" }).regex(new RegExp(/^[a-zA-Z0-9]+$/), { message: "Please provide valid password" }),
}).strict().readonly();

export type ICreateAccount = _infer<typeof CreateAccountSchema>;