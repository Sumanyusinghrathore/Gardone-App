import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const navigationStateType = {
  HOME: 'HOME',
  AUTH: 'AUTH',
  LOADING: 'LOADING',
};

type NavigationStateType =
  (typeof navigationStateType)[keyof typeof navigationStateType];

type AppContextType = {
  userData: any;
  navigationState: string;
  setNavigationState: React.Dispatch<React.SetStateAction<NavigationStateType>>;
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
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
        setNavigationState(navigationStateType.HOME);
      }
      else {
        setNavigationState(navigationStateType.AUTH);
      }
    };
    saveDetail();
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
