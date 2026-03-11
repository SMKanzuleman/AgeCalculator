import React, { useState } from 'react'
import CalculateAge from '../utils/CalculateAge'

const Fscreen = () => {
  let [date,setDate]=useState('')
  let [age, setAge] = useState("");
  let HandleAgeCalculation=()=>{
    let result = CalculateAge(date);
    setAge(result);
  };
  return (
    <div className="flex flex-col gap-5 w-full h-screen justify-center items-center bg-[#121212]">
      <div className=" w-full h-30 flex justify-center items-center text-center">
        <h1 className="font-extrabold text-8xl text-white/50">
          Calculate Your Age
        </h1>
      </div>
      <div className="flex justify-center items-center w-[20%] h-10">
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
      <div className="w-full h-10 flex justify-center">
        <p className="text-red-800 text-5xl font-mono">
          *You age is {age.years} years {age.months} months {age.days} days*
        </p>
      </div>
    </div>
  );
}

export default Fscreen
