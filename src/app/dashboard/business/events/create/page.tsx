import { EventsDetails, EventHeader, Steps } from "@/app/components/business/eventsData/EventsData";
import React from "react";

const EventsDetailsPage = () => {
	const eventsDetailsData = {
		step: "Step 1 of 4",
		title: "Event details",
		text: "Please provide information about your event.",
	};

	return (
		<>
			<div className="dashBG"></div>

			<div className="relative mx-auto">
				<EventHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={eventsDetailsData} />
					</div>
					<EventsDetails />
				</div>
			</div>
		</>
	);
};

export default EventsDetailsPage;
