import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CoverHome from "components/CoverHome";
import PopularCircuits from "components/PopularCircuits";
import { PageProvider } from "hooks/usePage";

/*
	Homepage
*/

const Homepage = () => (
	<PageProvider defaultTab={ 0 }>
		<Heading
			title="Travel to Madagascar with an experienced tourism agency"
			image="/images/covers/baobabs-morondava.jpg"
		>
			Hire a touristic driver guide to visit Madagascar.
		</Heading>
		<Page>
			<Fragment>
				<CoverHome />
				<PopularCircuits />
			</Fragment>
		</Page>
	</PageProvider>
);

export default Homepage;
