import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlNote } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { reservationService } from './reservationService';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadReservations = () => {
        try {
            const savedReservations = reservationService.getAll();
            console.log('Saved Reservations:', savedReservations); 
            const reservationsArray = Array.isArray(savedReservations)
            ? savedReservations
            : savedReservations
            ? [savedReservations]
            : [];
            const updatedReservations = reservationsArray.map((r, index) => ({
            ...r,
            id: r.id || `res_${Date.now()}_${index}`,
            }));
            console.log('Updated Reservations:', updatedReservations); 
            setReservations(updatedReservations);
            console.log('Current Reservations State:', updatedReservations); 
        } catch (error) {
            console.error('Failed to load reservations:', error);
        }
        };
        loadReservations();

        const handleStorageChange = () => loadReservations();
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleAcceptReservation = (reservationId) => {
        const reservation = reservations.find((r) => r.id === reservationId);
        if (!reservation) return;

        const newNotification = {
        id: Date.now().toString(),
        type: 'accept',
        message: `تم قبول حجزك مع. ${reservation.doctorName}`,
        doctorName: reservation.doctorName,
        department: reservation.department,
        reservationId: reservationId,
        createdAt: new Date().toISOString(),
        read: false,
        };
        reservationService.addNotification(newNotification);
        alert('تم إرسال إشعار للمريض بقبول الحجز');
        navigate('/الإشعارات');
    };

    const handleDeleteReservation = (reservationId) => {
        if (window.confirm('هل أنت متأكد من حذف هذا الحجز؟')) {
        const updatedReservations = reservations.filter((r) => r.id !== reservationId);
        setReservations(updatedReservations);
        reservationService.save(updatedReservations);
        }
    };

    const handleClearReservations = () => {
        if (window.confirm('هل أنت متأكد من حذف جميع الحجوزات؟')) {
        reservationService.clear();
        setReservations([]);
        }
    };

    const handleModificationReservation = (reservation) => {
        if (window.confirm('هل تريد تعديل هذا الحجز؟')) {
        navigate('/الحجز', { state: { reservation } });
        }
    };

    return (
    <div className="container mx-auto py-8 px-4">
        {reservations && reservations.length > 0 ? (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservations.map((reservation) => (
                <div key={reservation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                    <div className="p-4 flex items-center gap-4">
                    <button
                        onClick={() => handleModificationReservation(reservation)}
                        className="absolute top-3 left-2 bg-[#D5B98E59] text-white rounded-full w-10 h-10 flex items-center justify-center"
                        aria-label="تعديل"
                    >
                        <SlNote size={20} className="text-[#887856]" />
                    </button>
                    <button
                        onClick={() => handleDeleteReservation(reservation.id)}
                        className="absolute bottom-3 left-2 bg-[#FF00001C] text-white rounded-full w-10 h-10 flex items-center justify-center"
                        aria-label="حذف الحجز"
                    >
                        <RiDeleteBin6Line size={20} className="text-[#FF0000]" />
                    </button>
                    <img
                        src={reservation.doctorImage}
                        alt={reservation.doctorName}
                        className="w-20 h-20 object-cover"
                    />
                    <div>
                        <h2 className="font-bold">{reservation.doctorName}</h2>
                        <p className="text-gray-600">{reservation.department}</p>
                    </div>
                    </div>
                </div>
                <div className="p-4 border-t">
                    <p className="flex justify-between mb-2">
                    <span className="text-gray-600">التاريخ:</span>
                    <span>{reservation.date}</span>
                    </p>
                    <p className="flex justify-between mb-2">
                    <span className="text-gray-600">الوقت:</span>
                    <span>{reservation.time}</span>
                    </p>
                    <p className="flex justify-between mb-2">
                    <span className="text-gray-600">طريقة الدفع:</span>
                    <span>{reservation.paymentMethod}</span>
                    </p>
                    <p className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>تاريخ الحجز:</span>
                    <span>{new Date(reservation.createdAt).toLocaleString('ar-EG')}</span>
                    </p>
                </div>
                <button
                    onClick={() => handleAcceptReservation(reservation.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition-colors"
                >
                    قبول الحجز
                </button>
                </div>
            ))}
            </div>
            <button
            onClick={handleClearReservations}
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
            حذف جميع الحجوزات
            </button>
        </div>
        ) : (
        <div className="py-24 text-center">
            <p className="text-[#211B0D] font-bold text-xl">لا يوجد حجوزات لديك</p>
            <p className="text-[#818181] font-normal text-lg pt-1">
            يمكنك حجز موعد جديد من خلال صفحة الحجوزات
            </p>
        </div>
        )}
    </div>
    );
};

export default Reservations;