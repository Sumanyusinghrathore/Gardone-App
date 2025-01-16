import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const navigationStateType = {
  HOME: 'HOME',
  AUTH: 'AUTH',
  LOADING: 'LOADING',
};

type AppContextType = {
  userData: any;
  navigationState: string;
  setNavigationState: (state: string) => void;
  setUserData: (data: any) => void;
};

const App = createContext<AppContextType | undefined>(undefined);

type AppContextProps = {
  children: ReactNode;
};

const AppContext = ({ children }: AppContextProps) => {
  const [navigationState, setNavigationState] = useState(navigationStateType.LOADING);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const saveDetail = async () => {
      if (userData) {
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
      }
    };
    saveDetail();

    if (userData) {
      setNavigationState(navigationStateType.HOME);
    } else if (navigationState !== navigationStateType.LOADING) {
      setNavigationState(navigationStateType.AUTH);
    }
  }, [userData, navigationState]);

  return (
    <App.Provider
      value={{
        userData,
        navigationState,
        setNavigationState,
        setUserData,
      }}
    >
      {children}
    </App.Provider>
  );
};
export const useApp = () => useContext(App);

export default AppContext;

const styles = StyleSheet.create({});
