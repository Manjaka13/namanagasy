import { Fragment, useEffect } from "react";
import type { NextPage } from "next";
import Page from "components/Page/Page";
import CoverHome from "components/Home/CoverHome";
import { PageProvider } from "hooks/usePage";

/*
	Home page
*/

const Home: NextPage = (): JSX.Element => (
	<PageProvider defaultLoading={false} defaultTab={0}>
		<Page
			title="Travel to Madagascar with an experienced tourism agency"
			image="/assets/covers/baobabs-morondava.jpg"
			description="Hire a touristic driver guide to visit Madagascar."
		>
			<Fragment>
				<CoverHome />
			</Fragment>
		</Page>
	</PageProvider>
);

export default Home;
