export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: '/courses/:id',
    CREATE: '/courses',
    UPDATE: '/courses/:id',
    DELETE: '/courses/:id',
  },
  POSTS: {
    LIST: '/posts',
    DETAIL: '/posts/:id',
    CREATE: '/posts',
    UPDATE: '/posts/:id',
    DELETE: '/posts/:id',
  },
};

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#F2F2F7',
  surface: '#FFFFFF',
  text: '#000000',
  textSecondary: '#8E8E93',
  border: '#E5E5EA',
};

export const SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 32,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
