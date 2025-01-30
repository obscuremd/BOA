import axios from "axios";
import { createContext, PropsWithChildren, useContext, useState } from "react";

  interface GeneralTypes {
    from: Array<string>, 
    setFrom :  React.Dispatch<React.SetStateAction<Array<string>>>,
    to: Array<string>, 
    setTo : React.Dispatch<React.SetStateAction<Array<string>>>, 
    amount: string, 
    setAmount: React.Dispatch<React.SetStateAction<string>>
    
    logout:()=>void

    userData: Users | null;
    setUserData: React.Dispatch<React.SetStateAction<Users | null>>
    history: History[];
    setHistory: React.Dispatch<React.SetStateAction<History[]>>
    url: string;
  }

const GeneralContext = createContext<GeneralTypes | undefined>(undefined)

export default function GeneralProvider({children}:PropsWithChildren) {

    const [from, setFrom] = useState<string[]>([])
    const [to, setTo] = useState<string[]>([])
    const [amount, setAmount] = useState('')


    // fetch user
    const url = "https://boa-7mml.vercel.app";
    const [userData, setUserData] = useState<Users| null>(null);
    const [history, setHistory] = useState<History[]>([])

    const logout =async()=>{
      try {
        const response = await axios.post(`${url}/user/logout`,{withCredentials:true})
        console.log(response)
        alert('Logged Out Successfully')
      } catch (error) {
        console.log(error)
        alert('error Logging out')
      }
  }

    

    return(
        <GeneralContext.Provider value={{from, setFrom,to, setTo, amount, setAmount, userData,setUserData, url, history, setHistory,logout}}>
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