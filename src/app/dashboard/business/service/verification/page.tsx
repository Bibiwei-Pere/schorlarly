import React from "react";
import { ServiceHeader, Steps, VerificationSetup } from "@/app/components/business/serviceData/ServiceData";

const Verification = () => {
	const verificationSetupData = {
		step: "Step 4 of 5",
		title: "Verification Setup",
		text: "Complete the verification process by providing necessary documentation and information. This step is crucial to ensure the legitimacy of your business, build trust with customers, and comply with regulatory requirements.",
	};
	return (
		<div>
			<div className="dashBG"></div>
			<div className="relative mx-auto">
				<ServiceHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={verificationSetupData} />
					</div>
					<VerificationSetup />
				</div>
			</div>
		</div>
	);
};

export default Verification;
