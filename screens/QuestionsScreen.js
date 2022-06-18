import React, { useState, useMemo, useEffect } from 'react';
import { Text, Layout } from '@ui-kitten/components';
import { t } from '../utils';
import Screen from './Screen';
import { useFirebaseDB } from '../providers/FirebaseDBProvider';

import QuestionCard from '../components/questions/QuestionCard/QuestionCard';

export default function QuestionsScreen() {
  const { getQuestions, getDocument } = useFirebaseDB();
  const [questionList, setQuestionList] = useState([]);
  const questionsRendered = useMemo(() => {
    const questionsDom = questionList.map(singleQuestion => {
      const category = getDocument(singleQuestion.categories[0]);
      console.log('category', category);
      return <QuestionCard status="danger" text={singleQuestion.question} />;
    });

    return questionsDom;
  }, [getDocument, questionList]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const call = async () => {
      const questions = await getQuestions();
      console.log('questions', questions);
      setQuestionList(questions);
    };

    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Screen
      title={t('questions.title', { name: 'Questions' })}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      dark
    >
      <Text category="h1" style={{ marginBottom: '8px' }}>
        {t('questions.title')}
      </Text>
      <Text category="p">{t('questions.introText')}</Text>
      <Layout
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: 'transparent',
          gap: '8px',
        }}
      >
        {questionsRendered}
      </Layout>
    </Screen>
  );
}
