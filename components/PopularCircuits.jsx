import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Spinner from "components/Spinner";
import useCircuitList from "hooks/useCircuitList";
import { usePage } from "hooks/usePage";

/*
	Display limited list of trending circuits
*/

const PopularCircuits = () => {
	const { load } = usePage();
	const circuitList = useCircuitList();
	const loading = circuitList.length === 0;

	// Creates a trending circuit card
	const createCard = (circuit) => {
		if(loading)
			return (
				<div className="w-100 h-100 f-r-ce-ce">
					<Spinner />
				</div>
			);
		else
			return (
				<div
					className="popular-circuits__card w-100 h-100 tr-500"
					style={{
						background: `url(${circuit ? circuit.image : "/images/circuits/tuléar-madagascar.jpg"}) center center no-repeat`,
						backgroundSize: "cover"
					}}
				>
					<div className="popular-circuits__overlay w-100 h-100 tr-200 f-c-ce-ce">
						{circuit && (<h3 className="title white fs-180 pd-b-20">{ circuit.title }</h3>)}
						{circuit && (
							<p className="price-box white mg-b-20">
								Starting at <span className="price b lime pd-10 pd-t-5 pd-b-5 br-5">{ circuit.price } $ / pers</span>
							</p>
						)}
						{circuit && (
							<Link href={ `/circuits/${circuit.id}` } passHref>
								<a
									className="details pd-10 pd-l-20 pd-r-20 br-5 bg-green white tr-200"
									title="View details"
									onClick={() => {
										if(typeof load === "function")
											load(1);
									}}
								>
									<Icon icon={ ["fas", "info-circle"] } /> Details
								</a>
							</Link>
						)}
						{!circuit && (
							<Link href="/circuits" passHref>
								<a
									className="details pd-10 pd-l-20 pd-r-20 br-5 t tr-200"
									title="View all available circuits"
									onClick={() => {
										if(typeof load === "function")
											load(1);
									}}
								>
									<Icon icon={ ["fas", "plus-circle"] } /> View all
								</a>
							</Link>
						)}
					</div>
				</div>
			);
	};

	return (
		<div className="popular-circuits section">
			<div className="container">
				<h2 className="section__title"><Icon className="icon" icon={ ["fas", "star"] } /> Popular circuits</h2>
				<h2 className="section__title2">Cheap trending destinations</h2>
				<div className="section__separator"></div>
				<p className="tx-j pd-t-20 pd-b-20">
					Cras fringilla tristique ligula, eget varius leo pellentesque ut. Praesent fringilla suscipit turpis, sed scelerisque nunc venenatis ut. Maecenas quis imperdiet velit. Fusce lacinia fringilla lectus, non condimentum ligula fermentum id. Aenean porttitor aliquet leo, in faucibus metus pretium id. Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit augue in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare porttitor sodales. In luctus feugiat malesuada. Phasellus consectetur nec ligula vitae commodo.
				</p>
				<div className="popular-circuits__box w-100 f-r-be-st">
					<div className="popular-circuits__col">
						<div className="popular-circuits__item o-h b-b w-100 big mg-b-20 bg-white">
							{ createCard(circuitList[0]) }
						</div>
						<div className="popular-circuits__item o-h b-b w-100 little bg-white">
							{ createCard(circuitList[1]) }
						</div>
					</div>
					<div className="popular-circuits__col">
						<div className="popular-circuits__item o-h b-b w-100 little mg-b-20 bg-white">
							{ createCard(circuitList[2]) }
						</div>
						<div className="popular-circuits__item popular-circuits__item--last o-h b-b w-100 big bg-white">
							{ createCard() }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopularCircuits;