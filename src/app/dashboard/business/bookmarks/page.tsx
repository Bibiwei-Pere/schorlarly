"use client";
import { CalendarDays, Filter, MapPinIcon } from "lucide-react";
import React from "react";
import Avatar from "../../../components/assets/images/Avatar.png";
import Avatar1 from "../../../components/assets/images/Avatar1.png";
import Avatar2 from "../../../components/assets/images/Avatar2.png";
import Avatar3 from "../../../components/assets/images/Avatar3.png";
import Icon from "../../../components/assets/images/Icon.png";
import Rectangle from "../../../components/assets/images/Rectangle 400.png";
import Image from "next/image";

const Bookmarks = () => {
	return (
		<div className="events">
			<h1>Bookmarks</h1>

			<div className="flex flex-col gap-10">
				<div>
					<div className="flex gap-[10px] mt-5">
						<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
							<MapPinIcon fill="#0F132499" className="text-white" />
							Last 7 days
						</div>
						<div className="flex items-center border font-[500] border-gray-300 rounded-lg gap-1.5 justify-center px-2 py-1 text-sm">
							<Filter fill="#0F132499" className="text-white" />
							Filter
							<select name="#" id="#"></select>
						</div>
					</div>
					<div className="cardContainer pt-0">
						{upcomingEvents.map((item) => {
							return (
								<div key={item.heading} className="relative cardBox">
									<div>
										<Image src={item.image} alt="Image" className="max-w-full" />
										<p className="absolute text-[10px] opacity-80 top-4 right-4 bg-gray-200 text-black px-1 p-[2px] align-center rounded-lg">{item.views}</p>
									</div>
									<div className="relative flex gap-[20px] px-3 py-5 bg-gray-50">
										<Image src={item.avatar} alt="Avatar" className="h-[37px] w-[37px] rounded-[50%]" />
										<div className="flex flex-col gap-2">
											<h6 className="text-[13px] font-[500]">{item.heading}</h6>
											<span className="flex gap-2 text-[10px] font-[400]">
												<CalendarDays className="h-[14px] w-[14px]" />
												{item.date}
											</span>
											<span className="flex gap-2 text-[10px] font-[400]">
												<MapPinIcon className="h-[14px] w-[14px]" />
												{item.address}
											</span>
											<div className="avatar flex items-center">
												<span className="flex">
													<Image className="w-[13px] rounded-full h-[13px]" src={item.avatar1} alt="Avaavatar1" />
													<Image className="w-[13px] rounded-full h-[13px]" src={item.avatar2} alt="Avaavatar2" />
													<Image className="w-[13px] rounded-full h-[13px]" src={item.avatar3} alt="Avaavatar3" />
												</span>
												<p className="text-[10px] font-[400]">+200 is going</p>
											</div>
										</div>
										<Image src={item.icon} alt="Icon" className="h-[18px] w-[18px]" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bookmarks;

const upcomingEvents = [
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
];
