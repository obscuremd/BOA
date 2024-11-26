import { Plus } from 'iconoir-react'
import React from 'react'

const Menu = () => {
  return (
    <div className=' flex flex-col gap-2'>
        <button className="btn w-full">
            <Plus/>
            Add Account
        </button>
        <ul className="menu md:menu-vertical menu-horizontal bg-base-200 rounded-box md:w-56 w-full">
            <li><a>John Kennedy</a></li>
            <li><a>Gwen Paltrow</a></li>
            <li><a>Kene falls   </a></li>
        </ul>
    </div>
  )
}

export default Menu