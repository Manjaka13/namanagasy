import { INavlink, ISocial } from "helpers/interface";

/*
    Export constants from here
*/

const baseUrl: string =
	process.env.NEXT_PUBLIC_BASEURL || "http://localhost:3000/api/";

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
		link: "/circuits",
	},
	{
		content: "Madagascar",
		icon: ["fas", "globe"],
		title: "Everything you need to know about Madagascar.",
		link: "#0",
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

export { baseUrl, navLinks, socialLinks };
