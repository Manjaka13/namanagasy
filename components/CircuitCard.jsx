import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { usePage } from "hooks/usePage";

/*
	Circuit card representing circuit data
*/
const defaultDescription = "Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Sed volutpat dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis vitae.";

const CircuitCard = ({
	id = "circuit-id",
	title = "Title",
	image = "images/baobabs-morondava.jpg",
	price = "???",
	duration = "?",
	description = defaultDescription
}) => {
	const { load } = usePage();

	return (
		<article className="circuit-card o-h bg-white b-b f-c-st-st tr-200">
			<div className="circuit-card__representation o-h w-100">
				<div className="circuit-card__image-container w-100 h-100">
					<Image
						className="image w-100 h-100"
						alt={ title }
						src={ image }
					/>
				</div>
				<div className="circuit-card__data w-100 h-100 f-c-st-be">
					<div
						className="share w-20px h-20px o-h white pd-10 mg-10 br-r f-r-ce-ce tr-200 p"
						title="Share this circuit."
					>
						<Icon icon={ ["fas", "share"] } />
					</div>
					<p className="price-text pd-10 pd-b-20 fs-90 white">
						Starting at <span className="price b lime pd-10 pd-t-5 pd-b-5 br-5 mg-l-5 fs-130">{ price } $ / pers</span>
					</p>
				</div>
			</div>
			<div className="circuit-card__about">
				<div className="f-r-be-ce">
					<h2 className="circuit-card__title fs-120 pd-10">{ title }</h2>
					<p className="circuit-card__duration pd-5 mg-r-10 fs-90 black">{ duration } days</p>
				</div>
				<div className="circuit-card__separator mg-l-10"></div>
				<p className="circuit-card__text fs-90 pd-10 tx-j">
					{ description }
				</p>
				<p className="tx-c mg-t-20">
					<Link href={ `/circuits/${id}` } passHref>
						<a
							className="circuit-card__details pd-10 pd-l-20 pd-r-20 bg-green white br-5 p tr-200"
							onClick={() => {
								if(typeof load === "function")
									load();
							}}
						>
							<Icon icon={ ["fas", "info-circle"] } /> Details
						</a>
					</Link>
				</p>
			</div>
		</article>
	);
}

export default CircuitCard;