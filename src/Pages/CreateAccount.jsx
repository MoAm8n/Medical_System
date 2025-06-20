import React, { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import imgDoc from '../data/doc2.png';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password.length < 6) {
      setLoading(false);
      return setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
    }

    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      return setError('كلمة المرور غير متطابقة');
    }

    if (!/^[0-9]{10,15}$/.test(formData.phoneNumber)) {
      setLoading(false);
      return setError('رقم الجوال يجب أن يحتوي على 10 إلى 15 رقمًا');
    }

    if (!isLoaded) {
      setLoading(false);
      return setError('نظام المصادقة غير جاهز');
    }

    try {
      // Attempt sign-up
      const result = await signUp.create({
        emailAddress: formData.email,
        password: formData.password
      });

      // Handle password breach case
      if (result?.verifications?.emailAddress?.error?.code === 'form_password_pwned') {
        setLoading(false);
        return setError('تم العثور على كلمة المرور في اختراق بيانات. لسلامة الحساب، يرجى استخدام كلمة مرور قويه');
      }

        // Prepare email verification
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        sessionStorage.setItem('tempPhoneNumber', formData.phoneNumber);
        navigate('/تسجيل-الدخول');
        
      } catch (err) {
        // Handle specific Clerk errors
        if (err.errors?.[0]?.code === 'form_password_pwned') {
          setError('تم العثور على كلمة المرور في اختراق بيانات. لسلامة الحساب، يرجى استخدام كلمة مرور قويه');
        } else if (err.errors?.[0]?.code === 'form_identifier_exists') {
          setError('هذا البريد الإلكتروني مسجل بالفعل. الرجاء استخدام بريد إلكتروني آخر أو تسجيل الدخول');
        } else {
          setError(err.errors?.[0]?.message || 'حدث خطأ أثناء إنشاء الحساب');
        }
        console.error('Registration error:', err);
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className='flex justify-center items-center gap-12 max-md:flex-col-reverse'>
          <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold text-[#211B0D]'>إنشاء حساب جديد</h2>
              <p className='mt-2 text-[#818181]'>املأ النموذج لإنشاء حساب جديد</p>
            </div>
            
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-center">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
              <div>
                <label htmlFor="email" className='sr-only'>البريد الإلكتروني</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="البريد الإلكتروني"
                  className='w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]'
                  autoComplete="username"
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className='sr-only'>رقم الجوال</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10,15}"
                  placeholder="مثال: 966501234567"
                  className='w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]'
                />
                <p className='mt-1 text-xs text-gray-500'>يجب أن يحتوي على 10-15 رقمًا</p>
              </div>
              
              <div>
                <label htmlFor="password" className='sr-only'>كلمة المرور</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="6"
                  placeholder="كلمة المرور"
                  className='w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]'
                  autoComplete="new-password"
                />
                <p className='mt-1 text-xs text-gray-500'>يجب أن تحتوي على 6 أحرف على الأقل</p>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className='sr-only'>تأكيد كلمة المرور</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="6"
                  placeholder="تأكيد كلمة المرور"
                  className='w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]'
                  autoComplete="new-password"
                />
              </div>
              
              {/* Add CAPTCHA container for bot protection */}
              <div id="clerk-captcha"></div>
              
              <button
                className={`w-full h-12 bg-[#887856] text-white rounded flex items-center justify-center gap-2 ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#75684d]'
                }`}
                type='submit'
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    جاري إنشاء الحساب...
                  </>
                ) : 'إنشاء حساب'}
              </button>
            </form>
          </div>
          
          <div className='max-md:hidden'>
            <img 
              src={imgDoc} 
              alt="إنشاء حساب جديد" 
              className='w-96 object-contain rounded-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;