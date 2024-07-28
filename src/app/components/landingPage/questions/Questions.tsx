import Image from "next/image";
import "./Questions.scss";
import React from "react";
import Avatar from "../../assets/images/FaqAvatar.png";
import { Reveal3 } from "../../animations/Text";
import { Button } from "@/components/ui/button";

const Questions = () => {
	return (
		<div className="questions landing">
			<section className="bg">
				<div className="img bg-blue-50"></div>
				<div className="max-w-[1200px] mx-auto py-10 flex flex-col px-[20px] items-center gap-6">
					<Image src={Avatar} alt="Avatar" />
					<div className="flex flex-col items-center gap-2">
						<div className="font-semibold text-lg">Still have questions?</div>
						<Reveal3>
							<p className="text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
						</Reveal3>
					</div>
					<Button className="mt-3">Get in touch</Button>
				</div>
			</section>
		</div>
	);
};

export default Questions;
