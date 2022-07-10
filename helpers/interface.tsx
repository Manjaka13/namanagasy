import { IconProp } from "@fortawesome/fontawesome-svg-core";

/*
    Export TS interfaces
*/

export interface IHeadingProps {
	title?: string;
	image?: string;
	description?: string;
	children?: JSX.Element;
	defaultLoading?: boolean;
}

export interface INavlink {
	icon: IconProp;
	content: string;
	link: string;
	title?: string;
}

export interface IMenuContext {
	opened: boolean;
	navLinks: Array<INavlink>;
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
	load: () => void;
	unload: () => void;
}

export interface IPageProviderProps {
	children?: JSX.Element;
	defaultLoading?: boolean;
}
