import { FC } from "react";

/*
    Displays circuit details
*/

const planningList = [
	"Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc.",
	"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam sit amet velit volutpat tristique.",
	"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat.",
	"Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh.",
	"Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc.",
	"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam sit amet velit volutpat tristique.",
	"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat.",
	"Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh.",
];

const CircuitDetails: FC = (): JSX.Element => {
	return (
		<div className="circuit-details">
			<div className="container">
				<div className="schedule b-b">
					<h2 className="schedule__title">Planing details</h2>
				</div>
			</div>
		</div>
	);
};

export default CircuitDetails;
