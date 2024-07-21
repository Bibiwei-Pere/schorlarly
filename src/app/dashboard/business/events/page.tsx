"use client";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, Filter, MapPinIcon, PenLineIcon, Plus } from "lucide-react";
import React, { useState } from "react";
import "./Events.scss";
import Link from "next/link";
import Avatar from "../../../components/assets/images/Avatar.png";
import Avatar1 from "../../../components/assets/images/Avatar1.png";
import Avatar2 from "../../../components/assets/images/Avatar2.png";
import Avatar3 from "../../../components/assets/images/Avatar3.png";
import Icon from "../../../components/assets/images/Icon.png";
import Rectangle from "../../../components/assets/images/Rectangle 400.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { CardWallet } from "@/components/ui/card";

const Events = () => {
	const [active, setActive] = useState(false);

	return (
		<div className="events">
			<div className="flex flex-row justify-between items-center">
				<span>
					<h1>Events</h1>
					<p>See all events on Oyoyo</p>
				</span>
				<div className="flex w-[270px] gap-[16px]">
					<Button variant={"secondary"}>
						<PenLineIcon className="mr-2 h-4 w-4" />
						Drafts
					</Button>
					<Button>
						<Link href="events/create" className="flex flex-row text-center justify-start items-center gap-[5px]">
							<Plus className="h-4 w-4" />
							Create events
						</Link>
					</Button>
				</div>
			</div>

			<div className="wrapper">
				<Tabs defaultValue="allEvents" className="w-full mt-4">
					<TabsList className="grid max-w-[329px] grid-cols-3 h-10 items-center justify-center rounded-md bg-white p-1 text-gray-500">
						{events.map((service) => (
							<TabsTrigger value={service.value} key={service.value} className="rounded-sm py-2  data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
								{service.title}
							</TabsTrigger>
						))}
					</TabsList>
					<div className="border-b border-gray-200 mt-4"></div>
					{events.map((service) => (
						<TabsContent value={service.value} key={service.title} onClick={() => setActive(true)}>
							<>
								{service.value === "myEvents" && (
									<div className="cardWalletWrapper border-b border-gray-200 pt-5 pb-8 m-0">
										<CardWallet title="Active Orders" header="2" />
										<CardWallet title="Active Packages" header="2" />
										<CardWallet title="Pending Funds" header="12" />
										<CardWallet title="Avg Rating" header="0" />
										<CardWallet title="Total Sales" header="₦ 100,000" />
									</div>
								)}
								<div className="cardContainer pt-[130px]">
									<h2>
										{service.title}
										<div className="flex gap-[10px] mt-[20px]">
											<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
												<Calendar fill="#0F132499" className="text-white" />
												Last 7 days
											</div>
											<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
												<Filter fill="#0F132499" className="text-white" />
												Filter
												<select name="#" id="#"></select>
											</div>
										</div>
									</h2>
									{service.event?.map((item) => {
										return (
											<div key={item.heading} className="relative cardBox h-[353px]">
												<div>
													<Image src={item.image} alt="Image" className="max-w-full" />
													<p className="absolute text-[12px] opacity-80 top-4 right-4 bg-gray-200 text-black p-1 align-center rounded-lg">{item.views}</p>
												</div>
												<div className="relative flex gap-[20px] p-[20px] bg-gray-50">
													<Image src={item.avatar} alt="Avatar" className="h-[37px] w-[37px] rounded-[50%]" />
													<div className="flex flex-col gap-2">
														<h6 className="text-[15.12px] font-[500]">{item.heading}</h6>
														<span className="flex gap-2 text-[11.34px] font-[400]">
															<CalendarDays className="h-[14px] w-[14px]" />
															{item.date}
														</span>
														<span className="flex gap-2 text-[11.34px] font-[400]">
															<MapPinIcon className="h-[14px] w-[14px]" />
															{item.address}
														</span>
														<div className="avatar flex items-center">
															<span className="flex">
																<Image className="w-[15.12px] rounded-full h-[15.12px]" src={item.avatar1} alt="Avaavatar1" />
																<Image className="w-[15.12px] rounded-full h-[15.12px]" src={item.avatar2} alt="Avaavatar2" />
																<Image className="w-[15.12px] rounded-full h-[15.12px]" src={item.avatar3} alt="Avaavatar3" />
															</span>
															<p className="text-[11.34px] font-[400]">+200 is going</p>
														</div>
													</div>
													<Image src={item.icon} alt="Icon" className="h-[18px] w-[18px]" />
												</div>
											</div>
										);
									})}
								</div>
							</>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</div>
	);
};

export default Events;

const events = [
	{
		value: "allEvents",
		title: "All events",
		event: [
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
		],
	},
	{
		value: "Attending",
		title: "Attending",
		event: [
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
		],
	},
	{
		value: "myEvents",
		title: "My events",
		event: [
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
			{
				image: Rectangle,
				avatar: Avatar,
				avatar1: Avatar1,
				avatar2: Avatar2,
				avatar3: Avatar3,
				icon: Icon,
				heading: "Desktop App UI Design in Figma - Full Course",
				date: "12 Apr - Sat - 10:00 AM",
				address: "Landmark, VI",
				views: "14k views",
			},
		],
	},
];
