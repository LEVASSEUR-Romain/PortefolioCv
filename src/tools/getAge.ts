const getAge = (): number => {
  const dateNaissance = new Date("11/09/1986");
  //calculate month difference from current date in time
  const month_diff = Date.now() - dateNaissance.getTime();

  //convert the calculated difference in date format
  const age_dt = new Date(month_diff);

  //extract year from date
  const year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  const age = Math.abs(year - 1970);

  //display the calculated age
  return age;
};
export default getAge;
