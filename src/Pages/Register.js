import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from '@react-oauth/google';
import { login, googleLogin, clearError } from "../Store/authSlice";
import { toast } from 'react-toastify';

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
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

  // Handle traditional form signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!acceptTerms) {
      toast.error("Please accept the Terms and Conditions.");
      return;
    }

    setIsLoading(true);
    
    try {
      // You can add your registration API logic here
      // For now, using the simple Redux login action
      
      // Simulate API call (replace with your actual registration API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data in localStorage for compatibility
      const userData = {
        email: email,
        name: name,
        loginMethod: 'email',
        registrationDate: new Date().toISOString(),
        loyaltyPoints: 100 // Welcome bonus
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      
      dispatch(login()); // This updates Redux state
      toast.success("Account created successfully! Welcome to MsCafe!");
      navigate("/home");
      
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google Authentication
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const result = await dispatch(googleLogin(credentialResponse.credential)).unwrap();
      toast.success(`Welcome to MsCafe, ${result.user.name}! 🎉`);
      navigate("/home");
    } catch (error) {
      toast.error("Google sign-up failed. Please try again.");
      console.error('Google sign-up failed:', error);
    }
  };

  const handleGoogleError = () => {
    toast.error("Google sign-up failed. Please try again.");
    console.error('Google sign-up failed');
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] md:min-h-screen bg-gray-100 py-8">
      <div className="bg-[#D2B48C] rounded-lg shadow-lg overflow-hidden w-full max-w-[900px] h-auto flex flex-col md:flex-row mx-4 md:mx-0">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://www.shutterstock.com/image-photo/assorted-iced-coffee-on-white-600nw-2480796893.jpg"
            alt="Coffee"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side: Signup Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold text-[#4E342E] text-center mb-6">
            Join MsCafe Family
          </h2>
          
          {/* Display error if any */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm text-center">
              {error}
            </div>
          )}
          
          {/* Google Sign-up Section */}
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="outline"
              size="large"
              text="signup_with"
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
              <span className="px-4 bg-white text-gray-500">Or create account with email</span>
            </div>
          </div>
          
          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41] disabled:bg-gray-100 disabled:cursor-not-allowed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading || isLoading}
              />
            </div>
            
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41] disabled:bg-gray-100 disabled:cursor-not-allowed"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || isLoading}
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
                placeholder="Enter your password (min 6 characters)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41] disabled:bg-gray-100 disabled:cursor-not-allowed"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading || isLoading}
              />
            </div>
            
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41] disabled:bg-gray-100 disabled:cursor-not-allowed"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading || isLoading}
              />
            </div>
            
            {/* Terms and Conditions */}
            <div className="mb-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 text-[#6D4C41] focus:ring-[#6D4C41] border-gray-300 rounded"
                  disabled={loading || isLoading}
                />
                <span className="text-sm text-gray-700">
                  I agree to the{" "}
                  <a 
                    href="/terms" 
                    className="text-[#6D4C41] font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                  {" "}and{" "}
                  <a 
                    href="/privacy" 
                    className="text-[#6D4C41] font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={loading || isLoading || !acceptTerms}
              className="w-full bg-[#4E342E] text-white py-2 px-4 rounded-lg hover:bg-[#3E2723] transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {(loading || isLoading) ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          
          {/* Login Link */}
          <p className="text-sm text-gray-600 text-center mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#6D4C41] font-medium hover:underline"
            >
              Log In
            </a>
          </p>
          
          {/* Welcome Benefits */}
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="text-sm font-semibold text-amber-800 mb-2">🎉 Welcome Benefits</h3>
            <ul className="text-xs text-amber-700 space-y-1">
              <li>• Get 100 loyalty points for signing up</li>
              <li>• Free welcome drink on your first visit</li>
              <li>• Exclusive member-only discounts</li>
              <li>• Birthday month special offers</li>
              <li>• Early access to seasonal menu items</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;