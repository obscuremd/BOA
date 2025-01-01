import { Bank, Key } from 'iconoir-react'
import Card from '../../Component/Card'
import { IsMobile } from '../../Exports/Constatants'
import Logo from '../../assets/original.svg'
import { useGen } from '../../Providers/GeneralProvider'
import { useState } from 'react'
import axios from 'axios'

const Auth = () => {

  const {url} = useGen()

  const [account_number, set_account_number] = useState('')
  const [password, set_password] = useState('')

  const[loading,setLoading] = useState(false)

  const Login =async()=>{
    setLoading(true)
    try {
      const response = await axios.post(`${url}/user/login`,{account_number,password})
      setLoading(false)
      alert('logged in successfully')
      console.log(response)
    } catch (error) {
      alert('error logging in')
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 p-5 items-center justify-center w-full min-h-screen'>
        <div className=' flex flex-col items-center gap-5 '>
          <div className="card bg-base-100 w-96 shadow-xl flex flex-col gap-5 p-5">
            <img className='w-44' src={Logo} alt="" />
            Sign in to with your account number and password
            <label className="input input-bordered flex items-center gap-2">
              <Bank/>
              <input type="text" className="grow" placeholder="0123456789" onChange={(e)=>set_account_number(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <Key/>
              <input type="password" className="grow" placeholder='password' onChange={(e)=>set_password(e.target.value)} />
            </label>
            <button className="btn btn-primary" onClick={Login}>
              {loading 
              ?<span className="loading loading-spinner loading-lg"></span>
              :'Login'}
            </button>
          </div>
        </div>
        {IsMobile && 
        <div className='flex flex-col gap-5 items-center'>
            <p className='text-[#005AC4]'>My Balance</p>
            <div className='flex flex-wrap justify-center items-center gap-5'>
              <Card image={"https://firstcu.net/wp-content/uploads/2022/11/zelle-logo.png"} text={'A safe way to send money to people you know'}/>
              <Card image={"https://cdn.pixabay.com/photo/2017/06/05/19/05/house-2374925_1280.png"} text={'Found out the value of your home'}/>
              <Card image={"https://cdn2.iconfinder.com/data/icons/media-icons-23/24/icon24pt_plans-512.png"} text={'Open an account or apply for a loan'}/>
              <Card image={"https://png.pngtree.com/png-clipart/20230902/original/pngtree-location-icon-with-map-vector-png-image_10804867.png"} text={'Thinking of buying a house?'}/>
            </div>
            <p className='text-[#005AC4]'>Location | Contact us</p>

        </div>
        }
        {!IsMobile && 
                    <div className='flex flex-col gap-5 '>
                        <p className='text-[#005AC4]'>My Balance</p>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-5'>
                                <Card image={"https://firstcu.net/wp-content/uploads/2022/11/zelle-logo.png"} text={'A safe way to send money to people you know'}/>
                                <Card image={"https://cdn.pixabay.com/photo/2017/06/05/19/05/house-2374925_1280.png"} text={'Found out the value of your home'}/>
                            </div>
                            <div className='flex gap-5'>
                                <Card image={"https://cdn2.iconfinder.com/data/icons/media-icons-23/24/icon24pt_plans-512.png"} text={'Open an account or apply for a loan'}/>
                                <Card image={"https://png.pngtree.com/png-clipart/20230902/original/pngtree-location-icon-with-map-vector-png-image_10804867.png"} text={'Thinking of buying a house?'}/>
                            </div>
                            
                        </div>
                        <p className='text-[#005AC4]'>Location | Contact Us</p>
                    </div>
                    }
    </div>
  )
}

export default Auth