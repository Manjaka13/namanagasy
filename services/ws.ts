import { isDevelopment } from "helpers/const";
import { IWs } from "helpers/interface";

/*
	Here lies all endpoints
*/

const ws: IWs = {
	circuitList: isDevelopment
		? "data/circuitList.json"
		: "c9d3c508-0103-49c4-9a7b-066975508f2d",
};

export default ws;
