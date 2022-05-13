import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useState, React } from "react";
import './profile.css';

function Profile() {
  let history = useNavigate();
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [telp, setTelp] = useState("");
  const [kota, setkota] = useState("");
  const [password, setpassword] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  axios.get("/user/", config).then(
    (res) => {
      setNama(res.data.data.nama);
      setNik(res.data.data.nik);
      setTelp(res.data.data.telp);
      setkota(res.data.data.kota_asal);
    },
    (err) => {
      console.log(err);
      return history('/user/login');

    }
  );

  return (
    <div>
      <Navbar />
      <div className="profile">Profile</div>
      <form className="form_profile">
        <label className="bold">Nama:</label>
        <input type = 'text' value={nama} onChange={(e) => setNama(e.target.value)} className='label'></input>
        <br></br>
        <label className="bold">NIK:</label>
        <input type = 'text' value={nik} onChange={(e) => setNik(e.target.value)} className='label'></input>
        <br></br>
        <label className="bold">Kotal Asal:</label>
        <input type = 'text' value={kota} onChange={(e) => setkota(e.target.value)} className='label'></input>
        <br></br>
        {/* <label>Password:</label>
        <input value={password} onChange={(e) => setpassword(e.target.value)}></input>
        <br></br> */}
        <label className="bold">No HP:</label>
        <input type = 'text' value={telp} onChange={(e) => setTelp(e.target.value)} className='label'></input>
        <br></br>
        <input type='submit' className="profile_submit" value='ubah'></input>
      </form>
    </div>
  );
}

export default Profile;
