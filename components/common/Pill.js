import { Layout, Text } from '@ui-kitten/components';
import React from 'react';

export default function Loader({
  backgroundColor = '#bbbbbb',
  color = '#ffffff',
  children,
}) {
  return (
    <Layout
      style={{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5px',
        paddingVertical: '2px',
        borderRadius: '10px',
        backgroundColor,
      }}
    >
      <Text style={{ fontSize: '10px', color }}>{children}</Text>
    </Layout>
  );
}
