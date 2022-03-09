import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CircuitList from "components/CircuitList";

/*
	Circuits page
*/

const CircuitsPage = () => (
	<Fragment>
		<Heading
			title="Trips to Madagascar for all budgets"
			image="/images/pirogue-morondava.jpg"
		>
			Affordable touristic circuits to Madagascar with experienced driver and guide.
		</Heading>
		<Page active={ 1 }>
			<p className="pd-t-50 mg-t-25">Circuit list</p>
			<CircuitList />
		</Page>
	</Fragment>
);

export default CircuitsPage;
