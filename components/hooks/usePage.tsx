import { useState, useContext, createContext, FC } from "react";
import { IPageContext, IPageProviderProps } from "helpers/interface";

/*
	Page hook and context
*/

const defaultState: IPageContext = {
	loading: false,
	load: () => null,
	unload: () => null,
};

// Setup context
const PageContext = createContext<IPageContext>(defaultState);

// Setup provider wrapper
const PageProvider: FC<IPageProviderProps> = ({ children, defaultLoading }) => {
	const [loading, setLoading] = useState<boolean>(
		defaultLoading ? defaultLoading : false
	);

	const load = () => setLoading(true);
	const unload = () => setLoading(false);

	return (
		<PageContext.Provider
			value={{
				loading,
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
