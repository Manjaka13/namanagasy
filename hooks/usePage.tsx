import { useState, useContext, createContext, FC } from "react";
import { IPageContext, IPageProviderProps } from "helpers/interface";

/*
	Page hook and context
*/

const defaultState: IPageContext = {
	loading: true,
	tab: 0,
	load: () => null,
	unload: () => null,
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

	const load = (tab?: number): void => {
		if (tab && typeof tab === "number") {
			setLoading(true);
			setTab(tab);
		}
	};
	const unload = (): void => setLoading(false);

	return (
		<PageContext.Provider
			value={{
				loading,
				tab,
				load,
				unload,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

const usePage = () => useContext<IPageContext>(PageContext);

export { usePage, PageProvider };
