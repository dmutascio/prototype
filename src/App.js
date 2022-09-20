import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import login from './pages/login';
import Home from './pages/home';


function App() {
  return (
    <div className = "App">
      <Router>
        <div>
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/login" element={login}/>
           </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
