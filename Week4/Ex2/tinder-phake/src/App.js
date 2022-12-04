import logo from './logo.svg';
import './App.css';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
