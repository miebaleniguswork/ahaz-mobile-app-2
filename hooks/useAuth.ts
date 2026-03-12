import { useState, useEffect } from 'react';
import { User, UserCredentials } from '../types/user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in on mount
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // TODO: Implement actual auth check
      setLoading(false);
    } catch (err) {
      setError('Failed to check auth status');
      setLoading(false);
    }
  };

  const login = async (credentials: UserCredentials) => {
    try {
      setLoading(true);
      // TODO: Implement actual login
      setError(null);
    } catch (err) {
      setError('Login failed');
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setUser(null);
      // TODO: Implement actual logout
      setLoading(false);
    } catch (err) {
      setError('Logout failed');
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  };
}
