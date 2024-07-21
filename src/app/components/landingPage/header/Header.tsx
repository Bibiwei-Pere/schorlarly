"use client";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import Hamburger from "../../assets/images/icon-hamburger2.svg";
import Close from "../../assets/images/icon-close.svg";
import Logo from "../../assets/images/Logo.png";
import Logo2 from "../../assets/images/LogoWhite.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navContent } from "../../assets/data/Components";

const Header = () => {
	const [scroll, setScroll] = useState(false);
	const [activeMenu, setActiveMenu] = useState("");
	const handleMenu = () => {
		setActiveMenu("active");
	};
	const handleClose = () => {
		setActiveMenu("");
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	return (
		<div id="home" className={`header ${scroll ? "scroll" : ""}`}>
			<div className="container">
				<div className="logo">{activeMenu === "active" ? <Image src={Logo2} alt="Logo" /> : <Image src={Logo} alt="Logo" />}</div>
				<ul className="navContent">
					{navContent.map((item, index) => (
						<Link key={index} href={item.url}>
							{item.title}
						</Link>
					))}
				</ul>
				<div className="flex items-center gap-3">
					<Link target="_blank" rel="noopener noreferrer" href="auth/login" className="getInTouch">
						<Button variant={"secondary"}>Login in</Button>
					</Link>
					<Link target="_blank" rel="noopener noreferrer" href="auth/signin" className="getInTouch">
						<Button>Sign up</Button>
					</Link>
				</div>

				{/* MOBILE MENU */}
				<div className={`mobileMenu ${activeMenu}`}>
					<div className="dark_bg"></div>
					<div className="hamburger" onClick={handleMenu}>
						<Image src={Hamburger} alt="Hamburger" onClick={handleClose} />
					</div>
					<Image src={Close} alt="Close" className="close" onClick={handleClose} />
					<div className="navContent">
						{navContent.map((item, index) => {
							return (
								<Link key={index} href={item.url} onClick={handleClose}>
									{item.title}
								</Link>
							);
						})}
						<span className="flex w-full items-center px-0">
							<Link target="_blank" rel="noopener noreferrer" href="auth/login" className="w-full">
								<Button variant={"secondary"}>Login in</Button>
							</Link>
							<Link target="_blank" rel="noopener noreferrer" href="auth/login" className="w-full">
								<Button variant={"secondary"}>Sign up</Button>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
