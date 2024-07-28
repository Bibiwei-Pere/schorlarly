"use client";
import React from "react";
import Avatar from "../components/assets/images/avatar25.png";
import { dashHeader, dashSidebar, recentActivityData } from "../components/assets/data/Components";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import "./Dashboard.scss";
import { Button } from "@/components/ui/button";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [selected, setSelected] = React.useState(0);

	React.useEffect(() => {
		const storedSelected = localStorage.getItem("selected");
		setSelected(storedSelected ? parseInt(storedSelected) : 0);
	}, []);

	const handleClick = (index: number): void => {
		setSelected(index);
		localStorage.setItem("selected", index.toString()); // ensure the value is stored as string
	};

	return (
		<div className="dashboard">
			<div className="sidebar z-10 flex flex-col gap-8 fixed top-0 bottom-0 border-r border-gray-100 overflow-auto">
				<div className="flex items-center gap-3 border-b border-gray-100 pb-5">
					<Image src={Avatar} alt="Avatar" className="w-10 rounded-full" />
					<p className="text-black font-semibold">Precious Anthony</p>
				</div>
				<Button className="sideBtn max-w-full">New project</Button>
				<div>
					<p className="pl-2 mb-3 text-gray-500">General</p>
					<div className="flex flex-col gap-2.5">
						{dashSidebar.map((sidebar, index) => (
							<Link href={sidebar.url} key={index} title={sidebar.title} className={selected === index ? "flex px-2 py-1 gap-3 items-center rounded-md bg-gray-100" : "flex px-2 py-1 gap-3 items-center rounded-md hover:bg-gray-100"} onClick={() => handleClick(index)}>
								<sidebar.icon className="text-gray-500 w-5" />
								<p className="text-black font-[400]">{sidebar.title}</p>
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="dashContainer">
				<header>
					{dashHeader.map((header, index) => (
						<div key={index}>
							{header.id === "notification" ? (
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<header.icon className="text-gray-500 hover:text-black" />
									</DropdownMenuTrigger>
									<DropdownMenuContent className="flex flex-col w-[440px]" align="end">
										<h2>Recent activity</h2>
										<div className="flex flex-col gap-5">
											{recentActivityData.map((item) => (
												<DropdownMenuItem className="flex items-center gap-3" key={item.name}>
													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<div className="flex items-center gap-3">
																{/* <Avatar className="align-center">
																	<AvatarImage src={item.image} />
																	<AvatarFallback>CN</AvatarFallback>
																</Avatar> */}
																<div>
																	<p className="font-semibold text-black">{item.name}</p>
																	<p className="flex items-center gap-1 h-4">
																		Sent you a <span className="text-red-700">Message</span>
																	</p>
																</div>
															</div>
														</DropdownMenuTrigger>
														<DropdownMenuContent className="right-0 left-0 w-full relative border-5 flex flex-col" align="center">
															<p className="flex items-center gap-1 h-4">
																Sent you a <span className="text-red-700">Message</span>
															</p>
														</DropdownMenuContent>
													</DropdownMenu>
												</DropdownMenuItem>
											))}
										</div>
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<>{<header.icon className="text-gray-500 hover:text-black" />}</>
							)}
						</div>
					))}
				</header>
				<main>{children}</main>
			</div>
		</div>
	);
}
