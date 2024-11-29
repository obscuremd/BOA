import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";


interface GeneralTypes {
  userData: Users | null;
  url: string;
}

const GeneralContext = createContext<GeneralTypes | undefined>(undefined);

export default function GeneralProvider({ children }: PropsWithChildren) {
  

    // fetch user
    const { user } = useClerk();
    const url = "https://boa-server-0p7e.onrender.com";
    const [userData, setUserData] = useState<Users | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
        if (!user?.username) return; // Handle missing username

        try {
            const response = await axios.get(`${url}/user/account/${user.username}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error); // Log any errors
        }
        };

        fetchUser();
    }, [user?.username]); // Add user?.username as a dependency

  return (
    <GeneralContext.Provider value={{ userData, url }}>
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
