/*
	Export constants
*/

export const BASE_URL = process.env.NEXT_PUBLIC_BASEURL ? process.env.NEXT_PUBLIC_BASEURL : "";
export const DEVELOPMENT = process.env.NODE_ENV === "development";
export const PRODUCTION = process.env.NODE_ENV != "development";
export const WEBSITE_NAME = "Namana Gasy";