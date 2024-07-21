import { EventHeader, Steps } from "@/app/components/business/eventsData/EventsData";
import React from "react";

const TicketPricesPage = () => {
	const ticketsPriceData = {
		step: "Step 4 of 4",
		title: "Setup ticket prices",
		text: "Provide event ticket prices.",
	};

	return (
		<>
			<div className="dashBG"></div>

			<div className="relative mx-auto">
				<EventHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={ticketsPriceData} />
					</div>
					{/* <TicketsPrice /> */}
				</div>
			</div>
		</>
	);
};

export default TicketPricesPage;
