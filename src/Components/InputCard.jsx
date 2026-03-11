import React from 'react'
import { useState } from 'react';

const InputCard = () => {
    let [date,setDate]=useState('')
    let [age, setAge] = useState("");
    let HandleAgeCalculation=()=>{
      let result = CalculateAge(date);
      setAge(result);
    };
  return (
    <div className="w-full h-full bg-muted flex flex-col justify-center items-center gap-8">
      <div>
        <h1 className="text-5xl font-bold">AgeKal</h1>
        <p className='mt-4 text-description'>Calculate your fucking age right now</p>
      </div>
      <div className="flex justify-center items-center w-[7 0%] h-10">
        <input
          type="Date"
          value={date}
          className="w-full h-full bg-white/50 flex justify-center items-center px-10 focus:outline-0 border border-bg-10 rounded-full"
          onChange={(e) => {
            setDate(e.target.value);
            console.log("Age is Changed to ", date);
          }}
        />
      </div>
      <div className="w-full h-10 flex justify-center">
        <button
          className="bg-white/40 cursor-pointer px-5 py-1 font-mono rounded-xl"
          onClick={HandleAgeCalculation}
        >
          Check Your Age
        </button>
      </div>
    </div>
  );
}

export default InputCard
