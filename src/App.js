import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './Menu/Menu';
import Login from './login/Login';
import Register from './register/register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
