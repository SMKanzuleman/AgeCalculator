import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdCake } from "react-icons/md";

const Birthday = () => {
  return (
    <div className="relative w-[40%] font-poppins text-white p-5 h-full liquid-glass rounded-2xl flex flex-col justify-between gap-5">
      <div className="absolute top-40 left-9">
        <MdCake size={42} className='text-accent' />
      </div>
      <div className="flex justify-start items-center gap-2">
        <SlCalender
          size={32}
          className="bg-accent/10 text-accent p-2 rounded-lg"
        />
        <h1 className="text-xl font-bold ">Next Birthday</h1>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-5xl font-bold ">120</h1>
        <h1 className="text-description text-xs ">Days Remaining</h1>
      </div>
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="w-[90%] h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className=" w-[90%] flex justify-between text-[10px] text-description uppercase tracking-widest">
          <span className="">Days</span>
        </div>
      </div>
    </div>
  );
}

export default Birthday
