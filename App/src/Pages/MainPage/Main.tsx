import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accounts from './Screens/Accounts'
import BottomNav from './Components/BottomNav'
import PayTransfer from './Screens/PayTransfer'
import DepositChecks from './Screens/DepositChecks'
import Trade from './Screens/Trade'
import Navbar from './Components/Navbar'
import Transfers from './Screens/Transfers'
import PayBills from './Screens/PayBills'
import WireTransfers from './Screens/WireTransfers'
import Zelle from './Screens/Zelle'
import Profile from './Screens/Profile'
import axios from 'axios'
import { useGen } from '../../Providers/GeneralProvider'
import { useClerk } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'

const Main = () => {

  const {url, setUserData} = useGen()
  const {user} = useClerk()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{

    const getUserData = async()=>{
      setLoading(true)
      try {
        const response = await axios.post(`${url}/user/login`,{
          account_number:user?.username
        })
        setUserData(response.data.user)
      } catch (error) {
        alert(error)
      } finally{
        setLoading(false)
      }
      
    }
    getUserData()
  },[])

  if(loading){
    return <div>loading ...</div>
  }

  return (
    <BrowserRouter>
        <div className='flex flex-col gap-10'>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Accounts/>}/>
              <Route path='/transfer' element={<PayTransfer/>}/>
              <Route path='/deposit-checks' element={<DepositChecks/>}/>
              <Route path='/trade' element={<Trade/>}/>
              
              <Route path='/profile' element={<Profile/>}/>
              
              <Route path='/transfers' element={<Transfers/>}/>
              <Route path='/bills' element={<PayBills/>}/>
              <Route path='/wire' element={<WireTransfers/>}/>
              <Route path='/zelle' element={<Zelle/>}/>
          </Routes>
          <BottomNav/>
        </div>
    </BrowserRouter>
  )
}

export default Main