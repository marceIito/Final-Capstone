import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Timer from './pages/Timer';

function App() {
  return (
    <>
      <BrowserRouter basename="/Final-Capstone/">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
          <Link to="/profile">Profile</Link> |
          <Link to="/Timer"> 
          Sobriety Timer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
