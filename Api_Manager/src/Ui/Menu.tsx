import { Plus } from 'iconoir-react'
import Form from './Form'
import { useGen } from '../Providers/GeneralProvider'

const Menu = () => {

  // constants
  
  const { setUserData, users} = useGen()

  const showModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };



  return (
    <div className=' flex overflow-scroll md:overflow-hidden md:flex-col gap-2'>
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
                <button className="btn btn-primary flex flex-col" onClick={()=>setUserData(item)}>
                    <div className="mask mask-hexagon w-6">
                      <img src={item.profile_picture} />
                    </div>
                    <div>
                      <p className='text-nowrap'>{item.full_name}</p>
                      <p>{item.account_number}</p>
                    </div>
                </button>
              ))
             }
    </div>
  )
}




export default Menu