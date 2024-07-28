"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Google from "../../components/assets/images/google.svg";
import "../Auth.scss";
import { formSignup } from "@/app/components/schema/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar } from "@/components/ui/avatar";
import Avatar25 from "../../components/assets/images/avatar25.png";
import { ArrowUpFromLineIcon } from "lucide-react";
import Logo from "../../components/assets/images/Logo.svg";
import Gmail from "../../components/assets/images/gmail.png";

const SignUp = () => {
	const [imageUrl, setImageUrl] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [verify, setVerify] = React.useState(false);
	const [active, setActive] = React.useState(false);
	const [error, setError] = React.useState(false);

	const form = useForm<z.infer<typeof formSignup>>({
		resolver: zodResolver(formSignup),
	});

	React.useEffect(() => {
		form.setValue("email", email);
	}, [email, form]);

	function onSubmit(data: z.infer<typeof formSignup>) {
		console.log(data);
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const file = event.target.files?.[0]; // Optional chaining to safely access files
		if (file) {
			const url = URL.createObjectURL(file);
			setImageUrl(url);
		}
	};

	return (
		<>
			{verify ? (
				<section className="auth">
					<div className="wrapper2">
						<Image src={Logo} alt="Logo" />

						<div className="sub-wrapper flex flex-col gap-4 items-center max-w-[500px] mx-auto">
							<h2>Verify your email</h2>
							<p className="text-center mt-3">
								We’ve sent an email to <span className="text-black">{email}</span> Click the link inside to get started.
							</p>

							<Button
								variant={"outline"}
								className="max-w-[256px] mt-3 flex items-center gap-2"
								onClick={() => {
									setVerify(false);
									setActive(true);
								}}
							>
								<Image src={Gmail} alt="Gmail" className="w-4" />
								Open Gmail
							</Button>
							<Link href="login" onClick={() => setVerify(false)}>
								Resend email
							</Link>
						</div>
					</div>
				</section>
			) : (
				<section className="auth">
					<div className="sidebar"></div>
					<div className="wrapper">
						<Form {...form}>
							<div className="flex flex-col gap-4 items-center max-w-[600px] mx-auto">
								{!active && (
									<>
										<h2>Welcome to Scholarly</h2>
										<p>Your smart academic companion</p>
										<Button variant={"outline"} className="max-w-[full] mt-3 flex items-center gap-2">
											<Image src={Google} alt="Google" className="w-4" />
											Continue with Google
										</Button>

										<div className="line">
											<div className="bg-gray-200 h-[1px]"></div>
											<p className="text-center">or</p>
											<div className="bg-gray-200 h-[1px]"></div>
										</div>
									</>
								)}

								<form className="w-full">
									{!active && (
										<div className="flex flex-col gap-3">
											<Input placeholder="Type your email" onChange={(e) => setEmail(e.target.value)} />
											{error && <FormMessage>Email field is required</FormMessage>}
											<Button
												className="max-w-full mt-6"
												onClick={(e) => {
													e.preventDefault();
													if (email !== "") setVerify(true);
													else setError(true);
												}}
											>
												Create an account
											</Button>

											<p className="flex items-center mt-6 justify-center gap-1 text-black">
												Already have an account?
												<Link href="login">
													<span className="text-blue-700 text-[14px]">Log in</span>
												</Link>
											</p>
										</div>
									)}

									{active && (
										<>
											<h2 className="text-left">Tell us about yourself</h2>
											<div className="flex gap-4 mt-8 mb-5">
												<Avatar>
													<AvatarFallback>{imageUrl ? <Image src={imageUrl} alt="Selected" className="w-full h-full" /> : <Image src={Avatar25} alt="Avatar25" />}</AvatarFallback>
												</Avatar>
												<div>
													<p className="text-black mb-3">Profile picture</p>
													<div className="flex gap-4">
														<div className="custom-input max-w-[200px] px-4 rounded-md bg-white text-black border border-gray-200 shadow-sm hover:bg-blue-900 hover:border-blue-900 hover:text-white">
															<ArrowUpFromLineIcon className="w-4 mr-2" />
															Upload Image
															<input type="file" onChange={handleFileChange} />
														</div>
														<Button
															variant={"outline"}
															className="text-red-700 w-auto"
															onClick={(e) => {
																e.preventDefault();
																setImageUrl("");
															}}
														>
															Remove
														</Button>
													</div>
													<Label className="text-gray-500">Up to 10MB, at least 500x500px</Label>
												</div>
											</div>
											<div className="flex flex-col gap-3">
												<FormField
													control={form.control}
													name="firstName"
													render={({ field }) => (
														<FormItem className="mt-2">
															<Label>First name</Label>
															<Input placeholder="Enter your first name..." {...field} />
															<FormMessage className="relative top-1" />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="lastName"
													render={({ field }) => (
														<FormItem className="mt-2">
															<Label>Last name</Label>
															<Input placeholder="Enter your last name..." {...field} />
															<FormMessage className="relative top-1" />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="email"
													render={({ field }) => (
														<FormItem className="mt-2">
															<Label>Email</Label>
															<Input
																placeholder="Enter your email address..."
																value={field.value}
																onChange={(e) => {
																	field.onChange(e.target.value);
																	setEmail(e.target.value);
																}}
															/>
															<FormMessage className="relative top-1" />
														</FormItem>
													)}
												/>

												<div className="flex mt-7 justify-between items-center">
													<div>
														<p className="text-black">Subscribe to product update emails</p>
														<p className="mt-2">Get news about latest features and updates</p>
													</div>
													<Switch />
												</div>

												<Button onClick={form.handleSubmit(onSubmit)} className="max-w-full mt-6">
													Continue
												</Button>
											</div>
										</>
									)}
								</form>

								<div className="flex flex-col gap-3 mt-20">
									<p className="text-center max-w-[430px] leading-normal">By proceeding you acknowledge that you have read, understood and agree to our Terms and Conditions and Privacy Policy</p>
									<p className="text-center">© 2023 Scholarly</p>
								</div>
							</div>
						</Form>
					</div>
				</section>
			)}
		</>
	);
};

export default SignUp;
