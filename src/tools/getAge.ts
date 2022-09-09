const getAge = (): number => {
  const dateNaissance = new Date("11/09/1986");
  const month_diff = Date.now() - dateNaissance.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age;
};
export default getAge;
