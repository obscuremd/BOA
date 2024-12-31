import axios from 'axios'
import { useState } from 'react'
import { useGen } from '../Providers/GeneralProvider'

const AddHistory = () => {

    const {userData,url} = useGen()

    const [loading, setLoading] = useState(false)

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState(false)
      
    const add =async()=>{
        setLoading(true)
        try {
            const res = await axios.post(`${url}/history/create`,{
                userId:userData?._id,
                title,
                amount,
                date,
                type
            }) 
            console.log('data:',res.data)
            setLoading(false)
            setTimeout(()=>window.location.reload(),2000)

        } catch (error) {
            console.log(error)
        }
       
      }
  
  
    const showModal = () => {
      const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    };
    return(
      <div>
        <div className='flex flex-col gap-5'>
            <button className="btn" onClick={showModal}>
                Add History
            </button>
        </div>
        
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <div className="flex flex-col gap-5">
                <label className="input input-bordered flex items-center gap-2">
                    Title
                    <input type="text" className="grow" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Amount
                    <input type="text" className="grow" placeholder="Amount"  onChange={(e)=>setAmount(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Date Of Birth
                    <input type="date" className="grow" placeholder="Date"  onChange={(e)=>setDate(e.target.value)} />
                </label>
                <select
                        name="marital_status"
                        className="select select-bordered w-full max-w-xs"
                    >
                        <option disabled selected>
                         Status
                        </option>
                        <option onClick={()=>setType(true)}>Credit</option>
                        <option onClick={()=>setType(false)}>Debit</option>
                        <option>Pending</option>
                    </select>

                <button className="btn btn-active" onClick={add}>
                    {loading 
                    ?<span className="loading loading-spinner loading-lg"></span>
                    :'Next'}
                </button>
                </div>

          </div>
        </dialog>
      </div>
    )
}

export default AddHistory