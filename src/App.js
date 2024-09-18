import Header from './components/Header';
import About from './components/About';
import WeddingDate from './components/WeddingDate';
import MapLocation from './components/MapLocation';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';
import './App.css';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WeddingDate />
      <MapLocation />
      <Rsvp />
      <Footer />
    </div>
  );
}

export default App;
