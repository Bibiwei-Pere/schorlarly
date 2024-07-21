import React from "react";
import { ServiceHeader, Steps, PaymentSetup } from "@/app/components/business/serviceData/ServiceData";

const Payment = () => {
	const paymentSetupData = {
		step: "Step 3 of 5",
		title: "Payment Setup",
		text: "Configure your preferred payment methods to ensure smooth and secure transactions. Add your banking details, and set up payment preferences to provide flexibility for your customers.",
	};
	return (
		<div>
			<div className="dashBG"></div>
			<div className="relative mx-auto">
				<ServiceHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={paymentSetupData} />
					</div>
					<PaymentSetup />
				</div>
			</div>
		</div>
	);
};

export default Payment;
