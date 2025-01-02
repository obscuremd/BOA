import { createContext, PropsWithChildren, useContext, useState } from "react";


interface GeneralTypes {
  userData: Users | null;
  setUserData:React.Dispatch<React.SetStateAction<Users| null>>
  url: string;
}

const GeneralContext = createContext<GeneralTypes | undefined>(undefined);

export default function GeneralProvider({ children }: PropsWithChildren) {
  

    // fetch user
    const url = "https://boa-7mml.vercel.app";
    const [userData, setUserData] = useState<Users | null>(null);

  return (
    <GeneralContext.Provider value={{ userData, url, setUserData }}>
      {children}
    </GeneralContext.Provider>
  );
}

export const useGen = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useGen must be used within a GeneralProvider");
  }
  return context;
};
