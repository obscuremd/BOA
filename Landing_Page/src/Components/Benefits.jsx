import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import { useMediaQuery } from 'react-responsive';

const img = 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const Benefits = () => {

  const isMobile = useMediaQuery({ maxWidth: 960 });

  const background = {
    background: isMobile ? '#F8FAFC' : `url(${img})`,
    backgroundSize: 'cover'
  }

  return (
    <div style={background} className='md:px-[14%] px-[2%] py-[5%] flex flex-col gap-10'>
      <p className='md:text-6xl text-4xl font-bold'>What are the benefits<br />Eagle County Bank</p>

      <div className='flex flex-col gap-2'>
        <p className='flex gap-3'><CheckBadgeIcon className='w-5' /> Open accounts with as little as $50</p>
        <p className='flex gap-3'><CheckBadgeIcon className='w-5' /> No hidden fees or minimum balance requirements</p>
        <p className='flex gap-3'><CheckBadgeIcon className='w-5' /> Flexible savings and investment options</p>
        <p className='flex gap-3'><CheckBadgeIcon className='w-5' /> Secure and fast online transactions</p>
      </div>

      <p className='underline'>Get Started With Eagle County Bank</p>
    </div>

  )
}

export default Benefits