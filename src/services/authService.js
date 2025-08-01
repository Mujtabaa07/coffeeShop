const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

console.log('🔗 Auth Service initialized with API URL:', API_URL);

const authService = {
  googleLogin: async (credential) => {
    try {
      console.log('📡 Sending Google login request...');
      
      const response = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential })
      });
      
      console.log('📨 Response status:', response.status);
      
      const data = await response.json();
      console.log('📦 Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error('❌ Auth service error:', error);
      throw error;
    }
  }
};

export default authService;