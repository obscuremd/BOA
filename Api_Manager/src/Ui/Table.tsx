import axios from "axios"
import { useEffect, useState } from "react"
import { useGen } from "../Providers/GeneralProvider"
import AddHistory from "./AddHistory"
import { Xmark } from "iconoir-react"

const Table = () => {

    const [history , setHistory] = useState<History[]>([])
    const{userData, url} = useGen()

    useEffect(()=>{
        const fetchUsers =async()=>{
          const res = await axios.get(`${url}/history/user/${userData?._id}`) 
          setHistory(res.data)
          console.log('data:',res.data)
        }
    
        fetchUsers()
      },[])

      const deleteHistory = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this transaction?")) {
          try {
            // Optimistic update: Remove the item from the UI immediately
            setHistory(history.filter((item) => item._id !== id));
      
            await axios.delete(`${url}/history/${id}`);
      
            // If successful, the item is removed from the server and the UI update is permanent.
            // If an error occurs, you can revert the UI update or display an error message.
          } catch (error) {
            console.error("Error deleting history:", error);
            // Handle error, e.g., display an error message to the user
            // Consider reverting the optimistic UI update if necessary
          }
        }
      };

  return (
    <div>
        <AddHistory/>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>date</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                
                {/* row 2 */}
                {
                    history.map((item, index)=>(
                        <tr className="hover">
                            <th>{index}</th>
                            <td>{item.title}</td>
                            <td>{item.amount}</td>
                            <td>{item.date}</td>
                            <td>{item.type?'credit' :'debit'}</td>
                            <td>
                                <button className="btn" onClick={()=>deleteHistory(item._id)}>
                                    <Xmark/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table