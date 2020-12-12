import React, { useEffect } from 'react';
import store from './src/store/store';
import { Provider } from 'react-redux';
import Navigator from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC<null> = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
