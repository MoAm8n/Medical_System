    import React, { useState, useEffect } from 'react';
    import { IoClose, IoChevronDown, IoChevronUp } from 'react-icons/io5';
    import { NavLink, useNavigate } from 'react-router-dom';
    import { useUser, UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
    import { links, linksMyPage } from '../data/dummy';
    import { useStateContext } from '../contexts/StateContext';

    const Sidebar = ({ onResetReservation = () => {} }) => {
    const { activeMenu, setActiveMenu, handleLogout, currentColor } = useStateContext();
    const [isMyPageOpen, setIsMyPageOpen] = useState(false);
    const activeLink = 'font-bold';
    const { isSignedIn, user } = useUser();
    const navigate = useNavigate();

    // Redirect to homepage after sign-in
    useEffect(() => {
        if (isSignedIn && window.location.pathname !== '/الرئيسية') {
        navigate('/الرئيسية');
        setActiveMenu(false); // Close sidebar after redirect
        }
    }, [isSignedIn, navigate, setActiveMenu]);

    const handleClose = () => {
        setActiveMenu(false);
    };

    const handleReservationClick = () => {
        onResetReservation();
        setActiveMenu(false);
    };

    const toggleMyPageMenu = () => {
        setIsMyPageOpen(!isMyPageOpen);
    };

    const handleLogoutClick = () => {
        handleLogout();
        setActiveMenu(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
        setIsMyPageOpen(false);
        }
    };

    if (!activeMenu) return null;

    return (
    <div className="lg:hidden fixed inset-0 w-full h-screen bg-[#211b0d] z-[9999999] text-white">
        <div className="container mx-auto p-4 pt-6 h-full flex flex-col">
            <div className="flex justify-end mb-6">
            <button
                onClick={handleClose}
                className="text-3xl text-white hover:text-gray-300 transition-colors"
                aria-label="إغلاق القائمة"
            >
                <IoClose />
            </button>
            </div>
            <div className="flex gap-3 mt-4 pb-4 justify-end">
            <SignedIn>
                <div className="flex items-center gap-2">
                <span className="text-white">{user?.firstName || user?.username}</span>
                <UserButton />
                </div>
            </SignedIn>
            <SignedOut>
                <NavLink
                to="/تسجيل-الدخول"
                className={({ isActive }) =>
                    `border border-white w-36 flex items-center justify-center px-4 py-2 transition-colors text-right ${
                    isActive ? 'text-black bg-white' : 'text-white hover:bg-white hover:text-black'
                    }`
                }
                >
                تسجيل الدخول
                <SignInButton mode="modal" afterSignInUrl="/الرئيسية" />
                </NavLink>
                <NavLink
                to="/إنشاء-حساب"
                className={({ isActive }) =>
                    `border border-white w-36 flex items-center justify-center px-4 py-2 transition-colors text-right ${
                    isActive ? 'text-black bg-white' : 'text-white hover:bg-white hover:text-black'
                    }`
                }
                >
                إنشاء حساب
                </NavLink>
            </SignedOut>
            </div>
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
            {links.map((item) => (
                <div className="relative" key={item.id || item.name}>
                {item.name === 'صفحتى' ? (
                    <div className="relative">
                    <button
                        onClick={toggleMyPageMenu}
                        onKeyDown={handleKeyDown}
                        className="flex items-center gap-2 text-lg w-full text-right py-2"
                        style={{ color: item.color }}
                        aria-expanded={isMyPageOpen}
                        aria-haspopup="true"
                    >
                        {item.name}
                        {isMyPageOpen ? <IoChevronUp /> : <IoChevronDown />}
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
                                onClick={handleLogoutClick}
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
                                onClick={() => {
                                setIsMyPageOpen(false);
                                setActiveMenu(false);
                                }}
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
                    to={`/${item.path || ''}`}
                    className={({ isActive }) =>
                        `block py-2 text-lg text-right ${isActive ? activeLink : ''} hover:opacity-80 transition-opacity`
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
        </div>
    </div>
    );
};

export default Sidebar;