import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import MenuUtama from '../menuUtama/MenuUtama';
import swal from "sweetalert";

// import '../umum.css';

function Login () {

    const adminUser = {
        email: 'alravimahesa@gmail.com',
        password : 'password'
      };

      const [user, setUser] = useState('');
      const [pwd, setPwd] = useState('');
      const [errMsg,setErrMsg] = useState('');
      const [success,setSuccess] = useState(false);

      const handleSubmit = async (e) =>{
          e.preventDefault();
          if (user === adminUser.email && pwd === adminUser.password){
            setUser('');
            setPwd('');
            setSuccess(true);
          }else{
            setUser('');
            setPwd('');
            swal({
                title: "Terjadi Kesalahan!",
                text: "Email atau Password Anda Salah!",
                // icon: "error",
                // button: "Ok",
              });
          }
      }
    
    return (
        <>
{success ? (
     <MenuUtama/>
):(
        <div class="row">
        <div class="col s12 m12 l6">
          <div class="masuk_text">
              <h3>Masuk</h3>
              <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="browser-default input" 
                    name="email" 
                    id='email' 
                    onChange={(e) => setUser(e.target.value)}
                    value = {user}
                    required>
                </input>
                <br></br>
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="browser-default input" 
                    name="password" 
                    id='password' 
                    onChange={(e) => setPwd(e.target.value)}
                    value = {pwd}
                    required>
                </input>
                <br></br>
                <input type="submit" className="browser-default tombolsubmit" value="Masuk"></input>
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
    )}
    </>
    )
}

export default Login