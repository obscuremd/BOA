import { SignIn, SignUp } from '@clerk/clerk-react'
import axios from 'axios'
import { Plus } from 'iconoir-react'
import { useEffect, useState } from 'react'
import Form from './Form'
import { useGen } from '../Providers/GeneralProvider'

const Menu = () => {

  // constants
  const [users, setUsers] = useState<Users[]>([])
  const {url} = useGen()



  const showModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  useEffect(()=>{
    const fetchUsers =async()=>{
      const res = await axios.get(`${url}/user/`) 
      setUsers(res.data)
      console.log('data:',res.data)
    }

    fetchUsers()
  },[])

  return (
    <div className=' flex flex-col gap-2'>
        <div>
          <button className="btn w-full" onClick={showModal}>
            <Plus/>
            Add Account
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
              </form>
              <Form />
            </div>
          </dialog>
        </div>
        {
              users.map((item)=>(
                <button className="avatar">
                    <div className="mask mask-hexagon w-12">
                      <img src={item.profile_picture} />
                    </div>
                </button>
              ))
             }
    </div>
  )
}




export default Menu