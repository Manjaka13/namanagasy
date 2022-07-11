import { useState, useEffect } from "react";
import { getCircuit } from "services/";
import { usePage } from "hooks/usePage";
import { ICircuit } from "helpers/interface";

/*
	Hook that gets circuit details
*/

const useCircuitDetails = (
	id: string | string[] | undefined
): ICircuit | null => {
	const [circuit, setCircuit] = useState<ICircuit | null>(null);
	const { unload } = usePage();

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		if (!circuit && id)
			getCircuit(id)
				.then((data: ICircuit | null) => {
					if (data)
						timeoutId = setTimeout(() => {
							setCircuit(data);
							unload();
						}, 100);
				})
				.catch((e) => {
					console.error(e);
				});
		return () => clearTimeout(timeoutId);
	}, [unload, circuit, id]);

	return circuit;
};

export default useCircuitDetails;
