
import './App.css';
import Home from './Components/Home';
import ProfileLinks from './Components/ProfileLinks';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <Home />
        <About />
        <ProfileLinks />
        <Footer />
        
      
    </div>
  );
}

export default App;
