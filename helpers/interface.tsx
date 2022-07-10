import { IconProp } from "@fortawesome/fontawesome-svg-core";

/*
    Export TS interfaces
*/

export interface IHeadingProps {
	title?: string;
	image?: string;
	description?: string;
}

export interface INavlink {
	icon: IconProp;
	content: string;
	link: string;
	title?: string;
}

export interface IMenuContext {
	opened: Boolean;
	navLinks: Array<INavlink>;
	toggle: () => void;
	close: () => void;
}

export interface ISocial {
	icon: IconProp;
	link: string;
	title: string;
}
