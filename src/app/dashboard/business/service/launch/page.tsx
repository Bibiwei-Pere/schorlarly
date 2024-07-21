import React from "react";
import { ServiceHeader, Steps, LaunchStore } from "@/app/components/business/serviceData/ServiceData";

const Launch = () => {
	const launchStoreData = {
		step: "Step 5 of 5",
		title: "Launch Online Store",
		text: "You are almost ready to launch! Review all the details, make any final adjustments, and then hit the launch button. Once live, your store will be accessible to customers, and you can start making sales.",
	};
	return (
		<div>
			<div className="dashBG"></div>
			<div className="relative mx-auto">
				<ServiceHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={launchStoreData} />
					</div>
					<LaunchStore />
				</div>
			</div>
		</div>
	);
};

export default Launch;
