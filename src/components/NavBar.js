import "../styles/navbar.scss";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "./ThemeSelector";

export default function NavBar() {
  const { color } = useTheme();

  return (
    <header className="header" style={{ background: color }}>
      <h1>Hello!</h1>
      <nav>
        <ThemeSelector />
      </nav>
    </header>
  );
}
