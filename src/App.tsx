import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import LayoutXP from "./components/layout/LayoutXP";
import LayoutGoogle from "./components/layout/LayoutGoogle";
import LayoutHome from "./components/layout/LayoutHome";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route index element={<LayoutXP />} />
          <Route path="/google" element={<LayoutGoogle />} />
          <Route path="/home" element={<LayoutHome />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
