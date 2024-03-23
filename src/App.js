import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/RegistrationPage";
import CityPage from "./pages/CityPage";
import Footer from "./components/Footer";
import AllCitiesPanel from "./pages/AllCitiesPage";
import AccountUserPage from "./pages/AccountUserPage";
import AccountAdminPage from "./pages/AccountAdminPage";
import AccountPage from "./pages/AccountPage";

import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { useAuth } from "./provider/AuthProvider";

function App() {
  return (
    <div class="h-screen w-full">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/">
              <Route index element={<MainPage />} />
              <Route path="Registration" element={<AuthRoute component={<Registration />} />} />
              <Route path="Login" element={<AuthRoute component={<LoginPage />} />} />
               <Route
                path="Account"
                element={<PrivateRoute component={<AccountPage />} />}
              />
              <Route path="CityPage/:cityId" element={<CityPage />} />
              <Route path="AllCities" element={<AllCitiesPanel />} />
               <Route
                path="Account"
                element={<PrivateRoute component={<AccountPage />} />}
              />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

function PrivateRoute({ component }) {
  const { isAuth } = useAuth();

  return isAuth() ? component : <Navigate to="/login" />;
}

function AuthRoute({ component }) {
  const { isAuth } = useAuth();

  return isAuth() ?  <Navigate to="/Account" />:component ;
}


export default App;
