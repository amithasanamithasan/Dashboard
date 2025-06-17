import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import Home from "./components/Home";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<div className="text-center"><p className="text-2xl text-amber-500 font-semibold">Leaderboard Page</p></div>} />
            <Route path="/reports" element={<div className="text-center"><p className="text-2xl text-amber-500 font-semibold">Reports Page</p></div>} />
            <Route path="/subscription" element={<div className="text-center"><p className="text-2xl text-amber-500 font-semibold">Subscription Page</p></div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
