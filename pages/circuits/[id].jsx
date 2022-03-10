import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import Planning from "components/Planning";
import PlaceDetails from "components/PlaceDetails";

/*
	Circuit details
*/

const CircuitDetails = () => {
	const [placeDetailsOpened, setPlaceDetailsOpened] = useState(false);
	const router = useRouter();
	const { id } = router.query;

	const openPlace = () => setPlaceDetailsOpened(true);
	const closePlace = () => setPlaceDetailsOpened(false);

	return !id ? <Fragment></Fragment> : (
		<PageProvider defaultLoading={ false } defaultTab={ 1 }>
			<Heading
				title="Baobabs Alley"
				image="/images/covers/baobabs-alley-morondava.jpg"
			>
				Trip to Baobabs Alley for all budgets
			</Heading>
			<Page>
				<div className="circuit-details n-s">
					<div className="circuit-details__main container w-100">
						<Planning open={ openPlace }/>
						<PlaceDetails opened={ placeDetailsOpened } close={ closePlace } />
					</div>
				</div>
			</Page>
		</PageProvider>
	);
}

export default CircuitDetails;
