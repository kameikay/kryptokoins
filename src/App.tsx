import { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyles } from "./styles";
import { theme } from "./styles/theme/default";
import { darkTheme } from "./styles/theme/default";

export const AppContext = createContext((isChecked: boolean) => {});

function App() {
  const [themeName, setThemeName] = useState(theme);

  function handleChangeTheme(isChecked: boolean) {
    setThemeName(isChecked ? darkTheme : theme);
  }

  return (
    <AppContext.Provider value={handleChangeTheme}>
      <ThemeProvider theme={themeName}>
        <GlobalStyles />

        <Routes>
          <Route index element={<Login />} />

          <Route path="/home" element={<PageLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
