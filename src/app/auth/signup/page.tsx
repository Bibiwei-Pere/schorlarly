"use client";
import "./Signup.scss";
import Image from "next/image";
import React, { useState } from "react";
import Oyoyo from "../../components/assets/images/Oyoyo.svg";
import Vector from "../../components/assets/images/Vector.svg";
import User from "../../components/assets/images/user.svg";
import Create from "@/app/components/forms/create-account/Create";
import Background from "@/app/components/authBackground/Background";

const Signup = () => {
	const [personal, setPersonal] = useState("");
	const [business, setBusiness] = useState("");
	const [proceed, setProceed] = useState(false);
	const [account, setAccount] = useState("");
	const [active, setActive] = useState(false);

	const handleBusiness = () => {
		setProceed(true);
		setBusiness("active");
		setPersonal("");
		setAccount("Business");
	};
	const handlePersonal = () => {
		setProceed(true);
		setPersonal("active");
		setBusiness("");
		setAccount("");
	};

	return (
		<>
			{active ? (
				<Create account={account} />
			) : (
				<section className="signup">
					<Background />
					<div className="container">
						<Image src={Oyoyo} alt="Envelope" />
						<h2>Choose an account type</h2>
						<p className="text">Choose the account type that best suits your needs</p>

						<div className="wrapper">
							<span onClick={handlePersonal} className={`${personal}`}>
								<Image src={User} alt="User" />
								<h4>Personal Account</h4>
								<p>Ideal for event attendees looking to discover and book events.</p>
							</span>
							<span onClick={handleBusiness} className={`${business}`}>
								<Image src={Vector} alt="Vector" />
								<h4>Business Account</h4>
								<p>Ideal for event hosts, vendors, and service providers.</p>
							</span>
						</div>
						<button disabled={!proceed} onClick={() => setActive(true)}>
							Proceed
						</button>
					</div>
				</section>
			)}
		</>
	);
};

export default Signup;
