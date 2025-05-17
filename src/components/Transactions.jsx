import React from "react";
import {
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
  FiMoreVertical,
} from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";


const transactions = [
  {
    icon: <FiArrowUp className="text-red-500" />,
    label: "Sent GBP",
    details: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "-₦1,000,000",
    amountColor: "text-red-500",
    bg: "bg-red-100",
  },
  {
    icon: <FaExchangeAlt className="text-yellow-500" />,
    label: "Exchanged GBP → NGN",
    details: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "-£1,000 / + ₦200,000",
    amountColor: "text-gray-700",
    bg: "bg-yellow-50",
  },
  {
    icon: <FiArrowDown className="text-green-500" />,
    label: "Receive GBP → NGN",
    details: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "+ ₦200,000",
    amountColor: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: <FiArrowDown className="text-gray-500" />,
    label: "Withdraw GBP",
    details: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "+ ₦200,000",
    amountColor: "text-green-600",
    bg: "bg-gray-100",
  },
];

const Transactions = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-white rounded-lg border p-4 md:p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-700">
            Recent Transactions
          </h3>
          <button className="text-sm text-gray-400 hover:underline">
            See all
          </button>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full text-left text-sm">
            <tbody className="divide-y divide-gray-200">
              {transactions.map((tx, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-md ${tx.bg} flex items-center justify-center`}
                      >
                        {tx.icon}
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">{tx.label}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pr-4">
                    <p className="text-sm text-gray-500">
                      {tx.details} · {tx.time}
                    </p>
                  </td>
                  <td className="py-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <p className={`font-semibold ${tx.amountColor}`}>
                        {tx.amount}
                      </p>
                      <FiMoreVertical className="text-gray-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
