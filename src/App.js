import Header from './components/Header';
import Landing from './components/Landing';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <EventInfo />
      <Gallery />
      <RSVP />
    </div>
  );
}

export default App;
