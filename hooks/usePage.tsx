import { useState, useContext, createContext, FC } from "react";
import { IPageContext, IPageProviderProps } from "helpers/interface";
import { navLinks } from "helpers/const";

/*
	Page hook and context
*/

const defaultState: IPageContext = {
	loading: true,
	tab: 0,
	switchPage: () => null,
};

// Setup context
const PageContext = createContext<IPageContext>(defaultState);

// Setup provider wrapper
const PageProvider: FC<IPageProviderProps> = ({
	children,
	defaultLoading,
	defaultTab,
}): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(defaultLoading || false);
	const [tab, setTab] = useState<number>(defaultTab || 0);

	// Switch to page
	const switchPage = (pageName: string | null): void => {
		let page = -1;
		if (typeof pageName === "string") {
			for (let i = 0; i < navLinks.length; i++) {
				if (navLinks[i].isAnchor) return;
				else if (navLinks[i].name === pageName) {
					page = i;
					break;
				}
			}
			setTab(page);
			setLoading(true);
		} else setTab(page);
	};

	return (
		<PageContext.Provider
			value={{
				loading,
				tab,
				switchPage,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

const usePage = () => useContext<IPageContext>(PageContext);

export { usePage, PageProvider };
