
const Inputs = () => {
  return (
    <div className="w-full flex flex-col gap-10">
        <div className="flex gap-5 w-full">
            <InputsOne/>
            <InputsTwo/>
        </div>
        <button className="btn btn-neutral w-full">
            Update Account
        </button>
    </div>

  )
}

const InputsOne =()=>{
    return(
        <div className='flex flex-col gap-5 w-full'>
            <label className="form-control w-full max-w-xs">
                <span className="label-text">Select a Profile Picture</span>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Full name
                <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="daisy@site.com" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Phone Number
                <input type="text" className="grow" placeholder="123456789" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Occupation
                <input type="text" className="grow" placeholder="example - doctor" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Date Of Birth
                <input type="text" className="grow" placeholder="DD-MM-YYYY" />
            </label>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
            </select>
        </div>
    )
}

const InputsTwo =()=>{
    return(
        <div className='flex flex-col gap-5 w-full'>
            <label className="input input-bordered flex items-center gap-2">
                Address
                <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not to Say</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Account Type</option>
                <option>Savings</option>
                <option>Checkings</option>
                <option>Loan</option>
            </select>
            <label className="input input-bordered flex items-center gap-2">
                Registration Date
                <input type="text" className="grow" placeholder="DD-MM-YYYY" />
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