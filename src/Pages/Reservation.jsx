import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoWalletOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import { CiCircleInfo } from 'react-icons/ci';
import { SelectDoctorsData } from '../data/dummy';
import imagePayment from '../data/payment.png';
import { reservationService } from './reservationService';

const Reservation = ({ onResetReservation }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('قسم القلب');
  const [selectedDocData, setSelectedDocData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDataDoctor, setShowDataDoctor] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // استقبال بيانات الدكتور من الصفحة الرئيسية
  const doctorData = location.state?.doctorData;

  // تحميل بيانات الدكتور إذا تم تمريرها
  useEffect(() => {
    if (doctorData) {
      handlePreSelectedDoctor(doctorData);
    }
  }, [doctorData]);

  const handlePreSelectedDoctor = (doctor) => {
    try {
      setLoading(true);
      setSelectedDoctor(doctor.spec);
      
      // البحث عن الدكتور في البيانات المحلية للتأكد من وجوده
      const localDoctor = SelectDoctorsData[doctor.spec]?.find(d => d.id === doctor.id);
      
      if (!localDoctor) {
        // إذا لم يوجد الدكتور في البيانات المحلية، استخدم البيانات الممررة
        setSelectedDocData({
          ...doctor,
          availableDates: doctor.availableDates || [
            {
              id: "1",
              date: "غداً",
              times: { from: "10:00 ص", to: "12:00 م" }
            }
          ]
        });
      } else {
        setSelectedDocData(localDoctor);
      }
      
      setShowDataDoctor(true);
      setError('');
    } catch (err) {
      setError('حدث خطأ في تحميل بيانات الدكتور');
      console.error('Error loading doctor data:', err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const handleSelectDoctor = (e) => {
    setSelectedDoctor(e.target.value);
    setSelectedDocData(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleDoctorSelect = (doctorId) => {
    try {
      setLoading(true);
      const doctor = SelectDoctorsData[selectedDoctor].find((d) => d.id === doctorId);
      if (!doctor) throw new Error('الطبيب غير متوفر');
      setSelectedDocData(doctor);
      setShowDataDoctor(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const resetReservation = () => {
    setShowDataDoctor(false);
    setSelectedDocData(null);
    setError('');
  };

  const handleReservation = (e) => {
    e.preventDefault();
    if (!paymentMethod.trim()) {
      setError('الرجاء اختيار طريقة الدفع');
      return;
    }
    if (!selectedDate) {
      setError('الرجاء اختيار موعد الحجز');
      return;
    }
    
    const reservationData = {
      id: Date.now().toString(),
      doctorId: selectedDocData.id,
      doctorName: selectedDocData.name,
      doctorImage: selectedDocData.image,
      department: selectedDoctor,
      date: selectedDate.date,
      time: `${selectedDate.times.from} - ${selectedDate.times.to}`,
      paymentMethod: paymentMethod,
      createdAt: new Date().toLocaleString(),
    };

    try {
      const currentReservations = reservationService.getAll();
      const updatedReservations = Array.isArray(currentReservations)
        ? [...currentReservations, reservationData]
        : [reservationData];
      
      reservationService.save(updatedReservations);
      navigate('/الحجوزات');
      setShowOverlay(false); 
      setPaymentMethod('');
    } catch (error) {
      setError('حدث خطأ أثناء حفظ الحجز');
      console.error('Reservation error:', error);
    }
  };

  useEffect(() => {
    if (onResetReservation) {
      onResetReservation(resetReservation);
    }
  }, [onResetReservation]);

  return (
    <section>
      <div className="container mx-auto py-12 px-10 max-w-7xl">
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p>{error}</p>
          </div>
        )}
        
        {showDataDoctor && selectedDocData ? (
          <div>
            <div className='flex justify-between items-center'>
              <h2 className="font-bold text-2xl">بيانات الدكتور</h2>
              <button
                className="w-32 h-12 text-[#8391A1] border border-[#E8ECF4]"
                onClick={resetReservation}
              >
                رجوع
              </button>
            </div>
            
            <div className="flex max-sm:flex-col gap-4 mt-6 pb-6 border-b-8 items-center">
              <img
                src={selectedDocData.image}
                alt={selectedDocData.id}
                className="sm:w-1/5 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">{selectedDocData.name}</h2>
                <p className="flex" style={{ color: selectedDocData.colorPary }}>
                  {selectedDocData.evaluationPary}
                  <span className="flex" style={{ color: selectedDocData.color }}>
                    {selectedDocData.evaluation}
                  </span>
                </p>
                <p className="text-[#818181]">{selectedDocData.experience}</p>
                <p>{selectedDocData.bio}</p>
              </div>
            </div>
            
            <div className="flex max-sm:flex-col max-sm:gap-2 py-6 border-b-8">
              <p className="flex items-center gap-2 ml-20 text-[#818181]">
                <IoWalletOutline />
                {selectedDocData.price}
              </p>
              <p className="flex items-center gap-2 text-[#818181]">
                <CiClock2 />
                وقت الإنتظار 15 دقيقة
              </p>
            </div>
            
            <div className="flex items-center gap-2 py-6 border-b-8 text-[#818181]">
              <CiCircleInfo />
              <span className='text-[14px]'>الإستشارة مجاناً لمدة سبع أيام من تاريخ الكشف</span>
            </div>
            
            <div className="p-2">
              <h2 className="text-xl font-bold text-[#211B0D] py-4">إختر معاد حجزك</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {selectedDocData.availableDates.map((item) => (
                  <div key={item.id} className="bg-[#F5F5F5] sm:w-52 h-fit text-center">
                    <h2 className="bg-[#88785621] p-4 text-base text-[#211B0D] font-normal">
                      {item.date}
                    </h2>
                    <div>
                      <p className="font-bold text-lg text-[#818181] my-4">{item.times.from}</p>
                      <p className="text-[#818181] text-lg font-bold">الي</p>
                      <p className="font-bold text-lg text-[#818181] my-4">{item.times.to}</p>
                    </div>
                    <button
                      className="bg-[#887856] w-full sm:w-52 h-14 text-white font-bold text-lg hover:bg-[#FF0000] transition-all duration-200"
                      onClick={() => {
                        setSelectedDate(item);
                        setShowOverlay(true);
                      }}
                    >
                      إحجز الأن
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="text-center py-8">
                <h2 className="text-lg font-normal pb-4">الدخول بأسبقية الحضور</h2>
                <button className="w-full md:w-[420px] h-14 bg-[#FFBA00] text-14 font-normal">
                  تقيم
                </button>
              </div>
            </div>
            
            {showOverlay && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-15 z-50">
                <div className="bg-white  sm:w-[494px] h-[542px]">
                  <div className="px-6 py-10 flex flex-col items-center gap-4">
                    <img src={imagePayment} alt="" className="w-20" loading="lazy" />
                    <h2 className="font-bold text-xl text-[#211B0D]">طريقة الدفع</h2>
                    <p className="font-normal text-lg text-[#818181]">
                      من فضلك قم بإختيار طريقة الدفع التى تريدها
                    </p>
                    <form onSubmit={handleReservation}>
                      <div className="space-y-4 mb-6">
                        <div>
                          <input
                            type="radio"
                            id="cash"
                            name="payment"
                            value="كاش"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            checked={paymentMethod === 'كاش'}
                            className="peer hidden"
                          />
                          <label
                            htmlFor="cash"
                            className="block w-full p-4 border border-gray-300 cursor-pointer hover:border-[#887856] peer-checked:border-[#887856] peer-checked:bg-[#88785621]"
                          >
                            كاش
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="online"
                            name="payment"
                            value="الدفع أون لاين"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            checked={paymentMethod === 'الدفع أون لاين'}
                            className="peer hidden"
                          />
                          <label
                            htmlFor="online"
                            className="block w-full p-4 border border-gray-300 cursor-pointer hover:border-[#887856] peer-checked:border-[#887856] peer-checked:bg-[#88785621]"
                          >
                            الدفع أون لاين
                          </label>
                        </div>
                      </div>
                      <div>
                        <button
                          className="w-32 h-12 bg-[#C7AF7C] text-white hover:bg-[#887856]"
                          type="submit"
                        >
                          دفع
                        </button>
                        <button
                          className="w-32 h-12 text-[#8391A1] border border-[#E8ECF4]"
                          onClick={() => {
                            setShowOverlay(false);
                            setPaymentMethod('');
                            setError('');
                          }}
                        >
                          إلغاء
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div>
              <h2 className="text-[25px] text-[#211B0D] font-bold">حجز موعد مع الدكتور</h2>
              <select
                className="w-full md:w-[500px] h-16 bg-[#F5F5F5] text-lg text-[#818181] font-normal outline-none my-8 ml-4 p-4 cursor-pointer"
                onChange={handleSelectDoctor}
                value={selectedDoctor}
              >
                {Object.keys(SelectDoctorsData).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <button
                className="w-full md:w-52 h-16 bg-[#887856] text-white hover:bg-opacity-55"
                // onClick={handleSelectDoctor}
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">جاري التحميل...</span>
                ) : (
                  'اختيار'
                )}
              </button>
            </div>
            
            {!loading && (
              <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-8 gap-3 mt-3">
                {SelectDoctorsData[selectedDoctor]?.map((item) => (
                  <div
                    key={item.id}
                    className="md:w-72 h-fit bg-[#F5F5F5] cursor-pointer hover:bg-[#887856] hover:text-white transition-all duration-200"
                    onClick={() => handleDoctorSelect(item.id)}
                  >
                    <img src={item.image} alt={item.id} className="object-cover" loading="lazy" />
                    <div className="md:flex items-center justify-around p-4">
                      <h2 className="text-[#211B0D] md:text-base text-sm max-sm:mb-2 font-bold">
                        {item.name}
                      </h2>
                      <p className="flex" style={{ color: item.colorPary }}>
                        {item.evaluationPary}
                        <span className="flex" style={{ color: item.color }}>
                          {item.evaluation}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservation;