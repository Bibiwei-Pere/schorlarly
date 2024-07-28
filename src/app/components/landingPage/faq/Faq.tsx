import React from "react";
import "./Faq.scss";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal1 } from "../../animations/Text";

const Faq = () => {
	return (
		<section className="faq landing">
			<div className="landingHeader">
				<Reveal1>
					<h2>Frequently asked questions</h2>
				</Reveal1>
				<p>Everything you need to know about the platform and billing.</p>
			</div>
			<div className="faqContainer">
				<Accordion type="single" collapsible>
					{faqData.map((item, index) => (
						<AccordionItem value={item.title} key={index}>
							<AccordionTrigger>{item.title}</AccordionTrigger>
							<AccordionContent>{item.text}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default Faq;

const faqData = [
	{
		title: "How can AI Academia enhance my academic performance?",
		text: "AI Academia is designed to elevate your learning and project management experience. Through AI-driven tools, personalised assistance, and collaborative features, you'll navigate your academic journey with efficiency and excellence.",
	},
	{
		title: "What makes the Premium Plan worth it?",
		text: "AI Academia is designed to elevate your learning and project management experience. Through AI-driven tools, personalised assistance, and collaborative features, you'll navigate your academic journey with efficiency and excellence.",
	},
	{
		title: "How does AI Academia ensure academic integrity?",
		text: "AI Academia is designed to elevate your learning and project management experience. Through AI-driven tools, personalised assistance, and collaborative features, you'll navigate your academic journey with efficiency and excellence.",
	},
	{
		title: "Where can I find more detailed help resources?",
		text: "AI Academia is designed to elevate your learning and project management experience. Through AI-driven tools, personalised assistance, and collaborative features, you'll navigate your academic journey with efficiency and excellence.",
	},
];
