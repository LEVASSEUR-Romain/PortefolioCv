const getVariableCss = (varibleCss: string) => {
  const docStyle = getComputedStyle(document.documentElement);
  return docStyle.getPropertyValue(varibleCss);
};
export default getVariableCss;
