import React from 'react';
import Logo from '../assets/logo white copy.png'
import { useClerk } from '@clerk/clerk-react';

interface CollapseProps {
    primary1:string,
    primary2:string,
    secondary:string
}

const Collapse:React.FC<CollapseProps> = ({primary1, primary2, secondary }) => {

  const {user} = useClerk()

  return (
    <div
        tabIndex={0}
        className={`bg-blue-gray-900 text-white p-5 focus:bg-blue-gray-700 focus:text-white collapse`}>
            <div className=" text-xl font-medium flex justify-between">
                <p>{primary1}</p>
                <p>${primary2}</p>
            </div>
            <div className="">
                  <div className="flex justify-between">
                    <p className="font-bold">Eagle County Bank</p>
                    <img className="w-12" src={Logo} alt="" />
                  </div>

                  <div className="py-5 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p>My Checking - {user?.username}</p>
                      <p>${secondary}</p>
                    </div>
                    <hr className="h-[1px] bg-gray-200" />
                    <div className="flex justify-between">
                      <p>My Checking - {user?.username}</p>
                      <p>${secondary}</p>
                    </div>
                  </div>
            </div>
    </div>
  )
}

export default Collapse