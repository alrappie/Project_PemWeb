import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import DaftarCSS from './daftar.module.css';

const Daftar = () =>{
    return (
        <div className="row">
        <div className="col s12 m12 l6">
          <div className={DaftarCSS.masuk_text}>
              <h3>Daftar</h3>
              <form action="" method="">
                  <input type="email" placeholder="Email" className="browser-default input" name="email" required></input>
                  <br></br>
                  <input type="text" placeholder="NIK" className="browser-default input" name="NIK" required></input>
                  <br></br>
                  <input type="text" placeholder="Kota asal" className="browser-default input" name="Kota_asal" required></input>
                  <br></br>
                  <input type="password" placeholder="Password" className="browser-default input" name="password" required></input>
                  <br></br>
                  <input type="number" placeholder="Nomor HP" className="browser-default input" name="nomor_hp" required></input>
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