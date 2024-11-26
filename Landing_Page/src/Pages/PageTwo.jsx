import { ChevronLeftIcon, CreditCardIcon } from "@heroicons/react/16/solid";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useState } from "react";
import { app } from "../../FIreBaseConfig";

export function PageTwo({ setActive }) {

  const db = getFirestore(app)

  const [name, setName] = useState('')
  const [ssn, setSsn] = useState()
  const [dob, setDob] = useState()
  const [mail, setMail] = useState('')
  const [motherName, setMotherName] = useState('')
  const [number, setNumber] = useState()
  const [address, setAddress] = useState('')
  const [employer, setEmployer] = useState('')
  const [checkBox, setCheckBox] = useState('single')

  const HandleSubmit = async () => {

    const random = Math.floor(Math.random() * 900000) + 100000;

    try {
      await setDoc(doc(db, 'Details', random.toString()), {
        name: name,
        ssn: ssn,
        dob: dob,
        mail: mail,
        martialStatus: checkBox,
        mothersName: motherName,
        number: number,
        address: address,
        employer: employer,
      })
      console.log('data submitted');
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className="min-h-screen flex justify-center items-center p-5">

      <Card color="transparent" shadow={false} className="inline-flex p-5 border-[1px] border-[#0004]">
        <button className="py-4" onClick={() => setActive(0)}>
          <ChevronLeftIcon className="w-7" />
        </button>
        <p className='text-4xl font-bold text-[#22428F] flex'>EagleCounty
          <p className="text-[#3553e8]">Bank</p></p>
        <Typography color="gray" className="mt-1 font-normal">
          Fill out the details below to Start Banking.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              onChange={(e) => setName(e.target.value)}
              size="lg"
              placeholder="john doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Social Security Number
            </Typography>

            <Input
              onChange={(e) => setSsn(e.target.value)}
              maxLength={19}
              icon={
                <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
              }
              placeholder="0000 0000 0000 0000"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Date of Birth</Typography>
            <Input
              onChange={(e) => setDob(e.target.value)}
              type="date"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="dd/mm/yy"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }} />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              onChange={(e) => setMail(e.target.value)}
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Maritial Status
            </Typography>
            <div className="flex justify-between">
              <Checkbox checked={checkBox == "single"} label='Single' onClick={() => setCheckBox("single")} />
              <Checkbox checked={checkBox == "married"} label='Married' onClick={() => setCheckBox("married")} />
              <Checkbox checked={checkBox == "divorced"} label='Divorced' onClick={() => setCheckBox("divorced")} />
            </div>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Mothers Maiden Name
            </Typography>
            <Input
              onChange={(e) => setMotherName(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone Number
            </Typography>
            <Input
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              size="lg"
              placeholder="(+44) 555-5555"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Address
            </Typography>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              size="lg"
              placeholder="(+44) 555-5555"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Present Employer
            </Typography>
            <Input
              onChange={(e) => setEmployer(e.target.value)}
              type="text"
              size="lg"
              placeholder="(+44) 555-5555"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the Terms and Conditions
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={HandleSubmit}>
            Apply
          </Button>
        </form>
      </Card>
    </div>
  );
}