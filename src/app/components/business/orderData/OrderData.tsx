"use client";
import * as React from "react";
import { Pagination } from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { CircleCheck, Filter, LucideMapPin, MapPinIcon, MoreVertical, PrinterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Arrow from "@/app/components/assets/images/arrow-left-black.svg";
import Cake from "@/app/components/assets/images/cake1.png";
import Zac from "@/app/components/assets/images/zac.png";
import Mastercard from "@/app/components/assets/images/Mastercard.png";
import "./OrderData.scss";
import "../eventsData/EventsData.scss";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, ErrorModal, SuccessModal } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { CardWallet } from "@/components/ui/card";
import { Payment } from "../../schema/Types";
import { listingData } from "../listingData/ListingData";

export const columns: ColumnDef<Payment>[] = [
	{
		id: "select",
		header: ({ table }) => <Checkbox className="border border-gray-300" checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
		cell: ({ row }) => <Checkbox className="border border-gray-300" checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "id",
		header: "ID",
		cell: ({ row }) => <div className="capitalize font-bold">{row.getValue("id")}</div>,
	},
	{
		accessorKey: "name",
		header: "Customer",
		cell: ({ row }) => (
			<div className="capitalize flex gap-2 items-center font-bold ">
				<Avatar className="align-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</Avatar>
				{row.getValue("name")}
			</div>
		),
	},
	{
		accessorKey: "date",
		header: "Date",
		cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
	},
	{
		accessorKey: "price",
		header: "Amount",
		// header: () => <div className="text-center">price</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));

			// Format the price as a dollar price
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
		cell: ({ row }) => <div className="capitalize">{row.getValue("status") === "Active" ? <div className="py-1 px-2 bg-green-100 w-[47px] text-green-700 rounded-md font-medium">Paid</div> : <div className="py-1 px-2 text-red-700 rounded-md bg-red-100 max-w-[70px] font-medium">Pending</div>}</div>,
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

export const Orders = ({ data }: any) => {
	const [active, setActive] = React.useState(false);
	const [listings, setListings] = React.useState({});
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<>
			{active ? (
				<ViewOrders order={listings} />
			) : (
				<div className="orders">
					<div className="flex flex-col">
						<h1>Orders</h1>
						<div className="cardWalletWrapper">
							<CardWallet title="Active Orders" header="2" />
							<CardWallet title="Active Packages" header="2" />
							<CardWallet title="Pending Funds" header="12" />
							<CardWallet title="Avg Rating" header="0" />
							<CardWallet title="Total Sales" header="₦ 100,000" />
						</div>
					</div>

					<div className="wrapper">
						<h2>Order history</h2>
						<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
							<MapPinIcon fill="#0F132499" className="text-white" />
							Last 7 days
						</div>
						<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
							<Filter fill="#0F132499" className="text-white" />
							Filter
							<select name="#" id="#"></select>
						</div>
						<div className="relative">
							<div className="max-w-full">
								<div className="flex items-center py-4 ">
									<Input placeholder="Search orders" value={(table.getColumn("package")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("package")?.setFilterValue(event.target.value)} className="max-w-sm" />
								</div>
								<div>
									<Table>
										<TableHeader>
											{table.getHeaderGroups().map((headerGroup) => (
												<TableRow key={headerGroup.id}>
													{headerGroup.headers.map((header) => {
														return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
													})}
												</TableRow>
											))}
										</TableHeader>
										<TableBody>
											{table.getRowModel().rows?.length ? (
												table.getRowModel().rows.map((row) => (
													<TableRow
														key={row.id}
														data-state={row.getIsSelected() && "selected"}
														onClick={(e: any) => {
															if (e.target?.tagName !== "BUTTON") {
																setActive(true);
																setListings(row);
															}
														}}
													>
														{row.getVisibleCells().map((cell) => (
															<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
														))}
													</TableRow>
												))
											) : (
												<TableRow>
													<TableCell colSpan={columns.length} className="h-24 text-center">
														No results.
													</TableCell>
												</TableRow>
											)}
										</TableBody>
									</Table>
								</div>
								<div className="items-center">
									<Pagination />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export const ViewOrders = (order: any) => {
	const [active, setActive] = React.useState(false);
	const [data, setData] = React.useState(order?.order.original);
	return (
		<>
			{active ? (
				<Orders data={listingData} />
			) : (
				<>
					{/* ADDS THE GRAY BACKGROUND */}
					<div className="dashBG"></div>

					{/* Wraps the main body and the right panel */}
					<div className="relative mx-auto">
						{/* HEADER */}
						<div className="headList">
							<span className="wrapper">
								<div onClick={() => setActive(true)}>
									<Image src={Arrow} alt="Arrow" />
								</div>
								<h3>View Order / {data.id}</h3>
							</span>

							{data.status === "Active" ? (
								<span className="flex w-[311px] gap-[10px]">
									<Button className="flex justify-center items-center gap-[8px]">
										Print Receipt
										<PrinterIcon className="h-[20px] w-[20px]" />
									</Button>
								</span>
							) : (
								<span className="flex flex-row w-[311px] gap-[10px]">
									<ErrorModal variant="secondary" triggerBtn="Cancel Order" title="Cancel Order" description="Are you sure you want to cancel this order and make refunds to the customer?" dialogCancel="Back" dialogAction="Yes, cancel" />
									<AcceptOrder />
								</span>
							)}
						</div>

						<div className="dashContentContainer">
							<div className="section3">
								{/* MAP OVER THIS ONCE I GET REAL DATA */}
								<div className="flex bg-white flex-col gap-2 rounded-md border border-gray-200 px-4 py-3">
									<div className="wrapper1">
										<div className="flex gap-2 items-center">
											<Image className="rounded-md max-w-[98px]" src={Cake} alt="Cake" />
											<div className="flex flex-col gap-[4px]">
												<h3>{data.package}</h3>
												<p>Color: Metallic Silver</p>
												<p>Category: {data.category}</p>
												<p>Type: {data.type}</p>
											</div>
										</div>
										<div className="flex flex-col gap-2">
											<span>x1</span>
											<h3>₦{data.price}</h3>
										</div>
									</div>
									<span>{data.description}</span>
								</div>
								<div className="flex bg-white flex-col gap-2 rounded-md border border-gray-200 px-4 py-3">
									<div className="wrapper1">
										<div className="flex gap-2 items-center">
											<Image className="rounded-md max-w-[98px]" src={Cake} alt="Cake" />
											<div className="flex flex-col gap-[4px]">
												<h3>{data.package}</h3>
												<p>Color: Metallic Silver</p>
												<p>Category: {data.category}</p>
												<p>Type: {data.type}</p>
											</div>
										</div>
										<div className="flex flex-col gap-2">
											<span>x1</span>
											<h3>₦{data.price}</h3>
										</div>
									</div>
									<span>{data.description}</span>
								</div>

								<div className="flex bg-white flex-col gap-4 rounded-md border border-gray-200 px-4 py-3">
									<div className="flex flex-col gap-2">
										<div className="flex justify-between gap-4">
											<p>Subtotal</p>
											<p className="text-black">₦{data.price}</p>
										</div>
										<div className="flex justify-between gap-4">
											<p>Shipping fee</p>
											<p className="text-black">₦{data.price}</p>
										</div>
										<div className="flex justify-between gap-4">
											<p>Handling fee</p>
											<p className="text-black">₦{data.price}</p>
										</div>
										<div className="flex justify-between gap-4">
											<p>Tax</p>
											<p className="text-black">₦{data.price}</p>
										</div>
										<div className="flex justify-between gap-4">
											<p>Total</p>
											<p className="text-black">₦{data.price}</p>
										</div>
									</div>
									<div className="flex justify-between gap-4">
										<p className="text-black">Amount to be paid</p>
										<p className="text-red-700">₦{data.sale}</p>
									</div>
								</div>
							</div>

							<div className="section4">
								<div className="flex flex-col gap-[16px] pt-2 pb-6 border-b border-gray-200">
									<h3>Order Status</h3>
									<span className="flex items-center">
										Order ID: <p className="text-red-700 ml-1">{data.id}</p>
									</span>
									{data.status === "Active" ? <span className="py-1 px-2 text-sm bg-green-100 text-green-700 font-medium rounded-md w-[70px]">Fufilled</span> : <span className="py-1 px-2 text-yellow-700  text-sm rounded-md bg-yellow-100 max-w-[75px] font-medium">Pending</span>}
								</div>
								<div className="flex flex-col gap-4 py-4 border-b border-gray-200">
									<h3>Customer</h3>
									<div className="flex items-center gap-2">
										<Image className="w-[40px] h-[40px] rounded-full" src={Zac} alt="Zac" />
										<span>{data.name}</span>
									</div>
								</div>
								<div className="flex flex-col gap-4 py-4 border-b border-gray-200">
									<h3>Delivery Information</h3>
									<div className="flex gap-2 items-center">
										<span className="border border-gray-200 rounded-full p-1">
											<LucideMapPin className="text-gray-500" />
										</span>
										<div className="flex flex-col gap-1">
											<span>Victoria Island, Lagos,</span>
											<span className="font-medium text-gray-400 text-sm">Nigeria</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-2 py-4">
									<h3>Payment Information</h3>
									<div className="flex gap-2 items-center mt-2">
										<Image src={Mastercard} alt="Mastercard" className="w-[32px]" />
										<div className="flex flex-col gap-1">
											<span>Mastercard</span>
											<span>**** **** **** *819</span>
										</div>
									</div>
									<div className="flex gap-2 items-center">
										<span className="border border-gray-200 rounded-full p-1">
											<LucideMapPin className="text-gray-500" />
										</span>
										<div className="flex flex-col gap-[4px]">
											<span>Lagos</span>
											<span>Nigeria</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

const AcceptOrder = () => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Accept Order</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="left-[50%] top-[50%]">
				<AlertDialogHeader className="flex-row gap-4">
					<div className="alertHeader bg-[#EDFDF4]">
						<div className="bg-[#EDFDF4]">
							<CircleCheck className="text-green-500" />
						</div>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<div>
							<AlertDialogTitle className="text-black pb-2">Accept Order</AlertDialogTitle>
							<AlertDialogDescription>Confirm which products are available</AlertDialogDescription>
						</div>
						<div className="flex flex-col gap-3">
							<div className="flex gap-3 justify-between">
								<div className="flex flex-row gap-[8px] items-center">
									<Checkbox className="border-gray-200" />
									<Label className="text-gray-500">Vanilla Cake</Label>
								</div>
								<Label className="text-gray-500">x2</Label>
							</div>
							<div className="flex gap-3 justify-between">
								<div className="flex flex-row gap-[8px] items-center">
									<Checkbox className="border-gray-200" />
									<Label className="text-gray-500">Baked Cake</Label>
								</div>
								<Label className="text-gray-500">x1</Label>
							</div>
						</div>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter className="alertDialogFooter">
					<div className="box">
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction className="bg-green-500">Update</AlertDialogAction>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
