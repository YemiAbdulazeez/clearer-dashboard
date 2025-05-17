import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import MerchantsCard from "../components/MerchantsCard";
import FXRates from "../components/FXRates";
import Transactions from "../components/Transactions";
import NameHeader from "../components/NameHeader";
import Chart from "../components/Chart";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:px-24 lg:py-10 bg-[#F8F8F8] min-h-screen space-y-8">
      <Header />
      <NameHeader />

      {/* Balance & Merchants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1 h-full">
          <BalanceCard />
        </div>
        <div className="lg:col-span-1 h-full">
          <MerchantsCard />
        </div>
      </div>

      {/* FX Rates */}
      <div>
        <FXRates />
      </div>

      {/* Transactions & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-full">
          <Transactions />
        </div>
        <div className="lg:col-span-1 h-full">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
