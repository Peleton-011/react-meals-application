import React from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	return <AppContext.Provider value="test-1">{children}</AppContext.Provider>;
};

export { AppProvider };