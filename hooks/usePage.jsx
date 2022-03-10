import React, {
	useState,
	useMemo,
	useContext,
	createContext
} from "react";

/*
	Page hook and context
*/

// Setup context
const PageContext = createContext({});

// Setup provider wrapper
const PageProvider = ({ children, defaultLoading, defaultTab }) => {
	const [loading, setLoading] = useState(defaultLoading ? true : false);
	const [tab, setTab] = useState(typeof defaultTab ===  "number" ? defaultTab : -1);

	console.log(tab)

	// Switch loading
	const load = (tab) => {
		if(tab)
			setTab(tab);
		setLoading(true);
	};
	const unload = () => setLoading(false);

	// Memoize values to prevent futile re-renders
	const memoizedValues = useMemo(() => ({
		loading, load, unload, tab
	}), [loading, tab]);

	return (
		<PageContext.Provider value={ memoizedValues }>
			{ children }
		</PageContext.Provider>
	);
};

const usePage = () => useContext(PageContext);

export {
	usePage,
	PageProvider
};