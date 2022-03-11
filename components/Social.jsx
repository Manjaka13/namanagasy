import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Social links
*/

const socialList = [
	{
		icon: ["fab", "facebook"],
		link: "#0",
		title: "Like us on Facebook"
	},
	{
		icon: ["fab", "instagram"],
		link: "#0",
		title: "Follow us on Instagram"
	},
	{
		icon: ["fas", "envelope"],
		link: "#contacts",
		title: "Contact us now !"
	}
];

const mappedSocial = socialList.map(social => (
	<li className="social__item" key={ uuidv4() }>
		<a className="social__link tr-200" href={ social.link } title={ social.title }>
			<Icon icon={ social.icon } />
		</a>
	</li>
));

const Social = () => (
	<ul className="social">
		{ mappedSocial }
	</ul>
);

export default Social;