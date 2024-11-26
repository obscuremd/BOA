import Login from '../../Component/Login'
import Card from '../../Component/Card'
import { IsMobile } from '../../Exports/Constatants'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Logo from '../../assets/boaBlack.png'

const Auth = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 p-5 items-center justify-center w-full min-h-screen'>
        {/* <Login/> */}
        <img className='w-96' src={Logo} alt="" />
        <SignIn/>
        {/* <SignUp/> */}
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