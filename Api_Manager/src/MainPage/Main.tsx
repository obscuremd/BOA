import Menu from "../Ui/Menu"
import Inputs from "./Inputs"

const Main = () => {
  return (
        <div className='flex flex-col-reverse md:flex-row gap-10 p-5'>
          <Menu/>
          <Inputs/>
        </div>
  )
}

export default Main