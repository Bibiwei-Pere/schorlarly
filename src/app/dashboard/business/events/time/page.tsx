import { TimeLocation, EventHeader, Steps } from "@/app/components/business/eventsData/EventsData";
import React from "react";

const TimeLocationPage = () => {
	const timeLocationData = {
		step: "Step 2 of 4",
		title: "Event time and location",
		text: "Please provide information about your event.",
	};

	return (
		<>
			<div className="dashBG"></div>

			<div className="relative mx-auto">
				<EventHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={timeLocationData} />
					</div>
					<TimeLocation />
				</div>
			</div>
		</>
	);
};

export default TimeLocationPage;
