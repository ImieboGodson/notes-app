import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import { useState } from 'react';
import Header from './components/Header';
import Signup from './pages/Signup/Signup';
import Collection from './pages/Collection/Collection';
import Note from './pages/Note/Note';

const App = () => {

  return (
    <div className="App">

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/" element={<Dashboard />} />
        <Route path="/collections/:id" element={<Collection />} />
        <Route path="/notes/:id" element={<Note />} />
        <Route path="/collections/:id/notes/:id" element={<Note noteType={'fromCollections'}/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
