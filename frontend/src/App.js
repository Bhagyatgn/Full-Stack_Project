// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes like login/register later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
