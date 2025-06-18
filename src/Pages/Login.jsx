import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import imgDoc from '../data/Pagedoc1.png'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [forgetPasswordMode, setForgetPasswordMode] = useState(false);
  const { login,resetPassword  } = useAuth()  
  const navigate = useNavigate()

  const handleLoginSubmit = async(e) => {
    e.preventDefault()
    try{
      setError('')
      setLoading(true)
      await login(email, password)
      navigate('/الرئيسية')
    }
    catch(err){
      setError('فشل تسجيل الدخول' + err.message)
    }
    setLoading(false)
  }

  const handleResetPasswordSubmit  = async(e) => {
    e.preventDefault()
    try{
      setError('')
      setLoading(true)
      await resetPassword(phoneNumber)
      setError('تم إرسال كود التحقق إلى رقم الجوال');
    }
    catch(err){
      setError('فشل إرسال كود التحقق: ' + (err.message || 'حدث خطأ غير متوقع'));
    } finally {
      setLoading(false);
    }
  }
return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        {forgetPasswordMode ? (
          <div className='flex justify-around items-center max-md:flex-col-reverse gap-8'>
            <div className='w-full max-w-md'>
              <h2 className='text-2xl text-[#211B0D] font-bold text-center'>هل نسيت كلمة المرور؟</h2>
              <p className='text-lg text-[#818181] text-center mt-2'>من فضلك قم بادخال رقم الجوال ليتم ارسال كود التحقيق إلية</p>
              
              {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-center">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleResetPasswordSubmit} className='flex flex-col gap-4 mt-6'>
                <input 
                  type="number" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder="رقم الجوال"
                  className='w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]' 
                />
                
                <button
                  className={`w-full h-12 bg-[#887856] text-white rounded flex items-center justify-center transition-colors ${
                    loading ? 'opacity-70' : 'hover:bg-[#75684d]'
                  }`}
                  type='submit'
                  disabled={loading}
                >
                  {loading ? 'جاري الإرسال...' : 'إرسال'}
                </button>
                
                <button
                  type="button"
                  className="text-[#887856] hover:underline"
                  onClick={() => setForgetPasswordMode(false)}
                >
                  العودة لتسجيل الدخول
                </button>
              </form>
            </div>
            
            <div className='max-md:hidden'>
              <img src={imgDoc} alt="صورة توضيحية" className='w-80 object-cover rounded-lg'/>
            </div>
          </div>
        ) : (
          <div className='flex justify-around items-center max-md:flex-col-reverse gap-8'>
            <div className='w-full max-w-md'>
              <h2 className='text-2xl text-[#211B0D] font-bold text-center'>تسجيل الدخول</h2>
              <p className='text-lg text-[#818181] text-center mt-2'>
                من فضلك قم بإدخال بياناتك لتسجيل الدخول
              </p>
              
              {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-center">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleLoginSubmit} className='flex flex-col gap-4 mt-6'>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="البريد الإلكتروني"
                  className='w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]' 
                />
                
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='كلمة المرور' 
                  className='w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]'
                />
                
                <button
                  type="button"
                  className="text-[#887856] hover:underline text-right"
                  onClick={() => setForgetPasswordMode(true)}
                >
                  هل نسيت كلمة المرور؟
                </button>
                
                <button
                  className={`w-full h-12 bg-[#887856] text-white rounded flex items-center justify-center transition-colors ${
                    loading ? 'opacity-70' : 'hover:bg-[#75684d]'
                  }`}
                  type='submit'
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري تسجيل الدخول...
                    </>
                  ) : 'تسجيل الدخول'}
                </button>
              </form>
            </div>
            
            <div className=''>
              <img src={imgDoc} alt="صورة توضيحية لتسجيل الدخول" className='w-80 object-cover'/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login