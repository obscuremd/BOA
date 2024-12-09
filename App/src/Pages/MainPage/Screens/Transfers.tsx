import { useState } from 'react'
import { useGen } from '../../../Providers/GeneralProvider'
import Modal from '../../../Ui/Modal'
import { CheckCircle } from 'iconoir-react'
import { useNavigate } from 'react-router-dom'

const Transfers = () => {

    const navigate = useNavigate()

    const {amount, from, to, setAmount, setFrom, setTo, userData} = useGen()

    const [index, setIndex] = useState(0)

    const [loading, setLoading] = useState(false)

    const formatWithCommas = (balance: number) => {
        if (!balance || balance <= 0) return "0";
        return balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
      // Format the total and available balances
      const formattedAvailableBalance = formatWithCommas(userData?.available_balance || 0);

    const data1 = [
        [`Checking - ${userData?.account_number}`,`Available balance - $${formattedAvailableBalance}`],
        [`Savings - ${userData?.account_number}`,`Available balance - $${formattedAvailableBalance}`],
        [`Visa Signature - ${userData?.account_number}`,`Available balance - $${formattedAvailableBalance}`],
    ]

    const confirm = () =>{
        if(amount === '' || from.length === 0 || to.length === 0){
            console.log('cant, continue')
        }else{
            setIndex(1)
        }
    }

    const payment =()=>{
        setLoading(true)
        setTimeout(()=>{
            setIndex(2)
        },5000)
    }

    const done =()=>{
        setAmount('')
        setFrom([])
        setTo([])
        navigate('/')
    }
    

  return (
    <div className='flex flex-col justify-between px-5 h-[70vh]'>
        {
            index === 0 &&
            <>
                <div className='flex flex-col gap-2'>
                    <Modal type='from' id="my_modal_6" from='From' data={data1} values={['Choose account', 'Available balance']}/>
                    <Modal type='to' id="my_modal_7" from='To' values={['Choose account', 'Available balance']}/>
                    <Modal type='amount' id="my_modal_8" from='Amount' values={['Choose account', 'Available balance']}/>
                </div>
                <button onClick={confirm} className="btn btn-neutral">Confirm</button>
            </>
        }
        {
            index === 1 &&
            <>
                <div className='flex flex-col gap-2'>
                    <button className='p-3 rounded-xl border-blue-gray-200 border-[1px] flex justify-between'>
                        <p className='text-lg'>From:</p>
                        <div>
                            <p className='text-md'>{from[0]}</p>
                            <p className='text-xs opacity-90'>{from[1]}</p>
                        </div>
                    </button>
                    <button className='p-3 rounded-xl border-blue-gray-200 border-[1px] flex justify-between'>
                        <p className='text-lg'>To:</p>
                        <div>
                            <p className='text-md'>{to[0]}</p>
                            <p className='text-xs opacity-90'>{to[1]}</p>
                        </div>
                    </button>
                    <button className='p-3 rounded-xl border-blue-gray-200 border-[1px] flex justify-between'>
                        <p className='text-lg'>Amount:</p>
                        <div>
                            <p className='text-md'>${amount}</p>
                        </div>
                    </button>
                </div>
                <button onClick={payment} className="btn btn-neutral">
                    {loading
                        ?<span className="loading loading-spinner"></span>
                        :'Make Payment'}
                </button>
            </>
        }
        {
            index === 2 &&
            <div className='h-[70vh] w-full flex flex-col justify-between'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <CheckCircle className='text-6xl text-green-500'/>
                    <p className='flex flex-col justify-center items-center text-xl font-bold'>Your Transfer Is Confirmed </p>
                    <p className='flex flex-col justify-center items-center text-center text-md'>Your receipt has been successfully sent to your email. Thank you for choosing to bank with us.</p>
                </div>
                {/* <div className='flex flex-col gap-2'>
                    <button className='p-3 rounded-xl border-blue-gray-200 border-[1px] flex justify-between'>
                        <p className='text-lg'>From:</p>
                        <div>
                            <p className='text-md'>{from[0]}</p>
                            <p className='text-xs opacity-90'>{from[1]}</p>
                        </div>
                    </button>
                    <button className='p-3 rounded-xl border-blue-gray-200 border-[1px] flex justify-between'>
                        <p className='text-lg'>To:</p>
                        <div>
                            <p className='text-md'>{to[0]}</p>
                            <p className='text-xs opacity-90'>{to[1]}</p>
                        </div>
                    </button>
                    <button className='p-3 rounded-xl border-blue-gray-200 border-[1px] flex justify-between'>
                        <p className='text-lg'>Amount:</p>
                        <div>
                            <p className='text-md'>${amount}</p>
                        </div>
                    </button>
                </div> */}
                <button onClick={done} className="btn btn-neutral">Done</button>
            </div>
        }
    </div>
  )
}

export default Transfers