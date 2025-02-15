import { z } from 'zod';

/* User Schema */

export const UserSchema = z.object({
    firstName: z.string({ required_error: 'Please provide first name' }),
    lastName: z.string({ required_error: 'Please provide last name' }),
    email:z.string({ required_error: 'Please provide email address' }).email({ message: 'Please provide valid email address' }),
    password: z.string({ required_error: 'Please provide password' }).regex(new RegExp(/^[a-zA-Z0-9]+$/), { message: "Please provide valid password" }),
    dateOfBirth: z.date({ required_error: 'Date of birth required' }),
})