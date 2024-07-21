"use client";
import * as React from "react";
import { Pagination } from "@/components/ui/pagination";
import { ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ArrowLeftCircle, Filter, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Add from "@/app/components/assets/images/add-button-red.svg";
import Active from "@/app/components/assets/images/Active.svg";
import Arrow from "@/app/components/assets/images/arrow-left-black.svg";
import Cake from "@/app/components/assets/images/cake1.png";
import Cake2 from "@/app/components/assets/images/cake2.png";
import Frame from "@/app/components/assets/images/Frame 1.png";
import Zac from "@/app/components/assets/images/zac.png";
import Star from "@/app/components/assets/images/Star.png";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import { Plus } from "lucide-react";
import "./ListingData.scss";
import "../eventsData/EventsData.scss";
import { Form, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaEvents } from "@/app/components/schema/Forms";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";
import { tagsList } from "@/app/components/assets/data/Components";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { ListingCol } from "../../schema/Columns";
import { Payment } from "../../schema/Types";

export const Listing = ({ data }: any) => {
	const [active, setActive] = React.useState(false);
	const [listings, setListings] = React.useState({});
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns: ListingCol,
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
				<ViewListing listing={listings} />
			) : (
				<div className="listing">
					<div className="flex flex-row justify-between items-center">
						<h1>Services</h1>
						<span className="flex w-[270px] gap-[16px]">
							<Button variant={"secondary"}>Action</Button>
							<Button>
								<Link href="/dashboard/business/service" className="flex flex-row text-center justify-start items-center gap-[5px]">
									<Plus className="h-4 w-4" />
									New service
								</Link>
							</Button>
						</span>
					</div>

					<div className="mt-5">
						<div className="flex gap-[10px]">
							<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
								<MapPinIcon fill="#0F132499" className="text-white" />
								Last 7 days
							</div>
							<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
								<Filter fill="#0F132499" className="text-white" />
								Filter
								<select name="#" id="#"></select>
							</div>
						</div>
						<div className="relative">
							<div className="max-w-full">
								<div className="flex items-center py-4 ">
									<Input placeholder="Search product" value={(table.getColumn("package")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("package")?.setFilterValue(event.target.value)} className="max-w-sm" />
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
													<TableCell className="h-24 text-center">No results.</TableCell>
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

export const ViewListing = (listing: any) => {
	const [active, setActive] = React.useState(false);
	const [edit, setEdit] = React.useState(false);
	const [data, setData] = React.useState(listing?.listing.original);
	const date = new Date();
	const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	console.log(data);
	return (
		<>
			{active ? (
				<Listing data={listingData} />
			) : edit ? (
				<EditListing data={data} />
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
									<ArrowLeftCircle />
								</div>
								<h3>View Listing/ Vanilla cake</h3>
							</span>

							<div className="flex flex-row justify-center items-center gap-[15px]">
								<Image src={Active} alt="active" />
								<span className="flex flex-row w-[311px] gap-[10px]">
									<Button variant={"secondary"} className="flex flex-row justify-center items-center gap-[8px]">
										<EyeIcon className="h-[20px] w-[20px]" />
										Live Preview
									</Button>
									<Button>
										<div onClick={() => setEdit(true)}>Edit Product</div>
									</Button>
								</span>
							</div>
						</div>

						<div className="dashContentContainer">
							<div className="section1">
								<div className="wrapper1">
									<h2>Listing Details</h2>
									<div>
										<p>Title</p>
										<span>{data.package}</span>
									</div>
									<div>
										<p>Description</p>
										<span>{data.description}</span>
									</div>
									<div className="flex gap[40px] justify-between">
										<div>
											<p>Product Type</p>
											<span>Finished Project</span>
										</div>
										<div>
											<p>Tags/Keywords</p>
											<span>Cake, baker</span>
										</div>
										<div>
											<p>Product Category</p>
											<span>{data.category}</span>
										</div>
									</div>
								</div>

								<div className="wrapper2">
									<h2>Imagery & Video</h2>
									<div>
										<Image src={Cake} alt="cake" />
										<Image src={Cake2} alt="cake" />
										<Image src={Frame} alt="frame" />
									</div>
								</div>

								<div className="wrapper3">
									<h2>Variations</h2>
									<table className="rounded-lg">
										<tr>
											<th>Variant</th>
											<th>Price</th>
											<th>Package</th>
										</tr>
										<tr>
											<td>{data.package}</td>
											<td>₦ {data.price}</td>
											<td>{data.category}</td>
										</tr>
									</table>
								</div>

								<div className="wrapper4">
									<h2>Personalisation</h2>
									<div>
										<p>Instructions for buyers</p>
										<span>Enter the name you want on your T-shirt. Max number of characters, thank you.</span>
									</div>
									<div>
										<p>Optional</p>
										<span>Yes</span>
									</div>
								</div>
							</div>

							<div className="section2">
								<span className="text-gray-500 text-sm">Last updated {formattedDate}</span>

								<div>
									<h3>Analytics</h3>
									<div className="wrapper1">
										<div className="card">
											<h4>Status</h4>
											<span className="py-1 px-2 text-[14px] bg-green-100 text-green-700 rounded-md w-[60px]">{data.status}</span>
										</div>
										<div className="card">
											<h4>Quantity</h4>
											<h2>2</h2>
										</div>
										<div className="card">
											<h4>Order</h4>
											<h2>{data.order}</h2>
										</div>
										<div className="card">
											<h4>Refunds</h4>
											<h2>2</h2>
										</div>

										<div className="card card5">
											<h4>Total Sales</h4>
											<h2>₦ {data.sale}</h2>
										</div>
									</div>
								</div>

								<div className="flex flex-col gap-5">
									<h3>Product Reviews (1)</h3>

									<div className="flex gap-4 items-center">
										<Image src={Zac} alt="zac" className="h-[60px] w-[60px] rounded-full" />
										<span>
											<h3>{data.name}</h3>
											<Image src={Star} alt="star" />
										</span>
									</div>

									<div>
										<h3>Love this product!</h3>
										<p>An absolute great purchase! So sweet and perfect, and it doesn’t get in the way! I love that I can buy as many cake as my heart desires and it’ll be a long while before the space is filled up! </p>
									</div>

									<div className="flex items-center">
										<Image src={Cake} alt="vanilla" className="h-[80px] w-[80px] rounded-md" />
										<div className="py-[10px] px-[12px]">
											<span className="font-medium">Vanilla creamy cake</span>
											<p>Type : Finished Product</p>
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

export const EditListing = (data: any) => {
	const [active, setActive] = React.useState(false);
	const [listing, setListing] = React.useState(data?.data);

	const form = useForm<z.infer<typeof formSchemaEvents>>({
		resolver: zodResolver(formSchemaEvents),
		defaultValues: {
			title: listing?.package,
			category: listing?.category,
			description: listing?.description,
			type: listing?.type,
			tags: listing?.tags,
		},
	});

	const onSubmit = (values: z.infer<typeof formSchemaEvents>) => {
		console.log(values);
		setActive(true);
	};

	return (
		<>
			{active ? (
				<Listing data={listingData} />
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
								<h3>Edit Listing/ Vanilla cake</h3>
							</span>

							<div className="flex flex-row justify-center items-center gap-[15px]">
								<Image src={Active} alt="active" />
								<span className="flex flex-row w-[311px] gap-[10px]">
									<Button variant={"secondary"} className="flex flex-row justify-center items-center gap-[8px]">
										<EyeIcon className="h-[20px] w-[20px]" />
										Live Preview
									</Button>
									<Button onClick={form.handleSubmit(onSubmit)}>Update Product</Button>
								</span>
							</div>
						</div>

						<div className="dashContentContainer">
							<div className="section1">
								<div className="wrapper1">
									<h2>Listing Details</h2>
									<div>
										<p>Title</p>
										<span>{listing.package}</span>
									</div>
									<div>
										<p>Description</p>
										<span>{listing.description}</span>
									</div>
									<div className="flex gap[40px] justify-between">
										<div>
											<p>Product Type</p>
											<span>Finished Project</span>
										</div>
										<div>
											<p>Tags/Keywords</p>
											<span>Cake, baker</span>
										</div>
										<div>
											<p>Product Category</p>
											<span>{listing.category}</span>
										</div>
									</div>
								</div>

								<div className="wrapper2 border-b-none">
									<h2>Imagery & Video</h2>
									<div>
										<Image src={Cake} alt="cake" />
										<Image src={Cake2} alt="cake" />
										<Image src={Frame} alt="frame" />
									</div>
								</div>
							</div>

							<div className="wrappers">
								<Form {...form}>
									<form>
										<div className="sub-wrapper">
											<h2>Listing Details</h2>

											<FormField
												control={form.control}
												name="title"
												render={({ field }) => (
													<FormItem className="mt-2">
														<Label>Title</Label>
														<Input placeholder="Event title" {...field} />
														<FormMessage className="relative top-1" />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="category"
												render={({ field }) => (
													<FormItem className="mt-4">
														<Select onValueChange={field.onChange} defaultValue={field.value}>
															<SelectTrigger className={cn(!field.value && "text-gray-400")}>
																<SelectValue placeholder="Event category" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="Entertainment">Entertainment</SelectItem>
																<SelectItem value="Music">Music</SelectItem>
																<SelectItem value="Video">Video</SelectItem>
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="description"
												render={({ field }) => (
													<FormItem className="mt-4">
														<Label>Description</Label>
														<Textarea placeholder="Enter description" {...field} />
														<FormDescription className="text-gray-400">Maximum of 1000 characters</FormDescription>
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="type"
												render={({ field }) => (
													<FormItem className="w-full">
														<Select onValueChange={field.onChange} defaultValue={field.value}>
															<SelectTrigger className={cn(!field.value && "text-gray-400")}>
																<SelectValue placeholder="Event type" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="Premium">Premium</SelectItem>
																<SelectItem value="Basic">Basic</SelectItem>
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="tags"
												render={({ field }) => (
													<FormItem>
														<Label>Tags</Label>
														<MultiSelect options={tagsList} onValueChange={field.onChange} defaultValue={field?.value} placeholder="Shape, color, style, funtions etc" variant="inverted" animation={2} maxCount={2} />
														{form.formState.errors.tags ? <FormMessage /> : <FormDescription>Max. of 2 tags</FormDescription>}
													</FormItem>
												)}
											/>
										</div>

										<div className="sub-wrapper">
											<h2>Personalisation</h2>
											<FormField
												control={form.control}
												name="personalisation"
												render={({ field }) => (
													<FormItem className="mt-4">
														<Label>Instructions for buyers</Label>
														<Textarea placeholder="Enter the name you want on your T-shirt. Max number of characters, thank you." {...field} />
														<FormDescription className="text-gray-400">Make this optional for buyers </FormDescription>
													</FormItem>
												)}
											/>
										</div>
									</form>
								</Form>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export const listingData: Payment[] = [
	{
		name: "Precious Will",
		id: "m5gr84i9",
		price: 792,
		package: "Vanilla cake",
		description: "A creamy sweet cake that can...",
		category: "Basic",
		order: 2,
		sale: 792,
		tags: ["Oval", "Walking"],
		date: "01/10/2023",

		status: "Active",
	},
	{
		name: "Victor Ekpott",
		id: "o9ebht6q",
		price: 792,
		package: "Cake",
		description: "A creamy sweet cake that can...",
		category: "Standard",
		order: 5,
		sale: 1210,
		tags: ["Oval", "Walking"],

		date: "01/10/2023",

		status: "Active",
	},
	{
		name: "Horeolowa Mary",
		id: "n11iogs",
		price: 792,
		package: "Cupcake",
		description: "A creamy sweet cake that can...",
		category: "Premium",
		order: 9,
		sale: 792,
		tags: ["Oval", "Walking"],
		date: "01/10/2023",

		status: "Inactive",
	},
	{
		name: "Zuli Kent",
		id: "3u1reuv4",
		price: 792,
		package: "Cake",
		description: "A creamy sweet cake that can...",
		category: "Basic",
		order: 1,
		sale: 521,
		tags: ["Oval", "Walking"],

		date: "01/10/2023",

		status: "Active",
	},
	{
		name: "Ejiro Willfred",
		id: "iedjfkle3",
		price: 792,
		package: "Cake",
		description: "A creamy sweet cake that can...",
		category: "Basic",
		order: 1,
		sale: 2893,
		tags: ["Oval", "Walking"],

		date: "01/10/2023",

		status: "Active",
	},
	{
		name: "Yusuf Mohamed",
		id: "5kma53ae",
		price: 792,
		package: "Cake",
		description: "A creamy sweet cake that can...",
		category: "Basic",
		order: 1,
		sale: 657,
		tags: ["Oval", "Walking"],

		date: "01/10/2023",

		status: "Active",
	},
	{
		name: "Kelly Eric",
		id: "bhqecj4p",
		price: 1432,
		package: "Cake",
		description: "A creamy sweet cake that can...",
		category: "Basic",
		order: 0,
		sale: 792,
		tags: ["Oval", "Walking"],
		date: "24/12/2023",

		status: "Inactive",
	},
];
