import "./navbar.scss";
import { useTheme } from "../hooks/useTheme";

export default function NavBar() {
  const { color } = useTheme();

  return (
    <header className="header" style={{ background: color }}>
      <h1>Hello!</h1>
      <nav>
        <ul className="navbar">
          <li>
            <a href="/">Red</a>
          </li>
          <li>
            <a href="/">Green</a>
          </li>
          <li>
            <a href="/">Yellow</a>
          </li>
          <li>
            <a href="/">Purple</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
