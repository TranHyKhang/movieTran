import React from 'react'
import {Provider} from 'react-redux';
import store from './src/store/index';

import MainNavigation from './src/navigations/MainNavigation';
import {DefaultTheme,Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    text: 'white',
    icon: 'white'
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainNavigation/>
      </PaperProvider>
    </Provider>
  )
}
