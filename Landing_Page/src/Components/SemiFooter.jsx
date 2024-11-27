import { Button } from '@material-tailwind/react'
import React from 'react'

const SemiFooter = ({ setActive }) => {
  return (
    <div className='flex flex-col items-center text-center gap-6'>
      <p className='text-3xl md:text-6xl font-bold'>Don't let financial limitations hold you back!</p>
      <p className='md:text-2xl'>Get started with Eagle County Bank today and enjoy easy access to the services you need to manage your finances effectively.</p>

      <Button onClick={() => setActive(1)} variant="gradient" color="blue" className="flex items-center gap-3 md:text-xl">
        Get Started
      </Button>
    </div>

  )
}

export default SemiFooter