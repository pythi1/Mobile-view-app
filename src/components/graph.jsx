import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import Data from "../data/MoneyData.jsx";

function Graph() {
  return (
    <div className="relative z-50 text-gray-500 lg:mx-auto lg:w-1/5 w-[358px] bg-[#ffffff] flex flex-col border-1 border-gray-200 pb-2 rounded-3xl mt-10">
      <div className="p-6">
        <p className="font-bold">Income Trend</p>
        <p>Your monthly income and growth for the last 6 months</p>
      </div>

      <div className="text-sm ml-0 p-0">
        <BarChart
          width={377}
          height={400}
          data={Data.graph}
          margin={{ top: 30, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            yAxisId="left"
            orientation="left"
            domain={[0, 8]}
            tickCount={5}
            tickFormatter={(value) => `$${value}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />

          <Tooltip
            formatter={(value, name) => {
              if (name === "income") return [`$${value}`, "Income"];
              if (name === "monGrowth") return [`${value}%`, "Growth"];
              return value;
            }}
          />

          <Legend />
          <Bar
            yAxisId="left"
            dataKey="income"
            fill="#8763ff"
            radius={[10, 10, 0, 0]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="monGrowth"
            stroke="red" // Tailwind orange-500
            strokeWidth={3}
            dot={{ r: 5, fill: "#f97316" }}
            activeDot={{ r: 7 }}
          />
        </BarChart>
      </div>
    </div>
  );
}

export default Graph;
