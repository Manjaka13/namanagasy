import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Heading from "components/Page/Heading";
import Page from "components/Page/Page";
import { PageProvider } from "hooks/usePage";
// import Planning from "components/Planning";
// import PlaceDetails from "components/PlaceDetails";

/*
	Circuit details
*/

const CircuitDetails = () => {
	const router = useRouter();
	const { id } = router.query;

	return !id ? <Fragment></Fragment> : (
		<PageProvider defaultLoading={false} defaultTab={1}>
			<Heading
				title="Baobabs Alley"
				image="/images/covers/baobabs-alley-morondava.jpg"
			>
				Trip to Baobabs Alley for all budgets
			</Heading>
			<Page>
				<div id="circuit" className="circuit-details n-s">
					<div className="circuit-details__main container w-100">
						{/* <PlaceDetails /> */}
						{/* <Planning /> */}
					</div>
				</div>
			</Page>
		</PageProvider>
	);
}

export default CircuitDetails;
