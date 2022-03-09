import React from "react";
import { v4 as uuidv4 } from "uuid";
import CircuitCard from "components/CircuitCard";
import useCircuitList from "hooks/useCircuitList";

/*
	List of circuits
*/

const CircuitList = () => {
	const circuitList = useCircuitList();
	const mappedCircuits = circuitList.map(circuit => (
		<CircuitCard key={ uuidv4() } { ...circuit} />
	));

	return (
		<div className="circuit-list w-100">
			<div className="container">
				<div className="list pd-t-20 pd-b-20">
					{ mappedCircuits }
				</div>
			</div>
		</div>
	);
}

export default CircuitList;