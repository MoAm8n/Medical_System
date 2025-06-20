// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useAuth as useClerkAuth } from '@clerk/clerk-react';
// // import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const { isLoaded, userId, getToken, signOut } = useClerkAuth();
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

//   // دالة تسجيل الدخول المخصصة
//   const login = async (email, password) => {
//     try {
//       const clerkToken = await getToken();
      
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${clerkToken}`
//         },
//         body: JSON.stringify({ email, password })
//       });

//       if (!response.ok) {
//         throw new Error('فشل تسجيل الدخول');
//       }

//       const data = await response.json();
//       localStorage.setItem('authToken', data.token);
//       setCurrentUser(data.user);
//       return data;
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   };

//   // دالة تسجيل الخروج
//   const logout = async () => {
//     try {
//       await signOut();
//       localStorage.removeItem('authToken');
//       setCurrentUser(null);
//     //   navigate('/login');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   // جلب بيانات المستخدم عند التحميل
//   useEffect(() => {
//     if (!isLoaded) return;

//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         if (token && userId) {
//           const response = await fetch('/api/me', {
//             headers: { 'Authorization': `Bearer ${token}` }
//           });
//           const user = await response.json();
//           setCurrentUser(user);
//         }
//       } catch (error) {
//         console.error('Fetch user error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [isLoaded, userId]);

//   const value = {
//     currentUser,
//     loading,
//     login,
//     logout,
//     isAuthenticated: !!currentUser
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }