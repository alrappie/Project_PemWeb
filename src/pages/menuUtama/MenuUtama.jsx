import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import menuUtamaCss from './menuutama.module.css';
import Items from '../../components/items/Items';
import {Navigate} from "react-router-dom";
import swal from "sweetalert";

function MenuUtama({authorized}) {
  // if (!authorized){
  //   return <Navigate to='/login'/>
  // }
  return (
    <div>
      <Navbar/>
      <h1 className={menuUtamaCss.h1}>Pilih Mobil Kesukaanmu</h1>
      <div className={menuUtamaCss.margin_ke_kanan}>
        <Items/>
      </div>
    </div>
  )
}

export default MenuUtama