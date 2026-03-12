import { apiService } from './api';
import { User, UserCredentials } from '../types/user';

export class AuthService {
  async login(credentials: UserCredentials): Promise<{ user: User; token: string }> {
    const response = await apiService.post<{ user: User; token: string }>('/auth/login', credentials);
    
    // Store token locally
    if (response.token) {
      localStorage.setItem('auth_token', response.token);
    }
    
    return response;
  }

  async logout(): Promise<void> {
    try {
      await apiService.post('/auth/logout');
    } finally {
      // Always remove token locally
      localStorage.removeItem('auth_token');
    }
  }

  async register(userData: Partial<User> & UserCredentials): Promise<{ user: User; token: string }> {
    const response = await apiService.post<{ user: User; token: string }>('/auth/register', userData);
    
    // Store token locally
    if (response.token) {
      localStorage.setItem('auth_token', response.token);
    }
    
    return response;
  }

  async refreshToken(): Promise<{ token: string }> {
    const response = await apiService.post<{ token: string }>('/auth/refresh');
    
    // Update stored token
    if (response.token) {
      localStorage.setItem('auth_token', response.token);
    }
    
    return response;
  }

  async getCurrentUser(): Promise<User> {
    return apiService.get<User>('/auth/me');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = new AuthService();
