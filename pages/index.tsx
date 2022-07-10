import type { NextPage } from "next";
import Page from "components/Page/Page";

const Home: NextPage = (): JSX.Element => {
	return (
		<Page
			title="Travel to Madagascar with an experienced tourism agency"
			image="/assets/covers/baobabs-morondava.jpg"
			description="Hire a touristic driver guide to visit Madagascar."
		/>
	);
};

export default Home;
