import { useDispatch } from 'react-redux';
import { setLoading, setUser, setError } from '@/store/slices/auth-slice';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { AppDispatch } from '../store';
import { auth } from '@/lib/firebase-config';

const FacebookLoginButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFacebookLogin = async () => {
    dispatch(setLoading(true));
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      // dispatch(setUser(result.user));
    } catch (error) {
      // dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return <button onClick={handleFacebookLogin}>Login with Facebook</button>;
};

export default FacebookLoginButton;
