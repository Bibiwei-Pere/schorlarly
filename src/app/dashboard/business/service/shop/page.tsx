import React from "react";
import { ShopSetup, ServiceHeader, Steps } from "@/app/components/business/serviceData/ServiceData";

const Shop = () => {
	const shopSetupData = {
		step: "Step 2 of 5",
		title: "Shop Setup",
		text: "Personalize your store to reflect your brand. Add your store name, upload a logo, and create an engaging store description to attract customers. Make sure your store stands out with a unique and professional appearance.",
	};
	return (
		<div>
			<div className="dashBG"></div>
			<div className="relative mx-auto">
				<ServiceHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={shopSetupData} />
					</div>
					<ShopSetup />
				</div>
			</div>
		</div>
	);
};

export default Shop;
