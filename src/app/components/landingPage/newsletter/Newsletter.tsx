import React from "react";
import Logo from "../../assets/images/LogoWhite.png";
import "./Newsletter.scss";
import Image from "next/image";
import Googlestore from "../../assets/images/Googlestore.svg";
import Appstore from "../../assets/images/Appstore.svg";
import Link from "next/link";
import { FacebookIcon, Instagram, Youtube } from "lucide-react";
import { Reveal3, Reveal5 } from "../../animations/Text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
	return (
		<div className="newsletter">
			<section className="bg">
				<div className="container">
					<div className="flex flex-col gap-2 items-start">
						<h2>Sign up for our newsletter</h2>
						<Reveal3>
							<p>Be the first to know about releases and research news and insights.</p>
						</Reveal3>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<Input className="m-0" placeholder="Enter your email" />
							<Button className="max-w-[100px]">Subscribe</Button>
						</div>
						<p className="text-sm">We care about your data in our privacy policy.</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Newsletter;
