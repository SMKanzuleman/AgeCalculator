import React from "react";
import AgeCalculator from "./Components/AgeCalculator";
import Navbar from "./Components/Navbar";
import Background from "./Components/Background";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="w-full min-h-screen ">
        <Background>
          <AgeCalculator />
        </Background>
      </div>
    </div>
  );
};

export default App;
