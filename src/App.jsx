import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-green-100 to-green-300 relative overflow-hidden py-8 md:py-0">
      {/* decorative shapes - hidden on small screens */}
      <div className="absolute left-0 top-0 w-[36%] h-[36%] -rotate-12 opacity-30 pointer-events-none bg-gradient-to-br from-green-100 to-green-200 hidden lg:block"></div>
      <div className="absolute left-[-10%] bottom-[-8%] w-[60%] h-[90%] -rotate-10 opacity-20 pointer-events-none bg-gradient-to-tl from-green-200 to-green-300 hidden lg:block"></div>

      <div className="relative z-10 max-w-[1150px] w-full mx-6">
        <div className="rounded-[36px] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-[470px_1fr] bg-white min-h-[790px]">
          {/* LEFT PANEL */}
          <aside className="relative bg-emerald-900 text-amber-100 p-6 md:p-10 md:pt-12 flex flex-col justify-between">
            <div className="text-3xl md:text-4xl font-semibold leading-none text-green-200">
              better<br />market
            </div>

            <div className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-2xl md:text-[35px] font-semibold leading-tight text-amber-100 max-w-[24rem]">
                Say hello to global food and beverage producers and suppliers, all in one place
              </h2>
            </div>
          </aside>

          {/* RIGHT PANEL */}
          <main className="bg-white p-6 md:p-10 md:pl-12 md:pr-20">
            <div className="max-w-full md:max-w-[560px] mx-auto md:pr-28">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight md:mb-6 md:mt-5 mb-3 mt-3">
                Let’s get started
                <br />with a few simple steps
              </h3>

              <form className="space-y-6 md:space-y-8 mt-4 md:mt-18">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1 md:mb-[-2px]">Email</label>
                  <input
                    className="w-full border-0 border-b-2 border-slate-300 focus:outline-none focus:border-slate-800 pb-2"
                    type="email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1 md:mb-[-2px]">FullName</label>
                  <input
                    className="w-full border-0 border-b-2 border-slate-300 focus:outline-none focus:border-slate-800 pb-2"
                    type="text"
                  />
                </div>

                <div className="mt-3 md:mt-5">
                  <label className="block text-sm font-semibold text-slate-600 mb-1 md:mb-[-2px]">Password</label>
                  <input
                    className="w-full border-0 border-b-2 border-slate-300 focus:outline-none focus:border-slate-800 pb-2"
                    type="password"
                  />
                </div>

                <div className="pt-4 md:pt-6">
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 md:py-4 text-lg md:text-xl rounded-2xl shadow-md transition cursor-pointer"
                  >
                    Sign up
                  </button>
                </div>

                <div className="text-sm text-slate-400 pt-3 md:pt-30">
                  By signing up, you agree to our <a className="underline text-slate-500" href="#">Terms of Service</a>.<br />
                  Already have an account? <a href="#" className="text-emerald-700 underline">Log in</a>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
