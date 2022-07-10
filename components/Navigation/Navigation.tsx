import { FC } from "react";
import Navbar from "components/Navigation/Navbar";
import Menu from "components/Navigation/Menu";
import { MenuProvider } from "components/hooks/useMenu";

/*
	Navbar and menu wrapper
*/

const Navigation: FC = (): JSX.Element => (
	<MenuProvider>
		<Navbar />
		<Menu />
	</MenuProvider>
);

export default Navigation;
