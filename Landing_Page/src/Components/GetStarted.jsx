import { CardWithLink } from './Card'
import { BanknotesIcon, ComputerDesktopIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const GetStarted = () => {
    return (
        <div id='get-started' className='flex flex-col gap-5 items-center'>
            <p className='text-3xl font-semibold'>Start Banking with us for</p>

            <div className='flex flex-col md:flex-row gap-5'>
                <CardWithLink
                    image={"https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D"}
                    Text1={'Hassle-Free Account Setup'}
                    paragraph={'Open a new account online in just a few simple steps.'}
                />
                <CardWithLink
                    image={"https://plus.unsplash.com/premium_photo-1680643612095-2a0371d44983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhbnNmZXJ8ZW58MHx8MHx8fDA%3D"}
                    Text1={'Instant Fund Transfers'}
                    paragraph={'Send and receive money instantly with our secure platform.'}
                />
                <CardWithLink
                    image={"https://plus.unsplash.com/premium_photo-1679397743807-fae5c6a21ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVuZHN8ZW58MHx8MHx8fDA%3D"}
                    Text1={'Access Your Funds Anytime'}
                    paragraph={'Enjoy seamless access to your account 24/7 with our mobile app.'}
                />
            </div>
        </div>
    )
}

export default GetStarted