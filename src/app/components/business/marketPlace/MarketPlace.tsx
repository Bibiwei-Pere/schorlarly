"use client";
import { AlertDialog, AlertDialogTrigger, SuccessModal2 } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRight, BadgeCheck, Calendar, Filter, ImagePlus, LucideMessageSquareMore, MapPinIcon, PenLineIcon, Plus, StarIcon, UserPlus } from "lucide-react";
import React, { useState } from "react";
import "./MarketPlace.scss";
import Link from "next/link";
import Avatar from "../../../components/assets/images/Avatar.png";
import Avatar1 from "../../../components/assets/images/Avatar1.png";
import Rectangle from "../../../components/assets/images/Cupcakes.png";
import Star from "../../../components/assets/images/Star.png";
import Cake from "../../../components/assets/images/cake1.png";
import Nikon from "../../../components/assets/images/nikon.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { formSchemaDeliveryDetails } from "../../schema/Forms";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export const Market = () => {
	const [active, setActive] = useState(false);
	return (
		<>
			{active ? (
				<ViewStore />
			) : (
				<div className="events">
					<div>
						<h1>Market Place</h1>
						<div className="flex gap-[10px] mt-[30px]">
							<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
								<Calendar fill="#0F132499" className="text-white" />
								Last 7 days
							</div>
							<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
								<Filter fill="#0F132499" className="text-white" />
								Filter
								<select name="#" id="#"></select>
							</div>
						</div>
					</div>
					<div className="cardContainer">
						{service.map((item) => (
							<div key={item.title} className="relative max-w-[355px] rounded-[15.12px] overflow-hidden" onClick={() => setActive(true)}>
								<Image src={item.image} alt="Image" className="max-w-full" />
								<div className="relative px-[17.4px] py-[14px] bg-gray-50 flex flex-col gap-2">
									<span className="flex gap-2 justify-between gap-4">
										<h6 className="text-[15.12px] font-[600]">{item.title}</h6>
										<h6 className="text-[15.12px] font-[600] text-red-700">₦ {item.price}</h6>
									</span>
									<span className="flex gap-2 text-[#F48E2F] text-[12px]">
										<StarIcon fill="#F48E2F" className="text-[#F48E2F] h-[14px] w-[14px]" />
										{item.star}
									</span>
									<div className="flex gap-2 items-center">
										<Image src={item.avatar1} className="h-[18.58px] w-[18.58px] rounded-full" alt="Avaavatar1" />
										<p className="text-[11.34px]">By Vicventures</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export const ViewStore = () => {
	const [active, setActive] = useState(false);
	return (
		<>
			{active ? (
				<ViewMarket />
			) : (
				<div className="events">
					<div className="flex flex-col gap-[40px]">
						<div className="flex gap-4 items-start">
							<div className="relative max-w-[108px] w-full h-[108px] border-4 border-white bg-red-100 rounded-full shadow-md"></div>
							<div>
								<h2 className="flex items-start gap-2">
									Jason's Art <BadgeCheck fill="#b30909" className="text-white" />
								</h2>
								<span className="flex items-center">
									<p className="text-[12px] font-[400] pr-2 border-r border-gray-200">@jasonarts</p>
									<p className="text-[12px] pl-2">Lagos, Nigeria</p>
								</span>
								<span>Specialize in handmade cupcakes, bakery services, or one-of-a-kind cake supplies</span>
								<span className="flex items-center">
									<p className="text-[14px] text-red-700 font-[400] pr-2 border-r border-gray-200">448 Sales</p>
									<Image src={Star} alt="Star" className="pl-2" />
									<p className="text-[12px] text-yellow-400 font-[600] pl-2">4.0</p>
								</span>
								<span className="flex items-center mt-4 max-w-[314px] gap-[12px]">
									<Button>
										<UserPlus className="mr-2 w-[17px]" />
										Follow Jason
									</Button>
									<Button variant="secondary">
										<LucideMessageSquareMore className="mr-2 w-[17px]" />
										Message Jason
									</Button>
								</span>
							</div>
						</div>
						<div>
							<p className="font-[600] text-black">Shop Details</p>
							<p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
						</div>

						<div className="wrapper">
							<Tabs defaultValue="Listing" className="w-full mt-4">
								<TabsList className="grid max-w-[329px] grid-cols-2 h-10 items-center justify-center rounded-md bg-white p-1 text-gray-500">
									{store.map((item) => (
										<TabsTrigger value={item.name} key={item.name} className="rounded-sm py-2  data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
											{item.name}
										</TabsTrigger>
									))}
								</TabsList>
								{/* <TabsContent value={item.name} key={item.name} onClick={() => setActive(true)}> */}
								<div className="border-b border-gray-200 mt-4"></div>
								{store.map((item) => (
									<TabsContent value={item.name} key={item.name}>
										<Tabs defaultValue="Basic">
											{item.packageName && (
												<TabsList className="grid max-w-[329px] grid-cols-3 h-10 border-b border-gray-200 gap-15 pb-5 items-center justify-between rounded-md bg-white text-gray-500">
													{item.packageName?.map((store) => (
														<TabsTrigger value={store.title} key={store.title} className="rounded-sm py-2  data-[state=active]:border-b-[4px] data-[state=active]:border-red-700 data-[state=active]:text-red-700">
															{store.title}
														</TabsTrigger>
													))}
												</TabsList>
											)}
											{item.packageName?.map((store) => (
												<TabsContent value={store.title} key={store.title}>
													<div className="flex flex-col gap-5 mt-[30px]">
														<div>
															<p className="text-black font-[600]">Package name</p>
															<p>{store.name}</p>
														</div>
														<div>
															<p className="text-black font-[600]">Package price</p>
															<h4 className="text-red-700 text-lg font-semibold">₦{store.price}</h4>
														</div>
														<div>
															<p className="text-black font-[600]">Description</p>
															<p>{store.description}</p>
														</div>
														<div className="flex gap-5 mt-3">
															<Image src={store.image} alt="Image" className="relative max-w-[355px] w-full rounded-[15.12px] overflow-hidden max-w-full" />
															<Image src={store.image} alt="Image" className="relative max-w-[355px] w-full rounded-[15.12px] overflow-hidden max-w-full" />
															<Image src={store.image} alt="Image" className="relative max-w-[355px] w-full rounded-[15.12px] overflow-hidden max-w-full" />
														</div>
														<Button className="mt-5" onClick={() => setActive(true)}>
															Order {store.title} package
														</Button>
													</div>
												</TabsContent>
											))}
										</Tabs>
										{item.name === "Store Reviews" && (
											<>
												<div className="grid grid-cols-2 gap-8 py-10 border-b border-gray-200">
													{item.reviews?.map((review: any) => (
														<div key={review} className="flex flex-col gap-3 border-b border-gray-200 pb-5">
															<div className="flex gap-3">
																<Image src={review.avatar} alt="Avatar" className="w-[50px] h-[50px] rounded-full" />
																<div>
																	<p className="font-semibold text-black">{review.name}</p>
																	<Image src={Star} alt="Star" className="w-[108px] h-[20px]" />
																</div>
															</div>
															<div>
																<p className="text-black font-[600]">Description</p>
																<p>{review.description}</p>
															</div>
															<div className="flex gap-2 border border-gray-200 items-center">
																<Image src={Nikon} alt="Nikon" className="w-[40px] h-[40px]" />
																<div className="w-full">
																	<p className="text-[12px]">Nikon D750 FX-format </p>
																	<div className="flex w-full justify-between items-center">
																		<p className="text-[12px]">Type : D750 FX</p>
																		<ArrowRight className="text-red-700 w-[16px] h-[16px] mr-2" />
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
												<div className="flex gap-4 items-center mt-10">
													<Input placeholder="Enter response" />
													<ImagePlus />
													<Button>Send message</Button>
												</div>
											</>
										)}
									</TabsContent>
								))}
							</Tabs>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

// export const ViewOrders = (order: any) => {
export const ViewMarket = () => {
	const [active, setActive] = React.useState(false);
	// const [data, setData] = React.useState(order?.order.original);
	const form = useForm<z.infer<typeof formSchemaDeliveryDetails>>({
		resolver: zodResolver(formSchemaDeliveryDetails),
	});

	const onSubmit = (values: z.infer<typeof formSchemaDeliveryDetails>) => {
		console.log(values);
	};
	return (
		<>
			{active ? (
				<Market />
			) : (
				<div className="relative mx-auto">
					{/* HEADER */}
					<div className="headList">
						<span className="wrapper">
							<div onClick={() => setActive(true)}>
								<ArrowLeftCircle />
							</div>
							<h3>View Event</h3>
						</span>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="wrapper">
							<div className="dashContentContainer">
								<div className="section3">
									<h2>Delivery Details</h2>
									<div className="border-b border-gray-200"></div>

									<div className="flex flex-col gap-3 my-2">
										<div>
											<p className="text-black font-semibold my-2">Personal Information</p>
											<FormField
												control={form.control}
												name="fullname"
												render={({ field }) => (
													<FormItem>
														<Label>Owners full name</Label>
														<Input placeholder="Stefan" {...field} />
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<div className="grid grid-cols-2 gap-3 max-w-full">
											<FormField
												control={form.control}
												name="phone"
												render={() => (
													<FormItem className=" ">
														<Label>Phone number</Label>
														<div className="flex rounded-md border border-gray-300">
															<FormField
																control={form.control}
																name="country"
																render={({ field }) => (
																	<Select onValueChange={field.onChange} defaultValue={field.value}>
																		<SelectTrigger className="w-[86px] border-none">
																			<SelectValue placeholder="NGN" />
																		</SelectTrigger>
																		<SelectContent>
																			<SelectItem value="+1">US</SelectItem>
																			<SelectItem value="+234">NG</SelectItem>
																			<SelectItem value="+237">GH</SelectItem>
																		</SelectContent>
																	</Select>
																)}
															/>
															<FormField
																control={form.control}
																name="phone"
																render={({ field }) => (
																	<FormItem className="w-full">
																		<Input placeholder="+1 (555) 98363" className="border-none px-0" {...field} />
																	</FormItem>
																)}
															/>
														</div>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="email"
												render={({ field }) => (
													<FormItem>
														<Label>Email</Label>
														<Input placeholder="you@company.com" {...field} />
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
									</div>

									<div className="flex flex-col gap-3 my-2">
										<div>
											<p className="text-black font-semibold my-2">Delivery Address</p>
											<FormField
												control={form.control}
												name="address"
												render={({ field }) => (
													<FormItem>
														<Label>House address</Label>
														<Input placeholder="Last name" {...field} />
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<div className="grid grid-cols-3 gap-3 max-w-full">
											<FormField
												control={form.control}
												name="location"
												render={({ field }) => (
													<FormItem>
														<Label>Location</Label>
														<Input placeholder="Enter your location" {...field} />
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="city"
												render={({ field }) => (
													<FormItem>
														<Label>City</Label>
														<Input placeholder="Enter your city" {...field} />
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="zip_code"
												render={({ field }) => (
													<FormItem>
														<Label>Zip code</Label>
														<Input placeholder="Enter your zip code" {...field} />
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
									</div>

									<div className="my-2">
										<p className="text-black font-semibold my-2">Additional details</p>
										<FormField
											control={form.control}
											name="note"
											render={({ field }) => (
												<FormItem>
													<Label>Note</Label>
													<Textarea placeholder="Enter any more information you want to give the vendor" {...field} />
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<div className="flex items-center gap-2">
										<Checkbox className="border border-gray-200" /> <p className="font-semibold text-black">Save shipping profile</p>
									</div>
								</div>

								<div className="section4">
									<h2>Order Summary</h2>

									<div className="flex flex-col gap-[10px] pt-2 pb-6 border-b border-gray-200">
										<div className="flex items-center gap-3">
											<Image src={Cake} alt="Cake" className="w-[100px] h-[100px] rounded-lg" />
											<div>
												<h3>Creamy Cup Cake</h3>
												<div className="flex items-center gap-2">
													<h3 className="text-black font-semibold">Vendor</h3>
													<p>Erick</p>
												</div>
												<div className="flex items-center gap-2">
													<h3 className="text-black font-semibold">Package</h3>
													<p className="text-red-700">Basic</p>
												</div>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet consectetur. Et consectetur accumsan fusce mi tristique bibendum turpis in facilisi. Sit quam fermentum nec consequat quam libero. Amet eget et tellus vitae mi eleifend. Neque nisl eget neque pharetra eget imperdiet habitasse arcu vitae.</p>
									</div>

									<div className="flex flex-col gap-4 py-4 border-b border-gray-200">
										<div className="flex gap-2 py-4">
											<FormField
												control={form.control}
												name="promo_code"
												render={({ field }) => (
													<FormItem className="w-full">
														<Input placeholder="Insert Promo Code" {...field} />
														<FormMessage />
													</FormItem>
												)}
											/>
											<Button variant={"secondary"} className="max-w-[108px]">
												Apply code
											</Button>
										</div>
										<div className="flex gap-2 items-center justify-between">
											<h3>Basic package</h3>
											<p className="font-semibold">₦70,000</p>
										</div>
										<div className="flex gap-2 items-center justify-between">
											<h3>Discount</h3>
											<p className="font-semibold">-₦2,000</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 py-4">
										<div className="flex gap-2 items-center justify-between">
											<p className="text-black font-semibold">Vendor</p>
											<p className="text-red-700 font-semibold">₦68,000</p>
										</div>
									</div>

									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="my-5 max-w-full" type="submit">
												Comfirm order
											</Button>
										</AlertDialogTrigger>
										<SuccessModal2 title="Order sent successfully" description="Awaiting confirmation from the vendor" />
									</AlertDialog>

									<p className="text-[12px]">
										By placing your order, you agree to our company{" "}
										<Link href="#" className="text-red-500">
											Privacy Policy
										</Link>{" "}
										and{" "}
										<Link href="#" className="text-red-500">
											Conditions of Use
										</Link>
									</p>
								</div>
							</div>
						</form>
					</Form>
				</div>
			)}
		</>
	);
};

const store = [
	{
		name: "Listing",
		packageName: [
			{
				title: "Basic",
				name: "Creamy CupSoda",
				price: "70,000",
				description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
				image: Rectangle,
			},
			{
				title: "Standard",
				name: "Spicy CupSoda",
				price: "80,000",
				description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
				image: Rectangle,
			},
			{
				title: "Premium",
				name: "Cooked CupSoda",
				price: "100,000",
				description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
				image: Rectangle,
			},
		],
	},
	{
		name: "Store Reviews",
		reviews: [
			{
				title: "Love this product",
				name: "Zachary Parker",
				description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
				avatar: Avatar,
				image: Avatar1,
			},
			{
				title: "Love this product",
				name: "Zachary Parker",
				description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
				avatar: Avatar,
				image: Avatar1,
			},
			{
				title: "Love this product",
				name: "Zachary Parker",
				description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
				avatar: Avatar,
				image: Avatar1,
			},
			{
				title: "Love this product",
				name: "Zachary Parker",
				description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
				avatar: Avatar,
				image: Avatar1,
			},
		],
	},
];

const service = [
	{
		image: Rectangle,
		avatar: Avatar,
		avatar1: Avatar1,
		title: "Chocolate cakes",
		price: "70,000",
		star: "4.0",
	},
	{
		image: Rectangle,
		avatar: Avatar,
		avatar1: Avatar1,
		title: "Chocolate cakes",
		price: "70,000",
		star: "4.0",
	},
	{
		image: Rectangle,
		avatar: Avatar,
		avatar1: Avatar1,
		title: "Chocolate cakes",
		price: "70,000",
		star: "4.0",
	},
	{
		image: Rectangle,
		avatar: Avatar,
		avatar1: Avatar1,
		title: "Chocolate cakes",
		price: "70,000",
		star: "4.0",
	},
	{
		image: Rectangle,
		avatar: Avatar,
		avatar1: Avatar1,
		title: "Chocolate cakes",
		price: "70,000",
		star: "4.0",
	},
];
