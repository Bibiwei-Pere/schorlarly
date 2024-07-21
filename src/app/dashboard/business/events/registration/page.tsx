import { RegistrationDetails, EventHeader, Steps } from "@/app/components/business/eventsData/EventsData";
import React from "react";

const RegistrationDetailsPage = () => {
	const registrationDetailsData = {
		step: "Step 3 of 4",
		title: "Registration details",
		text: "Select information to collect from attendees.",
	};

	return (
		<>
			<div className="dashBG"></div>

			<div className="relative mx-auto">
				<EventHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={registrationDetailsData} />
					</div>
					<RegistrationDetails />
				</div>
			</div>
		</>
	);
};

export default RegistrationDetailsPage;
