import { SignIn, SignUp } from '@clerk/clerk-react'
import axios from 'axios'
import { Plus } from 'iconoir-react'
import { useEffect, useState } from 'react'
import Form from './Form'
import { useGen } from '../Providers/GeneralProvider'

const Menu = () => {

  return (
    <div className=' flex flex-col gap-2'>
        <Modal/>
        <SignInModal/>
    </div>
  )
}

const Modal =()=>{

  const [step, setStep] = useState(0)

  const showModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return(
    <div>
      <button className="btn w-full" onClick={showModal}>
        <Plus/>
        Add Account
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              Please wait for till you see other created accounts before creating a new one
              <br/>it may take a bit to get them for you

          </form>
          {step ===1 && <SignUp/>}
          {step ===0 && <Form setStep={setStep}/>}
        </div>
      </dialog>
    </div>
  )
}

const SignInModal =()=>{

  const [users, setUsers] = useState<Users[]>([])
  const {url} = useGen()

  useEffect(()=>{
    const fetchUsers =async()=>{
      const res = await axios.get(`${url}/user/`) 
      setUsers(res.data)
      console.log('data:',res.data)
    }

    fetchUsers()
  },[])


  const showModal = () => {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return(
    <div>
      <div className='flex flex-wrap gap-5'>
        
        {
              users.map((item)=>(
                <div className="card bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img
                      className='w-96 h-32 object-cover'
                      src={item.profile_picture}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">full name: {item.full_name}</h2>
                    <p>account number: {item.account_number}</p>
                    <p>password: {item.password}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary w-full" onClick={showModal}>Edit Account</button>
                    </div>
                  </div>
                </div>
              ))
             }
            
      </div>
      
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box flex flex-col items-center gap-5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <p>Login using the Details you saved to edit the account</p>
          <SignIn/>
        </div>
      </dialog>
    </div>
  )
}

export default Menu