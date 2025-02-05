// src/types.ts
export type Order = {
  id: string;
  productName: string;
  time: string;
  date: string;
  status: string;
  image: any;
};

export type RootStackParamList = {
  Login: undefined;
  Onboarding: undefined; // Fixed spelling from 'Onbording'
  Signup: undefined;
  Home: undefined;
  HomeScreen:undefined;
  TabNavigation: undefined;
  Categorie: { name: string }; // Allows optional parameter for category name
  Arrivals:{ name: string };
  ProductDetail:{ name: string };
  Search:{ name: string };
  Filter:undefined;
  Profile:undefined;
  Address:undefined;
  UpdateProfile:undefined;
  Rewards:undefined;
  OrderHistory:undefined;
  Changepassword:undefined;
  AddAddress: undefined;
  MaintenanceForm:undefined;
  Notifications:undefined;
  OrderSummary:undefined;
  Payment:undefined;
  OrderConfirmed:undefined;
  Track:undefined;
  Cart:undefined;
  MainProfile:undefined;
  OrderDetail: { order: Order };
  Setting:undefined;
  Privacy:undefined;
  Help:undefined;
};
