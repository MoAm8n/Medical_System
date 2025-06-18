import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Footer, Sidebar } from './Components';
import { Home, About, Services, Doctors, Blog, Reservation, CallMe, 
        MyPage, Login, Notifications, Reservations, CreateAccount, 
        Sections } from './Pages';
import { StateContextProvider } from './contexts/StateContext';

function App() {
  const [resetReservation, setResetReservation] = useState(() => {});
  
  const handleResetReservation = useCallback((resetFunc) => {
    setResetReservation(() => resetFunc);
  }, []);

  return (
    <StateContextProvider>
      <BrowserRouter>
        <Navbar onResetReservation={resetReservation} />
        <Sidebar />        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/الرئيسية' element={<Home />} />
          <Route path='/من-نحن' element={<About />} />
          <Route path='/خدماتنا' element={<Services />} />
          <Route path='/اقسام' element={<Sections />} />
          <Route path='/أطباؤنا' element={<Doctors />} />
          <Route path='/المدونة' element={<Blog />} />
          <Route path='/الحجز' element={<Reservation onResetReservation={handleResetReservation} />} />
          <Route path='/إتصل-بنا' element={<CallMe />} />
          <Route path='/تسجيل-الدخول' element={<Login />} />
          <Route path='/إنشاء-حساب' element={<CreateAccount />} />
          <Route path='/صفحتى' element={<MyPage />} />
          <Route path='/الحجوزات' element={<Reservations />} />
          <Route path='/الإشعارات' element={<Notifications />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StateContextProvider>
  );
}

export default App;