import React from "react";
import "./Experience.scss";
import Link from "next/link";
import Laptop from "../../assets/images/Laptop.png";
import { Reveal1, Reveal2 } from "../../animations/Text";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Experience = () => {
	return (
		<section className="experience">
			<div className="landingHeader">
				<p className="text-[13px]">A Guided Tour of Powerful Features</p>
				<Reveal1>
					<h2>A seamless experience for users</h2>
				</Reveal1>
				<p>Navigate through the Dashboard's Rich Features and Enhance Your Productivity.</p>
			</div>
			<div className="container">
				<div className="wrapper1">
					<div className="relative left-[-5px] tabs p-3 flex flex-col gap-2 items-start">
						<h4>Lorem ipsum dolor sit amet consectetur. Sed quis.</h4>
						<Reveal2>
							<p className="my-1">Lorem ipsum dolor sit amet consectetur. Vitae ac diam gravida et in ultricies purus fermentum. Tellus eleifend id in nunc. Amet lacus.</p>
						</Reveal2>
						<Link target="_blank" rel="noopener noreferrer" href="auth/signup">
							<Button className="font-medium" variant={"secondary"}>
								Learn more
								<ArrowRight className="ml-1 w-[12px]" />
							</Button>
						</Link>
					</div>
					<div className="p-3 flex flex-col gap-2 items-start">
						<h4>Lorem ipsum dolor sit amet consectetur. Sed quis.</h4>
						<Reveal2>
							<p className="my-1">Lorem ipsum dolor sit amet consectetur. Vitae ac diam gravida et in ultricies purus fermentum. Tellus eleifend id in nunc. Amet lacus.</p>
						</Reveal2>
						<Link target="_blank" rel="noopener noreferrer" href="auth/signup">
							<Button className="font-medium" variant={"secondary"}>
								Learn more
								<ArrowRight className="ml-1 w-[12px]" />
							</Button>
						</Link>
					</div>
					<div className="p-3 flex flex-col gap-2 items-start">
						<h4>Lorem ipsum dolor sit amet consectetur. Sed quis.</h4>
						<Reveal2>
							<p className="my-1">Lorem ipsum dolor sit amet consectetur. Vitae ac diam gravida et in ultricies purus fermentum. Tellus eleifend id in nunc. Amet lacus.</p>
						</Reveal2>
						<Link target="_blank" rel="noopener noreferrer" href="auth/signup">
							<Button className="font-medium" variant={"secondary"}>
								Learn more
								<ArrowRight className="ml-1 w-[12px]" />
							</Button>
						</Link>
					</div>
				</div>
				<div className="wrapper2">
					<Image src={Laptop} alt="Laptop" />
				</div>
			</div>
		</section>
	);
};

export default Experience;
