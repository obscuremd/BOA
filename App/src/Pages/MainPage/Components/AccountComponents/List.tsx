import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';




interface Props {
  title: string;
  data: History[]; // Use the Transaction type for the data prop
  date: boolean;
}

const List: React.FC<Props> =({title, data, date}) => {

  const transactions = data
  const [active, setActive] = useState(false)

  return (
    <div className={` md:py-7 p-3 md:px-5 rounded-3xl flex flex-col gap-7 w-full `}>
      <div onClick={()=>setActive(!active)} className='flex items-center justify-between'>
        <p style={{fontSize:"1.2rem", fontWeight:'bold'}}>{title}</p>
      </div>
      {/* content */}

      <AnimatePresence>
        {
          transactions && transactions.map((item, index)=>(
          <motion.div initial={{y:-20}} animate={{y:0}} exit={{y:-20}} key={index} style={{fontSize:"0.8rem"}} className={` py-2 px-4 rounded-xl flex justify-between w-full items-center border-[1px] border-blue-gray-900`}>
            <p className='py-2 w-[50%]'>{item.title}</p>
            {date && <p className='opacity-50'>{item.date}</p>}
            <p style={{color:item.type?'#4AC2B3':'#A13334'}}>{item.type?'Credit':'Debit'}</p>
            <p>${item.amount}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default List
