"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../components/assets/images/Logo.png";
import "../Auth.scss";
import { formNewPassword } from "@/app/components/schema/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ResetPwd = () => {
	const form = useForm<z.infer<typeof formNewPassword>>({
		resolver: zodResolver(formNewPassword),
	});

	function onSubmit(data: z.infer<typeof formNewPassword>) {
		console.log(data);
	}

	return (
		<section className="auth">
			<div className="wrapper2">
				<Image src={Logo} alt="Logo" />
				<div className="sub-wrapper flex flex-col gap-4 items-center max-w-[500px] mx-auto">
					<h2>Set your new password</h2>

					<Form {...form}>
						<form className="w-full flex flex-col gap-3" onSubmit={form.handleSubmit(onSubmit)}>
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
							<FormField
								control={form.control}
								name="comfirmPassword"
								render={({ field }) => (
									<FormItem className="mt-2">
										<Label>Password</Label>
										<Input placeholder="Comfirm your password" {...field} />
										<FormMessage className="relative top-1" />
									</FormItem>
								)}
							/>

							<Button type="submit" className="max-w-full mt-6">
								Update password
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default ResetPwd;
