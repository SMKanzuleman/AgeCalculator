import React from 'react'
import Background from './Background.jsx'
import InputCard from './InputCard.jsx'

const AgeCalculator = () => {
  return (
    <div className=" w-full h-screen relative pt-16">

      <Background className="flex flex-col justify-center items-center">
        <div className="w-100 h-100">
          <InputCard />
        </div>
      </Background>
      <div className="absolute w-full flex bottom-2 justify-center">
        <p className="text-white/30 font-mono tracking-widest">
          Made with ❤️ by kanzulEman
        </p>
      </div>
    </div>
  );
}

export default AgeCalculator
