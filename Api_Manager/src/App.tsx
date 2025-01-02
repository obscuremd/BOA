import './App.css'
import './fonts.css'
import Main from './MainPage/Main'
import { useGen } from './Providers/GeneralProvider'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(false);

  const {setUsers, url} = useGen()

    useEffect(()=>{
    const fetchUsers =async()=>{
      setLoading(true)
      try {
        const res = await axios.get(`${url}/user/`) 
        setUsers(res.data)
        console.log('data:',res.data)
        setLoading(false)
      } catch (error) {
        alert('error')
        console.log(error)
        setLoading(false)
      }
    }

    fetchUsers()
  },[])

  return (
    <div className='font-connections'>
          {
            loading 
            ?"Loading ..."
            :<Main/>
          }
    </div>
  )
}

export default App
