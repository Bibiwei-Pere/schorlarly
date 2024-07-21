"use client";
import React from "react";
import "./EventsData.scss";
import Arrow from "@/app/components/assets/images/arrow-left-black.svg";
import Add from "@/app/components/assets/images/add-button-red.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { formSchemaEvents, formSchemaRegistration, formSchemaTickets, formSchemaTimeLocation } from "@/app/components/schema/Forms";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { tagsList } from "@/app/components/assets/data/Components";
import { format } from "date-fns";
import { CalendarRange } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StepsProp {
	data: {
		step: string;
		title: string;
		text: string;
	};
}

// EVENT HEADER
export const EventHeader = () => {
	return (
		<div className="overviewHeader">
			<span>
				<Link href="/dashboard/business/events">
					<Image src={Arrow} alt="Arrow" />
				</Link>
				<h3>Create event</h3>
			</span>
			<button>
				<Link href="/dashboard/business/events">Save & Exit</Link>
			</button>
		</div>
	);
};

//STEPS
export const Steps = ({ data }: StepsProp) => {
	return (
		<div className="steps">
			<h3>{data.step}</h3>
			<h1>{data.title}</h1>
			<p>{data.text} </p>
		</div>
	);
};

// STEP 1 OF 5
export const EventsDetails = () => {
	const navigate = useRouter();
	const form = useForm<z.infer<typeof formSchemaEvents>>({
		resolver: zodResolver(formSchemaEvents),
	});

	const onSubmit = (values: z.infer<typeof formSchemaEvents>) => {
		console.log(values);
		navigate.push("time");
	};

	return (
		<div className="wrappers">
			<h2>Create Event</h2>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="sub-wrapper">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem className="mt-2">
									<Input placeholder="Event title" {...field} />
									<FormMessage className="relative top-1" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem className="mt-4">
									<Textarea placeholder="Enter description" {...field} />
									<FormDescription className="text-gray-400 top-1">Maximum of 1000 characters</FormDescription>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="organizer"
							render={({ field }) => (
								<FormItem className="mt-2">
									<Input placeholder="Event organizer" {...field} />
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

						<div className="flex max-w-full gap-8 mt-3">
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
								name="ticket"
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
						</div>
					</div>

					<div className="sub-wrapper">
						<h2>Event capacity</h2>
						<FormField
							control={form.control}
							name="capacity"
							render={({ field }) => (
								<FormItem className="mt-2">
									<Input placeholder="Enter capacity" {...field} />
									<FormMessage className="relative top-1" />
								</FormItem>
							)}
						/>
					</div>

					<div className="sub-wrapper">
						<h2>Event Media</h2>
						<div className="addItem">
							<button>
								<Image src={Add} alt="Add" />
								Upload image or video (PNG, JPG format)
							</button>
						</div>
					</div>

					<div className="sub-wrapper">
						<h2>Event vendors</h2>
						<FormField
							control={form.control}
							name="vendors"
							render={({ field }) => (
								<FormItem>
									<MultiSelect options={tagsList} onValueChange={field.onChange} defaultValue={field.value} placeholder="Search for a vendor" variant="inverted" animation={2} maxCount={2} />
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<Button type="submit" className="mt-4">
						Next
						<ArrowRightCircleIcon className="ml-2 h-4 w-4" />
					</Button>
				</form>
			</Form>
		</div>
	);
};

// STEP 2 OF 5
export const TimeLocation = () => {
	const navigate = useRouter();
	const form = useForm<z.infer<typeof formSchemaTimeLocation>>({
		resolver: zodResolver(formSchemaTimeLocation),
	});

	const onSubmit = (values: z.infer<typeof formSchemaTimeLocation>) => {
		console.log(values);
		navigate.push("registration");
	};

	return (
		<div className="wrappers">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="sub-wrapper">
						<h2>Create Event</h2>
						<FormField
							control={form.control}
							name="date"
							render={({ field }) => (
								<FormItem className="mt-1">
									<Popover>
										<PopoverTrigger asChild>
											<Button variant={"outline"}>
												<CalendarRange className="h-[20px] w-[20px] mr-2" />
												{field.value ? format(field.value, "PPP") : <span className={cn(!field.value && "text-gray-400 font-[400]")}>Event date</span>}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="time"
							render={({ field }) => (
								<FormItem className="mt-2">
									<Popover>
										<PopoverTrigger asChild>
											<Button variant={"outline"}>
												<CalendarRange className="h-[20px] w-[20px] mr-2" />
												{field.value ? format(field.value, "PPP") : <span className={cn(!field.value && "text-gray-400 font-[400]")}>Event time</span>}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="sub-wrapper">
						<h2>Event location</h2>
						<FormField
							control={form.control}
							name="physical"
							render={({ field }) => (
								<FormItem className="mt-2">
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger className={cn(!field.value && "text-gray-400")}>
											<SelectValue placeholder="Physical" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Physical">Physical</SelectItem>
											<SelectItem value="Online">Online</SelectItem>
											<SelectItem value="Remote">Remote</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem className="mt-2">
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger className={cn(!field.value && "text-gray-400")}>
											<SelectValue placeholder="Location" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Nigeria">Nigeria</SelectItem>
											<SelectItem value="Mali">Mali</SelectItem>
											<SelectItem value="Ghana">Ghana</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem className="mt-2">
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger className={cn(!field.value && "text-gray-400")}>
											<SelectValue placeholder="City" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Physical">Physical</SelectItem>
											<SelectItem value="Online">Online</SelectItem>
											<SelectItem value="Remote">Remote</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem className="mt-2">
									<MultiSelect options={tagsList} onValueChange={field.onChange} defaultValue={field.value} placeholder="Type your address here..." variant="inverted" animation={2} maxCount={2} />
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex mt-4 w-[350px] mx-auto gap-[16px]">
						<Button variant={"secondary"}>
							<Link href="/dashboard/service" className="flex justify-center items-center">
								<ArrowLeftCircleIcon className="mr-2 h-4 w-4" />
								Back
							</Link>
						</Button>
						<Button type="submit">
							Next
							<ArrowRightCircleIcon className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

// STEP 3 OF 5
export const RegistrationDetails = () => {
	const navigate = useRouter();
	const form = useForm<z.infer<typeof formSchemaRegistration>>({
		resolver: zodResolver(formSchemaRegistration),
		defaultValues: {
			registration: ["name", "location"],
		},
	});

	const onSubmit = (values: z.infer<typeof formSchemaRegistration>) => {
		console.log(values);
		navigate.push("tickets");
	};

	return (
		<div className="wrappers">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="sub-wrapper">
						<h2>Create events</h2>

						<FormField
							control={form.control}
							name="registration"
							render={() => (
								<FormItem className="grid w-full grid-cols-2 gap-4 mt-2">
									{registration.map((item) => (
										<FormField
											control={form.control}
											key={item.id}
											name="registration"
											render={({ field }) => {
												return (
													<FormItem>
														<div className="max-w-full flex flex-row gap-[8px] items-center">
															<Checkbox
																checked={field.value?.includes(item.id)}
																onCheckedChange={(checked) => {
																	return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
																}}
															/>
															<Label className="label">{item.label}</Label>
														</div>
													</FormItem>
												);
											}}
										/>
									))}
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="addItem">
							<button>
								<Image src={Add} alt="Add" />
								Add parameter
							</button>
						</div>

						{/* <div className="terms" ></div> */}
					</div>

					<div className="flex mt-4 w-[350px] mx-auto gap-[16px]">
						<Button variant={"secondary"}>
							<Link href="time" className="flex justify-center items-center">
								<ArrowLeftCircleIcon className="mr-2 h-4 w-4" />
								Back
							</Link>
						</Button>
						<Button type="submit">
							Next
							<ArrowRightCircleIcon className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

// STEP 4 OF 4
// export const TicketsPrice = () => {
// 	const navigate = useRouter();
// 	const form = useForm<z.infer<typeof formSchemaTickets>>({
// 		resolver: zodResolver(formSchemaTickets),
// 	});

// 	const onSubmit = (values: z.infer<typeof formSchemaTickets>) => {
// 		console.log(values);
// 		navigate.push("/dashboard/business/events");
// 	};

// 	return (
// 		<div className="wrappers">
// 			<Form {...form}>
// 				<form onSubmit={form.handleSubmit(onSubmit)}>
// 					<div className="sub-wrapper">
// 						<Tabs defaultValue="Basic" className="w-full">
// 							<TabsList className="grid w-full grid-cols-3">
// 								{serviceOptions.map((service, index) => (
// 									<TabsTrigger value={service.value} key={index}>
// 										{service.value}
// 									</TabsTrigger>
// 								))}
// 							</TabsList>
// 							{serviceOptions.map((service, index) => {
// 								return (
// 									<TabsContent value={service.value} key={index}>
// 										<FormField
// 											control={form.control}
// 											name="packageName"
// 											render={({ field }) => (
// 												<FormItem>
// 													<Input className="my-4" placeholder="Package name" {...field} />
// 													<FormMessage />
// 												</FormItem>
// 											)}
// 										/>
// 										<FormField
// 											control={form.control}
// 											name="packageDescription"
// 											render={({ field }) => (
// 												<FormItem>
// 													<Textarea placeholder="Package description" className="my-2" {...field} />
// 													<FormDescription className="text-gray-400">Maximum of 1000 characters</FormDescription>
// 												</FormItem>
// 											)}
// 										/>
// 									</TabsContent>
// 								);
// 							})}
// 						</Tabs>
// 						<FormField
// 							control={form.control}
// 							name="price"
// 							render={({ field }) => (
// 								<FormItem>
// 									<Label>Price</Label>
// 									<Input placeholder="#" {...field} />
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<div className="addItem">
// 							<button>
// 								<Image src={Add} alt="Add" />
// 								Add item
// 							</button>
// 							<span>Click on “Add item” to include packages that comes with the ticket.</span>
// 						</div>
// 					</div>

// 					<div className="flex mt-4 w-[350px] mx-auto gap-[16px]">
// 						<Button variant={"secondary"}>
// 							<Link href="/dashboard/service/verification" className="flex justify-center items-center">
// 								<ArrowLeftCircleIcon className="mr-2 h-4 w-4" />
// 								Back
// 							</Link>
// 						</Button>
// 						<Button type="submit">Post event</Button>
// 					</div>
// 				</form>
// 			</Form>
// 		</div>
// 	);
// };

const registration = [
	{
		id: "name",
		label: "Name",
	},
	{
		id: "email",
		label: "Email address",
	},
	{
		id: "phone",
		label: "Phone number",
	},
	{
		id: "location",
		label: "Location",
	},
] as const;
