import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from '@react-oauth/google';
import { login, googleLogin, clearError } from "../Store/authSlice";
import { toast } from 'react-toastify';

function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  
  // Get auth state from Redux
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  // Clear any existing errors when component mounts
  React.useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  // Handle traditional form login
  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    
    try {
      // You can add your existing API login logic here
      // For now, using the simple Redux login action
      
      // Simulate API call (replace with your actual login API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data in localStorage for compatibility
      const userData = {
        email: email,
        name: email.split('@')[0], // Simple name extraction
        loginMethod: 'email',
        loginTime: new Date().toISOString()
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      
      dispatch(login()); // This updates Redux state
      toast.success("Login successful!");
      navigate("/home");
      
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google Authentication
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const result = await dispatch(googleLogin(credentialResponse.credential)).unwrap();
      toast.success(`Welcome back, ${result.user.name}!`);
      navigate("/home");
    } catch (error) {
      toast.error("Google login failed. Please try again.");
      console.error('Google login failed:', error);
    }
  };

  const handleGoogleError = () => {
    toast.error("Google login failed. Please try again.");
    console.error('Google login failed');
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] md:min-h-screen bg-gray-100">
      <div className="bg-[#D2B48C] rounded-lg shadow-lg overflow-hidden w-full max-w-[900px] h-auto md:h-auto flex flex-col md:flex-row mx-4 md:mx-0">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://www.shutterstock.com/image-photo/assorted-iced-coffee-on-white-600nw-2480796893.jpg"
            alt="Coffee"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold text-[#4E342E] text-center mb-6">
            Welcome Back!
          </h2>
          
          {/* Display error if any */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm text-center">
              {error}
            </div>
          )}
          
          {/* Google Login Section */}
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="outline"
              size="large"
              text="signin_with"
              shape="rectangular"
              width="100%"
              disabled={loading || isLoading}
            />
          </div>
          
          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>
          
          {/* Email/Password Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41] disabled:bg-gray-100 disabled:cursor-not-allowed"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || isLoading}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41] disabled:bg-gray-100 disabled:cursor-not-allowed"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading || isLoading}
              />
            </div>
            
            {/* Forgot Password Link */}
            <div className="mb-4 text-right">
              <a 
                href="/forget-password" 
                className="text-[#6D4C41] text-sm hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            
            <button
              type="submit"
              disabled={loading || isLoading}
              className="w-full bg-[#4E342E] text-white py-2 px-4 rounded-lg hover:bg-[#3E2723] transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {(loading || isLoading) ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </form>
          
          {/* Sign Up Link */}
          <p className="text-sm text-gray-600 text-center mt-6">
            Don't have an account?{" "}
            <a href="/register" className="text-[#6D4C41] font-medium hover:underline">
              Sign Up
            </a>
          </p>
          
          {/* Coffee Shop Benefits */}
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="text-sm font-semibold text-amber-800 mb-2">☕ Member Benefits</h3>
            <ul className="text-xs text-amber-700 space-y-1">
              <li>• Earn loyalty points with every purchase</li>
              <li>• Save your favorite orders</li>
              <li>• Get exclusive member discounts</li>
              <li>• Early access to new menu items</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;