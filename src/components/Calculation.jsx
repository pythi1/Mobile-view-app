import React from "react";
import Data from "../data/MoneyData.jsx"

function Calculation() {
  return (
    <div className="relative z-50 bg-[#ffffff] mx-auto lg:w-1/5 w-[377px] flex flex-col border-1 border-gray-200 p-6 pb-2 rounded-3xl mt-10">
      <div className="flex justify-between space-x-5">
        <p className="text-sm text-gray-500 font-semibold">Time Period</p>

        <div className="date-time flex text-gray-500 text-sm">
          <input type="date" className="focus:outline-none" />

          <input type="date" className="focus:outline-none" />
        </div>
      </div>

      <div className=" m-5 justify-start">

        <div className="flex gap-5">
          <div className="border-1 border-gray-400 rounded-2xl p-1 w-20 ">
            <p className="text-gray-500 p-1 text-xs">1 Month</p>
          </div>
          <div className="border-1 border-gray-400 rounded-2xl p-1 w-20 ">
            <p className="text-gray-500 p-1 text-xs">3 Months</p>
          </div>
          <div className="border-1 border-gray-400 rounded-2xl p-1 w-20 ">
            <p className="text-gray-500 p-1 text-xs">1 Year</p>
          </div>
        </div>

            <div className="flex mt-5 text-gray-500 text-sm"> 
                <input type="date" name="custom" placeholder="custom" className="custom focus:outline-none" />
            </div>

      </div>

        <div className="flex flex-col text-sm text-gray-400 gap-2" >

            <div className="border-gray-200 border-1 rounded-xl p-3 my-2">
                <p>Total Earning</p>
                <p className="text-blue-700 font-bold text-xl" >{Data.spends.totalearning}</p>
            </div>

            <div className="flex w-full gap-5 my-2">

                <div className="border-gray-200 border-1 rounded-xl p-3 w-1/2" >
                     <p>Payment Awaited</p>
                <p className="text-blue-700 font-bold text-xl" >{Data.spends.awaited}</p>
                </div>

                <div className="border-gray-200 border-1 rounded-xl p-3 w-1/2" >
                     <p>Payment Overdue</p>
                <p className="text-blue-700 font-bold text-xl" >{Data.spends.overdue}</p>
                </div>

            </div>

        </div>

    </div>
  );
}

export default Calculation;
