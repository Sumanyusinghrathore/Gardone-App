import React, { useEffect } from 'react';
import TabNavigation from '../screens/Tabs/Tabnavigation';
import ProductDetail from '../screens/ProductDetails/ProductDetail';
import { TouchableOpacity } from 'react-native';
import Leftarrow from '../assets/Icons/Leftarrow.svg';
import Wishlist from '../assets/Icons/WishlistDeactive.svg';
import Message from '../assets/Icons/Message_icon.svg';
import { COLORS, FONTS } from '../themes/theme';
import Filter from '../screens/Filter/Filterscreen';
import { createStackNavigator } from '@react-navigation/stack';
import Address from '../screens/Address_Book/Address';
import Updateprofile from '../screens/Update_profile/Updateprofile';
import Rewards from '../screens/Rewards/Rewards';
import OrderHistory from '../screens/Order_History/OrderHistory';
import Changepassword from '../screens/Change_Password/Changepassword';
import AddAddress from '../screens/Add_Address/AddAddress';
import MaintenanceForm from '../screens/MaintenanceForm/MaintenanceForm';
import OrderSummary from '../screens/OrderSummary/OrderSummary';
import Payment from '../screens/Payment/Payment';
import OrderConfirmed from '../screens/OrderConfirmed/OrderConfirmed';
import MainProfile from '../screens/Profile/MainProfile/MainProfile';
import OrderHistoryDetail from '../screens/OrderHistoryDetail/OrderHistoryDetail';
import Setting from '../screens/Settings/Setting';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';
import Help from '../screens/Help/Help';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/types';
import { useNavigation } from '@react-navigation/native';
import { DataProvider } from '../context/DataContext/DataContext';

const Stack = createStackNavigator();

// Reusable header styles or configurations
const headerOptions = (bg: string) => ({
  headerShown: true,
  headerStyle: { backgroundColor: bg ?? COLORS.primary },
  headerTitleStyle: { fontFamily: FONTS.AvenirBold, color: COLORS.header },
  headerTitleAlign: 'center' as 'center',
  headerBackTitleVisible: false,
});

type NavigationProp = StackNavigationProp<RootStackParamList>;
export const screens = [
  { name: 'cart', component: TabNavigation, options: { headerShown: false } },
  { name: 'ProductDetail', component: ProductDetail, options: headerOptions(COLORS.white) },
  { name: 'Filter', component: Filter, options: headerOptions(COLORS.white) },
  {
    name: 'Address', component: Address, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Address Book', // Set the custom header name here
    },
  },
  {
    name: 'UpdateProfile', component: Updateprofile, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Update Profile', // Set the custom header name here
    },
  },
  {
    name: 'Rewards', component: Rewards, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Rewards', // Set the custom header name here
    },
  },
  {
    name: 'OrderHistory', component: OrderHistory, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Order History', // Set the custom header name here
    },
  },
  {
    name: 'Changepassword', component: Changepassword, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Change Password', // Set the custom header name here
    },
  },
  {
    name: 'AddAddress', component: AddAddress, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Add Address', // Set the custom header name here
    },
  },
  {
    name: 'MaintenanceForm', component: MaintenanceForm, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Form', // Set the custom header name here
    },
  },
  {
    name: 'OrderSummary', component: OrderSummary, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Order Summary', // Set the custom header name here
    },
  },
  {
    name: 'Payment', component: Payment, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Payment', // Set the custom header name here
    },
  },
  { name: 'OrderConfirmed', component: OrderConfirmed, options: { headerShown: false } },
  {
    name: 'MainProfile', component: MainProfile, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Profile', // Set the custom header name here
    }
  },
  {
    name: 'OrderDetail', component: OrderHistoryDetail, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Order History Detail', // Set the custom header name here
    }
  },
  {
    name: 'Setting', component: Setting, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Settings', // Set the custom header name here
    }
  },
  {
    name: 'Privacy', component: PrivacyPolicy, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Privacy Policy', // Set the custom header name here
    }
  },
  {
    name: 'Help', component: Help, options: {
      ...headerOptions(COLORS.white),
      headerTitle: 'Help Centre', // Set the custom header name here
    }
  },

];



const App = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureDirection: 'horizontal' }}>
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={({ route }: any) => {
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
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }} style={{ paddingLeft: 25 }}>
                  <Leftarrow color="white" />
                </TouchableOpacity>
              ),
              // Conditionally render Wishlist icon for Search screen
              headerRight: screen.name === 'ProductDetail' ? () => (
                <TouchableOpacity onPress={() => console.log('Save Wishlist')} style={{ paddingRight: 25 }}>
                  <Wishlist />
                </TouchableOpacity>
              ) : screen.name === 'MaintenanceForm' ? () => (
                <TouchableOpacity onPress={() => console.log('Messageicon')} style={{ paddingRight: 25 }}>
                  <Message />
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
