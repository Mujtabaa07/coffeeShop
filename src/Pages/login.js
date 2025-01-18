import React from "react";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#D2B48C] rounded-lg shadow-lg overflow-hidden w-[900px] h-[500px] flex">
        {/* Left Side: Image */}
        <div className="w-1/2">
          <img
            src="https://www.shutterstock.com/image-photo/assorted-iced-coffee-on-white-600nw-2480796893.jpg"
            alt="Coffee"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side: Login Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold text-[#4E342E] text-center mb-6">
            Welcome Back!
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4E342E] text-white py-2 px-4 rounded-lg hover:bg-[#3E2723] transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-6">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-[#6D4C41] font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
