import React, { createContext, useCallback, useContext } from 'react';
import { collection, getDoc, getDocs } from 'firebase/firestore/lite';
import { firebaseDb } from '../config/firebase';

export const FirebaseDBContext = createContext();

export function FirebaseDBProvider(props) {
  // modal JSX to pop
  const { children } = props;

  const getQuestions = useCallback(async () => {
    const questionsCol = collection(firebaseDb, 'questions');
    console.log('questionsCol', questionsCol);
    const questionSnapshot = await getDocs(questionsCol);
    console.log('questionSnapshot', questionSnapshot);
    const questionList = questionSnapshot.docs.map(doc => doc.data());
    return questionList;
  }, []);

  const getQuestionTypes = useCallback(async () => {
    const questionTypesCol = collection(firebaseDb, 'questionType');
    const questionTypeSnapshot = await getDocs(questionTypesCol);
    const questionTypeList = questionTypeSnapshot.docs.map(doc => doc.data());
    return questionTypeList;
  }, []);

  const getDocument = useCallback(async document => {
    const fetchedDoc = await getDoc(document);
    return fetchedDoc.data();
  }, []);

  return (
    <FirebaseDBContext.Provider
      value={{
        getQuestions,
        getQuestionTypes,
        getDocument,
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
