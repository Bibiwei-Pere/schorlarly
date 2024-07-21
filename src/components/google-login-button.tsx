import { useDispatch } from 'react-redux';
import { setLoading, setUser, setError } from '@/store/slices/auth-slice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AppDispatch } from '../store';
import { auth } from '@/lib/firebase-config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const GoogleLoginButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [user, loading, error] = useAuthState(auth);

  const handleGoogleLogin = async () => {
    dispatch(setLoading(true));
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      // dispatch(setUser(result.user));
    } catch (error) {
      // dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  /**
   * #TODO refactor here
   */
  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
