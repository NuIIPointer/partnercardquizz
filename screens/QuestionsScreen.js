import React from 'react';
import { Text, Layout } from '@ui-kitten/components';
import { t } from '../utils';
import Screen from './Screen';
import { useFirebaseDB } from '../providers/FirebaseDBProvider';

import QuestionCard from '../components/questions/QuestionCard/QuestionCard';

export default function QuestionsScreen() {
  const { getQuestions } = useFirebaseDB();
  console.log('questionsHook', getQuestions());

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
        <QuestionCard />
        <QuestionCard status="danger" text="My Foo" />
      </Layout>
    </Screen>
  );
}
