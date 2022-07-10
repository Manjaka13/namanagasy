import { Fragment } from "react";
import Heading from "components/Page/Heading";
import Image from "next/image";
import Navigation from "components/Navigation/Navigation";

const Page = ({ title = "", description = "", image = "" }): JSX.Element => {
	return (
		<Fragment>
			{/* Head */}
			<Heading title={title} description={description} image={image} />
			{/* Body */}
			<main>
				<Navigation />
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</main>
			{/* Footer */}
			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</Fragment>
	);
};

export default Page;
