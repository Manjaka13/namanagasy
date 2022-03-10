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

const PlaceDetails = ({ opened, close }) => {
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

	if(window.innerWidth > 900)
		opened = true;

	return (
		<div className={ `place-details ${!opened ? "place-details--closed" : ""} bg-white b-b o-a tr-400` }>
			<div className="place-details__title f-r-be-ce">
				<h2 className="title fs-180 pd-20"><Icon icon={ ["fas", "map-marker-alt"] } /> Antananarivo</h2>
				<button
					className="close white bg-red pd-10 pd-l-20 pd-r-20 mg-r-20 br-5 tr-200 p"
					onClick={() => {
						if(typeof(close) === "function")
							close();
					}}
				>
					<Icon icon={ ["fas", "times-circle"] } /> Close
				</button>
			</div>
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