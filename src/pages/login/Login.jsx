import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

// import '../umum.css';

const Login = () =>{
    return (
        <div class="row">
        <div class="col s12 m12 l6">
          <div class="masuk_text">
              <h3>Masuk</h3>
              <form action="" method="">
                  <input type="email" placeholder="email" class="browser-default input" name="email" required></input>
                  <br></br>
                  <input type="password" placeholder="password" class="browser-default input" name="password" required></input>
                  <br></br>
                  <input type="submit" class="browser-default tombolsubmit" value="Masuk"></input>
              </form>
              <p>Belum memiliki akun? <Link to="/daftar">Daftar</Link></p>
          </div>
        </div>

        <div class="col s12 m12 l6">
          <div class="image_alun">
              <div class="image_text">
                  <h3>Butuh Mobil Di Malang?</h3>
                  <h5>Sewa disini aja!</h5>
              </div>
          </div>
        </div>
    </div>
    )
}

export default Login