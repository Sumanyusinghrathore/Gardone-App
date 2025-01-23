import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppContext from './src/context/AppContext';
import MainStack from './src/routes/MainStack';
import SplashScreen from 'react-native-splash-screen';

const App = (): React.JSX.Element => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContext>
        <MainStack />
      </AppContext>
    </GestureHandlerRootView>
  );
};


export default App;
