import React from 'react';
import { IoLogOutOutline } from "react-icons/io5";

const LogoutOverlay = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
            <div className="bg-white p-6 shadow-lg md:w-96 h-72 flex justify-center items-center flex-col gap-4" dir="rtl">
                <p className='text-[#FF0000] '><IoLogOutOutline size={60}/></p>
                <h2 className="text-xl font-bold">تسجيل الخروج</h2>
                <p className="text-[#818181]">هل أنت متأكد من أنك تريد تسجيل الخروج؟</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-[#FF0000] text-white hover:bg-red-700 transition-colors"
                    >
                        الخروج
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors"
                    >
                        إلغاء
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutOverlay;