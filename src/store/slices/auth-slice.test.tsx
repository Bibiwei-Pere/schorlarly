import { describe, it, expect } from 'vitest';
import authReducer, {
  setLoading,
  setUser,
  setError,
  logout,
} from './auth-slice';
import { User } from '@/types/user';

const user: User = {
  id: 1,
  username: 'testuser',
  bio: 'A test user',
  timezone: 'GMT',
  avatar: null,
  phone: '1234567890',
  email: 'testuser@example.com',
  first_name: 'Test',
  last_name: 'User',
  isVendor: false,
  hasPlan: false,
  reset_password_token: '',
  reset_password_expires: '',
  gender: 'other',
  is_active: true,
  is_blocked: false,
  password: 'password',
  createdAt: '2023-01-01T00:00:00.000Z',
  updatedAt: '2023-01-01T00:00:00.000Z',
  country: 'Test Country',
  state: 'Test State',
  recipientCode: '',
  role: 'user',
  latitude: 0,
  longitude: 0,
  location_name: null,
  accountType: 'basic',
  paymentGatewayId: null,
  Device_Tokens: null,
  Wallet: {
    walletBalance: 0,
    currency: 'USD',
    userId: 1,
    id: '43',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
  },
};

describe('authSlice', () => {
  const initialState = {
    user: null,
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setLoading', () => {
    const action = { type: setLoading.type, payload: true };
    const expectedState = { ...initialState, loading: true };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setUser', () => {
    const action = { type: setUser.type, payload: user };
    const expectedState = { ...initialState, user };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setError', () => {
    const error = 'An error occurred';
    const action = { type: setError.type, payload: error };
    const expectedState = { ...initialState, error };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle logout', () => {
    const loggedInState = {
      ...initialState,
      user,
    };
    const action = { type: logout.type };
    const expectedState = { ...initialState, user: null };
    expect(authReducer(loggedInState, action)).toEqual(expectedState);
  });
});
