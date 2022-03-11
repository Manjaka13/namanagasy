import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Social from "components/Social";
import { usePage } from "hooks/usePage";

/*
	Home cover
*/

const textList = [
	"Prepare your next vacation",
	"Trip to Madagascar for all budgets",
	"Visit Madagascar and popular spots",
	"Famous travel agency to Madagascar"
];

const CoverHome = () => {
	const { load } = usePage();
	const [currentText, setCurrentText] = useState(0);
	const [currentChar, setCurrentChar] = useState(0);

	useEffect(() => {
		let idDelay = null;
		const id = setTimeout(() => {
			if(currentChar + 1 > textList[currentText].length) {
				idDelay = setTimeout(() => {
					setCurrentChar(0);
					setCurrentText(prevState => prevState + 1 >= textList.length ? 0 : ++prevState);
				}, 1500);
			}
			else
				setCurrentChar(prevState => ++prevState);
		}, 30);
		return () => {
			clearTimeout(id);
			clearTimeout(idDelay);
		}
	}, [currentChar]);

	const splittedText = currentChar < textList[currentText].length ? textList[currentText].substr(0, currentChar) : textList[currentText];

	return (
		<div className="cover-home w-100 o-h">
			<div className="cover-home__bg w-100 h-100">
				<div className="cover-home__overlay w-100 h-100">
					<div className="container h-100 f-c-st-st">
						<div className="cover-home__top w-100 h-80 f-c-ce-ce o-h">
							<h2 className="cover-home__title white tx-c">Travel to Madagascar</h2>
							<h3 className="cover-home__title2 t tx-c h-50px f-r-ce-ce mg-t-40 mg-b-40">
								{ splittedText }
							</h3>
							<Link href="/circuits" passHref>
								<a
									className="cover-home__check pd-10 pd-l-20 pd-r-20 br-5 p t tr-200"
									title="Check list of available circuits for this season."
									onClick={() => {
										if(typeof load === "function")
											load(1);
									}}
								>
									<Icon icon={ ["fas", "pencil-alt"] } /> Available circuits
								</a>
							</Link>
						</div>
						<div className="cover-home__bottom w-100 o-h f-c-ce-en">
							<div className="cover-home__separator w-60 bg-white"></div>
							<Social />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoverHome;