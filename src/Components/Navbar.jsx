import React, { useState, useEffect } from 'react';
import { useUser, UserButton } from '@clerk/clerk-react';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../data/logo.png';
import { links, linksMyPage } from '../data/dummy';
import { useStateContext } from '../contexts/StateContext';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

const Navbar = ({ onResetReservation = () => {} }) => {
    const { currentColor, setActiveMenu, handleLogout } = useStateContext();
    const [isMyPageOpen, setIsMyPageOpen] = useState(false);
    const activeLink = 'font-bold';
    const { isSignedIn, user } = useUser();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isSignedIn) {
            navigate('/الرئيسية');
        }
    }, [isSignedIn, navigate]);

    const handleMenu = () => setActiveMenu(true);
    const handleReservationClick = () => onResetReservation();
    const toggleMyPageMenu = () => setIsMyPageOpen(!isMyPageOpen);
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsMyPageOpen(false);
    };
    
    return (
        <div className="px-4 sm:px-16" style={{ background: currentColor }}>
        <div className="flex justify-between items-center">
            <Link to="/الرئيسية">
            <img src={logo} alt="موقع العيادة" className="md:h-16" />
            </Link>

            <div className="flex gap-6 max-lg:hidden">
            {links.map((item) => (
                <div className="relative" key={item.id || item.name}>
                {item.name === 'صفحتى' ? (
                    <div className="relative">
                    <button
                        onClick={toggleMyPageMenu}
                        onKeyDown={handleKeyDown}
                        className="flex items-center gap-1 text-lg hover:opacity-80 transition-opacity"
                        style={{ color: item.color }}
                        aria-expanded={isMyPageOpen}
                        aria-haspopup="true"
                    >
                        {item.name}
                    </button>
                    {isMyPageOpen && (
                        <div
                        className="absolute right-0 py-2 mt-2 w-48 bg-white shadow-lg z-[9999] rounded-md"
                        onMouseLeave={() => setIsMyPageOpen(false)}
                        role="menu"
                        >
                        {linksMyPage.map((subItem) => (
                            subItem.name === 'تسجيل الخروج' ? (
                            <button
                                key={subItem.name}
                                onClick={handleLogout}
                                className="w-full text-right px-4 py-2 text-gray-800 hover:bg-[#FCF5E8] flex items-center gap-2"
                                style={{ color: subItem.color || currentColor }}
                                role="menuitem"
                            >
                                <span>{subItem.icon}</span>
                                <span>{subItem.name}</span>
                            </button>
                            ) : (
                            <NavLink
                                key={subItem.name}
                                to={`/${subItem.path}`}
                                className={({ isActive }) =>
                                `block px-4 py-2 text-gray-800 hover:bg-[#FCF5E8] text-right ${
                                    isActive ? activeLink : ''
                                }`
                                }
                                onClick={() => setIsMyPageOpen(false)}
                                role="menuitem"
                            >
                                <div className="flex items-center gap-2">
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
                    to={`/${item.path}`}
                    style={{ color: item.color }}
                    className={({ isActive }) =>
                        `text-lg hover:opacity-80 transition-opacity ${isActive ? activeLink : ''}`
                    }
                    onClick={item.name === 'الحجز' ? handleReservationClick : undefined}
                    >
                    {item.name}
                    </NavLink>
                )}
                </div>
            ))}
            </div>

            <div className="flex gap-3 max-lg:hidden items-center">
            <SignedIn>
                <div className="flex items-center gap-2">
                <span className="text-white">{user?.firstName || user?.username}</span>
                <UserButton />
                </div>
            </SignedIn>
            <SignedOut>
                <NavLink
                // to="/تسجيل-الدخول"
                className={({ isActive }) =>
                    `border border-white w-36 flex items-center justify-center px-4 py-2 transition-colors ${
                    isActive ? 'text-black bg-white' : 'text-white hover:bg-white hover:text-black'
                    }`
                }
                >
                {/* تسجيل الدخول */}
                <SignInButton mode="modal" />
                </NavLink>
                {/* <NavLink
                to="/إنشاء-حساب"
                className={({ isActive }) =>
                    `border border-white w-36 flex items-center justify-center px-4 py-2 transition-colors ${
                    isActive ? 'text-black bg-white' : 'text-white hover:bg-white hover:text-black'
                    }`
                }
                >
                إنشاء حساب
                </NavLink> */}
            </SignedOut>
            </div>

            <button
            className="lg:hidden text-3xl text-white hover:opacity-80 transition-opacity"
            onClick={handleMenu}
            aria-label="فتح القائمة"
            >
            <IoMenu />
            </button>
        </div>
        </div>
    );
};

export default Navbar;