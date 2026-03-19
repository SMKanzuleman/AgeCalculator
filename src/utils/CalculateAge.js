function CalculateAge(inputdob) {
  const today = new Date();
  const dob = new Date(inputdob);

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();



  //! If days are negative borrow one month(30 days) from months
  if (days < 0) {
    months--;
    const PrevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += PrevMonth.getDate();
  }
  //! If months are negative borrow one year(12 months) from years
  if (months < 0) {
    years--;
    months += 12;
  }
    if (years < 0) {
      years=0;
    }
  return { years, months, days };
}
export default CalculateAge;
