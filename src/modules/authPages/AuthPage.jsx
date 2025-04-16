import { useState } from "react";
import { Link } from "react-router";

import CloseButton from "@/components/CloseButton";
import ButtonMain from "@/components/ButtonMain";
import ButtonFacebook from "@/components/ButtonFacebook";
import ButtonGoogle from "@/components/ButtonGoogle";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSlide = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex items-center justify-center h-full bg-[var(--primary)] p-4 sm:scale-90">
      <div className="relative max-w-4xl bg-[var(--primary)] shadow-2xl rounded-lg overflow-hidden p-4">
        <CloseButton
          onClick={() => {
            console.log("Close clicked");
            window.history.back();
          }}
          isSignUp={isSignUp}
        />
        <div className="flex max-w-4xl overflow-hidden">
          <div
            className={`flex w-full transform transition-transform duration-300 ${
              isSignUp ? "-translate-x-full" : "translate-x-0"
            }`}
          >
{/* Login */}
            <div className="flex flex-col w-full md:flex-row shrink-0">
              <div className="w-full p-8 space-y-6 md:w-1/2">
                <div className="flex flex-col items-center justify-center gap-2 md:hidden">
                  <img
                    src="/assets/logo-all_rice.svg"
                    alt="All rice logo"
                    className="w-12 h-12"
                  />
                  <p className="text-xl font-black text-[var(--clr-secondary)]">
                    All Rice Co.
                  </p>
                </div>
                <div className="mb-10 text-center">
                  <h1 className="text-2xl font-bold text-[var(--clr-secondary)]">
                    ยินดีต้อนรับ
                  </h1>
                </div>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="อีเมล"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="รหัสผ่าน"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                  />
                  <div className="flex justify-center w-full md:flex md:justify-end">
                    <Link
                      to="/AuthPage/ForgetAuth"
                      className="text-sm text-[var(--clr-blue-600)]"
                    >
                      ลืมรหัสผ่าน ?
                    </Link>{" "}
                  </div>
                  <ButtonMain
                    onClick={() => console.log("Submit login clicked")}
                    type="submit"
                    className="p-6 mt-8 mb-8 sm:w-full"
                  >
                    เข้าสู่ระบบ
                  </ButtonMain>{" "}
                </form>
                <div className="flex items-center justify-center space-x-2">
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                  <span className="text-sm text-[var(--clr-gray-400)]">
                    หรือเข้าระบบด้วย
                  </span>
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                </div>
                <div className="flex justify-center space-x-8">
                  <ButtonFacebook
                    onClick={() => console.log("Facebook login clicked")}
                  />
                  <ButtonGoogle
                    onClick={() => console.log("Google login clicked")}
                  />
                </div>
                <p className="text-center text-[var(--clr-gray-400)]">
                  ยังไม่มีบัญชี ?
                  <button
                    onClick={toggleSlide}
                    className="text-[var(--facebook-blue)] mx-2 cursor-pointer"
                  >
                    ลงทะเบียนที่นี่
                  </button>
                </p>
              </div>
              <div className="items-center justify-center hidden w-1/2 md:flex md:rounded-lg">
                <img
                  src="/assets/login.jpg"
                  alt="Login"
                  className="object-cover h-full mr-4 rounded-lg"
                />
              </div>
            </div>

{/* Register */}
            <div className="flex flex-col w-full md:flex-row-reverse shrink-0">
              <div className="w-full p-8 space-y-6 md:w-1/2">
                <div className="flex flex-col items-center justify-center gap-2 md:hidden">
                  <img
                    src="/assets/logo-all_rice.svg"
                    alt="All rice logo"
                    className="w-12 h-12"
                  />
                  <p className="text-xl font-black text-[var(--clr-secondary)]">
                    All Rice Co.
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[var(--clr-secondary)]">
                    ลงทะเบียนเพื่อเข้าใช้งาน
                  </h2>
                </div>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="อีเมล"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                  />
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="ชื่อจริง (ภาษาอังกฤษ)"
                      className="w-1/2 p-2 border border-[var(--clr-gray-400)] rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="นามสกุล (ภาษาอังกฤษ)"
                      className="w-1/2 p-2 border border-[var(--clr-gray-400)] rounded-md"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="โปรดระบุรหัสผ่าน"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="ยืนยันรหัสผ่าน"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                  />
                  <ButtonMain
                    onClick={() => console.log("Submit login clicked")}
                    type="submit"
                    className="p-6 mt-8 mb-8 sm:w-full"
                  >
                    ลงทะเบียน
                  </ButtonMain>{" "}
                </form>
                <div className="flex items-center justify-center space-x-2">
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                  <span className="text-sm text-[var(--clr-gray-400)]">
                    หรือลงทะเบียนด้วย
                  </span>
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                </div>
                <div className="flex justify-center space-x-8">
                  <ButtonFacebook
                    onClick={() => console.log("Facebook login clicked")}
                  />
                  <ButtonGoogle
                    onClick={() => console.log("Google login clicked")}
                  />
                </div>
                <p className="text-center text-[var(--clr-gray-400)]">
                  มีบัญชีแล้ว ?
                  <button
                    onClick={toggleSlide}
                    className="text-[var(--facebook-blue)] ml-1 cursor-pointer"
                  >
                    กลับไปหน้าเข้าสู่ระบบ
                  </button>
                </p>
              </div>
              <div className="items-center justify-center hidden w-1/2 md:flex md:rounded-lg">
                <img
                  src="/assets/register.jpg"
                  alt="Register"
                  className="object-cover h-full ml-4 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
