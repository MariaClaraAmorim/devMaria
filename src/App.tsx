import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import StartupScreen from "./components/startupScreen/StartupScreen";
import WelcomeScreen from "./components/welcomeScreen/WelcomeScreen";
import Desktop from "./components/desktop/Desktop";

function App() {
  const [screen, setScreen] = useState<"startup" | "welcome" | "desktop">("startup");

  const handleStartupFinish = () => setScreen("welcome");
  const handleWelcomeFinish = () => setScreen("desktop");

  return (
    <ThemeProvider>
      <BrowserRouter>
        {screen === "startup" && <StartupScreen onFinish={handleStartupFinish} />}
        {screen === "welcome" && <WelcomeScreen onFinish={handleWelcomeFinish} />}
        {screen === "desktop" && (
          <Routes>
            <Route path="/" element={<Desktop />} />
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;