import React from "react";
import "./components/landingPage/footer/Footer.scss";
import Pricing from "./components/landingPage/pricing/Pricing";
import Features from "./components/landingPage/features/Features";
import Questions from "./components/landingPage/questions/Questions";
import HeroPage from "./components/landingPage/hero/Hero";
import Faq from "./components/landingPage/faq/Faq";
import Header from "./components/landingPage/header/Header";
import Experience from "./components/landingPage/experience/Experience";
import Footer from "./components/landingPage/footer/Footer";
import Newsletter from "./components/landingPage/newsletter/Newsletter";

export default function Home() {
	return (
		<main>
			<Header />
			<HeroPage />
			<div id="features">
				<Features />
			</div>
			<div id="pricing">
				<Pricing />
			</div>
			<Experience />
			<div id="faq">
				<Faq />
			</div>
			<div id="contact">
				<Questions />
			</div>
			<Newsletter />
			<Footer />
		</main>
	);
}
