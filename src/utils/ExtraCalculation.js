let BirthdayDays = (dobString) => {
  let today = new Date();
  let dob = new Date(dobString);

  //! Get current year's birthday
  let nextBirthday = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate(),
  );
  //! If the birthday has already passed this year, set it to next year
  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  let diff = nextBirthday - today;
  let daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return daysRemaining;
};

let TotalDays = (dobString) => {
  let birthDate = new Date(dobString);
  let today = new Date();

  let diffInMs = today - birthDate;
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
};

let TotalHeartBeats=(totaldays)=>{
  return (totaldays*1440*72)
}

let TotalHourSlept = (totaldays) => {
  return totaldays * 8;
};

let TotalBreaths = (totaldays) => {
  return totaldays *1440*16;
};
let TotalBlinks = (totaldays) => {
  return totaldays * 1440*15;
};
let TotalMeals = (totaldays) => {
  return totaldays * 3;
};

const formatValue = (num) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(num);
};

export {
  BirthdayDays,
  TotalDays,
  TotalHeartBeats,
  TotalHourSlept,
  TotalBlinks,
  TotalBreaths,
  formatValue,
  TotalMeals,
};
