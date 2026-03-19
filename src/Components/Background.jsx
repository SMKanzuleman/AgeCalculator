import React from 'react'
const Background = (props) => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-bgdark">
      <div className="absolute -top-50 left-10 w-95 h-95 bg-accent rounded-full opacity-30 blur-2xl "></div>
      <div className="absolute  w-30 h-30 bg-accent/30 rounded-full opacity-30 blur-[20px]"></div>
      <div className="absolute bottom-0 right-0 w-75 h-75 bg-accent rounded-full opacity-30 blur-[50px]"></div>
      <div className="absolute w-full flex h-6 bottom-2 bg-amber- justify-center">
        <p className="text-white/30 font-mono tracking-widest">
          Made with ❤️ by kanzulEman
        </p>
      </div>
      {props.children}
    </div>
  );
}

export default Background
