import { useState, useContext, createContext, FC, ReactNode } from "react";
import { IMenuContext } from "helpers/interface";
import { navLinks } from "helpers/const";

/*
	Menu hook and context
*/

const defaultState: IMenuContext = {
	opened: false,
	navLinks,
	toggle: () => null,
	close: () => null,
};

// Setup context
const MenuContext = createContext<IMenuContext>(defaultState);

// Setup provider wrapper
const MenuProvider: FC<ReactNode> = ({ children }) => {
	const [opened, setOpened] = useState<Boolean>(defaultState.opened);

	// Toggles filter on of off
	const toggle = (): void => setOpened((prevState) => !prevState);
	const close = (): void => setOpened(false);

	return (
		<MenuContext.Provider
			value={{
				opened,
				navLinks,
				toggle,
				close,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

const useMenu = () => useContext<IMenuContext>(MenuContext);

export { useMenu, MenuProvider };
