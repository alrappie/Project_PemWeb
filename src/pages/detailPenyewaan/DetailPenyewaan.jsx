import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import swal from "sweetalert";
import Navbar from "../../components/navbar/Navbar";
import detailPenyewaanCss from './detailpenyewaan.module.css';
import { useNavigate } from 'react-router-dom';

function DetailPenyewaan() {
  const navigate = useNavigate();

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
    return selisihHari+1+selisihBulan*30;
  }
  let dollarUSLocale = Intl.NumberFormat('en-US');

  return (
    <>
      <Navbar/>
      <div className={detailPenyewaanCss.container}>
          <div className={detailPenyewaanCss.detail_penyewaan}>Detail Penyewaan</div>
          <p className={detailPenyewaanCss.mobil_title}>Mobil : {mobil}</p> 
          <form>
          <label className={detailPenyewaanCss.label}>Tanggal Peminjaman</label>
          <br></br>
          <input type='date' onChange={(e) => setTglPeminjaman(e.target.value)} value={tglPeminjaman} className={detailPenyewaanCss.date} required></input>
          <br></br>
          <label className={detailPenyewaanCss.label}>Tanggal Pengembalian</label>
          <br></br>
          <input type='date' onChange={(e) => setTglPengembalian(e.target.value)} value={tglPengembalian} className={detailPenyewaanCss.date} required></input>
          <br></br>
          <br></br>
          <p>Harga Penyewaan : {harga} x {konversi()} hari</p>
          <p>Total : Rp {(dollarUSLocale.format(harga.substring(3).replace('.','')*konversi())).toString().replaceAll(',','.')} </p>          
          <input type='submit' className={detailPenyewaanCss.tombolsubmit} value='Kirim' onClick={()=>navigate('/riwayat')}></input>
          </form>
      </div>

    </>
  )
}

export default DetailPenyewaan