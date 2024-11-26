import React, { useState } from 'react'
import { useGen } from '../Providers/GeneralProvider'

interface ModalProps {
    from: string,
    values: Array<string>
    data?: Array<Array<string>>
    id: string
    type : 'from' | 'to' | 'amount'
}

const Modal:React.FC<ModalProps> = ({from, values, data, id, type}) => {

    const {setAmount, setFrom, setTo} = useGen()

    const [value, setValue] = useState(values)
    const [value1, setValue1] = useState('Bank')
    const [value2, setValue2] = useState('0123456789')
    const [amounts, setAmounts] = useState('0123456789')


  return (
    <div>
        {/* The button to open modal */}    
        <label htmlFor={id} className="btn w-full border-blue-gray-200 flex justify-between">
            <p className='text-lg'>{from}</p>
            <div>
                <p className='text-md'>{value[0]}</p>
                {type !== 'amount' && <p className='text-xs opacity-90'>{value[1]}</p>}
            </div>
        </label>

        {/* Put this part before </body> tag */}
        {type == 'from' &&
            <>
                <input type="checkbox" id={id} className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                            {data && data.map((item, index)=>(
                                <div key={index} className="modal-action">
                                    <label onClick={()=>[setValue(item),setFrom(item)]} htmlFor={id} className="btn w-full flex-col">
                                        <p className='text-md'>{item[0]}</p>
                                        <p className='text-xs opacity-90'>{item[1]}</p>
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </>
        }
        {type == 'to' &&
            <>
                <input type="checkbox" id={id} className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Hello!</h3>
                        <p className="py-4">Kindly Confirm what bank you'd like to transfer to</p>
                        <div className="form-control">
                            <input onChange={(e)=>setValue1(e.target.value)} type="text" placeholder={value1} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input onChange={(e)=>setValue2(e.target.value)} type="number" placeholder={value2} className="input input-bordered" required />
                        </div>
                        <div className="modal-action">
                            <label htmlFor={id} onClick={()=>[(setValue([value1,value2])), setTo([value1,value2])]} className="btn w-full flex-col">
                                Confirm
                            </label>
                        </div>
                    </div>
                </div>
            </>
        }
        {type == 'amount' &&
            <>
                <input type="checkbox" id={id} className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Hello!</h3>
                        <p className="py-4">Kindly set the amount you'd like to transfer to</p>
                        <div className="form-control">
                            <input onChange={(e)=>setAmounts(e.target.value)} type="number" placeholder={value2} className="input input-bordered" required />
                        </div>
                        <div className="modal-action">
                            <label htmlFor={id} onClick={()=>[(setValue([amounts,value2])), setAmount(amounts)]} className="btn w-full flex-col">
                                Confirm
                            </label>
                        </div>
                    </div>
                </div>
            </>
        }
    </div>
  )
}

export default Modal