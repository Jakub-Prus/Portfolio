import { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitch = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="m-6 flex flex-col items-center absolute right-2 top-0">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
      <h3 className="text-xs">{colorTheme === "light" ? "Dark mode" : "Light mode"}</h3>
    </div>
  );
};

export default ThemeSwitch;
