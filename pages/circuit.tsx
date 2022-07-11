import { Fragment } from "react";
import type { GetServerSideProps } from "next";
import Page from "components/Page/Page";
import CircuitWrapper from "components/Circuit/CircuitWrapper";
import { PageProvider } from "hooks/usePage";
import { ICircuit } from "helpers/interface";
import { getCircuitList } from "services/";

/*
	Circuits page
*/

// Fetch data from server
export const getServerSideProps: GetServerSideProps = async () => {
	let circuits: Array<ICircuit> = await getCircuitList();
	return {
		props: {
			circuits,
		},
	};
};

const CircuitPage = ({
	circuits,
}: {
	circuits: Array<ICircuit>;
}): JSX.Element => (
	<PageProvider defaultTab={1}>
		<Page
			title="Trips to Madagascar for all budgets"
			image="/assets/covers/pirogue-morondava.jpg"
			description="Affordable touristic circuits to Madagascar with experienced driver and
				guide."
		>
			<Fragment>
				<CircuitWrapper circuits={circuits} />
			</Fragment>
		</Page>
	</PageProvider>
);

export default CircuitPage;
