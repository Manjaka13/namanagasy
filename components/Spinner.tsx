import { FC } from "react";
import { ISpinnerProps } from "helpers/interface";

/*
	Loading spinner
*/

const Spinner: FC<ISpinnerProps> = ({ className }): JSX.Element => (
	<div className={`spinner ${className || ""}`}>Loading...</div>
);

export default Spinner;
