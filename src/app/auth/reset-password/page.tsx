"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Arrow from "../../components/assets/images/arrow-left.svg";
import "./ResetPwd.scss";
import Background from "@/app/components/authBackground/Background";

const ResetPwd = () => {
	const [active, setActive] = useState(false);
	const [email, setEmail] = useState("");
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setActive(true);

		console.log("Login Successful");
	};

	return (
		<section className="resetPwd">
			<Background />
			{active ? (
				<div className="emailContainer">
					<Link href="login">
						<Image src={Arrow} alt="Arrow" />
						<p>Back to Sign in</p>
					</Link>
					<h2>Check your email</h2>
					<p className="text">We sent a password reset link to</p>
					<p className="text">{email}</p>

					<form>
						<button onSubmit={handleSubmit}>Open email app</button>
					</form>
					<p className="text2">
						Didn’t receive the email?{" "}
						<span className="resend" onClick={handleSubmit}>
							Click to resend
						</span>
					</p>
				</div>
			) : (
				<div className="container">
					<Link href="login">
						<Image src={Arrow} alt="Arrow" />
						<p>Back to Sign in</p>
					</Link>
					<h2>Reset password</h2>
					<p className="text">No worries, we’ll send you reset instructions.</p>

					<form onSubmit={handleSubmit}>
						<div className="sub_wrapper">
							<label htmlFor="email">
								Email
								<input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" required />
							</label>
						</div>
						<button>Send link</button>
					</form>
				</div>
			)}
		</section>
	);
};

export default ResetPwd;
