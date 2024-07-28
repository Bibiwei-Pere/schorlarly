"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../components/assets/images/Logo.png";
import "../Auth.scss";
import { formPasswordReset } from "@/app/components/schema/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Gmail from "../../components/assets/images/gmail.png";
import Alert from "../../components/assets/images/Alert.png";

const NewPassword = () => {
	const [active, setActive] = React.useState(false);
	const [email, setEmail] = React.useState("");

	const form = useForm<z.infer<typeof formPasswordReset>>({
		resolver: zodResolver(formPasswordReset),
	});

	React.useEffect(() => {
		form.setValue("email", email);
	}, [email, form]);

	function onSubmit(data: z.infer<typeof formPasswordReset>) {
		console.log(data);
		setActive(true);
	}

	return (
		<section className="auth">
			<div className="wrapper2">
				<Image src={Logo} alt="Logo" />
				{active ? (
					<div className="sub-wrapper flex flex-col gap-4 items-center max-w-[500px] mx-auto">
						<Image src={Alert} alt="Alert" />
						<h2>Email sent</h2>
						<p className="text-center mt-3">
							Instructions for resetting your password have been sent to <span className="text-black">{email}</span>
						</p>

						<Button variant={"outline"} className="max-w-[256px] mt-3 flex items-center gap-2">
							<Image src={Gmail} alt="Gmail" className="w-4" />
							Open Gmail
						</Button>
						<Link href="login">Back to sign in</Link>
					</div>
				) : (
					<div className="sub-wrapper flex flex-col gap-4 items-center max-w-[500px] mx-auto">
						<h2>Reset your password</h2>

						<Form {...form}>
							<form className="w-full flex flex-col gap-3" onSubmit={form.handleSubmit(onSubmit)}>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="mt-2">
											<Label>Email</Label>
											<Input placeholder="Type your email" {...field} onChange={(e) => setEmail(e.target.value)} />
											<FormMessage className="relative top-1" />
										</FormItem>
									)}
								/>

								<Button type="submit" className="max-w-full mt-6">
									Send password reset email
								</Button>
							</form>
						</Form>
					</div>
				)}
			</div>
		</section>
	);
};

export default NewPassword;
