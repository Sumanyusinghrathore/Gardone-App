// src/types.ts
export type RootStackParamList = {
  Login: undefined;
  Onboarding: undefined; // Fixed spelling from 'Onbording'
  Signup: undefined;
  Home: undefined;
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
};
