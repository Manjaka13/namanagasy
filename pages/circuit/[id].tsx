import type { GetServerSideProps } from "next";
import Page from "components/Page/Page";
import CircuitDetails from "components/Circuit/CircuitDetails";
import { PageProvider } from "hooks/usePage";
import { ICircuit } from "helpers/interface";
import { getCircuit } from "services/";

/*
	Circuit details
*/

// Fetch data from server
export const getServerSideProps: GetServerSideProps = async (context) => {
	let circuit: ICircuit | null = null;
	if (typeof context?.params?.id === "string")
		circuit = await getCircuit(context.params.id);
	return {
		props: {
			circuit,
		},
	};
};

const CircuitDetailsPage = ({
	circuit,
}: {
	circuit: ICircuit | null;
}): JSX.Element => {
	return (
		<PageProvider defaultLoading={false} defaultTab={1}>
			<Page
				title={circuit?.title || "Trips to Madagascar for all budgets"}
				image={circuit?.image || "/assets/covers/pirogue-morondava.jpg"}
				description={
					circuit?.description ||
					"Affordable touristic circuits to Madagascar with experienced driver and guide."
				}
			>
				<CircuitDetails />
			</Page>
		</PageProvider>
	);
};

export default CircuitDetailsPage;
