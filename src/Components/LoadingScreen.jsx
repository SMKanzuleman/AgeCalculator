import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  let [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg">
      <div className="w-50">
        <p className="mb-2 text-white text-2xl text-center font-family-rugi">
          {progress}%
        </p>
        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden ">
          <div
            className="bg-accent h-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
