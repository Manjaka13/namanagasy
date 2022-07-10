import { FC } from "react";
import Spinner from "components/Spinner";
import { usePage } from "components/hooks/usePage";

/*
	Shown to wait when page loads
*/

const PageWaiting: FC = (): JSX.Element => {
	const { loading } = usePage();

	return (
		<div
			className={`page-waiting ${
				!loading ? "page-waiting--hidden" : ""
			} w-100 f-c-ce-ce tr-500`}
		>
			<Spinner />
			<p className="tx-c pd-20 b">Please wait . . .</p>
		</div>
	);
};

export default PageWaiting;
