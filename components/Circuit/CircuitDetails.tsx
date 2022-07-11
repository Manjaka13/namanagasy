import { ICircuit } from "helpers/interface";
import TravelPlan from "components/Circuit/TravelPlan";
import MapRoute from "components/Circuit/MapRoute";

/*
    Displays circuit details
*/

const travelPlan: Array<string> = [
	"Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc.",
	"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam sit amet velit volutpat tristique.",
	"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat.",
	"Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh.",
	"Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc.",
	"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam sit amet velit volutpat tristique.",
	"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat.",
	"Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh.",
];

const CircuitDetails = ({ circuit }: { circuit: ICircuit }): JSX.Element => {
	return (
		<div className="circuit-details">
			<div className="container f-r-be-in">
				<TravelPlan title={circuit.title} plan={travelPlan} />
				<MapRoute circuit={circuit} />
			</div>
		</div>
	);
};

export default CircuitDetails;
