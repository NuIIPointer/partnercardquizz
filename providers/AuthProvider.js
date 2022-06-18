import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Loader from '../components/common/Loader';
import firebase from '../config/firebase';

export const AuthContext = createContext({});

export const auth = getAuth(firebase);

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [authPending, setAuthPending] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, result => {
      if (result) {
        const { displayName, email, uid, photoURL, phoneNumber } = result;
        const currentUser = {
          displayName,
          email,
          uid,
          photoURL,
          phoneNumber,
          isAdmin: false,
        };
        // read claims if necessary
        setAuthPending(true);
        result.getIdTokenResult().then(({ claims }) => {
          currentUser.isAdmin = Boolean(claims.admin);
          setUser(currentUser);
          setAuthPending(false);
        });
      } else {
        setUser();
        setAuthPending(false);
      }
    });
  }, []);

  const { children } = props;

  if (authPending) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
