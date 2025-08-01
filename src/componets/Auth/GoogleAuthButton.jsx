import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin } from 'coffeeShop/src/Store/authSlice.js';
import { toast } from 'react-toastify';

const GoogleAuthButton = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const result = await dispatch(googleLogin(credentialResponse.credential)).unwrap();
      toast.success(`Welcome back, ${result.user.name}!`);
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error('Google login failed:', error);
    }
  };

  const handleGoogleError = () => {
    toast.error('Google login failed. Please try again.');
  };

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        theme="outline"
        size="large"
        text="signin_with"
        shape="rectangular"
        width="100%"
        disabled={loading}
      />
    </div>
  );
};

export default GoogleAuthButton;