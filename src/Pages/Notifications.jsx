import { useEffect, useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoNotificationsOffSharp } from 'react-icons/io5';
import { reservationService } from './reservationService';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotifications = () => {
      try {
        const storedNotifications = reservationService.getNotifications().map((n) => ({
          ...n,
          read: n.read !== undefined ? n.read : false, 
        }));
        setNotifications(storedNotifications);
      } catch (error) {
        console.error('Failed to load notifications:', error);
      } finally {
        setLoading(false);
      }
    };
    loadNotifications();

    const handleStorageChange = () => loadNotifications();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const markAsRead = (id) => {
    try {
      const updatedNotifications = notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      );
      setNotifications(updatedNotifications);
      reservationService.saveNotifications(updatedNotifications);
    } catch (error) {
      console.error('Failed to update notification:', error);
    }
  };

  const markAllAsRead = () => {
    try {
      const updatedNotifications = notifications.map((n) => ({ ...n, read: true }));
      setNotifications(updatedNotifications);
      reservationService.saveNotifications(updatedNotifications);
    }catch (error) {
      console.error('Failed to mark all as read:', error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl py-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">الإشعارات</h1>
        {notifications.some((n) => !n.read) && (
          <button
            onClick={markAllAsRead}
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
          >
            <CiCircleCheck className="text-lg" />
            تمييز الكل كمقروء
          </button>
        )}
      </div>
      
      {notifications.length > 0 ? (
        <div className="space-y-3 grid md:grid-cols-2 gap-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border rounded-lg transition-colors duration-200 ${
                !notification.read ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-200'
              } hover:shadow-sm`}
            >
              <div className="flex items-center gap-4">
                <button  
                  className=" w-10 h-10 bg-[#88785621] text-[#887856] rounded-full flex items-center justify-center" 
                >
                  <IoNotificationsOutline size={24}/>
                </button>
                <div className="flex-1">
                  <p className="text-[#211B0D] font-bold text-base pb-2">{notification.message}</p>
                  {notification.doctorName && (
                    <p className="text-[#818181] text-lg text-sm pb-2">الطبيب: {notification.doctorName}</p>
                  )}
                  <span className="text-gray-500 text-xs whitespace-nowrap">
                    {new Date(notification.createdAt).toLocaleString('ar-EG', {
                      hour12: true,
                      hour: '2-digit',
                      minute: '2-digit',
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              {!notification.read && (
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1"
                  >
                    <CiCircleCheck className="text-base" />
                    تم القراءة
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-2 py-6">
          <IoNotificationsOffSharp size={70} className="text-[#C7C7C7]" />
          <p className="text-[#211B0D] font-bold text-xl pt-10">لا توجد إشعارات</p>
          <p className="text-[#818181] font-normal text-lg">عفواً لا يوجد لديك إشعارات حتى الآن</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;