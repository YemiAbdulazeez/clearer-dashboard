import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaExchangeAlt } from "react-icons/fa";

import ngFlag from "../assets/flags/nigeria.png";
import usFlag from "../assets/flags/united-states.png";
import euFlag from "../assets/flags/european-union.png";
import ukFlag from "../assets/flags/united-kingdom.png";
import jpFlag from "../assets/flags/japan.png";

import exchange from "../assets/icons/exchange.png";

const rates = [
  {
    from: "NGN",
    to: "USD",
    flagFrom: ngFlag,
    flagTo: usFlag,
    rate: "₦1,640",
    symbol: "$1",
  },
  {
    from: "NGN",
    to: "GBP",
    flagFrom: ngFlag,
    flagTo: ukFlag,
    rate: "₦1,640",
    symbol: "£1",
  },
  {
    from: "NGN",
    to: "EUR",
    flagFrom: ngFlag,
    flagTo: euFlag,
    rate: "₦1,640",
    symbol: "€1",
  },
  {
    from: "NGN",
    to: "YEN",
    flagFrom: ngFlag,
    flagTo: jpFlag,
    rate: "₦1,640",
    symbol: "¥1",
  },
  {
    from: "NGN",
    to: "YEN",
    flagFrom: ngFlag,
    flagTo: jpFlag,
    rate: "₦1,640",
    symbol: "¥1",
  },
  {
    from: "NGN",
    to: "YEN",
    flagFrom: ngFlag,
    flagTo: jpFlag,
    rate: "₦1,640",
    symbol: "¥1",
  },
  {
    from: "NGN",
    to: "YEN",
    flagFrom: ngFlag,
    flagTo: jpFlag,
    rate: "₦1,640",
    symbol: "¥1",
  },
];

const FxRates = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-white rounded-lg border p-4 md:p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-700">FX Rates</h3>
        <button className="text-sm text-gray-400 hover:underline">
          See all
        </button>
      </div>

      <Swiper
        spaceBetween={12}
        slidesPerView={"auto"}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {rates.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "auto" }}
            className="bg-[#F2F2F3] rounded-xl pl-3 pr-4 pt-3 pb-4 flex items-center gap-4"
          >
            {/* Flags */}
            <div className="relative w-[40px] h-[40px] mr-4">
              <img
                src={item.flagFrom}
                alt="From"
                className="absolute top-0 left-0 z-0 rounded-full border border-gray-300"
              />
              <img
                src={item.flagTo}
                alt="To"
                className="absolute top-0 left-6 z-10  rounded-full border border-gray-300"
              />
            </div>

            {/* From Currency */}
            <div className="text-sm text-gray-700 font-medium leading-tight">
              <span className="text-gray-500">{item.from}</span>
              <br />
              <span className="text-black">{item.rate}</span>
            </div>
            <img className="w-4" src={exchange} />

            <exchange className="text-gray-500" />

            {/* To Currency */}
            <div className="text-sm text-gray-700 font-medium leading-tight">
              <span className="text-gray-500">{item.to}</span>
              <br />
              <span className="text-black">{item.symbol}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FxRates;
