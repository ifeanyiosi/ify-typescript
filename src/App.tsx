import Navbar from "@/scenes/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
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
