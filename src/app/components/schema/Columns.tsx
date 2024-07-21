import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MoreVertical, Printer } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Package, Payment } from "./Types";

export const ListingCol: ColumnDef<Payment>[] = [
	{
		id: "select",
		header: ({ table }) => <Checkbox className="border border-gray-300" checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
		cell: ({ row }) => <Checkbox className="border border-gray-300" checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "package",
		header: "Package",
		cell: ({ row }) => (
			<div className="capitalize items-center flex gap-2 font-bold ">
				<Avatar className="align-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</Avatar>
				{row.getValue("package")}
			</div>
		),
	},
	{
		accessorKey: "description",
		header: "Description",
		cell: ({ row }) => <div className="capitalize">{row.getValue("description")}</div>,
	},
	{
		accessorKey: "category",
		header: "Category",
		cell: ({ row }) => <div className="capitalize">{row.getValue("category")}</div>,
	},
	{
		accessorKey: "price",
		header: () => <div className="text-center">price</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));

			// Format the price as a dollar price
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return <div className="text-right font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "order",
		header: "Total Orders",
		cell: ({ row }) => <div className="text-center font-medium capitalize">{row.getValue("order")}</div>,
	},
	{
		accessorKey: "sale",
		header: () => <div className="text-center">Total Sales</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("sale"));

			// Format the price as a dollar price
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return <div className="text-center font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => <div className="capitalize">{row.getValue("status") === "Active" ? <div className="py-1 px-2 bg-green-100 text-green-700 rounded-md">Active</div> : <div className="py-1 px-2 text-red-700 rounded-md bg-red-100">Inactive</div>}</div>,
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<div>
					{
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="h-8 w-8 p-0">
									<span className="sr-only">Open menu</span>
									<MoreVertical className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>View Listing</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Edit Listing</DropdownMenuItem>
								<DropdownMenuItem style={{ color: "red", fontWeight: "500" }}>Delete</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					}
				</div>
			);
		},
	},
];

export const LatestOrdersCol: ColumnDef<Payment>[] = [
	{
		accessorKey: "date",
		header: "Date",
		cell: ({ row }) => <div>{row.getValue("date")}</div>,
	},
	{
		accessorKey: "id",
		header: "Order Code",
		cell: ({ row }) => <div>{row.getValue("id")}</div>,
	},
	{
		accessorKey: "package",
		header: "Customer",
		cell: ({ row }) => (
			<div className="flex gap-2 items-center font-semibold">
				<Avatar className="align-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</Avatar>
				{row.getValue("package")}
			</div>
		),
	},
	{
		accessorKey: "name",
		header: "Name",
		cell: ({ row }) => <div className="font-semibold">{row.getValue("name")}</div>,
	},
	{
		accessorKey: "price",
		header: "Amount",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));

			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return <div>{formatted}</div>;
		},
	},
	{
		accessorKey: "status",
		header: "Payment Status",
		cell: ({ row }) => <div>{row.getValue("status") === "Active" ? <div className="py-1 px-2 bg-green-100 w-[47px] text-green-700 rounded-md font-medium">Paid</div> : <div className="py-1 px-2 text-red-700 rounded-md bg-red-100 max-w-[70px] font-medium">Pending</div>}</div>,
	},
	{
		id: "actions",
		header: "Actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<div>
					{
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="h-8 w-8 p-0">
									<span className="sr-only">Open menu</span>
									<Printer className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>View Listing</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Edit Listing</DropdownMenuItem>
								<DropdownMenuItem style={{ color: "red", fontWeight: "500" }}>Delete</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					}
				</div>
			);
		},
	},
];

export const TopPackageCol: ColumnDef<Package>[] = [
	{
		accessorKey: "packageName",
		header: "Package",
		cell: ({ row }) => <div className="font-semibold">{row.getValue("packageName")}</div>,
	},

	{
		accessorKey: "change",
		header: "Change",
		cell: ({ row }) => (
			<div className="flex gap-2 items-center font-bold">
				<div className="bg-green-400 rounded-full p-[1px] w-[17px] h-[17px]">
					<ArrowUpRight className="text-white w-[15px] h-[15px]" />
				</div>
				{row.getValue("change")}
			</div>
		),
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => <div>{row.getValue("price")}</div>,
	},
	{
		accessorKey: "sold",
		header: "Sold",
		cell: ({ row }) => <div>{row.getValue("sold")}</div>,
	},
	{
		accessorKey: "sales",
		header: "Sales",
		cell: ({ row }) => <div className="font-semibold">{row.getValue("sales")}</div>,
	},
];
