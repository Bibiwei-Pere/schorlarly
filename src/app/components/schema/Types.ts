export type Payment = {
	name: string;
	id: string;
	price: number;
	package: "Vanilla cake" | "Cake" | "Cupcake";
	description: string;
	category: "Basic" | "Standard" | "Premium";
	order: number;
	sale: number;
	tags: string[];
	date: string;
	status: "Active" | "Inactive";
};

export type Package = {
	packageName: string;
	change: string;
	price: string;
	sold: string;
	sales: string;
};
