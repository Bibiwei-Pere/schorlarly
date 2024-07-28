import { Wallet } from "./wallet";

export interface User {
	id: number;
	username: string;
	bio: string;
	timezone: string;
	avatar: string;
	phone: string;
	email: string;
	first_name: string;
	last_name: string;
	isVendor: boolean;
	hasPlan: boolean;
	reset_password_token: string;
	reset_password_expires: string;
	gender: string;
	is_active: boolean;
	is_blocked: boolean;
	password: string;
	createdAt: string;
	updatedAt: string;
	country: string;
	state: string;
	recipientCode: string;
	role: string;
	latitude: number;
	longitude: number;
	location_name: string;
	accountType: string;
	paymentGatewayId: string;
	Device_Tokens: string;
	Wallet: Wallet;
}
