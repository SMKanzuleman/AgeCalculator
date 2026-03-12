import React from 'react'
import { useState } from 'react';
import { CiStopwatch } from "react-icons/ci";

const InputCard = () => {
    let [date,setDate]=useState('')
    let [age, setAge] = useState("");
    let HandleAgeCalculation=()=>{
      let result = CalculateAge(date);
      setAge(result);
    };
  return (
    <div className="w-full h-full liquid-glass rounded-3xl flex flex-col justify-center items-center gap-8 font-poppins animate-blob-float">
        <div>
        <h1 className="text-6xl font-poppins text-glow font-bold text-white text-center font-Inter">
          AgeKal
        </h1>
        <p className="mt-4 text-description">
          Calculate your fucking age right now
        </p>
      </div>
      <div className="flex justify-center items-center w-[70%] h-13 text-white/30">
        <input
          type="Date"
          value={date}
          className="w-full h-full liquid-glass flex justify-center items-center px-10 py-3 focus:outline-0 border border-bg-10 rounded-full"
          onChange={(e) => {
            setDate(e.target.value);
            console.log("Age is Changed to ", date);
          }}
        />
      </div>
      <div className="w-full h-12 flex justify-center">
        <button
          className="cursor-pointer font-family-rugi text-2xl  rounded-md bg-linear-to-r from-accent/90 to-accent/90 text-white px-7"
          onClick={HandleAgeCalculation}
        >
          Check Age
        </button>
      </div>
    </div>
  );
}

export default InputCard
