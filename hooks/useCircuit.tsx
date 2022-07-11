import { useState, useEffect } from "react";
import { getCircuitList } from "services/";
import { usePage } from "hooks/usePage";
import { ICircuit } from "helpers/interface";

/*
	Hook that gets circuit list at startup
*/

const useCircuit = (): Array<ICircuit> => {
	const [circuitList, setCircuitList] = useState<Array<ICircuit>>([]);
	const { unload, loading } = usePage();

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		if (circuitList.length === 0)
			getCircuitList()
				.then((list: Array<ICircuit>) => {
					timeoutId = setTimeout(() => {
						setCircuitList(list);
						unload();
					}, 100);
				})
				.catch((e) => {
					console.error(e);
				});
		return () => clearTimeout(timeoutId);
	}, [unload, circuitList]);

	return circuitList;
};

export default useCircuit;
