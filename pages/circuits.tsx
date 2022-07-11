import { Fragment } from "react";
import type { NextPage } from "next";
import Page from "components/Page/Page";
import { PageProvider } from "hooks/usePage";
import CircuitWrapper from "components/Circuits/CircuitWrapper";

/*
	Circuits page
*/

const Circuits: NextPage = (): JSX.Element => {
	return (
		<PageProvider defaultLoading={true}>
			<Page
				title="Trips to Madagascar for all budgets"
				image="/images/covers/pirogue-morondava.jpg"
				description="Affordable touristic circuits to Madagascar with experienced driver and
				guide."
			>
				<Fragment>
					<CircuitWrapper />
				</Fragment>
			</Page>
		</PageProvider>
	);
};

export default Circuits;
