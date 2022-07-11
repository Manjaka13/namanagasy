import Link from "next/link";
import { useMenu } from "hooks/useMenu";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { INavlink } from "helpers/interface";
import { FC } from "react";
import { usePage } from "hooks/usePage";
import { navLinks } from "helpers/const";

/*
    List navigation links
*/

const Navlinks: FC = (): JSX.Element => {
	const { switchPage, tab } = usePage();

	const mappedNavlinks: Array<JSX.Element> = navLinks.map(
		(item: INavlink, key: number) => (
			<li
				className={`navlinks__item ${tab === key ? "navlinks__item--active" : ""}`}
				key={uuidv4()}
			>
				<Link href={item.link}>
					<a
						className="navlinks__link"
						title={item.title}
						onClick={() => {
							if (key != tab) switchPage(item.name);
						}}
					>
						<Icon className="navlinks__icon mg-r-5" icon={item.icon} /> {item.content}
					</a>
				</Link>
			</li>
		)
	);

	return <ul className="navlinks">{mappedNavlinks}</ul>;
};

export default Navlinks;
