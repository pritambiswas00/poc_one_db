import { z } from 'zod';

enum AccountType {
    GOOGLE = "GOOGLE",
    MICROSOFT = "MICROSOFT",
    APPLE = "APPLE",
    DROPBOX = "DROPBOX",
    MEGA = "MEGA"
}

export const Account = z.object({
    type: z.enum([AccountType.APPLE, AccountType.DROPBOX, AccountType.GOOGLE, AccountType.MEGA, AccountType.MICROSOFT]).default(AccountType.GOOGLE),
    username: z.string({ required_error: "Username required" }),
    connected_email: z.string({ required_error: "Email required" }).email({ message: 'Please provide valid email' }),
    accessToken: z.string().optional(),
    refreshToken: z.string().optional()
}).readonly()
