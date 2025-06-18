const reservationService = {
  getAll: () => {
    const reservations = localStorage.getItem('reservations');
    const parsed = reservations ? JSON.parse(reservations) : [];
    return Array.isArray(parsed) ? parsed : parsed ? [parsed] : [];
  },
  save: (reservations) => {
    localStorage.setItem('reservations', JSON.stringify(reservations));
  },
  clear: () => {
    localStorage.removeItem('reservations');
  },
  addNotification: (notification) => {
    const notifications = localStorage.getItem('notifications');
    const currentNotifications = notifications ? JSON.parse(notifications) : [];
    const newNotification = {
      ...notification,
      id: notification.id || Date.now().toString(),
      read: notification.read || false,
      createdAt: notification.createdAt || new Date().toISOString(),
    };
    const updatedNotifications = [newNotification, ...currentNotifications];
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  },
  getNotifications: () => {
    const notifications = localStorage.getItem('notifications');
    return notifications ? JSON.parse(notifications) : [];
  },
  saveNotifications: (notifications) => {
    if (JSON.stringify(reservationService.getNotifications()) !== JSON.stringify(notifications)) {
      localStorage.setItem('notifications', JSON.stringify(notifications));
    }
  },
};

export { reservationService };