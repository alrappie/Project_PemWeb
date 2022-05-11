import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import MenuUtama from '../menuUtama/MenuUtama';
import swal from "sweetalert";
import {useNavigate} from 'react-router-dom';
// import '../umum.css';

function Login () {
    let history = useNavigate();

    const adminUser = {
        nomor: '081310887676',
        password : 'password'
      };

      const [user, setUser] = useState('');
      const [pwd, setPwd] = useState('');
      const [success,setSuccess] = useState(false);

      const handleSubmit = async (e) =>{
          e.preventDefault();
          if (user === adminUser.nomor && pwd === adminUser.password){
            setUser('');
            setPwd('');
            setSuccess(true);
            return history('/menu');

          }else{
            swal({
                title: "Terjadi Kesalahan!",
                text: "Nomor HP atau Password Anda Salah!",
                
            });
            
          }
      }
    return (
        <div className="row">
        <div className="col s12 m12 l6">
          <div className="masuk_text">
              <h3>Masuk</h3>
              <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Nomor HP" 
                    className="browser-default input" 
                    name="nomorHP" 
                    id='nomorHP' 
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

export default Login