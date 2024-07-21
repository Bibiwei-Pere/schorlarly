import React from "react";
import Link from "next/link";
import Arrow from "../../components/assets/images/arrow-left.svg";
import Image from "next/image";
import EyeSlash from "../../components/assets/images/eye-slash.svg";
import "./Password.scss";
import Background from "@/app/components/authBackground/Background";

const Password = () => {
	return (
		<section className="password">
			<Background />

			<div className="wrapper">
				<Link href="login">
					<Image src={Arrow} alt="Arrow" />
					<p>Back to Sign in</p>
				</Link>
				<h1>Set new password</h1>
				<p>Your new password must be different to previously used passwords.</p>

				<form action="#">
					<label htmlFor="password">
						Password
						<div>
							<input type="password" placeholder="Choose password" required />
							<Image src={EyeSlash} alt="EyeSlash" />
						</div>
						<p>Mininmum of 6 characters</p>
					</label>
					<label htmlFor="confirm-password">
						Confirm password
						<div>
							<input type="password" placeholder="Repeat password" required />
							<Image src={EyeSlash} alt="EyeSlash" />
						</div>
					</label>
					<button>Reset password</button>
				</form>
			</div>
		</section>
	);
};

export default Password;
