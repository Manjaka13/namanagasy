import React, { Fragment, useState } from "react";
import Navbar from "components/Navbar";
import Menu from "components/Menu";

/*
	Wraps up navbar and menu in one component to handle its state
*/

const Navigation = () => {
	const [opened, setOpened] = useState(false);

	const toggle = () => setOpened(prevState => !prevState);
	const close = () => setOpened(false);

	return (
		<Fragment>
			<Navbar toggle={ toggle } />
			<Menu opened={ opened } close={ close } />
		</Fragment>
	);
};

export default Navigation;