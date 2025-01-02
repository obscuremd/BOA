import { useGen } from "../../../Providers/GeneralProvider"

const Profile = () => {

  const { userData, logout } = useGen()

  return (
    <div className="px-2 flex flex-col gap-5">
      <div className="flex items-center">
        <div className="mask mask-hexagon w-16">
          <img src={userData?.profile_picture} />
        </div>
        <div>
          <p className="text-xl font-bold">{userData?.full_name}</p>
          <p>{userData?.account_number}</p>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Balance</div>
          <div className="stat-value text-primary">${userData?.total_balance}</div>
          <div className="stat-desc">Balance before Deductions</div>
        </div>

        <div className="stat">
          <div className="stat-title">Available Balance</div>
          <div className="stat-value text-secondary">${userData?.available_balance}</div>
          <div className="stat-desc">Balance after deductions</div>
        </div>
      </div>


      <div className="stats stats-vertical shadow">
        <div className="stat">
          <div className="stat-title">Full Name:</div>
          <div className="stat-desc">{userData?.full_name}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Account Number:</div>
          <div className="stat-desc">{userData?.account_number}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Gender:</div>
          <div className="stat-desc">{userData?.gender}</div>
        </div>
      </div>
      
      <button onClick={logout} className="btn btn-secondary">LOGOUT</button>

    </div>
  )
}

export default Profile