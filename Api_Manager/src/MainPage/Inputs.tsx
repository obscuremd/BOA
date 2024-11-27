import { useClerk } from "@clerk/clerk-react"
import { useState } from "react"
import { useGen } from "../Providers/GeneralProvider"

const Inputs = () => {

    const {user} = useClerk()
    const [state, setState] = useState(0)
    const { userData } = useGen()

  return (
    <div className="w-full flex flex-col gap-5">
        <div className="flex items-center gap-5">
            <img src="https://images.unsplash.com/photo-1683231097406-b02b25e92c0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1aXNuZXNzfGVufDB8fDB8fHww" alt="" className="w-20 h-20 rounded-full"/>
            <div>
                <p>Account Number: {user?.username}</p>
                <p>Full Name: {user?.username}</p>
            </div>
        </div>
        <div>
            <div className="join">
                <button onClick={()=>setState(0)} className="btn join-item">Edit Profile</button>
                <button onClick={()=>setState(1)} className="btn join-item">Add History</button>
            </div>
        </div>
        {
            state === 0 &&
            <>
                <div className="flex gap-5 w-full">
                    <InputsOne/>
                    <InputsTwo/>
                </div>
                <button className="btn btn-neutral w-full">
                    Update Account
                </button>
            </>
        }
        {
            state === 1 &&
            <>
                <div className="flex gap-5 w-full">
                </div>
                <button className="btn btn-neutral w-full">
                    Change History
                </button>
            </>
        }
    </div>

  )
}

const InputsOne =()=>{

    const { userData } = useGen()

    return(
        <div className='flex flex-col gap-5 w-full'>
            <label className="form-control w-full max-w-xs">
                <span className="label-text">Select a Profile Picture</span>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Full name
                <input type="text" className="grow" placeholder={userData?.full_name} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder={userData?.email} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Phone Number
                <input type="text" className="grow" placeholder={userData?.phone_number} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Occupation
                <input type="text" className="grow" placeholder={userData?.occupation} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Date Of Birth
                <input type="text" className="grow" placeholder={`DD-MM-YYYY - ${userData?.date_of_birth}`} />
            </label>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>{userData?.marital_status || 'Marital Status'}</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
            </select>
        </div>
    )
}

const InputsTwo =()=>{

    const { userData } = useGen()

    return(
        <div className='flex flex-col gap-5 w-full'>
            <label className="input input-bordered flex items-center gap-2">
                Address
                <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>{userData?.gender || 'Gender'}</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not to Say</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>{userData?.account_type || 'Account Type'}</option>
                <option>Savings</option>
                <option>Checkings</option>
                <option>Loan</option>
            </select>
            <label className="input input-bordered flex items-center gap-2">
                Registration Date
                <input type="text" className="grow" placeholder={`DD-MM-YYYY - ${userData?.registration_date}`} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Total Balance
                <input type="text" className="grow" placeholder="$0" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Available Balance
                <input type="text" className="grow" placeholder="$0" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                IMF Code
                <input type="text" className="grow" placeholder="$0" />
            </label>
            
            
        </div>
    )
}

export default Inputs