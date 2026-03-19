import React from 'react'
import { useState } from 'react';
import Background from './Background';

const InputCard = ({ date, setDate, HandleAgeCalculation }) => {
  return (
    <div className="w-100 h-100 px-5">
        <div className="w-full h-full liquid-glass rounded-3xl flex flex-col justify-center items-center gap-8 font-poppins animate-blob-float">
          <div>
            <h1 className="text-6xl font-poppins text-glow font-bold text-white text-center ">
              Calage
            </h1>
            <p className="mt-4 text-description tracking-wide">
              Calculate your age right now
            </p>
          </div>
          <div className="flex justify-center items-center lg:w-[70%] w-[80%] h-13 text-white/30">
            <input
              type="Date"
              value={date}
              placeholder='mm/dd/yyyy'
              className="w-full h-full liquid-glass flex justify-center items-center px-3 py-3 focus:outline-0 border border-bg-10 rounded-full"
              onChange={(e) => {
                setDate(e.target.value);
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
    </div>
  );
};

export default InputCard
