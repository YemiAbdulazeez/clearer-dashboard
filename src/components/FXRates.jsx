import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaExchangeAlt } from "react-icons/fa";

const rates = [
  {
    from: "NGN",
    to: "USD",
    flagFrom: "🇳🇬",
    flagTo: "🇺🇸",
    rate: "₦1,640",
    symbol: "$1",
  },
  {
    from: "NGN",
    to: "GBP",
    flagFrom: "🇳🇬",
    flagTo: "🇬🇧",
    rate: "₦1,640",
    symbol: "£1",
  },
  {
    from: "NGN",
    to: "EUR",
    flagFrom: "🇳🇬",
    flagTo: "🇪🇺",
    rate: "₦1,640",
    symbol: "€1",
  },
  {
    from: "NGN",
    to: "YEN",
    flagFrom: "🇳🇬",
    flagTo: "🇯🇵",
    rate: "₦1,640",
    symbol: "¥1",
  },
  {
    from: "NGN",
    to: "CAD",
    flagFrom: "🇳🇬",
    flagTo: "🇨🇦",
    rate: "₦1,640",
    symbol: "C$1",
  },
  {
    from: "NGN",
    to: "AUD",
    flagFrom: "🇳🇬",
    flagTo: "🇦🇺",
    rate: "₦1,640",
    symbol: "A$1",
  },
  {
    from: "NGN",
    to: "ZAR",
    flagFrom: "🇳🇬",
    flagTo: "🇿🇦",
    rate: "₦1,640",
    symbol: "R1",
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
            className="bg-[#F2F2F3] rounded-md px-4 py-3 flex items-center gap-4"
          >
            {/* Flags */}
            <div className="relative w-[44px] h-[44px] mr-2">
              <span className="absolute top-0 left-0 z-0 text-sm px-4 py-3  rounded-full bg-white shadow">
                {item.flagFrom}
              </span>
              <span className="absolute top-0 left-4 z-10 text-sm px-4 py-3 rounded-full bg-white shadow">
                {item.flagTo}
              </span>
            </div>

            {/* From Currency */}
            <div className="text-sm text-gray-700 font-medium leading-tight">
              <span className="text-gray-500">{item.from}</span>
              <br />
              <span className="text-black">{item.rate}</span>
            </div>

            <FaExchangeAlt className="text-gray-500" />

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
