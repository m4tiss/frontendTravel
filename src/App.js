import NavBar from './components/Navbar';
import MainImage from './components/MainImage';
import Footer from './components/Footer';
import MostPopularCities from './components/MostPopularCities';
import './index.css'

function App() {
  return (
    <div class="h-screen w-full">
      <NavBar/>
      <MainImage/>
      <MostPopularCities/>
      <Footer/>
    </div>
  );
}

export default App;
