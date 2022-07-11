import { Fragment } from "react";
import CircuitList from "components/Circuit/CircuitList";
import { ICircuit } from "helpers/interface";

/*
	Wrapper around circuits page
*/

const CircuitWrapper = ({
	circuits,
}: {
	circuits: Array<ICircuit>;
}): JSX.Element => {
	return (
		<Fragment>
			<CircuitList circuitList={circuits} />
		</Fragment>
	);
};

export default CircuitWrapper;
