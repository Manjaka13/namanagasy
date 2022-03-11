import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Detailed planing of the trip
*/

const planningList = [
	"Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc.",
	"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam sit amet velit volutpat tristique.",
	"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat.",
	"Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh.",
	"Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc.",
	"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam sit amet velit volutpat tristique.",
	"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat.",
	"Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh."
];

const Planning = () => {
	const [selected, setSelected] = useState(-1);

	const mappedPlanning = planningList.map((planning, key) => (
		<li
			className={ `planning__item pd-10 pd-b-0 tr-200 br-5 p ${key === selected && "planning__item--active"}` }
			key={ uuidv4() }
			onClick={ () => {
				setSelected(key);
				setTimeout(() => {
					window.location.href = "#circuit";
				}, 200);
			}}
		>
			<div className="f-r-be-ce">
				<p className="title b p-n">
					<Icon icon={ ["fas", "calendar-alt"] } /> <span className="u">Day { key + 1 }</span> :
				</p>
				<div className="marker w-25px h-25px o-h br-r bg-white b-b f-r-ce-ce tr-200">
					<Icon icon={ ["fas", "map-marker-alt"] } />
				</div>
			</div>
			<p className="details pd-10 pd-l-0 pd-r-0 tx-j p-n">
				{ planning }
			</p>
		</li>
	));

	return (
		<div className="planning bg-white b-b o-a">
			<div className="pd-20 f-r-st-ce">
				<div className="planning__separator bg-t w-10 mg-r-20"></div>
				<h2 className="planning__title fs-180">
					<Icon icon={ ["fas", "pencil-alt"] } /> Planing details
				</h2>
			</div>
			<ul className="planning__list mg-10 mg-t-0">
				{ mappedPlanning }
			</ul>
		</div>
	);
}

export default Planning;