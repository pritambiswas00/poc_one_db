import { z, infer as _infer } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: "Please provide valid email address" }),
    password: z.string().regex(new RegExp(/^[a-zA-Z0-9]+$/), { message: "Please provide valid password" })
});

export type ILoginSchema = _infer<typeof LoginSchema>