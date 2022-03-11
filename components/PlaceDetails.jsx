import React from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-slideshow-image";

// Dynamic load itinerary map
const Itinerary = dynamic(() => import("components/Itinerary"), {
	ssr: false
});

/*
	Place map and details
*/

const zoom = 15;
const position = [33.5024, 36.2988];

const PlaceDetails = () => {
	const slideList = [
		"/images/circuits/baobabs-alley-morondava.jpg",
		"/images/circuits/sainte-marie-madagascar.jpg",
		"/images/circuits/tuléar-madagascar.jpg"
	];
	const mappedSlide = slideList.map((slide) => (
		<div className="each-slide" key={ uuidv4() }>
			<div className="w-100 h-100 p-n n-s">
				<div
					className="w-100 h-100 f-c-ce-ce"
					style={{
						background: `url(${slide}) center center no-repeat`,
						backgroundSize: "cover",
					}}
				>
				</div>
			</div>
		</div>
	));

	return (
		<div className="place-details bg-white b-b o-a tr-400 f-c-st-st">
			<h2 className="title fs-180 pd-20">
				<Icon icon={ ["fas", "car"] } /> Baobabs Alley
			</h2>
			<div className="place-details__map mg-l-20 o-h br-5">
				<Itinerary />
			</div>
			<p className="tx-j pd-20">
				Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada.
			</p>
			<div className="slide mg-l-20 mg-b-20 h-260px o-h b-b">
				<Slide>
					{ mappedSlide }
				</Slide>
			</div>
		</div>
	);
}

export default PlaceDetails;