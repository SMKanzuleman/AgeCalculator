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
    return <ResultScreen
    Age={age} />;
  } else {
    return (
      <InputCard
        date={date}
        setDate={setDate}
        HandleAgeCalculation={HandleAgeCalculation}
      />
    );
  }
};

export default AgeCalculator;
