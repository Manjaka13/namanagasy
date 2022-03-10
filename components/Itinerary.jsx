import React from "react";
import { MapContainer, TileLayer/*, Marker, Popup*/ } from "react-leaflet";
import RoutingMachine from "components/RoutingMachine";
import "leaflet/dist/images/marker-shadow.png";

/*
	Map that displays full itinerary
*/

const Itinerary = ({
	position = [33.5024, 36.2988],
	zoom = 15
}) => (
	<MapContainer center={ position } zoom={ zoom } scrollWheelZoom={ false }>
		<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution="Madagascar"
		/>
		<RoutingMachine />
		{/*<Marker position={ position }>
			<Popup>Antananarivo</Popup>
		</Marker>*/}
	</MapContainer>
);

export default Itinerary;