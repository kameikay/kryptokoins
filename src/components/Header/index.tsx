import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Container } from "./styles";

export function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", false);
  const themeContext = useContext(AppContext);

  useEffect(() => {
    themeContext(theme);
  }, [isChecked])

  function handleToggleTheme() {
    setIsChecked(!isChecked);
    setTheme(!theme);
  }

  return (
    <Container>
      <div className="switch">
        <span>
          <input
            type="checkbox"
            id="toggleInput"
            checked={theme}
            onChange={() => handleToggleTheme()}
          />
          <button
            className="slider"
            type="button"
            onClick={() => handleToggleTheme()}
          />
        </span>
      </div>

      <p>
        Olá, <span>Victor</span>!
      </p>
    </Container>
  );
}
