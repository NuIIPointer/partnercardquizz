import React, { useState, useMemo, useEffect } from 'react';
import { Text, Layout } from '@ui-kitten/components';
import { t } from '../utils';
import Screen from './Screen';
import { useFirebaseDB } from '../providers/FirebaseDBProvider';

import QuestionCard from '../components/questions/QuestionCard/QuestionCard';

export default function QuestionsScreen() {
  const { getQuestions } = useFirebaseDB();
  const [questionList, setQuestionList] = useState([]);
  const questionsRendered = useMemo(() => {
    const questionsDom = questionList.map(singleQuestion => {
      const categoryTitles = singleQuestion.categories.map(
        category => category.title[t('languageKey')],
      );
      const { color } = singleQuestion.categories[0];
      const questionTitle = singleQuestion.question;

      return (
        <QuestionCard
          key={questionTitle}
          status={color}
          title={questionTitle}
          text="Lorem Ipsum"
          categories={categoryTitles}
        />
      );
    });

    return questionsDom;
  }, [questionList]);

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
          alignItems: 'flex-end',
          alignContent: 'flex-end',
          flexWrap: 'wrap',
          width: '100%',
          backgroundColor: 'transparent',
          gap: '8px',
          marginBottom: '32px',
        }}
      >
        {questionsRendered}
      </Layout>
    </Screen>
  );
}
