import React, { useEffect } from 'react';
import { store, persistor } from './src/store/store';
import { Provider } from 'react-redux';
import Navigator from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC<null> = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </PersistGate>
    </NavigationContainer>
  );
};

export default App;
