import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Riwayat() {
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
      console.log(err);
      return history('/user/login');

    }
  );
  return (
    <div>
      <Navbar/>
      <p>
        Riwayat
      </p>
      
    </div>
  )
}

export default Riwayat