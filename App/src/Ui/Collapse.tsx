import React from 'react';
const Logo = 'https://companieslogo.com/img/orig/BAC-e7995069.png?t=1720244490'

interface CollapseProps {
    primary1:string,
    primary2:string,
    secondary:string
}

const Collapse:React.FC<CollapseProps> = ({primary1, primary2 }) => {
  return (
    <div
        tabIndex={0}
        className={`bg-blue-gray-900 text-white p-5 focus:bg-blue-gray-700 focus:text-white collapse`}>
            <div className=" text-xl font-medium flex justify-between">
                <p>{primary1}</p>
                <p>{primary2}</p>
            </div>
            <div className="">
                  <div className="flex justify-between">
                    <p className="font-bold">Bank Of America</p>
                    <img className="w-12" src={Logo} alt="" />
                  </div>

                  <div className="py-5 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                    <hr className="h-[1px] bg-gray-200" />
                    <div className="flex justify-between">
                      <p>My Checking - 1234</p>
                      <p>$2,400.00</p>
                    </div>
                  </div>
            </div>
    </div>
  )
}

export default Collapse