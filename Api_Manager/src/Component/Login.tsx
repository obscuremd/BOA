import { useState } from 'react';
import Logo from '../assets/boa filled.png'
import { IsMobile } from '../Exports/Constatants'
import Card from './Card'


const Login = () => {

    const [buttonState, setButtonState] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const auth = getAuth();
    
    const Signup = async () => {
        email
      };
    
      const Login = async () => {
        password
      };

  return (
    <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <img className='w-96' src={Logo} alt="" />
                {!IsMobile && 
                    <div className='flex flex-col gap-5 '>
                        <p className='text-[#005AC4]'>My Balance</p>
                        <div className='flex flex-wrap gap-5'>
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
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                <div className="form-control">
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="User Id" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Save User Id</span>
                        <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Set up Face id</span>
                        <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                </div>
                <label onClick={()=>setButtonState(!buttonState)} className="label">
                    <p className="label-text-alt link link-hover">{buttonState ?'Sign Up?': 'Log In?'}</p>
                </label>

                <div className="form-control mt-6">
                    { buttonState
                    ?<button onClick={Login} className="btn btn-neutral">Login</button>
                    :<button onClick={Signup} className="btn btn-neutral">Sign Up</button>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login


