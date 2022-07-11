import { FC, Fragment } from "react";
import Heading from "components/Page/Heading";
import Navigation from "components/Navigation/Navigation";
import { IHeadingProps } from "helpers/interface";
import Footer from "components/Page/Footer";
import PageWaiting from "components/Page/PageWaiting";
import Contacts from "components/Contacts";

/*
	Page layout
*/

const Page: FC<IHeadingProps> = ({
	title,
	description,
	image,
	children,
	blank,
}): JSX.Element => (
	<Fragment>
		{/* Head */}
		<Heading title={title} description={description} image={image} />

		{/* Body */}
		<main>
			{!blank && (
				<Fragment>
					<Navigation />
					<PageWaiting />
				</Fragment>
			)}
			{children}
			{!blank && <Contacts />}
		</main>

		{/* Footer */}
		{!blank && <Footer />}
	</Fragment>
);

export default Page;
