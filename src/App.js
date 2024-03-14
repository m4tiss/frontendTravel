import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Registration from "./pages/RegistrationPage";
import CityPage from "./pages/CityPage";
import Footer from "./components/Footer";
import AllCitiesPanel from "./pages/AllCitiesPage";
import AccountUserPage from "./pages/AccountUserPage";
import "./index.css";



function App() {
  return (
    <div class="h-screen w-full">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="CityPage/:id" element={<CityPage/>}/>
          <Route path="AllCities" element={<AllCitiesPanel/>}/>
          <Route path="AccountUser" element={<AccountUserPage/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
 
    </div>
  );
}

export default App;
