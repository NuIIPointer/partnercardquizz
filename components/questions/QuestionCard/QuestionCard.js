import { Card, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import React from 'react';

import Pill from '../../common/Pill';

export default function QuestionCard({
  title = 'Titel',
  text = 'test',
  status = 'info',
  categories = [],
}) {
  const categoryDom = categories.map(cat => <Pill>{cat}</Pill>);

  return (
    <Card status={status}>
      <Text style={headlineStyles}>{title}</Text>
      <Text>{text}</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '2px',
          marginTop: '12px',
        }}
      >
        {categoryDom}
      </View>
    </Card>
  );
}

const headlineStyles = { fontWeight: 'bold', marginBottom: '4px' };
