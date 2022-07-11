import { Fragment } from "react";
import type { NextPage } from "next";
import Page from "components/Page/Page";
import CircuitWrapper from "components/Circuit/CircuitWrapper";
import { PageProvider } from "hooks/usePage";

/*
	Circuits page
*/

const CircuitPage: NextPage = (): JSX.Element => (
	<PageProvider defaultLoading={true} defaultTab={1}>
		<Page
			title="Trips to Madagascar for all budgets"
			image="/assets/covers/pirogue-morondava.jpg"
			description="Affordable touristic circuits to Madagascar with experienced driver and
				guide."
		>
			<Fragment>
				<CircuitWrapper />
			</Fragment>
		</Page>
	</PageProvider>
);

export default CircuitPage;
