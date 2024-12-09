import { DollarCircle, Internet, SendDollars } from "iconoir-react"
import Card from "../../../Component/Card"
import List from "../Components/AccountComponents/List"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGen } from "../../../Providers/GeneralProvider"
import axios from "axios"

const PayTransfer = () => {

  const navigate = useNavigate()

  const { userData, url } = useGen();
  const [history, setHistory] = useState<History[]>([])

  useEffect(()=>{
    const fetchHistory =async()=>{
      const res = await axios.get(`${url}/history/user/${userData?._id}`) 
      setHistory(res.data)
      console.log('data:',res.data)
    }

    fetchHistory()
  },[])

  return (
    <div className="w-full flex flex-col justify-center">
      <div className='flex flex-col gap-2 w-full'>
                            <div className='flex gap-2 justify-center'>
                            <Card 
                                  onClick={()=>navigate('/transfers')}
                                  prim_text="Transfers"
                                  image={<SendDollars className="text-[30px]"/>} 
                                  text={'between my accounts'}/>
                                
                            <Card 
                              prim_text="Wire"
                              onClick={()=>navigate('/wire')}
                              image={<Internet className="text-[30px]"/>} 
                              text={'U.S. or international'}/>
                            </div>
                            <div className='flex gap-2 justify-center'>
                                <Card
                                  onClick={()=>navigate('/bills')}
                                  prim_text="Pay Bills" 
                                  image={<DollarCircle className="text-[30px]"/>} 
                                  text={'Pay now or schedule'}/>
                                
                                  <Card 
                                    onClick={()=>navigate('/zelle')}
                                    prim_text="Zelle"
                                    image={"https://firstcu.net/wp-content/uploads/2022/11/zelle-logo.png"} 
                                    text={'Send and Request'}/>
                            </div>
      </div>
      <List data={history} date={true} title={"Activity"} />

      <div>

      </div>
    </div>
  )
}

export default PayTransfer