import { useAppContext } from "./Context";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();

  return (
    <section className="toggle-container" onClick={toggleDarkTheme}>
      <button type="button" className="dark-toggle">
        {isDarkTheme ? (
          <BsMoonStarsFill className="toggle-icon" />
        ) : (
          <BsSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
