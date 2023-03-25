import Navbar from "@/scenes/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import routes from "./routes.const";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
