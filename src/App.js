import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTheme } from '@material-ui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import themePrototype from './themePrototype';

import './App.css'
import Login from './pages/login';
import Home from './pages/home';

function App() {

  return (
    <ThemeProvider theme={themePrototype}>
      <CssBaseline />
      <div className = "App">
        <Router>
          <div>
             <Routes>
                 <Route path="/" element={<Home />}/>
                 <Route path="/login" element={<Login />}/>
             </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
