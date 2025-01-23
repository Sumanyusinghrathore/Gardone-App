import React from 'react';
import TabNavigation from '../screens/Tabs/Tabnavigation';
import ProductDetail from '../screens/ProductDetails/ProductDetail';
import { TouchableOpacity } from 'react-native';
import Leftarrow from '../assets/Icons/Leftarrow.svg';
import Wishlist from '../assets/Icons/WishlistDeactive.svg';
import { COLORS, FONTS } from '../themes/theme';
import Profile from '../screens/Profile/Profile';
import Filter from '../screens/Filter/Filterscreen';
import Filtericon from '../assets/Icons/FilterSvg.svg'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Reusable header styles or configurations
const headerOptions = (bg: string) => ({
  headerShown: true,
  headerStyle: { backgroundColor: bg ?? COLORS.primary },
  headerTitleStyle: { fontFamily: FONTS.AvenirBold, color: COLORS.header },
  headerTitleAlign: 'center' as 'center',
  headerBackTitleVisible: false,
});

export const screens = [
  { name: 'Home', component: TabNavigation, options: { headerShown: false } },
  { name: 'ProductDetail', component: ProductDetail, options: headerOptions(COLORS.white) },
  {
    name: 'Profile',
    component: Profile,
    options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'My Profile', // Set the custom header name here
    },
  },
  { name: 'Filter', component: Filter, options: headerOptions(COLORS.white) },
];

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureDirection: 'horizontal' }}>
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={({ route, navigation }: any) => {
            const categoryName = route?.params?.name ?? (screen.options as any).headerTitle ?? screen.name;
            return {
              headerShown: screen.options.headerShown,
              headerTitle: categoryName, // Use route.params?.categoryName for dynamic titles
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.white,
                elevation: 0, // Hide shadow on Android
                shadowOpacity: 0, // Hide shadow on iOS
              },
              headerTitleStyle: {
                fontFamily: FONTS.AvenirBold,
                color: COLORS.header,
                fontSize: 20,
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 25 }}>
                  <Leftarrow color="white" />
                </TouchableOpacity>
              ),
              // Conditionally render Wishlist icon for Search screen
              headerRight: screen.name === 'ProductDetail' ? () => (
                <TouchableOpacity onPress={() => console.log('Save Wishlist')} style={{ paddingRight: 25 }}>
                  <Wishlist />
                </TouchableOpacity>
              ) : undefined, // Only show wishlist icon on ProductDetail screen
            };
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default App;
