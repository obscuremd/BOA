
const DepositChecks = () => {
  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <p className="uppercase font-bold text-lg">Deposit Checks</p>
      <img 
        src="https://plus.unsplash.com/premium_photo-1661757762481-676c2690d8ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D" 
        alt="" 
        className="rounded-xl"/>
      
      <p className="opacity-95">
        Securely deposit checks with ease using our mobile app. Simply take a photo of the check, select your bank account, enter the amount, and confirm the transaction. It's quick, convenient, and hassle-free!
      </p>

      <div>
        <button className="btn btn-ghost">Learn More</button>
        <button className="btn btn-neutral">Get Started</button>
      </div>
      <img 
        src="https://plus.unsplash.com/premium_vector-1728010223937-52088129991c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhbnxlbnwwfHwwfHx8MA%3D%3D" 
        alt="" 
        className="rounded-xl"/>
    </div>
  )
}

export default DepositChecks