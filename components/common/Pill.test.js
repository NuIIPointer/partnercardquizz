import React from 'react';
import { render } from '@testing-library/react-native';
import { TestRoot } from '../../utils/testing';
import Pill from './Pill';

test('it works', () => {
  const title = 'TEXT';

  const { getByText } = render(
    <TestRoot>
      <Pill>{title}</Pill>
    </TestRoot>,
  );

  expect(getByText(title)).toHaveTextContent(title);
});
