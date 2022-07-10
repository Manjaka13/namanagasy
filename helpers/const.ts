import { INavlink, ISocial, IContact } from "helpers/interface";

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

export { baseUrl, navLinks, socialLinks, contactList };
