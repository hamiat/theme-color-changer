import "../styles/navbar.scss";
import ThemeSelector from "./ThemeSelector";

export default function NavBar() {
  return (
    <header className="header">
      <ThemeSelector />
    </header>
  );
}
