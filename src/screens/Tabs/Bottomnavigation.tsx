import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icnicons from '../../assets/Icons/Leftarrow.svg';
import Categorie from '../Categories/Categorie';
import HomeScreen from '../dashboard/HomeScreen';
import { COLORS, FONTS } from '../../themes/theme';
import Arrivals from '../Arrivals&Sellers/Arrivals';
import Search from '../Search/Search';
import Filter from '../../assets/Icons/FilterSvg.svg'; // Import Wishlist SVG

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
  { name: 'Home', component: HomeScreen, options: { headerShown: false } },
  { name: 'Categorie', component: Categorie, options: headerOptions(COLORS.white) },
  { name: 'Arrivals', component: Arrivals, options: headerOptions(COLORS.white) },
  { name: 'Search', component: Search, options: headerOptions(COLORS.white) },
];

const App = () => {
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
                  <Icnicons color="white" />
                </TouchableOpacity>
              ),
              // Conditionally render Wishlist icon for Search screen
              headerRight: () => {
                if (screen.name === 'Search') {
                  return (
                    <TouchableOpacity onPress={() => console.log('Save Wishlist')} style={{ paddingRight: 25 }}>
                      <Filter width={30} height={30} />
                    </TouchableOpacity>
                  );
                }
                return null; // For other screens, no headerRight
              },
            };
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default App;
