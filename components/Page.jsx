import React, { Fragment } from "react";
import Navbar from "components/Navbar";
import Copyright from "components/Copyright";
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
				<Navbar />
				{ children }
			</main>
			<footer>
				<Copyright />
			</footer>
		</Fragment>
	);
};

export default Page;