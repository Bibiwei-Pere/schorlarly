import { ListService, ServiceHeader, Steps } from "@/app/components/business/serviceData/ServiceData";
import React from "react";

const Service = () => {
	const listProductData = {
		step: "Step 1 of 5",
		title: "List a Service",
		text: "Add your first product to Oyoyo by providing a detailed description, uploading high-quality photos, and setting the right pricing. This will be the cornerstone of your online store.",
	};

	return (
		<>
			<div className="dashBG"></div>

			<div className="relative mx-auto">
				<ServiceHeader />
				<div className="relative flex mt-[49px]">
					<div className="stepsWrapper">
						<Steps data={listProductData} />
					</div>
					<ListService />
				</div>
			</div>
		</>
	);
};

export default Service;
