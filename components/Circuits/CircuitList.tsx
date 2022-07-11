import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import CircuitCard from "components/Circuits/CircuitCard";
import { ICircuit, ICircuitListProps } from "helpers/interface";

/*
	List of circuits
*/

const CircuitList: FC<ICircuitListProps> = ({ circuitList }): JSX.Element => {
	const mappedCircuits: Array<JSX.Element> = circuitList.map(
		(circuit: ICircuit) => <CircuitCard key={uuidv4()} {...circuit} />
	);

	return (
		<div className="circuit-list w-100">
			<div className="container">
				<div className="list pd-t-20 pd-b-20">{mappedCircuits}</div>
			</div>
		</div>
	);
};

export default CircuitList;
