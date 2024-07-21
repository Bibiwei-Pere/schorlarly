import React from "react";
import "./Pricing.scss";
import Link from "next/link";
import { Reveal2 } from "../../animations/Text";
import { CheckCircle2, Undo } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
	return (
		<section className="pricing">
			<div className="container">
				<div className="wrapper1">
					<p>Upgrade</p>
					<h2>Pricing plans that scale</h2>
					<Reveal2>
						<p className="my-1">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
					</Reveal2>
				</div>
				<div className="wrapper2">
					<div className="relative flex items-center justify-center gap-4 max-w-[285px] border border-gray-200 rounded-lg p-5 shadow-md shadow-gray-200/90">
						<div className="arrow flex gap-1">
							<div>
								<Undo />
							</div>
							<p className="text-[11px]">Most popular!</p>
						</div>
						<div className="flex flex-col items-center gap-4">
							<h2>$10/mth</h2>
							<div className="flex flex-col gap-1 items-center">
								<h4>Basic plan</h4>
								<p>Billed annually</p>
							</div>
							<div className="flex flex-col gap-2">
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
							</div>

							<Button className="w-full">
								<Link target="_blank" rel="noopener noreferrer" href="auth/login">
									Get started
								</Link>
							</Button>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4 max-w-[285px] border border-gray-200 rounded-lg p-5 shadow-md shadow-gray-200/90">
						<div className="flex flex-col items-center gap-4">
							<h2>$20/mth</h2>
							<div className="flex flex-col gap-1 items-center">
								<h4>Plus plan</h4>
								<p>Billed annually</p>
							</div>
							<div className="flex flex-col gap-2">
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<div className="flex items-start gap-1">
									<span>
										<CheckCircle2 fill="#DCFAE6" className="w-[24px] rounded-full p-1 text-green-700" />
									</span>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
							</div>

							<Button className="w-full">
								<Link target="_blank" rel="noopener noreferrer" href="auth/login">
									Get started
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPage;
