import React from "react";
import { Listing, listingData } from "@/app/components/business/listingData/ListingData";

export default function ListingPage() {
	return (
		<>
			<Listing data={listingData} />
		</>
	);
}
