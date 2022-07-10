import Link from "next/link";
import { useMenu } from "components/hooks/useMenu";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { INavlink } from "helpers/interface";
import { FC } from "react";

/*
    List navigation links
*/

const Navlinks: FC = (): JSX.Element => {
	const { navLinks } = useMenu();

	const mappedNavlinks: Array<JSX.Element> = navLinks.map(
		(item: INavlink, key: number) => (
			<li className={`navlinks__item`} key={uuidv4()}>
				<Link href={item.link}>
					<a className="navlinks__link" title={item.title}>
						<Icon className="navlinks__icon mg-r-5" icon={item.icon} /> {item.content}
					</a>
				</Link>
			</li>
		)
	);

	return <ul className="navlinks">{mappedNavlinks}</ul>;
};

export default Navlinks;