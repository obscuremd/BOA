import { SignUp } from '@clerk/clerk-react'
import { Plus } from 'iconoir-react'

const Menu = () => {
  return (
    <div className=' flex flex-col gap-2'>

        <Modal/>
        <ul className="menu md:menu-vertical menu-horizontal bg-base-200 rounded-box md:w-56 w-full">
            <li><a>John Kennedy</a></li>
            <li><a>Gwen Paltrow</a></li>
            <li><a>Kene falls   </a></li>
        </ul>
    </div>
  )
}

const Modal =()=>{

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
          </form>
          <SignUp/>
        </div>
      </dialog>
    </div>
  )
}

export default Menu