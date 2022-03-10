import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import Planning from "components/Planning";
// import Itinerary from "components/Itinerary";
// Dynamic load itinerary
const Itinerary = dynamic(() => import("components/Itinerary"), {
	ssr: false
});

/*
	Circuit details
*/

const CircuitDetails = () => {
	const [itineraryOpened, setItineraryOpened] = useState(false);
	const router = useRouter();
	const { id } = router.query;

	const openItinerary = () => setItineraryOpened(true);
	const closeItinerary = () => setItineraryOpened(false);
	console.log("Query details for ", id);

	return (
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
						<Planning open={ openItinerary }/>
						<Itinerary opened={ itineraryOpened } close={ closeItinerary } />
					</div>
				</div>
			</Page>
		</PageProvider>
	);
}

export default CircuitDetails;
