import React from 'react'
import { ImStatsDots } from "react-icons/im";

const LifeStats = () => {
  return (
    <div className=" w-[60%] font-poppins text-white p-5 h-full liquid-glass rounded-2xl flex flex-col justify-between gap-5">
      <div className="flex justify-start items-center gap-2">
        <ImStatsDots
          size={32}
          className="bg-accent/10 text-accent p-2 rounded-lg"
        />
        <h1 className="text-xl font-bold ">Life Statistics</h1>
      </div>
    </div>
  );
}

export default LifeStats;
