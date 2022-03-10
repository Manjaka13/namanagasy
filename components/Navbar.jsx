import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import AppLinks from "components/AppLinks";

/*
	Navigation bar
*/

const Navbar = ({ toggle }) => (
	<nav className="navbar w-100">
		<div className="container f-r-be-ce h-100">
			<div className="f-r-st-ce">
				<img
					className="navbar__logo w-60px mg-r-20"
					src="/images/namanagasy-logo.png"
					alt="Namanagasy logo"
				/>
				<h1 className="navbar__title fs-220 t">Namana Gasy</h1>
			</div>
			<AppLinks />
			<div
				className="navbar__trigger o-h tr-200 br-r t fs-170 p"
				title="Menu"
				onClick={() => {
					if(typeof toggle === "function")
						toggle();
				}}
			>
				<Icon icon={ ["fas", "bars"] } />
			</div>
		</div>
	</nav>
);

export default Navbar;