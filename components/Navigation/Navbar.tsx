import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Navlinks from "components/Navigation/Navlinks";
import { useMenu } from "components/hooks/useMenu";

/*
	Navigation bar
*/

const Navbar: FC = (): JSX.Element => {
	const { toggle } = useMenu();

	return (
		<nav className="navbar w-100">
			<div className="container f-r-be-ce h-100">
				<div className="f-r-st-ce">
					<figure className="navbar__logo w-60px h-60px mg-r-20">
						<Image
							src="/assets/namanagasy-logo.png"
							alt="Namanagasy logo"
							layout="fill"
						/>
					</figure>
					<h1 className="navbar__title fs-220 t">Namanagasy</h1>
				</div>
				<Navlinks />
				<div
					className="navbar__trigger o-h tr-100 br-r t fs-170 p"
					title="Menu"
					onClick={toggle}
				>
					<Icon icon={["fas", "bars"]} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
