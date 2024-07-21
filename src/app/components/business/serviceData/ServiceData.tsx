"use client";
import React, { useState } from "react";
import "./ServiceData.scss";
import Hourglass from "../../assets/images/hourglass.svg";
import Arrow from "../../assets/images/arrow-left-black.svg";
import Video from "../../assets/images/video-play.svg";
import Gallery from "../../assets/images/gallery-add.svg";
import Add from "../../assets/images/add-button-red.svg";
import VideoPlayer from "../../assets/images/Add.jpg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Close from "../../assets/images/Close.svg";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, Plus } from "lucide-react";
import { formSchemaLaunch, formSchemaPayment, formSchemaService, formSchemaShop, formSchemaVerification } from "../../schema/Forms";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { serviceOptions, tagsList } from "../../assets/data/Components";
import { format } from "date-fns";
import { CalendarRange } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

// BUSINESS ACCOUNT DATA STARTS HERE
interface StepsProp {
	data: {
		step: string;
		title: string;
		text: string;
	};
}

export const WelcomeOyoyo = () => {
	const navigate = useRouter();
	const handleSubmit = () => {
		localStorage.removeItem("selected");
		navigate.push("/dashboard/business");
	};
	return (
		<div className="welcome">
			<div className="upper">
				<div>
					<span>
						<Link href="#">
							<Image src={Close} alt="close" />
						</Link>
					</span>
					<p>Getting Started on Oyoyo</p>
				</div>
			</div>
			<div className="contain">
				<h1>Welcome to Oyoyo 🎉</h1>
				<p>We're excited to have you join our platform as a new seller. This video will guide you through the essential steps to help you get started and maximize your success on Oyoyo. Let's dive in!</p>
				<div className="image">
					<Image src={VideoPlayer} alt="Video Playback" />
				</div>
				<p className="ptag">Here are some important things to take note of as a seller. You can choose watch the video or skip directly to your dashboard.</p>
			</div>
			<div className="footer">
				<span>
					<div className="btn" onClick={handleSubmit}>
						Next <Image src={ArrowRight} alt="arrow" className="image" />
					</div>
				</span>
			</div>
		</div>
	);
};

// SERVICE HEADER
export const ServiceHeader = () => {
	return (
		<div className="serviceHeader">
			<span>
				<Link href="/dashboard/business/overview">
					<Image src={Arrow} alt="Arrow" />
				</Link>
				<h3>Dashboard</h3>
			</span>
			<button>
				<Link href="/dashboard/business">Save & Exit</Link>
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
export const ListService = () => {
	const navigate = useRouter();
	const form = useForm<z.infer<typeof formSchemaService>>({
		resolver: zodResolver(formSchemaService),
	});

	const onSubmit = (values: z.infer<typeof formSchemaService>) => {
		console.log(values);
		navigate.push("service/shop");
	};

	return (
		<div className="wrappers">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="service">
						<h2>Listing Details</h2>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<Label>Title</Label>
									<Input placeholder="Add product title" {...field} />
									{form.formState.errors.title ? <FormMessage /> : <FormDescription>Include keywords to drive sales</FormDescription>}
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="serviceCategory"
							render={({ field }) => (
								<FormItem>
									<Label>Product Category</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger className={cn(!field.value && "text-gray-400")}>
											<SelectValue placeholder="Select category" />
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
							name="serviceType"
							render={({ field }) => (
								<FormItem>
									<Label>Product Type</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger className={cn(!field.value && "text-gray-400")}>
											<SelectValue placeholder="Choose type" />
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
							name="description"
							render={({ field }) => (
								<FormItem>
									<Label>Description</Label>
									<Textarea placeholder="Enter description" {...field} />
									<FormDescription>Begin by providing a concise summary highlighting the most outstanding qualities of your product.</FormDescription>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="plans"
							render={({ field }) => (
								<FormItem>
									<Label>Number of plans</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger className={cn(!field.value && "text-gray-400")}>
											<SelectValue placeholder="3" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1">1</SelectItem>
											<SelectItem value="2">2</SelectItem>
											<SelectItem value="3">3</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Tabs defaultValue="Basic" className="w-full">
							<TabsList className="grid w-full grid-cols-3">
								{serviceOptions.map((service, index) => (
									<TabsTrigger value={service.value} key={index}>
										{service.value}
									</TabsTrigger>
								))}
							</TabsList>
							{serviceOptions.map((service, index) => {
								return (
									<TabsContent value={service.value} key={index}>
										<FormField
											control={form.control}
											name="packageName"
											render={({ field }) => (
												<FormItem>
													<Input className="my-4" placeholder="Package name" {...field} />
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="packageDescription"
											render={({ field }) => (
												<FormItem>
													<Textarea placeholder="Package description" className="my-2" {...field} />
													<FormDescription className="text-gray-400">Maximum of 1000 characters</FormDescription>
												</FormItem>
											)}
										/>
									</TabsContent>
								);
							})}
						</Tabs>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<Label>Price</Label>
									<Input placeholder="#" {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="addItem">
							<button>
								<Image src={Add} alt="Add" />
								Add item
							</button>
							<span>Click on “Add item” to include packages that comes with the ticket.</span>
						</div>

						<div className="photo">
							<h2>Photos</h2>
							<p>Add up to 3 photos, so buyers can see every detail, do not upload images that are not clear enough. </p>

							<span className="box">
								<Image src={Gallery} alt="Photo" />
								<p>Add photos</p>
							</span>
						</div>

						<div className="video">
							<h2>Video (optional)</h2>
							<p>Showcase your product using a 10 - 15 seconds video. You can choose to upload a click or embed it.</p>
							<span className="box">
								<Image src={Video} alt="Video" />
								<p>Add a video (max. file size: 50MB)</p>
							</span>
						</div>

						<FormField
							control={form.control}
							name="tags"
							render={({ field }) => (
								<FormItem>
									<Label>Tags</Label>
									<MultiSelect options={tagsList} onValueChange={field.onChange} defaultValue={field.value} placeholder="Shape, color, style, funtions etc" variant="inverted" animation={2} maxCount={2} />
									{form.formState.errors.tags ? <FormMessage /> : <FormDescription>Max. of 2 tags</FormDescription>}
								</FormItem>
							)}
						/>
					</div>

					<div className="service">
						<h2>Inventory and pricing</h2>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<Label>Price</Label>
									<Input placeholder="₦  Amount" {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="quantity"
							render={({ field }) => (
								<FormItem>
									<Label>Quantity</Label>
									<div className="qty">
										<div>QTY</div>
										<Input className="border-transparent focus:border-transparent" placeholder="Enter value" {...field} />
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="variable">
						<h2>Variations</h2>
						<span className="flex items-center space-x-2">
							<Switch id="airplane-mode" />
						</span>
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
export const ShopSetup = () => {
	const navigate = useRouter();
	const form = useForm<z.infer<typeof formSchemaShop>>({
		resolver: zodResolver(formSchemaShop),
	});

	const onSubmit = (values: z.infer<typeof formSchemaShop>) => {
		console.log(values);
		navigate.push("payment");
	};

	const [selectedFile, setSelectedFile] = useState({
		name: "",
	});

	const handleFileChange = (e: any) => {
		const file = e.target.files[0];
		setSelectedFile(file);
	};

	return (
		<div className="wrappers">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="sub-wrapper">
						<div className="custom-input">
							<input type="file" name="image" onChange={handleFileChange} />
							<h4>Upload Image</h4>
							{selectedFile.name === "" ? <span>(100px by 100px)</span> : <p>{selectedFile.name}</p>}
						</div>
						<FormField
							control={form.control}
							name="shopname"
							render={({ field }) => (
								<FormItem>
									<Label>Shop Name</Label>
									<Input placeholder="Enter name" {...field} /> <FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<Label>Shop Username</Label>
									<Input placeholder="Choose username" {...field} />
									{form.formState.errors.username ? <FormMessage /> : <FormDescription>Between 4-20 characters</FormDescription>}
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<Label>Description</Label>
									<Textarea placeholder="Enter description" {...field} />
									{form.formState.errors.username ? <FormMessage /> : <FormDescription>150 characters only</FormDescription>}
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem>
									<Label>Product Category</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Nigeria" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Nigeria">Nigeria</SelectItem>
											<SelectItem value="Kenya">Kenya</SelectItem>
											<SelectItem value="Mali">Mali</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem>
									<Label>Product Category</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Naira" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Naira">Naira</SelectItem>
											<SelectItem value="USD">USD</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex mt-4 w-[350px] mx-auto gap-[16px]">
						<Button variant={"secondary"}>
							<Link href="/dashboard/business/service" className="flex justify-center items-center">
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
export const PaymentSetup = () => {
	const navigate = useRouter();
	const form = useForm<z.infer<typeof formSchemaPayment>>({
		resolver: zodResolver(formSchemaPayment),
	});

	const onSubmit = (values: z.infer<typeof formSchemaPayment>) => {
		console.log(values);
		navigate.push("verification");
	};

	return (
		<div className="wrappers">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="sub-wrapper">
						<h2>Your Bank Information</h2>

						<FormField
							control={form.control}
							name="bankLocation"
							render={({ field }) => (
								<FormItem>
									<Label>Where is your bank located?</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Nigeria" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Nigeria">Nigeria</SelectItem>
											<SelectItem value="Kenya">Kenya</SelectItem>
											<SelectItem value="Mali">Mali</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="accountName"
							render={({ field }) => (
								<FormItem>
									<Label>Account Name</Label>
									<Input placeholder="Enter name" {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="accountNumber"
							render={({ field }) => (
								<FormItem>
									<Label>Account Number</Label>
									<Input placeholder="Enter number" {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="bankName"
							render={({ field }) => (
								<FormItem>
									<Label>Where is your bank located?</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Amex" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Amex">Amex</SelectItem>
											<SelectItem value="Access">Access</SelectItem>
											<SelectItem value="Access">Access</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex mt-4 w-[350px] mx-auto gap-[16px]">
						<Button variant={"secondary"}>
							<Link href="/dashboard/business/service/shop" className="flex justify-center items-center">
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

// STEP 4 OF 5
export const VerificationSetup = () => {
	const navigate = useRouter();
	const form = useForm<z.infer<typeof formSchemaVerification>>({
		resolver: zodResolver(formSchemaVerification),
	});

	const onSubmit = (values: z.infer<typeof formSchemaVerification>) => {
		console.log(values);
		navigate.push("launch");
	};

	return (
		<div className="wrappers">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="sub-wrapper">
						<FormField
							control={form.control}
							name="verify"
							render={({ field }) => (
								<FormItem>
									<Label>Verify as</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="An Individual" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Individual">An Individual</SelectItem>
											<SelectItem value="Business">Business</SelectItem>
											<SelectItem value="Company">Company</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="nationality"
							render={({ field }) => (
								<FormItem>
									<Label>Nationality</Label>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Nigeria" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Nigeria">Nigeria</SelectItem>
											<SelectItem value="Zambia">Zambia</SelectItem>
											<SelectItem value="Mali">Mali</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<h2>Personal Information</h2>
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<Label>Account Name</Label>
									<Input placeholder="Enter first name" {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<Label>Last Name</Label>
									<Input placeholder="Enter last number" {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="contactAddress"
							render={({ field }) => (
								<FormItem>
									<Label>Contact address</Label>
									<Input {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dob"
							render={({ field }) => (
								<FormItem>
									<Label>Your date of birth</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button variant={"outline"}>
												<CalendarRange className="h-[20px] w-[20px] mr-2" />
												{field.value ? format(field.value, "PPP") : <span className={cn(!field.value && "text-gray-400 font-[400]")}>DD/MM/YYYY</span>}
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
							name="refereeName"
							render={({ field }) => (
								<FormItem>
									<Label>Referee name</Label>
									<Input {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="refereeNumber"
							render={({ field }) => (
								<FormItem>
									<Label>Referee phone number</Label>
									<Input {...field} />
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="upload">
							<h2>Upload attachments</h2>
							<div className="addItem">
								<button>
									<Image src={Add} alt="Add" />
									Upload your Passport photo (PNG, JPG format)
								</button>
							</div>
							<div className="addItem">
								<button>
									<Image src={Add} alt="Add" />
									Upload NIN/Driver’s licence (PNG, JPG format)
								</button>
							</div>
							<div className="addItem">
								<button>
									<Image src={Add} alt="Add" />
									Upload Evidence of experience (PNG, JPG format)
								</button>
							</div>
						</div>
					</div>

					<div className="flex mt-4 w-[350px] mx-auto gap-[16px]">
						<Button variant={"secondary"}>
							<Link href="/dashboard/business/service/verification" className="flex justify-center items-center">
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

// STEP 5 OF 5
export const LaunchStore = () => {
	const navigate = useRouter();

	const form = useForm<z.infer<typeof formSchemaLaunch>>({
		resolver: zodResolver(formSchemaLaunch),
	});

	const onSubmit = (values: z.infer<typeof formSchemaLaunch>) => {
		navigate.push("pending");
	};

	return (
		<div className="wrappers">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="sub-wrapper">
						<h2>Terms of Use</h2>
						<p>Lorem ipsum dolor sit amet consectetur. Accumsan a a sapien ut eu viverra. Diam mattis sed nullam tristique. Rhoncus viverra porttitor sed urna bibendum congue. Lobortis sociis vulputate erat bibendum proin et enim. Fringilla euismod consectetur nibh interdum diam pharetra mauris elementum. Viverra tellus erat nulla lorem. Volutpat lacus amet hendrerit at vitae at. Diam velit senectus viverra morbi gravida velit. Magna lectus fermentum ornare nunc ullamcorper. Quam pulvinar nullam egestas amet in amet ultrices massa.</p>
						<p>Tellus nunc at pellentesque dictumst sagittis. At amet quis elit varius feugiat tincidunt cursus quam non. Interdum diam ac vel rhoncus turpis quam enim. Et at sed egestas diam commodo elementum vitae quis. Purus laoreet risus mattis lorem faucibus. Cursus molestie lorem lorem risus. Turpis sem odio enim eu et velit placerat. Leo sed a eu porta ultrices in mus.</p>

						<div className="terms">
							<FormField
								control={form.control}
								name="terms"
								render={({ field }) => (
									<FormItem>
										<div className="max-w-full flex flex-row gap-[8px] items-center">
											<Checkbox checked={field.value} onCheckedChange={field.onChange} />
											<Label className="label">
												I accept Oyoyo’s <Link href="#">terms of use</Link>
											</Label>
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="sellerPolicies"
								render={({ field }) => (
									<FormItem>
										<div className="max-w-full flex flex-row gap-[8px] items-center">
											<Checkbox checked={field.value} onCheckedChange={field.onChange} />
											<Label className="label">
												I accept Oyoyo’s <Link href="#">seller policies</Link>
											</Label>
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="intellectualPolicies"
								render={({ field }) => (
									<FormItem>
										<div className="max-w-full flex flex-row gap-[8px] items-center">
											<Checkbox checked={field.value} onCheckedChange={field.onChange} />
											<Label className="label">
												I accept Oyoyo’s <Link href="#">intellectual property policies.</Link>
											</Label>
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<div className="flex mt-4 w-[350px] mx-auto gap-[16px]">
						<Button variant={"secondary"}>
							<Link href="/dashboard/business/service/shop" className="flex justify-center items-center">
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

// VERIFICATION PENDING
export const Pending = () => {
	return (
		<div className="pending">
			<div>
				<Image src={Hourglass} alt="Hourglass" />
				<h2>Verification Pending</h2>
				<p>We have received your documents and are currently verifying your account. While your account is pending verification, you will still be able to access your dashboard. However, your stores will not be live until the verification process is complete which usually takes 2-3 business days.</p>
				<Button>
					<Link href="/dashboard/business/overview/dash" className="flex justify-center items-center">
						Go to Dashboard
						<ArrowRightCircleIcon className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</div>
		</div>
	);
};

export const ServicePage = () => {
	return (
		<div className="max-w-[910px] w-full mx-auto flex flex-col gap-[10px]">
			<h1>Dashboard Setup</h1>
			<p>Set up your dashboard to start selling on oyoyo.</p>

			<Link className="flex items-center justify-between gap-5 border border-gray-200 rounded-lg py-[12px] shadow-sm setUp px-[20px]" href="/dashboard/business/service">
				<p>List a service</p>
				<Plus className="plus text-gray-500 w-4" />
			</Link>

			<Link className="flex items-center justify-between gap-5 border border-gray-200 rounded-lg py-[12px] shadow-sm setUp px-[20px]" href="/dashboard/business/service/shop">
				<p>Set up your online store</p>
				<Plus className="plus text-gray-500 w-4" />
			</Link>
			<Link className="flex items-center justify-between gap-5 border border-gray-200 rounded-lg py-[12px] shadow-sm setUp px-[20px]" href="/dashboard/business/service/payment">
				<p>Set up payment method</p>
				<Plus className="plus text-gray-500 w-4" />
			</Link>
			<Link className="flex items-center justify-between gap-5 border border-gray-200 rounded-lg py-[12px] shadow-sm setUp px-[20px]" href="/dashboard/business/service/verification">
				<p>Set up verification details</p>
				<Plus className="plus text-gray-500 w-4" />
			</Link>
			<Link className="flex items-center justify-between gap-5 border border-gray-200 rounded-lg py-[12px] shadow-sm setUp px-[20px]" href="/dashboard/business/service/launch">
				<p>Launch your online store</p>
				<Plus className="plus text-gray-500 w-4" />
			</Link>
		</div>
	);
};
