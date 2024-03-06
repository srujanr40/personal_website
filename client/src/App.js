import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import './App.css'
import './fonts/vcr.ttf'
import Home from './components/Home/Home'

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
  );
}

export default App;
