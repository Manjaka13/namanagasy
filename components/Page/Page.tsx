import { FC, Fragment } from "react";
import Heading from "components/Page/Heading";
import Navigation from "components/Navigation/Navigation";
import { IHeadingProps } from "helpers/interface";
import Footer from "components/Page/Footer";
import PageWaiting from "components/Page/PageWaiting";
import { PageProvider } from "hooks/usePage";
import Contacts from "components/Contacts";

/*
	Page layout
*/

const Page: FC<IHeadingProps> = ({
	title,
	description,
	image,
	children,
	defaultLoading,
}): JSX.Element => (
	<PageProvider defaultLoading={defaultLoading}>
		<Fragment>
			{/* Head */}
			<Heading title={title} description={description} image={image} />

			{/* Body */}
			<main>
				<Navigation />
				<PageWaiting />
				{children}
				<Contacts />
			</main>

			{/* Footer */}
			<Footer />
		</Fragment>
	</PageProvider>
);

export default Page;
