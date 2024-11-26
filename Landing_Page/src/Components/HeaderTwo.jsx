import { UserCircleIcon } from "@heroicons/react/16/solid"
import { Button } from "@material-tailwind/react"

const HeaderTwo = () => {
  return (
    <div className='bg-[#F8FAFC] text-[#8195c9] text-base font-bold w-full py-[1%] md:px-[15%] flex justify-between items-center'>
        <p>Loan Types</p>
        <hr className="h-[25px] w-[1px] bg-[#00000024]" />
        <p>FAQ</p>
        <hr className="h-[25px] w-[1px] bg-[#00000024]" />
        <p>Resources</p>
        <hr className="h-[25px] w-[1px] bg-[#00000024]" />
        <p>Make A Payment</p>
        <hr className="h-[25px] w-[1px] bg-[#00000024]" />
        <p>Disclosure</p>
        <hr className="h-[25px] w-[1px] bg-[#00000024]" />
        <p>About</p>
        <hr className="h-[25px] w-[1px] bg-[#00000024]" />


        <Button variant="gradient" color="blue" className="flex items-center gap-3">
            <UserCircleIcon className="w-[20px] h-[20px]"/>My Account
        </Button>
        <Button variant="gradient" color="blue-gray" className="flex items-center gap-3">
            <UserCircleIcon className="w-[20px] h-[20px]"/>Apply Now
        </Button>
    </div>
  )
}

export default HeaderTwo