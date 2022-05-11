import React from 'react'
import { useParams } from 'react-router-dom'


function DetailPenyewaan() {

    let {mobil,harga} = useParams();
  return (
    <div>
        Mobil : {mobil}
        <br></br>
        harga : {harga}
    </div>
  )
}

export default DetailPenyewaan