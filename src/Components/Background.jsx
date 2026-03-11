import React from 'react'

const Background = (props) => {
  return (
    <div className="h-full w-full relative flex items-center justify-center bg-bgdark">
      <div className="absolute top-8 left-8 w-75 h-75 bg-accent rounded-full opacity-30 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-75 h-75 bg-accent rounded-full opacity-30 blur-[170px]"></div>
      {props.children}
    </div>
  );
}

export default Background
