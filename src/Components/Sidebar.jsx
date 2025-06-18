import React, { useState } from 'react';
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { links, linksMyPage } from '../data/dummy';
import { useStateContext } from '../contexts/StateContext';

const Sidebar = ({ onResetReservation }) => {
    const { activeMenu, setActiveMenu, handleLogout } = useStateContext();
    const [isMyPageOpen, setIsMyPageOpen] = useState(false);
    const activeLink = 'font-bold';

    const handleClose = () => {
        setActiveMenu(false);
    };

    const handleReservationClick = () => {
        if (onResetReservation) onResetReservation();
        setActiveMenu(false); 
    };

    const toggleMyPageMenu = () => {
        setIsMyPageOpen(!isMyPageOpen);
    };

    const handleLogoutClick = () => {
        handleLogout();
        setActiveMenu(false);
    };

    if (!activeMenu) return null;

    return (
        <div className="lg:hidden fixed inset-0 w-full h-screen bg-[#211b0d] z-[9999999] text-white">
            <div className="container mx-auto p-4 pt-6 h-full flex flex-col">
                <div className="flex justify-end mb-6">
                    <button 
                        onClick={handleClose}
                        className="text-3xl text-white hover:text-gray-300 transition-colors"
                        aria-label="Close menu"
                    >
                        <IoClose />
                    </button>
                </div>

                <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
                    {links.map((item) => (
                        <div className="relative" key={item.name}>
                            {item.name === 'صفحتى' ? (
                                <div className="relative">
                                    <button
                                        onClick={toggleMyPageMenu}
                                        className="flex items-center gap-2 text-lg w-full text-left py-2"
                                        style={{ color: item.color }}
                                        aria-expanded={isMyPageOpen}
                                    >
                                        {item.name}
                                        {isMyPageOpen ? <IoChevronUp /> : <IoChevronDown />}
                                    </button>
                                    
                                    {isMyPageOpen && (
                                        <div 
                                            className="absolute right-0 py-2 mt-2 w-48 bg-white shadow-lg z-10 rounded-md"
                                            onMouseLeave={() => setIsMyPageOpen(false)}
                                        >
                                            {linksMyPage.map((subItem) => (
                                                subItem.name === 'تسجيل الخروج' ? (
                                                    <button
                                                        key={subItem.name}
                                                        onClick={handleLogoutClick}
                                                        className="w-full text-right px-4 py-2 text-gray-800 hover:bg-[#FCF5E8] flex items-center gap-2"
                                                        style={{ color: subItem.color || '#FF0000' }}
                                                    >
                                                        <span>{subItem.icon}</span>
                                                        <span>{subItem.name}</span>
                                                    </button>
                                                ) : (
                                                    <NavLink
                                                        key={subItem.name}
                                                        to={`/${subItem.path}`}
                                                        className={({ isActive }) => 
                                                            `block px-4 py-2 text-gray-800 hover:bg-[#FCF5E8] text-right ${isActive ? activeLink : ''}`
                                                        }
                                                        onClick={() => {
                                                            setIsMyPageOpen(false);
                                                            setActiveMenu(false);
                                                        }}
                                                    >
                                                        <div className='flex items-center gap-2'>
                                                            <span>{subItem.icon}</span>
                                                            <span>{subItem.name}</span>
                                                        </div>
                                                    </NavLink>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    to={`/${item.path || item.name}`}
                                    className={({ isActive }) =>
                                        `block py-2 text-lg ${isActive ? activeLink : ''} hover:opacity-80 transition-opacity`
                                    }
                                    style={{ color: item.color }}
                                    onClick={item.name === 'الحجز' ? handleReservationClick : () => setActiveMenu(false)}
                                >
                                    {item.name}
                                </NavLink>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 mt-8 pb-8">
                    <NavLink
                        to='/تسجيل-الدخول'
                        className={({ isActive }) =>
                            `border border-white w-full text-center py-2 rounded transition-colors ${
                            isActive 
                                ? 'bg-white text-[#211B0D]' 
                                : 'text-white hover:bg-white hover:text-[#211B0D]'
                            }`
                        }
                        onClick={() => setActiveMenu(false)}
                    >
                        تسجيل الدخول
                    </NavLink>
                    <NavLink
                        to='/إنشاء-حساب'
                        className={({ isActive }) =>
                            `border border-white w-full text-center py-2 rounded transition-colors ${
                            isActive 
                                ? 'bg-white text-[#211B0D]' 
                                : 'text-white hover:bg-white hover:text-[#211B0D]'
                            }`
                        }
                        onClick={() => setActiveMenu(false)}
                    >
                        إنشاء حساب
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;