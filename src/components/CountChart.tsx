"use client";

import Image from "next/image";
// import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

// const data = [
//   {
//     name: "Completed Lessons",
//     count: 45,
//     fill: "#8884d8",
//   },
//   {
//     name: "Total Lessons",
//     count: 98,
//     fill: "#83a6ed",
//   },
// ];

import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          Particiapação de Lucro por Filial
        </h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
        </ResponsiveContainer>
        {/* <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        /> */}
      </div>
      {/* <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-vsSky rounded-full" />
          <h1 className="font-bold">45</h1>
          <h2 className="text-xs text-gray-500">
            Treinamentos finalizados (45)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-vsYellow rounded-full" />
          <h1 className="font-bold">98</h1>
          <h2 className="text-xs text-gray-500">Total de treinamentos (98)</h2>
        </div>
      </div> */}
    </div>
  );
};

export default CountChart;
