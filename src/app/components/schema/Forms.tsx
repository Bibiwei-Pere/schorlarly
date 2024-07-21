import { z } from "zod";

// SERVICE FORM
export const formSchemaService = z.object({
	title: z.string().min(2, "Title field is required.").default(""),
	serviceCategory: z.string().min(1, "Category field is required.").default(""),
	serviceType: z.string().min(1, "Type field is required.").default(""),
	description: z.string().default("").optional(),
	plans: z.string().min(1, "Plan field is required.").default(""),
	packageName: z.string().min(2, "Package name is required").default(""),
	price: z.string().min(2, "Price field is required").default(""),
	quantity: z.string().min(2, "Quantity field is required").default(""),
	packageDescription: z.string().default(""),
	tags: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "You have to select at least one item.",
		})
		.default([]),
});

export const formSchemaShop = z.object({
	shopname: z.string().min(2, "Shop name field is required.").default(""),
	username: z.string().min(2, "Username field is required.").default(""),
	description: z.string().min(2, "Description field is required.").max(150, "Description is more than 150.").default(""),
	country: z.string().default("Nigeria"),
	currency: z.string().default("Naira"),
});

export const formSchemaPayment = z.object({
	accountName: z.string().min(2, "Account name field is required.").default(""),
	accountNumber: z.string().min(2, "Account number field is required.").default(""),
	bankLocation: z.string().default("Nigeria"),
	bankName: z.string().default("Amex"),
});

export const formSchemaVerification = z.object({
	verify: z.string().default("Individual"),
	nationality: z.string().default("Nigeria"),
	firstName: z.string().min(2, "First name field is required.").default(""),
	lastName: z.string().min(2, "Last name field is required.").default(""),
	contactAddress: z.string().min(2, "Contact address field is required.").default(""),
	refereeName: z.string().default(""),
	dob: z.date({
		required_error: "A date of birth is required.",
	}),
	refereeNumber: z.string().default(""),
});

export const formSchemaLaunch = z.object({
	terms: z
		.boolean()
		.refine((value) => value === true, {
			message: "Please accept the terms of use.",
		})
		.default(false),
	sellerPolicies: z
		.boolean()
		.refine((value) => value === true, {
			message: "Please accept the seller policies.",
		})
		.default(false),
	intellectualPolicies: z
		.boolean()
		.refine((value) => value === true, {
			message: "Please accept the intellectual property policies.",
		})
		.default(false),
});

// EVENTS FORM
export const formSchemaEvents = z.object({
	title: z.string().min(2, "Title field is required.").default(""),
	description: z.string().default("").optional(),
	personalisation: z.string().default("").optional(),
	organizer: z.string().min(2, "Organizer field is required.").default(""),
	category: z.string().min(1, "Category field is required.").default(""),
	type: z.string().min(1, "Type field is required.").default(""),
	ticket: z.string().min(1, "Ticket field is required.").default(""),
	capacity: z.string().min(1, "Capacity field is required.").default(""),
	vendors: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "Search an vendors.",
		})
		.default([]),
	tags: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "You have to select at least one item.",
		})
		.default([])
		.optional(),
});

export const formSchemaTimeLocation = z.object({
	date: z.date({
		required_error: "Date is required.",
	}),
	time: z.date({
		required_error: "Time is required.",
	}),
	physical: z.string().min(1, "Physical field is required.").default(""),
	location: z.string().min(1, "Location field is required.").default(""),
	city: z.string().min(1, "City field is required.").default(""),
	address: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "Search an address.",
		})
		.default([]),
});

export const formSchemaRegistration = z.object({
	registration: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "You have to select at least one item.",
		})
		.default(["name", "location"]),
});

export const formSchemaTickets = z.object({
	plans: z.string().min(1, "Plan field is required.").default(""),
	packageName: z.string().min(2, "Package name is required").default(""),
	price: z.string().min(2, "Price field is required").default(""),
	packageDescription: z.string().default(""),
});

export const formSchemaContact = z.object({
	firstname: z.string().min(2, "First name field is required.").default(""),
	lastname: z.string().min(2, "Last name field is required.").default(""),
	email: z.string().min(2, "Email field is required.").default(""),
	country: z.string().default("US"),
	phone: z.string().min(2, "Phone number field is required.").default(""),
});

export const formSchemaDeliveryDetails = z.object({
	fullname: z.string().min(2, "Full name field is required.").default(""),
	phone: z.string().min(2, "Phone number field is required.").default(""),
	email: z.string().min(2, "Email field is required.").default(""),
	country: z.string().default("NGN"),
	address: z.string().default("").optional(),
	location: z.string().default("").optional(),
	city: z.string().default("").optional(),
	zip_code: z.string().default("").optional(),
	note: z.string().default("").optional(),
	promo_code: z.string().default("").optional(),
});
