import React, { createContext, useState, ReactNode } from 'react';

type DataContextType = {
  productData: any;
  setProductData: (data: any) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [productData, setProductData] = useState<any>(null);

  return (
    <DataContext.Provider value={{ productData, setProductData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
