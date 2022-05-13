import React from 'react';
import { Login,Daftar,Error,MenuUtama,DetailPenyewaan,Riwayat,Profile} from './pages';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/register' element={<Daftar/>}/>
        <Route path='/user/menu' element={<MenuUtama/>}/> 
        <Route path='/detail-penyewaan/:mobil/:harga' element={<DetailPenyewaan/>}/> 
        <Route path='/riwayat' element={<Riwayat/>}/> 
        <Route path='/user' exact element={<Profile/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}
/*authorized={false}*/
export default App;
