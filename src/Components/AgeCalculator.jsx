import React from "react";
import Background from "./Background.jsx";
import InputCard from "./InputCard.jsx";
import LoadingScreen from "./LoadingScreen";
import ResultScreen from "./ResultScreen";
import CalculateAge from "../utils/CalculateAge";
import { useState } from "react";
import { CiStopwatch } from "react-icons/ci";

const AgeCalculator = () => {
  let [date, setDate] = useState("");
  let [age, setAge] = useState("");
  let [state, setState] = useState("idle");

  let HandleAgeCalculation = () => {
    if (!date) return;
    setState("Loading");
    setTimeout(() => {
      let result = CalculateAge(date);
      setAge(result);
      setState("Result");
    }, 5000);
  };

  if (state == "Loading") {
    return <LoadingScreen />;
  } else if (state == "Result") {
    return <ResultScreen />;
  } else {
    return (
      <InputCard
        date={date}
        setDate={setDate}
        HandleAgeCalculation={HandleAgeCalculation}
      />
    );
  }

  return (
    <div className=" w-full h-screen relative pt-16">
      <Background className="flex flex-col justify-center items-center">
        <div className="w-100 h-100">
          <InputCard />
        </div>
      </Background>
    </div>
  );
};

export default AgeCalculator;
