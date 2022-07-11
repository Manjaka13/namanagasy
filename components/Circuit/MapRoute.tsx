import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { ICircuit } from "helpers/interface";
import Image from "next/image";

/*
    Displays route
*/

const MapRoute = ({ circuit }: { circuit: ICircuit }): JSX.Element => {
	return (
		<div className="map-route b-b bg-white pd-b-20">
			<div className="f-r-be-ce pd-20">
				<h2 className="fs-160">
					<Icon icon={["fas", "map-marker-alt"]} /> Antsirabe
				</h2>
				<p>
					<span className="u b">Distance</span>: <span className="i">160 km</span>
				</p>
			</div>
			<div className="map-route__container br-5"></div>
			<p className="tx-j pd-20">{circuit.description}</p>
			<figure className="map-route__image br-5 o-h">
				<Image
					className="image"
					src={circuit.image}
					alt={circuit.title}
					layout="fill"
				/>
			</figure>
		</div>
	);
};

export default MapRoute;
