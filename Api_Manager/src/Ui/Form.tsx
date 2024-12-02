import { Key, Mail, User } from "iconoir-react"
import { useState } from "react";
import { useGen } from "../Providers/GeneralProvider";
import axios from "axios";

interface Props{
  setStep:React.Dispatch<React.SetStateAction<number>>
}

const Form:React.FC<Props> = ({setStep}) => {

  const { url } = useGen();
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [full_name, setFull_name] = useState('')
  const [account_number, setAccount_number] = useState('')
  const [password, setPassword] = useState('')

  

  const Create = async () => {
    const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    setLoading(true);
  
    // Validate data
    if (!email) {
      alert('Email is required.');
      setLoading(false);
      return;
    }
  
    else if (!full_name) {
      alert('Full name is required.');
      setLoading(false);
      return;
    }
  
    else if (!account_number) {
      alert('Account number is required.');
      setLoading(false);
      return;
    } else if (typeof account_number !== 'string' || account_number.length === 0) {
      alert('Account number must be a string with at least one character.');
      setLoading(false);
      return;
    }
    else if (!/[a-zA-Z]+/.test(account_number)) {
      alert('Account number must contain at least one letter (a-z or A-Z).');
      setLoading(false);
      return;
    }
  
    else if (!password) {
      alert('Password is required.');
      setLoading(false);
      return;
    }
    else if (!passwordStrengthRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long and contain:\n' +
        '- At least one uppercase letter\n' +
        '- At least one lowercase letter\n' +
        '- At least one number\n' +
        '- At least one special character (!@#$%^&*(),.?":{}|<>)'
      );
      setLoading(false)
      return
    }
    // If validation passes, proceed with the API request
    else{
        try {
          const response = await axios.post(`${url}/user/register`, {
            email,
            full_name,
            account_number,
            password,
          });
          console.log("Updated user data:", response.data);
        } catch (error) {
          console.error("Error updating user data:", error);
        } finally {
          setLoading(false);
          setStep(1)
        }
    }
  };


  return (
    <div className="flex flex-col gap-5">
      <label className="input input-bordered flex items-center gap-2">
        <Mail/>
        <input type="text" className="grow" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <User/>
        <input type="text" className="grow" placeholder="Full Name"  onChange={(e)=>setFull_name(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <User/>
        <input type="text" className="grow" placeholder="Account Number"  onChange={(e)=>setAccount_number(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Key/>
        <input type="text" className="grow" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
      </label>

      <button className="btn btn-active" onClick={Create}>
        {loading 
          ?<span className="loading loading-spinner loading-lg"></span>
          :'Next'}
      </button>
    </div>
  )
}

export default Form