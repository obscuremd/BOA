import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PayBills = () => {

    const [p, setP] = useState(0)

    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            setP(1)
            setTimeout(()=>{
                navigate('/')
            },5000)
        },2000)
        
    },[])

  return (
    <div className='h-[50vh] flex justify-center items-center text-center font-bold'>
        {p === 0 ?
        <button className="btn btn-square">
            <span className="loading loading-spinner"></span>
        </button>
        :
        (
            <div>
                <p>You have not yet provided the billing cycles.</p>
                <p>You are being redirected home.</p>
            </div>
        )}
    </div>
  )
}

export default PayBills