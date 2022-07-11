import http from "services/http";
import { ICircuit } from "helpers/interface";
import ws from "services/ws";

/*
	Functions for doing API calls
*/

export const getCircuitList = (): Promise<Array<ICircuit>> =>
	http.get(ws["circuitList"]);
