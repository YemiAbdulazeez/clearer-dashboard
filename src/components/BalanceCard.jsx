import React from "react";
import { FiChevronDown, FiPlus, FiMoreVertical } from "react-icons/fi";
import { ArrowUp } from "lucide-react";
import { FaExchangeAlt } from "react-icons/fa";

const BalanceCard = () => {
  return (
    <div className="bg-white rounded-lg border p-4 md:p-6 flex flex-col h-full justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-md font-semibold text-gray-600">NGN . </span>

          <span className="text-xs text-gray-400">Naira</span>
          <FiChevronDown className="text-gray-600" />
        </div>
        <button className="flex items-center text-sm text-gray-800 hover:text-black hover:underline">
          <FiPlus className="mr-1" />
          Deposit
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-3xl font-bold text-black">₦ 34,645,233</h2>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-2 flex-grow">
          <button className="min-w-[10px] flex-1 flex items-center justify-center gap-1 bg-[#F2F2F3] hover:bg-gray-200 text-black rounded-lg px-3 py-3 text-xs md:text-sm">
            <ArrowUp className="text-base" />
            Send
          </button>
          <button className="min-w-[80px] flex-1 flex items-center justify-center gap-1 bg-[#F2F2F3] hover:bg-gray-200 text-black rounded-lg px-3 py-3 text-[0.7rem] md:text-sm">
            <ArrowUp className="text-base" />
            Receive
          </button>
          <button className="min-w-[10px] flex-1 flex items-center justify-center gap-1 bg-[#F2F2F3] hover:bg-gray-200 text-black rounded-lg px-3 py-3 text-xs md:text-sm">
            <FaExchangeAlt className="text-base" />
            Swap
          </button>
          <button className="bg-[#F2F2F3] hover:bg-gray-200 text-black rounded-full p-4">
            <FiMoreVertical />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
