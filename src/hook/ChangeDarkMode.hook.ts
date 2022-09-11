import { useEffect, useState } from "react";
import getVariableCss from "../tools/getVariableCss";
import { useStateDarkMode } from "../interface";
const ChangeDarkMode = (): useStateDarkMode => {
  //isDarkMode: boolean, setDarkMode: Function
  const defaultDarkMode = false;
  const [isDarkMode, setDarkMode] = useState<boolean>(defaultDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode + "");
    if (isDarkMode) {
      // dark
      document.documentElement.style.setProperty(
        "--background-color-1",
        getVariableCss("--background-color-1-dark")
      );
      document.documentElement.style.setProperty(
        "--background-color-2",
        getVariableCss("--background-color-2-dark")
      );
      document.documentElement.style.setProperty(
        "--text-color",
        getVariableCss("--text-color-dark")
      );
      document.documentElement.style.setProperty(
        "--text-hover",
        getVariableCss("--text-hover-dark")
      );
    } else {
      // light
      document.documentElement.style.setProperty(
        "--background-color-1",
        getVariableCss("--background-color-1-light")
      );
      document.documentElement.style.setProperty(
        "--background-color-2",
        getVariableCss("--background-color-2-light")
      );
      document.documentElement.style.setProperty(
        "--text-color",
        getVariableCss("--text-color-light")
      );
      document.documentElement.style.setProperty(
        "--text-hover",
        getVariableCss("--text-hover-dark")
      );
    }
  }, [isDarkMode]);

  return { isDarkMode, setDarkMode };
};

export default ChangeDarkMode;
