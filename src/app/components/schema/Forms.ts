import { z } from "zod";

export const formLogin = z.object({
	email: z.string().min(2, "Email field is required.").default(""),
	password: z.string().min(2, "Password field is required.").default(""),
});

export const formPasswordReset = z.object({
	email: z.string().min(2, "Email field is required.").default(""),
});

export const formNewPassword = z.object({
	password: z.string().min(2, "Password field is required.").default(""),
	comfirmPassword: z.string().min(2, "Comfirm password field is required.").default(""),
});

export const formSignup = z.object({
	firstName: z.string().min(2, "First name field is required.").default(""),
	lastName: z.string().min(2, "Last name field is required.").default(""),
	email: z.string().min(2, "Email field is required.").default(""),
});
