import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { usePage } from "hooks/usePage";

/*
    404 component
*/

const NotFound: FC = (): JSX.Element => {
	const { load } = usePage();

	return (
		<div className="not-found w-100 o-h f-c-ce-ce">
			<div className="not-found__window w-30 br-10 bg-white">
				<h2 className="pd-20">
					<Icon icon={["fas", "exclamation-circle"]} /> Oups, content not found
				</h2>
				<div className="not-found__separator bg-t w-30 mg-l-20"></div>
				<p className="tx-j pd-20">
					It seems that the content/page you want to access does not exist or has
					been removed, please verify the url is correct and try again. If the
					problem persists please contact an admnistrator.
				</p>
				<p className="tx-c  pd-t-20 pd-b-40">
					<Link href="/">
						<a
							className="back pd-10 pd-r-20 pd-r-20 bg-green white br-5 tr-200"
							title="Back to home"
							onClick={() => load(0)}
						>
							<Icon icon={["fas", "home"]} /> Back to safe place
						</a>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
