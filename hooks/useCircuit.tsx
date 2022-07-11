import { useState, useEffect } from "react";
import { getCircuitList } from "services/";
import { usePage } from "hooks/usePage";
import { ICircuit } from "helpers/interface";

/*
	Hook that gets circuit list at startup
*/

const useCircuit = (): Array<ICircuit> => {
	const [circuitList, setCircuitList] = useState<Array<ICircuit>>([]);
	const { unload } = usePage();

	useEffect(() => {
		getCircuitList()
			.then((list: Array<ICircuit>) => {
				setCircuitList(list);
				setTimeout(() => {
					unload();
				}, 100);
			})
			.catch((e) => {
				console.error(e);
			});
	}, [unload]);

	return circuitList;
};

export default useCircuit;
