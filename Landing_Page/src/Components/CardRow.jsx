import { motion } from "motion/react"

const CardRow = () => {
  return (
    <div id='about-us' className='flex flex-col items-center text-center'>

      <div className='flex flex-col gap-6 items-start'>
        <div className='flex flex-col gap-3'>
          <div className='bg-blue-300 h-2 w-[50%] rounded-full' />
          <p className='md:text-5xl text-4xl font-semibold'> About Us</p>
        </div>
        <p className='text-lg text-start border-b-[1px] pb-10 mb-10'>Need quick solutions for your banking needs? Eagle County Bank provides fast and easy access to modern banking services. Whether its managing your accounts, making transfers, or accessing support, our streamlined process ensures banking without the hassle. Convenience, speed, and simplicity—right at your fingertips!</p>
      </div>

      <div className='flex flex-col md:flex-row gap-5'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col gap-2 items-start'>
          <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='rounded-3xl' />
          <p className='text-lg'>We take care of you</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col gap-2 items-start'>
          <img src="https://plus.unsplash.com/premium_photo-1661313626999-90d230cabf8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D" alt="" className='rounded-3xl' />
          <p className='text-lg'>No documents needed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col gap-2 items-start'>
          <img src="https://plus.unsplash.com/premium_photo-1661313685117-fc961baf8121?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='rounded-3xl' />
          <p className='text-lg'>Fast and easy loans</p>
        </motion.div>

      </div>


    </div>
  )
}

export default CardRow