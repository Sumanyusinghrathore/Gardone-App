import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../themes/theme';
import HomeScreen from '../dashboard/HomeScreen';
import CartScreen from '../Cart/Cart';
import WishlistScreen from '../Wishlist/Wishlist';
import ServicesScreen from '../Services/Services';
import HomeIconActive from '../../assets/Icons/HomeActive.svg';
import HomeIconInactive from '../../assets/Icons/HomeDeactive.svg';
import CartIconActive from '../../assets/Icons/CartActive.svg';
import CartIconInactive from '../../assets/Icons/CartDeactive.svg';
import WishlistIconActive from '../../assets/Icons/WishlistActive.svg';
import WishlistIconInactive from '../../assets/Icons/WishlistDeactive.svg';
import ServicesIconActive from '../../assets/Icons/ServiceActive.svg';
import ServicesIconInactive from '../../assets/Icons/ServicesDeactive.svg';
import Categorie from '../Categories/Categorie';
import Bottomnavigation from './Bottomnavigation';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 0,
        },
        tabBarStyle: {
          height: 80,
          paddingTop: 0,
          elevation: 0,
          marginBottom: 5,
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Bottomnavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <HomeIconActive height={85} />
            ) : (
              <HomeIconInactive width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <WishlistIconActive height={80}  />
            ) : (
              <WishlistIconInactive width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size}) =>
            focused ? (
              <CartIconActive height={80} />
            ) : (
              <CartIconInactive width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <ServicesIconActive height={80}  />
            ) : (
              <ServicesIconInactive width={size} height={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
