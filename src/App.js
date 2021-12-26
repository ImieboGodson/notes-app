import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from './components/Header';
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <div className="App">

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
