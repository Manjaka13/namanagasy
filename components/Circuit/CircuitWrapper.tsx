import { FC, Fragment } from "react";
import CircuitList from "components/Circuit/CircuitList";
import useCircuit from "hooks/useCircuit";

/*
	Wrapper around circuits page
*/

const CircuitWrapper: FC = (): JSX.Element => {
	const circuitList = useCircuit();

	return (
		<Fragment>
			<CircuitList circuitList={circuitList} />
		</Fragment>
	);
};

export default CircuitWrapper;
