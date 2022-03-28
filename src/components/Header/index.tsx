import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Container } from "./styles";

export function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const themeContext = useContext(AppContext);

  useEffect(() => {
    themeContext(isChecked);
  }, [isChecked])

  return (
    <Container>
      <div className="switch">
        <span>
          <input
            type="checkbox"
            id="toggleInput"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <button
            className="slider"
            type="button"
            onClick={() => setIsChecked(!isChecked)}
          />
        </span>
      </div>

      <p>
        Olá, <span>Victor</span>!
      </p>
    </Container>
  );
}
