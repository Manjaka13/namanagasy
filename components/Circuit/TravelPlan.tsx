import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

/*
    Circuit travel plan
*/

const TravelPlan = ({
	title,
	plan,
}: {
	title: string;
	plan: Array<string>;
}) => {
	const mappedTravelPlan: Array<JSX.Element> = plan.map(
		(description: string, key: number) => (
			<li className="travel-plan__item pd-5 mg-b-20 br-5 p tr-200" key={uuidv4()}>
				<h3 className="mg-b-10 fs-110">
					<Icon icon={["fas", "calendar-alt"]} />{" "}
					<span className="u">Day {key + 1}</span>
				</h3>
				<p className="tx-j">{description}</p>
			</li>
		)
	);
	return (
		<div className="travel-plan b-b bg-white">
			<div className="f-r-be-ce pd-20">
				<div className="f-r-st-ce">
					<div className="w-5px h-40px bg-t mg-r-20 br-5"></div>
					<h2 className="fs-160">
						<Icon icon={["fas", "car"]} /> {title}
					</h2>
				</div>
				<p className="t b i">
					<Icon icon={["fas", "clock"]} /> ~ 8 days
				</p>
			</div>
			<ul className="pd-15 pd-t-0">{mappedTravelPlan}</ul>
		</div>
	);
};

export default TravelPlan;
