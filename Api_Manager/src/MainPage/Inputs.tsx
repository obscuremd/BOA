import { useState, ChangeEvent } from "react";
import { useGen } from "../Providers/GeneralProvider";
import axios from "axios";
import Table from "../Ui/Table";
import UploadImage from "../Ui/UploadImage";

const Inputs = () => {
  const { userData, url } = useGen();

  const [state, setState] = useState(0);
  const [loading, setLoading] = useState(false)

  // State to manage all input fields
  const [formData, setFormData] = useState({
    full_name: userData?.full_name,
    email: userData?.email,
    phone_number: userData?.phone_number,
    occupation: userData?.occupation,
    date_of_birth: userData?.date_of_birth,
    marital_status: userData?.marital_status,
    gender: userData?.gender,
    address: userData?.address,
    account_type: userData?.account_type,
    registration_date: userData?.registration_date,
    total_balance: userData?.total_balance,
    available_balance: userData?.available_balance,
    IMF_code: userData?.IMF_code ,
  });

  // Update state when input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Update function to send data to the server
  const update = async () => {
    setLoading(true)
    try {
      const response = await axios.put(`${url}/user/${userData?._id}`, formData);
      console.log("Updated user data:", response.data);
      setLoading(false)
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };



  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex justify-between">
        <UploadImage/>
      </div>
      <div>
        <div className="join">
          <button onClick={() => setState(0)} className="btn join-item">
            Edit Profile
          </button>
          <button onClick={() => setState(1)} className="btn join-item">
            Edit History
          </button>
        </div>
      </div>
      {state === 0 && (
        <>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            {/* input 1 */}
            <div className="flex flex-col gap-5 w-full">
                    
                    <label className="input input-bordered flex items-center gap-2">
                        Full name
                        <input
                        type="text"
                        name="full_name"
                        className="grow"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        placeholder={userData?.full_name}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input
                        type="text"
                        name="email"
                        className="grow"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={userData?.email}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Phone Number
                        <input
                        type="text"
                        name="phone_number"
                        className="grow"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        placeholder={userData?.phone_number}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Occupation
                        <input
                        type="text"
                        name="occupation"
                        className="grow"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        placeholder={userData?.occupation}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Date Of Birth
                        <input
                        type="date"
                        name="date_of_birth"
                        className="grow"
                        value={formData.date_of_birth}
                        onChange={handleInputChange}
                        placeholder={`DD-MM-YYYY - ${userData?.date_of_birth}`}
                        />
                    </label>
                    <select
                        name="marital_status"
                        className="select select-bordered w-full max-w-xs"
                        value={formData.marital_status}
                        onChange={handleInputChange}
                    >
                        <option disabled selected>
                        {userData?.marital_status || "Marital Status"}
                        </option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                    </select>
            </div>

            {/* input 2 */}
            <div className="flex flex-col gap-5 w-full">
                    <label className="input input-bordered flex items-center gap-2">
                        Address
                        <input
                        type="text"
                        name="address"
                        className="grow"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={userData?.address}
                        />
                    </label>
                    <select
                        name="gender"
                        className="select select-bordered w-full max-w-xs"
                        value={formData.gender}
                        onChange={handleInputChange}
                    >
                        <option disabled selected>
                        {userData?.gender || "Gender"}
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer Not to Say</option>
                    </select>
                    <select
                        name="account_type"
                        className="select select-bordered w-full max-w-xs"
                        value={formData.account_type}
                        onChange={handleInputChange}
                    >
                        <option disabled selected>
                        {userData?.account_type || "Account Type"}
                        </option>
                        <option>Savings</option>
                        <option>Checkings</option>
                        <option>Loan</option>
                    </select>
                    <label className="input input-bordered flex items-center gap-2">
                        Total Balance
                        <input
                        type="number"
                        name="total_balance"
                        className="grow"
                        value={formData.total_balance}
                        onChange={handleInputChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Available Balance
                        <input
                        type="number"
                        name="available_balance"
                        className="grow"
                        value={formData.available_balance}
                        onChange={handleInputChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        IMF Code
                        <input
                        type="text"
                        name="IMF_code"
                        className="grow"
                        value={formData.IMF_code}
                        onChange={handleInputChange}
                        />
                    </label>
            </div>
        </div>
        <button onClick={update} className="btn btn-neutral w-full">
            {loading
            ?<>
                <span className="loading loading-spinner"></span>
                'loading'
            </>
            :'Update Account'}
        </button>
        </>
      )}

      {
        state === 1 && (
          <>
            <Table/>
          </>
        )
      }
    </div>
  );
};

export default Inputs;
