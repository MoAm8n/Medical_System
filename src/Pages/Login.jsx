import React, { useState } from "react";
import { useSignIn  } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import imgDoc from '../data/Pagedoc1.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn  } = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // التحقق من صحة البريد الإلكتروني
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("البريد الإلكتروني غير صالح");
      }

      // محاولة تسجيل الدخول باستخدام Clerk
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        // إذا نجح تسجيل الدخول
        navigate("/الرئيسية", {
          state: { fromLogin: true },
          replace: true
        });
      } else {
        throw new Error("فشل في عملية تسجيل الدخول");
      }
    } catch (err) {
      // معالجة أخطاء Clerk
      if (err.errors?.[0]?.code === "form_identifier_not_found") {
        setError("البريد الإلكتروني غير مسجل");
      } else if (err.errors?.[0]?.code === "form_password_incorrect") {
        setError("كلمة المرور غير صحيحة");
      } else {
        setError(err.message || "حدث خطأ أثناء تسجيل الدخول");
      }
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-12 max-md:flex-col-reverse">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#211B0D]">تسجيل الدخول</h2>
              <p className="mt-2 text-[#818181]">أدخل بيانات حسابك المسجل</p>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">البريد الإلكتروني</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="البريد الإلكتروني"
                  className="w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]"
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="sr-only">كلمة المرور</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="6"
                  placeholder="كلمة المرور"
                  className="w-full h-12 bg-[#F5F5F5] px-4 rounded outline-none focus:ring-2 focus:ring-[#887856] placeholder:text-[#818181]"
                />
                <button
                  type="button"
                  className="absolute left-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "إخفاء" : "إظهار"}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">يجب أن تحتوي على 6 أحرف على الأقل</p>

              <button
                className={`w-full h-12 bg-[#887856] text-white rounded flex items-center justify-center gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#75684d]"
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    جاري التحقق...
                  </>
                ) : "تسجيل الدخول"}
              </button>
            </form>

            <div className="text-center mt-4">
              <button
                type="button"
                className="text-[#887856] hover:underline text-sm"
                onClick={() => navigate("/create-account")}
              >
                ليس لديك حساب؟ أنشئ حسابًا جديدًا
              </button>
            </div>
          </div>

          <div className="max-md:hidden">
            <img 
              src={imgDoc} 
              alt="تسجيل الدخول" 
              className="w-96 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;