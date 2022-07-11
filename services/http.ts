import axios from "axios";
import { baseUrl, requestHeaders } from "helpers/const";
import { ICircuit } from "helpers/interface";

/*
	The http service for API calls
*/

const http = {
	// Get request
	get: (endpoint: string) =>
		new Promise<Array<ICircuit>>((resolve, reject) => {
			axios
				.get(`${baseUrl}/${endpoint}`, {
					headers: requestHeaders,
				})
				.then(({ data }) =>
					resolve(typeof data === "string" ? JSON.parse(data).payload : data.payload)
				)
				.catch((e) => reject(e));
		}),
};

export default http;
