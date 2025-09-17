import React from "react";
import Data from "../data/MoneyData.jsx";

function Invoices() {
  const invoices = Data.invoices;

  return (
    <div className="relative z-50 lg:mx-auto lg:w-1/5 w-[377px] bg-[#ffffff] flex flex-col p-2 rounded-3xl mt-10 mb-20">
      <div className="flex w-full justify-between mb-5">
        <p className="text-gray-500 font-bold text-lg">Your Invoices</p>

        <select className="select focus:outline-none border-0 ">
          <option>Paid</option>
          <option>Partially Paid</option>
          <option>Unpaid</option>
          <option>Overdue</option>
          <option>Draft</option>
          <option>Awaited</option>
          <option>Disputed</option>
        </select>
      </div>

      {invoices.map((i) => (
        <div key={i.id} className="flex justify-between items-center border-gray-200 border-1 rounded-2xl p-3 my-2 text-gray-500 text-sm">
          <div className="flex flex-col gap-3" >
            <p className="font-bold" >{i.name}</p>
            <div className="flex gap-5" >
              <p>${i.value}</p>
              <p>Due: {i.date}</p>
            </div>
          </div>

          <div 
          className={` rounded-full p-3 px-5 items-center 
            ${i.status == "Paid" && "bg-green-200 text-green-700" } 
            ${i.status == "Partially Paid" && "bg-yellow-100 text-yellow-600"}
            ${i.status == "Disputed" && "bg-red-200 text-red-600" }
            ${i.status == "Awaited" && "bg-yellow-100 text-yellow-600"}
            ${i.status == "Draft" && "bg-gray-200 text-gray-600"}
            ${i.status == "Unpaid" && "bg-gray-200 text-gray-600"}
            ${i.status == "Overdue" && "bg-red-200 text-red-600"}
            `}
          >
           <select className="select focus:outline-none border-0 " value={i.status} >
          <option>Paid</option>
          <option>Partially Paid</option>
          <option>Unpaid</option>
          <option>Overdue</option>
          <option>Draft</option>
          <option>Awaited</option>
          <option>Disputed</option>
        </select>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Invoices;
