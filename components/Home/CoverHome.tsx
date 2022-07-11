import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Social from "components/Social";
import { homeTextList } from "helpers/const";
import { usePage } from "hooks/usePage";
import { navLinks } from "helpers/const";

/*
	Home cover
*/

const CoverHome: FC = (): JSX.Element => {
	const { load } = usePage();
	const [currentText, setCurrentText] = useState<number>(0);
	const [currentChar, setCurrentChar] = useState<number>(0);

	useEffect(() => {
		let idDelay: NodeJS.Timeout;
		const id: NodeJS.Timeout = setTimeout(() => {
			if (currentChar + 1 > homeTextList[currentText].length) {
				idDelay = setTimeout(() => {
					setCurrentChar(0);
					setCurrentText((prevState) =>
						prevState + 1 >= homeTextList.length ? 0 : ++prevState
					);
				}, 1500);
			} else setCurrentChar((prevState) => ++prevState);
		}, 30);
		return () => {
			clearTimeout(id);
			clearTimeout(idDelay);
		};
	}, [currentChar, currentText]);

	const splittedText: string =
		currentChar < homeTextList[currentText].length
			? homeTextList[currentText].substr(0, currentChar)
			: homeTextList[currentText];

	return (
		<div className="cover-home w-100 o-h">
			<div className="cover-home__bg w-100 h-100">
				<div className="cover-home__overlay w-100 h-100">
					<div className="container h-100 f-c-st-st">
						<div className="cover-home__top w-100 h-80 f-c-ce-ce o-h">
							<h2 className="cover-home__title white tx-c">Travel to Madagascar</h2>
							<h3 className="cover-home__title2 t tx-c h-50px f-r-ce-ce mg-t-40 mg-b-40">
								{splittedText}
							</h3>
							<Link href="/circuit" passHref>
								<a
									className="cover-home__check pd-10 pd-l-20 pd-r-20 br-5 p t tr-200"
									title="Check list of available circuits for this season."
									onClick={() => load()}
								>
									<Icon icon={["fas", "pencil-alt"]} /> Available circuits
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
