import { Card, Text } from '@ui-kitten/components';
import React from 'react';

export default function QuestionCard({ text = 'test', status = 'info' }) {
  return (
    <Card status={status}>
      <Text>{text}</Text>
    </Card>
  );
}
