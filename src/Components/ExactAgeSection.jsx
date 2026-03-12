import React from 'react'
import ExactAgeCard from './ExactAgeCard';
const ExactAgeSection = ({Age}) => {
  //! Make Age to Two numbers e.g. 9---->09
  const Make2Digits = (val) => String(val).padStart(2, '0');
  return (
    <div className="w-full lg:w-[80%] h-55 liquid-glass rounded-2xl flex flex-col justify-center items-center gap-0">
      <div className='bg-mber-200'>
        <h1 className='text-accent text-xs tracking- font-poppins py-1 bg-accent/10 px-3 border border-accent/30 rounded-full'> Exact Age </h1>
      </div>
      <div className=" w-full h-[50%] flex justify-center items-center bg-ambe-300">
        <ExactAgeCard value={Make2Digits(Age.years)} data={"Years"} />
        <ExactAgeCard value={Make2Digits(Age.months)} data={"Months"} />
        <ExactAgeCard value={Make2Digits(Age.days)} data={"Days"} />
      </div>
    </div>
  );
}

export default ExactAgeSection
