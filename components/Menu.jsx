import React from "react";
import AppLinks from "components/AppLinks";
import Social from "components/Social";

/*
	Mobile navigation menu
*/

const Menu = ({ opened, close }) => {
	return (
		<div
			className={ `menu ${!opened ? "menu--closed" : ""} tr-200 w-100 f-r-en-st` }
			onClick={() => {
				if(typeof close === "function")
					close();
			}}
		>
			<div className="menu__overlay w-100 h-100 tr-200"></div>
			<div className="menu__window w-50 h-100 tr-200">
				<AppLinks />
				<div className="menu__separator mg-l-20 mg-t-20"></div>
				<p className="menu__about pd-20 tx-j">
					Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Etiam lacinia, nisl ac rutrum vestibulum, risus enim placerat nisl, eget bibendum neque nibh a lectus.
				</p>
				<Social />
			</div>
		</div>
	);
};

export default Menu;