"use client";
import React, { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MapPage = () => {
	const [markerLocation, setMarkerLocation] = useState({
		lat: 51.509865,
		lng: -0.118092,
	});
	return (
		<>
			<h1 className="mb-3">Map</h1>
			<p>Search for an event location</p>
			<div className="h-[800px] w-full mt-7 rounded-lg overflow-hidden">
				<APIProvider apiKey="AIzaSyBgCiku8VAL-IrIYzYTKhBBUZV9Z-QuyOI">
					<Map style={{ borderRadius: "50px" }} defaultZoom={13} defaultCenter={markerLocation} gestureHandling={"greedy"} disableDefaultUI>
						<Marker position={markerLocation} />
					</Map>
				</APIProvider>
			</div>
		</>
	);
};

export default MapPage;
