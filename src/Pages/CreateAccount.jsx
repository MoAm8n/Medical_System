import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import imgDoc from '../data/doc2.png'

const CreateAccount = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [number, setNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {signup} = useAuth()
  const navigate  = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(password.length < 6 ){
      return setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
    }

    if(password !== confirmPassword){
      return setError('كلمة المرور غير متطابقة');
    }

    // if (!/^[0-9]{10,15}$/.test(number)) {
    //   return setError('رقم الجوال غير صالح');
    // }

    try{
      setError('')
      setLoading(true)
      await signup(email, password)
      navigate('/')
    }
    catch(err){
      setError('فشل في إنشاء الحساب: ' + err.message);
    }
    setLoading(false)
  }


  return (
    <section>
      <div className="container mx-auto px-4 py-10">
        <div className='flex justify-around items-center max-md:flex-col-reverse'>
          <div className='text-center w-full max-w-md mt-8'>
          <h2 className='text-2xl text-[#211B0D] font-bold'>تسجيل الدخول </h2>
          <p className='md:text-2xl text-[#818181]'>من فضلك قم بإدخال بياناتك لتسجيل الدخول</p>
          {error && <div>{error}</div>}
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 mt-4'
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="البريد الإلكتروني"
              className='w-full h-[55px] bg-[#F5F5F5] text-lg font-normal p-4 outline-none placeholder:text-[#818181]' 
            />
            <input 
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              placeholder='رقم الجوال' 
              className='w-full h-[55px] bg-[#F5F5F5] text-lg font-normal p-4 outline-none placeholder:text-[#818181]' 
            />
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='كلمة المرور' 
              className='w-full h-[55px] bg-[#F5F5F5] text-lg font-normal p-4 outline-none placeholder:text-[#818181]' 
            />
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder='إعادة كلمة المرور' 
              className='w-full h-[55px] bg-[#F5F5F5] text-lg font-normal p-4 outline-none placeholder:text-[#818181]' 
            />
            <button
              className='w-full h-[55px] bg-[#887856] text-white'
              type='submit'
              disabled={loading}
            >
            {
              loading ? (
                <div className="flex items-center justify-center">
                  جاري إنشاء الحساب...
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ):
                'إنشاء حساب'
            }
            </button>
          </form>
          </div>
          <div>
            <img src={imgDoc} alt="" className='w-[350px] object-cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateAccount