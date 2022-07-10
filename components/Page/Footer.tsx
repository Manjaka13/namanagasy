import { FC } from "react";

/*
    Page footer
*/

const Footer: FC = (): JSX.Element => (
	<footer className="footer f-r-ce-ce pd-t-10 pd-b-10 bg-theme2 n-s">
		<p className="left tx-r pd-r-10 t b">Namanagasy, All rights reserved.</p>
		<p className="right tx-l pd-l-10 t b">
			Copyright © 2017 - {new Date().getFullYear()}
		</p>
	</footer>
);

export default Footer;
