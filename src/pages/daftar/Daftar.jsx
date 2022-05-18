import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DaftarCSS from './daftar.module.css';
import swal from "sweetalert";

const Daftar = () =>{
    let history = useNavigate();

    const [nama, setNama] = useState("");
    const [nik, setnik] = useState("");
    const [kotaAsal, setKotaAsal] = useState("");
    const [pwd, setPwd] = useState("");
    const [telp, setTelp] = useState("");
  
    const data = {
      nama: nama,
      nik: nik,
      kota_asal: kotaAsal,
      pass: pwd,
      telp: telp,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/user/register", data)
          .then((response) => {
            console.log(response);
            // localStorage.setItem('token',response.data.data.token);
            swal({
                title: "Pemberitahuan!",
                text: "Pendaftaran Berhasil!",
              });
            history('/user/login');
          })
          .catch((error) => {
            console.log(error);
            setNama('');
            setnik('');
            setKotaAsal('');
            setPwd('');
            setTelp('');
            swal({
              title: "Terjadi Kesalahan!",
              text: "Nomor HP atau Password Anda Salah!",
            });
          });
      };

    return (
        <div className="row">
        <div className="col s12 m12 l6">
          <div className={DaftarCSS.masuk_text}>
              <h3>Daftar</h3>
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Nama" className="browser-default input" name="nama" id="nama" onChange={(e)=>setNama(e.target.value)} value={nama} required ></input>
                  <br></br>
                  <input type="text" placeholder="NIK" className="browser-default input" name="nik" id="nik" onChange={(e)=>setnik(e.target.value)} value={nik} required></input>
                  <br></br>
                  <input type="text" placeholder="Kota asal" className="browser-default input" name="kota_asal" id="kota_asal" onChange={(e)=>setKotaAsal(e.target.value)} value={kotaAsal} required></input>
                  <br></br>
                  <input type="password" placeholder="Password" className="browser-default input" name="pass" id="pass" onChange={(e)=>setPwd(e.target.value)} value={pwd} required></input>
                  <br></br>
                  <input type="number" placeholder="Nomor HP" className="browser-default input" name="telp" id="telp" onChange={(e)=>setTelp(e.target.value)} value={telp} required></input>
                  <br></br>
                  <input type="submit" className="browser-default tombolsubmit" value="Daftar"></input>
              </form>
              <p>Sudah memiliki akun? <Link to="/user/login/">Masuk</Link></p>
          </div>
        </div>

        <div className="col s12 m12 l6">
          <div className="image_alun">
              <div className="image_text">
                  <h3>Butuh Mobil Di Malang?</h3>
                  <h5>Sewa disini aja!</h5>
              </div>
          </div>
        </div>
    </div>
    )
}

export default Daftar