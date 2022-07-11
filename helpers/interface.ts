import { IconProp } from "@fortawesome/fontawesome-svg-core";

/*
    Export TS interfaces
*/

export interface IHeadingProps {
	title?: string;
	image?: string;
	description?: string;
	children?: JSX.Element;
}

export interface INavlink {
	name: string;
	icon: IconProp;
	content: string;
	link: string;
	title?: string;
	isAnchor?: boolean;
}

export interface IMenuContext {
	opened: boolean;
	toggle: () => void;
	close: () => void;
}

export interface ISocial {
	icon: IconProp;
	link: string;
	title: string;
}

export interface ISpinnerProps {
	className?: string;
}

export interface IPageContext {
	loading: boolean;
	tab: number;
	switchPage: (pageName: string | null) => void;
}

export interface IPageProviderProps {
	children?: JSX.Element;
	defaultLoading?: boolean;
	defaultTab?: number;
}

export interface IContact {
	icon: IconProp;
	content: string;
}

export interface IWs {
	circuitList: string;
}

export interface ICircuit {
	id: string;
	title: string;
	image: string;
	price: number;
	duration: number;
	description: string;
}

export interface ICircuitListProps {
	circuitList: Array<ICircuit>;
}

export interface IItinerary {
	position: Array<number | number>;
	zoom: number;
}
