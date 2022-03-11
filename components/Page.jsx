import React, { Fragment } from "react";
import Navigation from "components/Navigation";
import Copyright from "components/Copyright";
import Contacts from "components/Contacts";
import PageLoading from "components/PageLoading";
import { usePage } from "hooks/usePage";

/*
	Pages template
*/

const Page = ({ children }) => {
	const { loading } = usePage();

	return loading ? <PageLoading /> : (
		<Fragment>
			<main>
				<Navigation />
				{ children }
			</main>
			<footer>
				<Contacts />
				<Copyright />
			</footer>
		</Fragment>
	);
};

export default Page;