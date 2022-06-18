/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigators/AppNavigator';
import theme from './theme';
import { ModalProvider } from './providers/ModalProvider';
import { FirebaseDBProvider } from './providers/FirebaseDBProvider';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <SafeAreaProvider>
          <ModalProvider>
            <FirebaseDBProvider>
              <AppNavigator />
            </FirebaseDBProvider>
          </ModalProvider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}
