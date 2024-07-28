"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Google from "../../components/assets/images/google.svg";
import "../Auth.scss";
import { formLogin } from "@/app/components/schema/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
	const form = useForm<z.infer<typeof formLogin>>({
		resolver: zodResolver(formLogin),
	});

	function onSubmit(data: z.infer<typeof formLogin>) {
		console.log(data);
	}

	return (
		<section className="auth">
			<div className="sidebar"></div>
			<div className="wrapper">
				<div className="flex flex-col gap-4 items-center max-w-[600px] mx-auto">
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

					<Form {...form}>
						<form className="w-full flex flex-col gap-3" onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="mt-2">
										<Label>Email</Label>
										<Input placeholder="Enter your email address" {...field} />
										<FormMessage className="relative top-1" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem className="mt-2">
										<Label>Password</Label>
										<Input placeholder="Enter your password" {...field} />
										<FormMessage className="relative top-1" />
									</FormItem>
								)}
							/>

							<div className="flex justify-between mt-4">
								<div className="flex items-center gap-2">
									<Checkbox />
									<p className="text-black">Remember me</p>
								</div>

								<Link href="reset-password">
									<p className="text-black">Forgot password?</p>
								</Link>
							</div>

							<Button type="submit" className="max-w-full mt-6">
								Login
							</Button>

							<Link href="signup">
								<p className="text-black text-center mt-6">I don’t have an account</p>
							</Link>
						</form>
					</Form>

					<div className="flex flex-col gap-3 mt-20">
						<Label className="text-center text-gray-500 max-w-[430px] leading-normal">By proceeding you acknowledge that you have read, understood and agree to our Terms and Conditions and Privacy Policy</Label>
						<Label className="text-center text-gray-500">© 2023 Scholarly</Label>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
