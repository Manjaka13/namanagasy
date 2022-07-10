import { FC, Fragment } from "react";
import Heading from "components/Page/Heading";
import Navigation from "components/Navigation/Navigation";
import { IHeadingProps } from "helpers/interface";
import Footer from "components/Page/Footer";

/*
	Page layout
*/

const Page: FC<IHeadingProps> = ({
	title,
	description,
	image,
	children,
}): JSX.Element => (
	<Fragment>
		{/* Head */}
		<Heading title={title} description={description} image={image} />
		{/* Body */}
		<main>
			<Navigation />
			{children}
		</main>
		{/* Footer */}
		<Footer />
	</Fragment>
);

export default Page;
