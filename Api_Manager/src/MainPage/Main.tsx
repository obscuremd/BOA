import { SignedIn, SignedOut} from "@clerk/clerk-react"
import Menu from "../Ui/Menu"
import Inputs from "./Inputs"

const Main = () => {
  return (
        <div className='flex flex-col-reverse md:flex-row gap-10 p-5'>
          <SignedOut>
            <Menu/>
          </SignedOut>
          <SignedIn>
            <Inputs/>
          </SignedIn>
        </div>
  )
}

export default Main