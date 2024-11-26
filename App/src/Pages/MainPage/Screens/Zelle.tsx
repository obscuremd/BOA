import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Zelle = () => {

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
                <p>Zelle is not currently Available</p>
                <p>You are being redirected home.</p>
            </div>
        )}
    </div>
  )
}

export default Zelle