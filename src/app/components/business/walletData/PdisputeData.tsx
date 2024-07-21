"use client";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import "./Wallet.scss";
import { title } from "process";
import { DataTableDemo } from "@/components/ui/DataTable";
import { TransactionsTable, TransactionTable } from "@/components/ui/TransactionsTable";
import arrow-left-black from "@/app/components/assets/images/arrow-left-black.svg";
import Image from "next/image";
import { PayoutTable } from "@/components/ui/PayoutTable";
import { PdisputeTable } from "@/components/ui/PdisputeTable";

export const Wallet = () => {
	const [active, setActive] = useState(false);
	return (
		<>
			<h1 className="text-black text-2xl mb-2">Wallet</h1>
			<div className="customer-details">
				<div className="details">
					<p>Available Balance</p>
					<h1>₦191,000</h1>
				</div>
				<div className="details">
					<p>Overall Earning</p>
					<h1>₦1,191,000</h1>
				</div>
				<div className="details">
					<p>Pending Funds</p>
					<h1>12</h1>
				</div>
				<div className="details">
					<p>Cancelled Funds</p>
					<h1>3</h1>
				</div>
				<div className="details">
					<p>Funds in Dispute</p>
					<h1>12</h1>
				</div>
			</div>
			<div className="wrapper">
				<Tabs defaultValue="allEvents" className="w-full mt-4">
					<TabsList className="grid max-w-[329px] grid-cols-3 h-10 items-center justify-center rounded-md bg-white p-1 text-gray-500">
						{transaction.map((service) => (
							<TabsTrigger value={service.value} key={service.value} className="rounded-sm py-2  data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
								{service.value}
							</TabsTrigger>
						))}
					</TabsList>
					<div className="border-b border-gray-200 mt-4"></div>
					{transaction.map((service) => (
						<TabsContent value={service.value} key={service.title} className="cardContainer" onClick={() => setActive(true)}>
							<h2 className="font-xl">{service.title}</h2>
							<div className="flex justify-between">
								{/* <p>{service?.note}</p> */}
								<span className="flex gap-3">
									<button className="border rounded-[68px] mr-2 p-1 px-4">Export All</button>
									<button className="mr-3 border rounded-[68px] mr-2 p-1 px-4 bg-red-500 text-white">Request Payout</button>
								</span>
							</div>
							<div className="flex gap-[10px] mt-[30px]">
								<div className="flex border rounded-md mr-2 p-1 px-4 ">
									<Image src={arrow-left-black} alt={arrow-left-black} />
									&nbsp;
									<p>Last 7 days </p>
								</div>
								<div className="flex border rounded-md mr-2 p-1 px-4 ">
									<Image src={calfill} alt={calfill} />
									&nbsp;
									<p>Filter</p>
									<select name="#" id="#"></select>
								</div>
							</div>
							<div></div>
							{service.paymentTable}
						</TabsContent>
					))}
				</Tabs>
			</div>
		</>
	);
};

const transaction = [
	{
		value: "Payouts",
		title: "Payouts",
		paymentTable: <PayoutTable />,
	},
];
