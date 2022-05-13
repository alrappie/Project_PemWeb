import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useState, React } from "react";
import './profile.css';

function Profile() {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [telp, setTelp] = useState("");
  const [kota, setkota] = useState("");

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
    }
  );

  return (
    <div>
      <Navbar />
      <div className="profile">Profile</div>
    </div>
  );
}

export default Profile;
