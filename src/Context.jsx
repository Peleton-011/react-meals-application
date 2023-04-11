import React from "react";
import { useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    useEffect(() => {
        console.log("Test useEffect")
    }, []);
	return <AppContext.Provider value="test-1">{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext};

