import { createContext, useContext, useState, ReactNode } from "react";

interface DiscountBarContextType {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const DiscountBarContext = createContext<DiscountBarContextType | undefined>(undefined);

export function DiscountBarProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <DiscountBarContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </DiscountBarContext.Provider>
  );
}

export function useDiscountBar() {
  const context = useContext(DiscountBarContext);
  if (context === undefined) {
    throw new Error("useDiscountBar must be used within a DiscountBarProvider");
  }
  return context;
}
