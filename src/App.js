
import './App.css';
import Home from './Components/Home';
import ProfileLinks from './Components/ProfileLinks';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <ProfileLinks />
      <Footer />
    </div>
  );
}

export default App;
