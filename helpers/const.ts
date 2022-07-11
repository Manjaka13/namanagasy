import { AxiosRequestHeaders } from "axios";
import { INavlink, ISocial, IContact } from "helpers/interface";

/*
    Export constants from here
*/

const baseUrl: string =
	process.env.NEXT_PUBLIC_BASEURL || "http://localhost:3000/api/";
const isDevelopment: boolean = process.env.NODE_ENV === "development";
const isProduction: boolean = process.env.NODE_ENV != "development";

const navLinks: Array<INavlink> = [
	{
		content: "Home",
		icon: ["fas", "home"],
		title: "Go to homepage.",
		link: "/",
	},
	{
		content: "Circuits",
		icon: ["fas", "plane"],
		title: "Available circuits for this season.",
		link: "/circuit",
	},
	{
		content: "Madagascar",
		icon: ["fas", "globe"],
		title: "Everything you need to know about Madagascar.",
		link: "/madagascar",
	},
	{
		content: "Contacts",
		icon: ["fas", "envelope"],
		title: "Contact us !",
		link: "#contacts",
	},
];

const socialLinks: Array<ISocial> = [
	{
		icon: ["fab", "facebook"],
		link: "#0",
		title: "Like us on Facebook",
	},
	{
		icon: ["fab", "instagram"],
		link: "#0",
		title: "Follow us on Instagram",
	},
	{
		icon: ["fas", "envelope"],
		link: "#contacts",
		title: "Contact us now !",
	},
];

const contactList: Array<IContact> = [
	{
		icon: ["fas", "phone"],
		content: "+261 (0) 34 29 086 66",
	},
	{
		icon: ["fas", "phone"],
		content: "+261 (0) 34 67 154 30",
	},
	{
		icon: ["fas", "envelope"],
		content: "jonathan@namanagasy.com",
	},
	{
		icon: ["fas", "map-marker-alt"],
		content: "Lot 0912 B 100, Manaodidina ny Gara",
	},
	{
		icon: ["fas", "globe"],
		content: "Antsirabe 110, Madagascar",
	},
];

const homeTextList: Array<string> = [
	"Prepare your next vacation",
	"Trip to Madagascar for all budgets",
	"Visit Madagascar and popular spots",
	"Famous travel agency to Madagascar",
];

// Default request headers
const requestHeaders: AxiosRequestHeaders = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

export {
	baseUrl,
	navLinks,
	socialLinks,
	contactList,
	homeTextList,
	isDevelopment,
	isProduction,
	requestHeaders,
};
