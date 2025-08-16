import React, { useState } from "react";
import { signupService } from "../api/authService";

export const SignupForm= () => {
  const [email, setemail] = useState("");
  const [password, setepassword] = useState("");
  const [name, setname] = useState("");

  const formHandeler = (e) => {
    e.preventDefault();
    signupService(name, email, password);
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Signup</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={formHandeler}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    onChange={(e) => setname(e.target.value)}
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm 
                               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:top-2 transition-all 
                               peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm 
                               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:top-2 transition-all 
                               peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={(e) => setepassword(e.target.value)}
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm 
                               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:top-2 transition-all 
                               peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    className="bg-yellow-700 text-white rounded-md px-4 py-2 hover:bg-yellow-800 transition"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
