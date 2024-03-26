import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./App.styled";
import Home from "./pages/home/Home";
import { THEME } from "./utils/theme";


function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
