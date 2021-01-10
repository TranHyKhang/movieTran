import React from 'react'
import {Provider} from 'react-redux';
import store from './src/store/index';

import MainNavigation from './src/navigations/MainNavigation';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigation/>
      </PaperProvider>
    </Provider>
  )
}
