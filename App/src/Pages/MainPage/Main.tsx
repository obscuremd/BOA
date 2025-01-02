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

const Main = () => {
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