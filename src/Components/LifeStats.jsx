import React from 'react'
import { ImStatsDots } from "react-icons/im";
import StateCard from './StateCard';
import {
  BirthdayDays,
  TotalDays,
  TotalHeartBeats,
  TotalHourSlept,
  TotalBlinks,
  TotalBreaths,
  formatValue,
  TotalMeals
} from "../utils/ExtraCalculation";

const LifeStats = ({InputDOB}) => {

  const days=TotalDays(InputDOB);

  return (
    <div className=" w-[60%] font-poppins text-white p-5 h-full liquid-glass rounded-2xl flex flex-col justify-between gap-5">
      <div className="flex justify-start items-center gap-2">
        <ImStatsDots
          size={32}
          className="bg-accent/10 text-accent p-2 rounded-lg"
        />
        <h1 className="text-xl font-bold ">Life Statistics</h1>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center items-center gap-5 mb-4">
        <StateCard label={"Days"} bcolor={"border-l-blue-900"} value={days} />
        <StateCard
          label={"HeartBeats"}
          bcolor={"border-l-red-900"}
          value={formatValue(TotalHeartBeats(days))}
        />
        <StateCard
          label={"Breaths"}
          bcolor={"border-l-green-900"}
          value={formatValue(TotalBreaths(days))}
        />
        <StateCard
          label={"Eye Blinks"}
          bcolor={"border-l-olive-700"}
          value={formatValue(TotalBlinks(days))}
        />
        <StateCard
          label={"Hours Slept"}
          bcolor={"border-l-fuchsia-900"}
          value={formatValue(TotalHourSlept(days))}
        />
        <StateCard
          label={"Total Meal"}
          bcolor={"border-l-olive-600"}
          value={formatValue(TotalMeals(days))}
        />
      </div>
    </div>
  );
}

export default LifeStats;
