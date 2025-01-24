import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApp, navigationStateType } from '../context/AppContext';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { COLORS } from '../themes/theme';
import Loader from '../components/Loader/Loader';

const MainStack = () => {
  const appContext = useApp();

  if (!appContext) {
    return null; // Ensure appContext is not undefined
  }

  const { navigationState, setNavigationState, setUserData } = appContext;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setUserData(JSON.parse(userData));
        } else {
          setNavigationState(navigationStateType.AUTH);
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
        setNavigationState(navigationStateType.AUTH);
      }
    };

    fetchUserData();
  }, [setNavigationState, setUserData]);

  const renderStack = () => {
    switch (navigationState) {
      case navigationStateType.AUTH:
        return <AuthStack />;
      case navigationStateType.HOME:
        return <HomeStack />;
      default:
        return <Loader />;
    }
  };

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle={
          navigationState === navigationStateType.HOME
          ? 'light-content'
          : 'dark-content'
        }
        backgroundColor={COLORS.primary}
        />
      {renderStack()}
    </NavigationContainer>
  );
};

export default MainStack;
