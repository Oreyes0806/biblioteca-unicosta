import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, store } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useAlerta } from '../components/common/alerta/AlertaContext.jsx';

const useFirebaseAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState();
  const { mostrarAlerta } = useAlerta();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user && !userProfile) {
        let userProfileMock;
        try {
          userProfileMock = await tryGetUserProfile();
          if (!userProfileMock) {
            userProfileMock = await tryAddUserProfile();
          }
          setUserProfile(userProfileMock);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          mostrarAlerta('Error fetching user profile:', error.toString());
        }
      }

      async function tryAddUserProfile() {
        const userProfile = { email: user.email, role: 'user' };
        const usersCollection = collection(store, 'usuarios');
        await addDoc(usersCollection, userProfile);
        return userProfile;
      }

      async function tryGetUserProfile() {
        const usersCollection = collection(store, 'usuarios');
        let userProfileQuery = query(usersCollection);
        userProfileQuery = query(userProfileQuery, where("email", '==', user.email));
        const userProfileSnapshot = await getDocs(userProfileQuery);
        if (!userProfileSnapshot.docs[0]) return null;
        const userProfile = userProfileSnapshot.docs[0].data();
        return userProfile;
      }
    };

    fetchUserProfile();
  }, [user, setUserProfile, userProfile]);

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
    userProfile,
    signIn,
    signUp,
    signOut,
  };
};

export default useFirebaseAuth;
