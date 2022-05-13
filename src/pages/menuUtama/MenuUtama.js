import Navbar from "../../components/navbar/Navbar";
import menuUtamaCss from "./menuutama.module.css";
import Items from "../../components/items/Items";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import {useState,React} from 'react';



function MenuUtama() {
  let history = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios.get("/user/", config).then(
    (res) => {
    },
    (err) => {
      return history('/user/login');
    }
  );

  return (
    <div>
      <Navbar />
      <h1 className={menuUtamaCss.h1}>Pilih Mobil Kesukaanmu</h1>
      <div className={menuUtamaCss.margin_ke_kanan}>
        <Items />
      </div>
    </div>
  );
}

export default MenuUtama;
