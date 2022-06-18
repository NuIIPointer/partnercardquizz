import React, { createContext, useCallback, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDb } from '../config/firebase';

export const FirebaseDBContext = createContext();

export function FirebaseDBProvider(props) {
  // modal JSX to pop
  const { children } = props;

  const getQuestions = useCallback(async () => {
    const questionsCol = collection(firebaseDb, 'questions');
    const questionSnapshot = await getDocs(questionsCol);
    const questionList = questionSnapshot.docs.map(doc => doc.data());
    return questionList;
  }, []);

  return (
    <FirebaseDBContext.Provider
      value={{
        getQuestions,
      }}
    >
      {children}
    </FirebaseDBContext.Provider>
  );
}

// shortcut hook
export function useFirebaseDB() {
  const context = useContext(FirebaseDBContext);
  if (context === undefined) {
    throw new Error('useFirebaseDB must be used inside FirebaseDBProvider');
  }

  return context;
}
