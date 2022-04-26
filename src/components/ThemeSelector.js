import { useTheme } from "../hooks/useTheme";
import "../styles/themeSelector.scss";

const themeColors = ["orange", "pink", "cyan", "rebeccaPurple"];

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
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
    </div>
  );
}
