import React from "react";
import "./Features.scss";
import { Zap } from "lucide-react";
import { Reveal1, Reveal3 } from "../../animations/Text";

const Features = () => {
	return (
		<section className="features landing">
			<div className="landingHeader">
				<div className="headText">Features</div>
				<Reveal1>
					<h2>Experience Excellence with Premium Benefits</h2>
				</Reveal1>
				<p>Elevate Your Academic Endeavours Through Cutting-Edge AI Features Designed for Success.</p>
			</div>
			<div className="featuresWrapper">
				<div className="flex flex-col items-center gap-2">
					<Zap className="border border-gray-300 rounded-md p-3 h-[43px] w-[43px] mb-0" />
					<h4>AI-Powered Research Analytics</h4>
					<Reveal3>
						<p>Dive deep into your research with advanced analytics, uncovering insights and trends effortlessly.</p>
					</Reveal3>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Zap className="border border-gray-300 rounded-md p-3 h-[43px] w-[43px] mb-0" />
					<h4>Personalised Learning Pathways</h4>
					<Reveal3>
						<p>Tailor your learning journey with AI-driven recommendations, ensuring a personalised and efficient experience.</p>
					</Reveal3>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Zap className="border border-gray-300 rounded-md p-3 h-[43px] w-[43px] mb-0" />
					<h4>Enhanced Writing Assistance</h4>
					<Reveal3>
						<p>Elevate your writing with advanced grammar checks, plagiarism detection, and style optimisation.</p>
					</Reveal3>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Zap className="border border-gray-300 rounded-md p-3 h-[43px] w-[43px] mb-0" />
					<h4>Collaborative AI Tools</h4>
					<Reveal3>
						<p>Seamlessly collaborate on projects with AI-enhanced tools, fostering efficiency and innovation.</p>
					</Reveal3>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Zap className="border border-gray-300 rounded-md p-3 h-[43px] w-[43px] mb-0" />
					<h4>Exclusive Content Access</h4>
					<Reveal3>
						<p>Access premium resources, tutorials, and databases not available to free users, expanding your academic horizons.</p>
					</Reveal3>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Zap className="border border-gray-300 rounded-md p-3 h-[43px] w-[43px] mb-0" />
					<h4>Advanced Project Automation</h4>
					<Reveal3>
						<p>Streamline your project workflow with AI-driven automation. Repetitive tasks are handled saving time.</p>
					</Reveal3>
				</div>
			</div>
		</section>
	);
};

export default Features;
