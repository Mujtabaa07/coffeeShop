import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '../store/authSlice';
import { getTokenFromStorage, isTokenExpired } from '../utils/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const token = getTokenFromStorage();

  useEffect(() => {
    if (token && !isTokenExpired(token) && !user) {
      dispatch(getCurrentUser());
    }
  }, [token, user, dispatch]);

  return {
    user,
    isAuthenticated,
    loading,
    error,
    token
  };
};