import http from "services/http";
import { ICircuit } from "helpers/interface";
import ws from "services/ws";

/*
	Functions for doing API calls
*/

export const getCircuitList = (): Promise<Array<ICircuit>> =>
	http.get(ws["circuitList"]);

export const getCircuit = (id: string | string[]): Promise<ICircuit | null> =>
	http.get(ws["circuitList"]).then((list: ICircuit[]) => {
		const data: ICircuit[] = list.filter((item: ICircuit) => item.id === id);
		if (data.length === 1) return data[0];
		else return null;
	});
