import type { NextPage } from "next";
import Page from "components/Page/Page";
import Login from "components/Login";

/*
	Login page
*/

const LoginPage: NextPage = (): JSX.Element => (
	<Page
		title="Namanagasy login"
		image="/assets/covers/baobabs-morondava.jpg"
		description="Manage the website by login into admnistration account."
		blank
	>
		<Login />
	</Page>
);

export default LoginPage;
