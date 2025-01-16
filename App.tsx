import React, { useEffect } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppContext from './src/context/AppContext';
import MainStack from './src/routes/MainStack';
import SplashScreen from 'react-native-splash-screen';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1c1c1c' : '#ffffff',
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContext>
        <MainStack />
      </AppContext>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
