import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from '../screens/Tabs/Tabnavigation';
import ProductDetail from '../screens/ProductDetails/ProductDetail';
import { TouchableOpacity } from 'react-native';
import Leftarrow from '../assets/Icons/Leftarrow.svg';
import Wishlist from '../assets/Icons/WishlistDeactive.svg';
import { COLORS, FONTS } from '../themes/theme';

const Stack = createNativeStackNavigator();

const headerOptions = (bg: string) => ({
  headerShown: true,
  headerStyle: { backgroundColor: bg ?? COLORS.primary },
  headerTitleStyle: { fontFamily: FONTS.AvenirBold, color: COLORS.header },
  headerTitleAlign: 'center' as 'center',
  headerBackTitleVisible: false,
});

export const screens = [
  { name: 'Home', component: TabNavigation, options: { headerShown: false } },
  { name: 'ProductDetail', component: ProductDetail, options: headerOptions(COLORS.white)  },
];

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={({ route, navigation }: any) => {
            const categoryName = route?.params?.name ?? screen.name;
            return {
              headerShown: screen.options.headerShown,
              headerTitle: categoryName, // Use categoryName for dynamic titles
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Leftarrow width={24} height={24} />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => console.log('Save Wishlist')}>
                  <Wishlist />
                </TouchableOpacity>
              ),
            };
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
