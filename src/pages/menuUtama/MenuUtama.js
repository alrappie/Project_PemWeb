import Navbar from "../../components/navbar/Navbar";
import menuUtamaCss from "./menuutama.module.css";
import Items from "../../components/items/Items";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import {useState,React} from 'react';



function MenuUtama() {

//  const [nama, setNama] = useState("");
//  const [nik, setNik] = useState("");
//  const [telp, setTelp] = useState("");
//  const [kota, setkota] = useState("");



//   const config = {
//     headers : {
//       Authorization: 'Bearer '+localStorage.getItem('token')
//     }
//   }

//   axios.get('/user/',config).then(
//     res =>{
//         setNama(res.data.data.nama);
//         setNik(res.data.data.nik);
//         setTelp(res.data.data.telp);
//         setkota(res.data.data.kota_asal);
//     },
//     err =>{
//       console.log(err);
//     }
//   )

  // console.log(localStorage.getItem('token'));

  return (
    <div>
      <Navbar />
      {/* <p>{nama}</p>
      <p>{nik}</p>
      <p>{telp}</p>
      <p>{kota}</p> */}
      <h1 className={menuUtamaCss.h1}>Pilih Mobil Kesukaanmu</h1>
      <div className={menuUtamaCss.margin_ke_kanan}>
        <Items />
      </div>
    </div>
  );
}

export default MenuUtama;
