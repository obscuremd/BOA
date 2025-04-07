import './App.css'
import './fonts.css'
import Main from './Pages/MainPage/Main'
import Auth from './Pages/AuthPage/Auth'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

function App() {



  return (
    <div className='font-connections'>
      <SignedIn>
        <Main/>
      </SignedIn>
      <SignedOut>
        <Auth/>
      </SignedOut>
    </div>
  )
}

export default App
