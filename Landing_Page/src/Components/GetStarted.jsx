import { CardWithLink } from './Card'
import { BanknotesIcon, ComputerDesktopIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const GetStarted = () => {
    return (
        <div id='get-started' className='flex flex-col gap-5 items-center'>
            <p className='text-3xl font-semibold'>Start Banking with us for</p>

            <div className='flex flex-col md:flex-row gap-5'>
                <CardWithLink
                    icon={<ComputerDesktopIcon />}
                    Text1={'Hassle-Free Account Setup'}
                    paragraph={'Open a new account online in just a few simple steps.'}
                />
                <CardWithLink
                    icon={<BanknotesIcon />}
                    Text1={'Instant Fund Transfers'}
                    paragraph={'Send and receive money instantly with our secure platform.'}
                />
                <CardWithLink
                    icon={<CreditCardIcon />}
                    Text1={'Access Your Funds Anytime'}
                    paragraph={'Enjoy seamless access to your account 24/7 with our mobile app.'}
                />
            </div>
        </div>
    )
}

export default GetStarted