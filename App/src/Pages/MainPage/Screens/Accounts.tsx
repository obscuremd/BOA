import { transactions } from "../../../Exports/Constatants"
import Collapse from "../../../Ui/Collapse"
import Hero from "../Components/AccountComponents/Hero"
import List from "../Components/AccountComponents/List"

const Accounts = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero/>
      {/* <Accordion/> */}
      <div className="flex flex-col gap-2 p-2">
        <Collapse primary1="Banking" primary2="$4,900.00" secondary="$4,900.00"/>
        <Collapse primary1="Credit Cards" primary2="$4,900.00" secondary="$4,900.00"/>
        <Collapse primary1="Loans" primary2="$4,900.00" secondary="$4,900.00"/>
        <Collapse primary1="Investments" primary2="$4,900.00" secondary="$4,900.00"/>
      </div>
      <List data={transactions} date={true} title={"Transactions"} />
    </div>
  )
}

export default Accounts