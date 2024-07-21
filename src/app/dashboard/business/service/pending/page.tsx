import React from "react";
import { ServiceHeader, Pending } from "@/app/components/business/serviceData/ServiceData";

const VerificationPending = () => {
	return (
		<div>
			<div className="dashBG"></div>
			<div className="relative mx-auto">
				<ServiceHeader />
				<div className="relative flex mt-[49px]">
					<Pending />
				</div>
			</div>
		</div>
	);
};

export default VerificationPending;
