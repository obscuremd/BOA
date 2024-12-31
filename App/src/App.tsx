import './App.css'
import './fonts.css'
import Main from './Pages/MainPage/Main'
import Auth from './Pages/AuthPage/Auth'
import { useEffect, useState } from 'react';
import { useGen } from './Providers/GeneralProvider';
import axios from 'axios';

function App() {

  const{url, setUserData} = useGen()
  const [auth,setAuth] = useState(false)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
        const fetchUser = async () => {
          setLoading(true)
          try {
              setLoading(false)
              const response = await axios.get(`${url}/user/check-auth`);
              setAuth(response.data.success)
              setUserData(response.data);
          } catch (error) {
              setLoading(false)
              console.error("Error fetching user data:", error); // Log any errors
          }
        };

        fetchUser();
    }, []); // Add user?.username as a dependency

    if(loading){
      return(
        <div>
          loading
        </div>
      )
    }

  return (
    <div className='font-connections'>
      {auth?<Main/>:<Auth/>}
    </div>
  )
}

export default App
