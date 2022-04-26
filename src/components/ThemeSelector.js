import { useTheme } from "../hooks/useTheme";
import "../styles/themeSelector.scss";
import modeIcon from "../assets/darkModeIcon.svg";

const themeColors = ["orange", "pink", "darkCyan", "rebeccaPurple"];

export default function ThemeSelector() {
  const { color, changeColor, mode, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  console.log(mode);

  return (
    <div className="theme-selector">
      <h1 style={{ color: color }} className={`h1 ${mode}`}>
        change theme
      </h1>
      <div className="theme-btns-wrapper">
        <div>
          {themeColors.map((color) => (
            <button
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color, borderColor: color }}
              className="theme-buttons"
            />
          ))}
        </div>

        <img
          className="mode-icon"
          src={modeIcon}
          alt="dark / light mode icon toggle"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
    </div>
  );
}
