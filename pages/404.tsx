import type { NextPage } from "next";
import Page from "components/Page/Page";
import NotFound from "components/Page/NotFound";
import { PageProvider } from "hooks/usePage";

/*
	404 page
*/

const NotFoundPage: NextPage = (): JSX.Element => (
	<PageProvider defaultLoading={false} defaultTab={-1}>
		<Page
			title="404 not found"
			image="/assets/covers/404.jpg"
			description="It seems that the content you want to access does not exist."
		>
			<NotFound />
		</Page>
	</PageProvider>
);

export default NotFoundPage;
