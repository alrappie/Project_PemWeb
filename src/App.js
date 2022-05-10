import React from 'react';
import { Login,Daftar,Error } from './pages';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/daftar' element={<Daftar/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
