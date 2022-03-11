import React from "react";
import Link from "next/link";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { usePage } from "hooks/usePage";

/*
	Homepage
*/

const Homepage = () => {
	const { load } = usePage();

	return (
		<PageProvider>
			<Heading
				title="404 not found"
				image="/images/covers/404.jpg"
			>
				It seems that the content you want to access does not exist.
			</Heading>
			<Page>
				<div className="not-found w-100 o-h f-c-ce-ce">
					<div className="not-found__window w-30 br-10 bg-white">
						<h2 className="pd-20">
							<Icon icon={ ["fas", "exclamation-circle"] } /> Oups, content not found
						</h2>
						<div className="not-found__separator bg-t w-30 mg-l-20"></div>
						<p className="tx-j pd-20">
							It seems that the content/page you want to access does not exist or has been removed, please verify the url is correct and try again. If the problem persists please contact an admnistrator.
						</p>
						<p className="tx-c  pd-t-20 pd-b-40">
							<Link href="/" passHref>
								<a
									className="back pd-10 pd-r-20 pd-r-20 bg-green white br-5 tr-200"
									title="Back to home"
									onClick={() => {
										if(typeof load === "function")
											load(0);
									}}
								>
									<Icon icon={ ["fas", "home"] } /> Back to safe place
								</a>
							</Link>
						</p>
					</div>
				</div>
			</Page>
		</PageProvider>
	);
}

export default Homepage;
