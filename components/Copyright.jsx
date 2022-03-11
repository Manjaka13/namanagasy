import React from "react";
import { WEBSITE_NAME } from "helpers/const";

const Copyright = () => (
	<div className="copyright f-r-ce-ce pd-t-10 pd-b-10 bg-theme2 n-s">
		<p className="left tx-r pd-r-10 white b">
			{ WEBSITE_NAME }, All rights reserved.
		</p>
		<p className="right tx-l pd-l-10 white b">
			Copyright © 2017 - { new Date().getFullYear() }
		</p>
	</div>
);

export default Copyright;
