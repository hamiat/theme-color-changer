import "./styles.scss";
import Header from "./components/NavBar";
import About from "./components/About";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Header />
      <About />
    </div>
  );
}
