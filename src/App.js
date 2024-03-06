import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Registration from "./pages/Registration";

import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <div class="h-screen w-full">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
 
    </div>
  );
}

export default App;
