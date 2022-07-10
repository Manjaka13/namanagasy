import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "helpers/const";
import { ISocial } from "helpers/interface";

/*
	Social link list
*/

const mappedSocial: Array<JSX.Element> = socialLinks.map((social: ISocial) => (
	<li className="social__item" key={uuidv4()}>
		<a className="social__link tr-200" href={social.link} title={social.title}>
			<Icon icon={social.icon} />
		</a>
	</li>
));

const Social: FC = (): JSX.Element => (
	<ul className="social">{mappedSocial}</ul>
);

export default Social;
