import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CoverHome from "components/CoverHome";
import { PageProvider } from "hooks/usePage";

/*
	Homepage
*/

const Homepage = () => (
	<PageProvider>
		<Heading
			title="Travel to Madagascar with an experienced tourism agency"
			image="/images/covers/baobabs-morondava.jpg"
		>
			Hire a touristic driver guide to visit Madagascar.
		</Heading>
		<Page active={ 0 }>
			<CoverHome />
		</Page>
	</PageProvider>
);

export default Homepage;
