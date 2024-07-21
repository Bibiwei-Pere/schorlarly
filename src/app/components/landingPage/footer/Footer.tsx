import React from "react";
import Logo from "../../assets/images/LogoWhite.png";
import "./Footer.scss";
import Image from "next/image";
import Googlestore from "../../assets/images/Googlestore.svg";
import Appstore from "../../assets/images/Appstore.svg";
import Link from "next/link";
import { FacebookIcon, Instagram, Youtube } from "lucide-react";
import { Reveal3, Reveal5 } from "../../animations/Text";

const Footer = () => {
	return (
		<div className="footer">
			<section className="bg">
				<div className="container">
					<div className="wrapper1">
						<Image src={Logo} alt="Logo" />
						<Reveal3>
							<p>Seamless Academic Empowerment.</p>
						</Reveal3>
						<div>
							<Link href="#home" className="font-medium">
								Home
							</Link>
							<Link className="font-medium" href="#features">
								Features
							</Link>
							<Link className="font-medium" href="#pricing">
								Pricing
							</Link>
							<Link className="font-medium" href="#">
								Suport
							</Link>
							<Link className="font-medium" href="#">
								Privacy
							</Link>
						</div>
					</div>
					<div className="wrapper2">
						<h3>Get the app</h3>
						<Reveal5>
							<Link target="_blank" rel="noopener noreferrer" href="#" className="btn">
								<Image src={Appstore} alt="Appstore" />
							</Link>
						</Reveal5>
						<Reveal5>
							<Link target="_blank" rel="noopener noreferrer" href="#" className="btn">
								<Image src={Googlestore} alt="Googlestore" />
							</Link>
						</Reveal5>
					</div>
				</div>
				<div className="wrapper">
					<p>© 2024 Scholarly AI. All rights reserved.</p>
					<div>
						<Reveal5>
							<Link href="#">
								<Youtube className="text-white" />
							</Link>
						</Reveal5>
						<Reveal5>
							<Link href="#">
								<FacebookIcon className="text-white" />
							</Link>
						</Reveal5>
						<Reveal5>
							<Link href="#">
								<Instagram className="text-white" />
							</Link>
						</Reveal5>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
