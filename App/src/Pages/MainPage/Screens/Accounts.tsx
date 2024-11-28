import { transactions } from "../../../Exports/Constatants";
import { useGen } from "../../../Providers/GeneralProvider";
import Collapse from "../../../Ui/Collapse";
import Hero from "../Components/AccountComponents/Hero";
import List from "../Components/AccountComponents/List";

const Accounts = () => {
  const { userData } = useGen();

  // Function to format the balance with commas
  const formatWithCommas = (balance: number) => {
    if (!balance || balance <= 0) return "0";
    return balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Format the total and available balances
  const formattedTotalBalance = formatWithCommas(userData?.total_balance || 0);
  const formattedAvailableBalance = formatWithCommas(userData?.available_balance || 0);

  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <div className="flex flex-col gap-2 p-2">
        <Collapse primary1="Banking" primary2={formattedTotalBalance} secondary={formattedAvailableBalance} />
        <Collapse primary1="Credit Cards" primary2={formattedTotalBalance} secondary={formattedAvailableBalance} />
        <Collapse primary1="Loans" primary2={formattedTotalBalance} secondary={formattedAvailableBalance} />
        <Collapse primary1="Investments" primary2={formattedTotalBalance} secondary={formattedAvailableBalance} />
      </div>
      <List data={transactions} date={true} title={"Transactions"} />
    </div>
  );
};

export default Accounts;
