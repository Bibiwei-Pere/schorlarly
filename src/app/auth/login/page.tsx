"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Oyoyo from "../../components/assets/images/Oyoyo.svg";
import EyeSlash from "../../components/assets/images/eye-slash.svg";
import Apple from "../../components/assets/images/apple.svg";
import Facebook from "../../components/assets/images/facebook.svg";
import Google from "../../components/assets/images/google.svg";
import "./Login.scss";
import Background from "@/app/components/authBackground/Background";
import { WelcomeOyoyo } from "@/app/components/business/serviceData/ServiceData";

const Login = () => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		try {
			setLoading(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{loading ? (
				<WelcomeOyoyo />
			) : (
				<section className="login">
					<Background />
					<div className="container">
						<Image src={Oyoyo} alt="Envelope" />
						<h2>Welcome back,</h2>
						<p className="text">
							Don’t have an account?{" "}
							<Link className="login_btn" href="signup">
								Create an account
							</Link>
						</p>
						<form onSubmit={handleSubmit}>
							<div className="sub_wrapper">
								<label htmlFor="email">
									Email
									<input type="email" placeholder="email@example.com" required />
								</label>
								<label htmlFor="password">
									Password
									<div>
										<input type="password" placeholder="Enter password" required />
										<Image src={EyeSlash} alt="EyeSlash" />
									</div>
								</label>
							</div>
							<Link className="login_btn" href="reset-password">
								Reset password
							</Link>
							<button>{loading ? "Authenticating..." : "Sign In"}</button>
							<span>
								<div className="line"></div>
								<p>or</p>
								<div className="line"></div>
							</span>
							<div className="socials">
								<Link href="#">
									<Image src={Google} alt="Envelope" />
								</Link>
								<Link href="#">
									<Image src={Apple} alt="Envelope" />
								</Link>
								<Link href="#">
									<Image src={Facebook} alt="Envelope" />
								</Link>
							</div>
						</form>
					</div>
				</section>
			)}
		</>
	);
};

export default Login;
