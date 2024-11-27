import { createContext, PropsWithChildren, useContext, useState } from "react";

interface GeneralTypes{

}


const GeneralContext = createContext<GeneralTypes | undefined>(undefined)

export default function GeneralProvider({children}:PropsWithChildren) {

    const [from, setFrom] = useState<string[]>([])
    const [to, setTo] = useState<string[]>([])
    const [amount, setAmount] = useState('')

    return(
        <GeneralContext.Provider value={{from, setFrom,to, setTo, amount, setAmount}}>
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