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
};
