import { useContext, createContext, useState, useEffect } from "react";

const DefaultContext = createContext();

export default function ContextProvider({ children }) {
	return (
		<DefaultContext.Provider value={{}}>{children}</DefaultContext.Provider>
	);
}

function useDefaultContext() {
	const context = useContext(DefaultContext);
	return context;
}
export { ContextProvider, useDefaultContext };
