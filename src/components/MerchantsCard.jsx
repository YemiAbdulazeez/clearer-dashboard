import React from "react";
import { FiPlus } from "react-icons/fi";

const MerchantsCard = () => {
  return (
    <div className="bg-white rounded-lg border p-4 md:p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Merchants</h3>
        <button className="flex items-center text-sm text-gray-800 hover:text-black">
          <FiPlus className="mr-1 text-base" />
          Add Merchants
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="flex items-center justify-start md:justify-center gap-6  px-1 pb-2 w-max md:w-full mx-auto">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F2F2F3] flex items-center justify-center text-md font-semibold text-gray-700">
                AD
              </div>
              <span className="text-xs mt-1 text-gray-600 bg-[#F2F2F3] px-2 py-1 rounded-md">
                {`Adisa Debowale`.slice(0, 10) + "..."}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 self-end">
        <button className="text-xs text-gray-400 hover:underline">
          See all
        </button>
      </div>
    </div>
  );
};

export default MerchantsCard;
