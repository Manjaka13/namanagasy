import React from "react";
import Navigation from "components/Navigation";
import Spinner from "components/Spinner";

/*
	Shown when page still loads
*/

const PageLoading = () => (
	<main>
		<Navigation />
		<div className="page-loading w-100 f-c-ce-ce">
			<Spinner />
			<p className="tx-c pd-20 b">Loading . . .</p>
		</div>
	</main>
);

export default PageLoading;