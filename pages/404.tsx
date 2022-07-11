import { Fragment } from "react";
import type { NextPage } from "next";
import Page from "components/Page/Page";
import CoverHome from "components/Home/CoverHome";
import { PageProvider } from "hooks/usePage";
import NotFound from "components/Page/NotFound";

/*
	404 page
*/

const NotFoundPage: NextPage = (): JSX.Element => {
	return (
		<PageProvider defaultLoading={false}>
			<Page
				title="404 not found"
				image="/assets/covers/404.jpg"
				description="It seems that the content you want to access does not exist."
			>
				<NotFound />
			</Page>
		</PageProvider>
	);
};

export default NotFoundPage;
