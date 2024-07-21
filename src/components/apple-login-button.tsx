import { useDispatch } from 'react-redux';
import { signInWithPopup, OAuthProvider } from 'firebase/auth';
import { AppDispatch } from '../store';
import { auth } from '@/lib/firebase-config';

const AppleLoginButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAppleLogin = async () => {
    // dispatch(setLoading(true));
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider);

      // dispatch(setUser(result.user));
    } catch (error) {
      // dispatch(setError(error.message));
    } finally {
      // dispatch(setLoading(false));
    }
  };

  return <button onClick={handleAppleLogin}>Login with Apple</button>;
};

export default AppleLoginButton;
