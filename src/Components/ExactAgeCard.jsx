import React from 'react'

const ExactAgeCard = ({data,value}) => {
  return (
    <div className="w-20 h-20 flex flex-col gap-2 justify-center items-center">
      <h1 className="text-white text-5xl font-bold font-poppins animate-none">
        {value}
      </h1>
      <h1 className="text-white/80 text-md font-normal tracking-wider font-poppins animate-none">
        {data}
      </h1>
    </div>
  );
}

export default ExactAgeCard
