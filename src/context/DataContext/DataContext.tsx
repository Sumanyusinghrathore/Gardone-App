import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

// Define the shape of the context
type DataContextType = {
  productData: any[];
  setProductData: (data: any[]) => void;
  cardQuantities: { [key: number]: number };
  setCardQuantities: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  handleAddButtonPress: (item: any, index: number) => void;
  handleIncreaseQuantity: (index: number) => void;
  handleDecreaseQuantity: (index: number) => void;
  removeProduct: (id: number, index: number) => void;
};

// Create the context with an undefined default value
const DataContext = createContext<DataContextType | undefined>(undefined);

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [productData, setProductData] = useState<any[]>([]);
  const [cardQuantities, setCardQuantities] = useState<{ [key: number]: number }>({});

  // Add product to cart and set initial quantity
  const handleAddButtonPress = (item: any, index: number) => {
    setProductData((prev) => {
      const updatedData = [...prev, item]; // Corrected: Only add item, not index
      // Alert.alert("Cart Updated", JSON.stringify(updatedData, null, 2)); // Show full array
      // Alert.alert("Cart Updated", JSON.stringify(updatedData, null, 2)); // Show full array
      return updatedData;
    });

    // Update quantity
    setCardQuantities((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    
    }));


  };

  // Increase quantity
  const handleIncreaseQuantity = (index: number) => {
    setCardQuantities((prev) => {
      const newQuantity = (prev[index] || 0) + 1;
      return { ...prev, [index]: newQuantity };
    });
  };

  // Decrease quantity
  const handleDecreaseQuantity = (index: number) => {
    setCardQuantities((prev) => {
      const currentQuantity = prev[index] || 0;
      if (currentQuantity <= 1) {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      }
      return { ...prev, [index]: currentQuantity - 1 };
    });
  };

  // Remove product from cart
  const removeProduct = (id: number, index: number) => {
    setProductData((prev) => prev.filter((item) => item.id !== id));

    setCardQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[index]; // Remove associated quantity
      return updatedQuantities;
    });

    console.log(`Removed product with ID ${id} from the cart`);
  };

  return (
    <DataContext.Provider
      value={{
        productData,
        setProductData,
        cardQuantities,
        setCardQuantities,
        handleAddButtonPress,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        removeProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for accessing the context
export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
