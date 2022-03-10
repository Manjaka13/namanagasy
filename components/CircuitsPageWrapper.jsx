import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CircuitList from "components/CircuitList";
import useCircuitList from "hooks/useCircuitList";

/*
	Wrapper around circuits page
*/

const CircuitsPageWrapper = () => {
	const circuitList = useCircuitList();

	return (
		<Fragment>
			<Heading
				title="Trips to Madagascar for all budgets"
				image="/images/covers/pirogue-morondava.jpg"
			>
				Affordable touristic circuits to Madagascar with experienced driver and guide.
			</Heading>
			<Page>
				<CircuitList circuitList={ circuitList } />
			</Page>
		</Fragment>
	);
}

export default CircuitsPageWrapper;
