import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";



  
  interface GeneralTypes {
    from: Array<string>, 
    setFrom :  React.Dispatch<React.SetStateAction<Array<string>>>,
    to: Array<string>, 
    setTo : React.Dispatch<React.SetStateAction<Array<string>>>, 
    amount: string, 
    setAmount: React.Dispatch<React.SetStateAction<string>>


    userData: Users | null;
    url: string;
  }

const GeneralContext = createContext<GeneralTypes | undefined>(undefined)

export default function GeneralProvider({children}:PropsWithChildren) {

    const [from, setFrom] = useState<string[]>([])
    const [to, setTo] = useState<string[]>([])
    const [amount, setAmount] = useState('')


    // fetch user
    const { user } = useClerk();
    const url = "https://boa-7mml.vercel.app";
    const [userData, setUserData] = useState<Users| null>(null);

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

    return(
        <GeneralContext.Provider value={{from, setFrom,to, setTo, amount, setAmount, userData, url}}>
            {children}
        </GeneralContext.Provider>
    )
}

export const useGen = () => {
    const context = useContext(GeneralContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider"); // Throw an error instead of just logging
    }
    return context; // Return the valid context
  };