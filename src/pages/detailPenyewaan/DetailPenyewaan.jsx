import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import swal from "sweetalert";

function DetailPenyewaan() {

    let {mobil,harga} = useParams();
    const [tglPeminjaman, setTglPeminjaman] = useState('');
    const [tglPengembalian, setTglPengembalian] = useState('');

  const konversi = () =>{
    let selisihHari = tglPengembalian.split('-')[2] - tglPeminjaman.split('-')[2];
    let selisihBulan = tglPengembalian.split('-')[1] - tglPeminjaman.split('-')[1];

    if (isNaN(tglPeminjaman.split('-')[2])||(isNaN(tglPengembalian.split('-')[2]))){
      return 'Pilih tanggal';
    }else if ((selisihBulan<0) || (selisihHari<0 && selisihBulan<1)){
      swal({
        title: "Terjadi Kesalahan!",
        text: "Tanggal inputan salah!",
      });
      setTglPeminjaman('');
      setTglPengembalian('');
      return 'Pilih tanggal';
    }
    return (selisihHari+1+selisihBulan*30);
  }
  let dollarUSLocale = Intl.NumberFormat('en-US');

  return (
    <div>
        Mobil : {mobil}

        <br></br>
        <form>
        <label>Tanggal Peminjaman</label>
        <br></br>
        <input type='date' onChange={(e) => setTglPeminjaman(e.target.value)} value={tglPeminjaman} required></input>
        <br></br>
        <label>Tanggal Pengembalian</label>
        <br></br>
        <input type='date' onChange={(e) => setTglPengembalian(e.target.value)} value={tglPengembalian} required></input>
        <br></br>
        Harga Penyewaan : {harga} x {konversi()} hari
        <br></br>
        Total : Rp {(dollarUSLocale.format(harga.substring(3).replace('.','')*konversi())).toString().replaceAll(',','.')} 
        <br></br>
        <input type='submit' className="browser-default tombolsubmit"></input>
        </form>



    </div>
  )
}

export default DetailPenyewaan