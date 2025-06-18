import { createContext, useState, useContext } from 'react';
import LogoutOverlay from '../Components/LogoutOverlay';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('#211B0D');
    const [activeMenu, setActiveMenu] = useState(false);
    const [showLogoutOverlay, setShowLogoutOverlay] = useState(false);

    const handleLogout = () => setShowLogoutOverlay(true);
    const handleConfirmLogout = () => {
        localStorage.clear();
        window.location.href = '/الرئيسية';
    };

    return (
        <StateContext.Provider value={{ 
            currentColor, 
            setCurrentColor, 
            activeMenu, 
            setActiveMenu,
            handleLogout
        }}>
            {children}
            {showLogoutOverlay && (
                <LogoutOverlay 
                    onConfirm={handleConfirmLogout}
                    onCancel={() => setShowLogoutOverlay(false)}
                />
            )}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);