import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import './App.css'
import './fonts/vcr.ttf'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  return (
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
  );
}

export default App;
