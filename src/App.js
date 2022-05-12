import React from 'react';
import { Login,Daftar,Error,MenuUtama,DetailPenyewaan,Riwayat } from './pages';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/daftar' element={<Daftar/>}/>
        <Route path='/menu' exact element={<MenuUtama/>}/> 
        <Route path='/detail-penyewaan/:mobil/:harga' element={<DetailPenyewaan/>}/> 
        <Route path='/riwayat' element={<Riwayat/>}/> 
        <Route path='/' exact element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}
/*authorized={false}*/
export default App;
