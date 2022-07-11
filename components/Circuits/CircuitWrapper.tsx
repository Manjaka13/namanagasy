import { Fragment } from "react";
import CircuitList from "components/Circuits/CircuitList";
import useCircuit from "hooks/useCircuit";

/*
	Wrapper around circuits page
*/

const CircuitWrapper = () => {
	const circuitList = useCircuit();

	return (
		<Fragment>
			<CircuitList circuitList={circuitList} />
		</Fragment>
	);
};

export default CircuitWrapper;
