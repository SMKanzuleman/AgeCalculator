import React from 'react'

const StateCard = ({label,value=1200 ,bcolor="border-l-accent"}) => {
  return (
    <div
      className={`lg:w-37.5 w-36 lg:h-17.5 h-16 liquid-special flex flex-col items-start px-4 justify-center rounded-2xl border  border-white/10 border-l-4 ${bcolor} font-poppins gap-1 `}
    >
      <h1 className='text-xs text-description tracking-wider'>{label}</h1>
      <h1 className='text-2xl font-poppins font-bold'>{value}</h1>
    </div>
  );
}

export default StateCard
