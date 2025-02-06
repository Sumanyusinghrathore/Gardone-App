import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppContext from './src/context/AppContext';
import MainStack from './src/routes/MainStack';
import SplashScreen from 'react-native-splash-screen';
import { DataProvider } from './src/context/DataContext/DataContext';
import { CartProvider } from './src/context/CartContext/CartContext';

const App = (): React.JSX.Element => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <GestureHandlerRootView>
      <AppContext>
        <CartProvider>
        <DataProvider>
        <MainStack />
        </DataProvider>
        </CartProvider>
      </AppContext>
    </GestureHandlerRootView>
  );
};


export default App;
