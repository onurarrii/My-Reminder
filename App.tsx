import React, { useEffect } from 'react';
import store from './src/store/store';
import { Provider } from 'react-redux';
import Router from './src/router/Router';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC<null> = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
