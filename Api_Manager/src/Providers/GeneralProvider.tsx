import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface UserData {
  _id: string;
  account_number: string; // Required and unique
  full_name: string;
  profile_picture: string;
  email: string;
  phone_number: string;
  occupation: string;
  date_of_birth: Date;
  marital_status: string;
  gender: string;
  address: string;
  account_type: string;
  registration_date: string;
  total_balance: number;
  available_balance: number;
  IMF_code: string;
}

interface GeneralTypes {
  userData: UserData | null;
  url: string;
}

const GeneralContext = createContext<GeneralTypes | undefined>(undefined);

export default function GeneralProvider({ children }: PropsWithChildren) {
  

    // fetch user
    const { user } = useClerk();
    const url = "https://boa-server-0p7e.onrender.com";
    const [userData, setUserData] = useState<UserData | null>(null);

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
