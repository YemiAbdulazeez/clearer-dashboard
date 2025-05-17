import React from "react";
import { BellDot } from "lucide-react";

const NameHeader = () => {
  return (
    <header className="w-full relative px-4 md:px-0 flex flex-col md:flex-row items-start md:items-center justify-between  gap-4">
      <h1 className="text-gray-800 text-base md:text-lg flex items-center gap-1">
        Welcome Andy <span className="text-xl">👋</span>
      </h1>

      <div className="w-full md:w-auto">
        <div
          className="bg-[#F8ECE1] text-black text-sm  px-4 py-2 rounded-xl flex items-center gap-2 
                    md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0"
        >
          <BellDot className="text-[#EF4444] text-lg md:text-xl" />
          <span>
            Your account has been setup for OTC trade, please{" "}
            <strong className="font-bold">Contact OTC</strong> to transact
          </span>
        </div>
      </div>
    </header>
  );
};

export default NameHeader;
