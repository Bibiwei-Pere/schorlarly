"use client";
import Image from "next/image";
import Logo from "../../components/assets/images/Oyoyo.svg";
import "./Dashboard.scss";
import { dashHeader, dashSidebar } from "../../components/assets/data/Components";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		const storedSelected = localStorage.getItem("selected");
		setSelected(storedSelected ? parseInt(storedSelected) : 0);
	}, []);

	const handleClick = (index: any) => {
		setSelected(index);
		localStorage.setItem("selected", index);
	};

	return (
		<div className="dashboard">
			{/* Sidebar */}
			<div className="sidebar">
				<div className="logo">
					<Image src={Logo} alt="Logo" />
				</div>
				<div>
					{dashSidebar.map((sidebar, index) => (
						<section key={index}>
							{sidebar.class === "second" && <span>Sales Channels</span>}
							{sidebar.class === "third" && <div></div>}
							<Link href={sidebar.url} className={selected === index ? `active ${sidebar.class}` : `${sidebar.class}`} onClick={() => handleClick(index)}>
								<Image src={sidebar.image} alt={sidebar.title} />
								{sidebar.class === "logout" ? <p className="text-red-700">{sidebar.title}</p> : <p className="text-black">{sidebar.title}</p>}
							</Link>
						</section>
					))}
				</div>
			</div>

			{/* Header */}

			<div className="dashContainer">
				<header>
					{dashHeader.map((header, index) => (
						<Link href={header.url} key={index}>
							<Image src={header.image} alt={header.url} />
						</Link>
					))}
				</header>

				{/* Dashboard Content */}
				<main>{children}</main>
			</div>
		</div>
	);
}
