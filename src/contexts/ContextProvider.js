import { createContext, useState, useContext } from 'react';

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('#211B0D');
    const [activeMenu, setActiveMenu] = useState(false);

    return (
    <StateContext.Provider value={{ 
        currentColor, 
        setCurrentColor, 
        activeMenu, 
        setActiveMenu 
    }}>
        {children}
    </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);