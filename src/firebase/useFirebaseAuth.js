import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAlerta } from '../components/common/alerta/AlertaContext.jsx';

const useFirebaseAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const { mostrarAlerta } = useAlerta();


  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
      mostrarAlerta('Error signing in:', error.message);
    }
  };

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing up:', error.message);
      mostrarAlerta('Error signing up:', error.message);
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
  };
};

export default useFirebaseAuth;
