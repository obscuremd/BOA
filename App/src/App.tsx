import './App.css'
import './fonts.css'
import Main from './Pages/MainPage/Main'
import Auth from './Pages/AuthPage/Auth'
import { useEffect, useState } from 'react';
import { useGen } from './Providers/GeneralProvider';
import axios from 'axios';

function App() {

  axios.defaults.withCredentials = true;

  const{url, setUserData, setHistory} = useGen()
  const [auth,setAuth] = useState(false)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
        const fetchUser = async () => {
          setLoading(true)
          try {
              setLoading(false)
              const response = await axios.get(`${url}/user/check-auth`);
              console.log(response)
              setAuth(response.data.success)
              setUserData(response.data.user);

              const res = await axios.get(`${url}/history/user/${response.data.user._id}`) 
              setHistory(res.data)
              setLoading(false)
      
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
