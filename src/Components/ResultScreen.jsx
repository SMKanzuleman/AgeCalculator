import React from 'react'
import ExactAgeCard from './ExactAgeCard';
import ExactAgeSection from './ExactAgeSection';
import Birthday from './Birthday';
import LifeStats from './LifeStats';

const ResultScreen = ({Age}) => {
  return (
    <div className="w-full h-screen flex lg:flex-col flex-col px-10 justify-center items-center gap-5 z-0">
      <div className="w-full mt-5">
        <h1 className="text-3xl font-poppins text-glow font-bold text-white text-center mb-1 ">
          Analysis Completed
        </h1>
        <p className='text-description font-poppins text-sm  text-center'>Discover your life Journey in detail</p>
      </div>
      <ExactAgeSection Age={Age} />
      <div className="w-[80%] h-65 flex lg:flex-row flex-col gap-5 justify-center items-center">
        <Birthday />
        <LifeStats />
      </div>
    </div>
  );
}

export default ResultScreen
