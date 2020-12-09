import React from 'react';
import store from './src/store/store';
import { Provider } from 'react-redux';
import Router from './src/router/Router';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC<null> = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
