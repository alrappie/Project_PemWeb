import React from 'react'
import './items.css';
import {useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { DetailPenyewaan } from '../../pages';

function Items() {
    const navigate = useNavigate();


    const cardInfo = [
        {image: require('../../assets/image1.jpg'),dMobil : 'Honda', bMobil: 'CRV', sisa:3, harga:'Rp. 300.000',cc:'1.300cc'},
        {image: require('../../assets/image2.jpg'),dMobil : 'Mitsubishi', bMobil: 'Pajero', sisa:1, harga:'Rp. 450.000',cc:'2.477cc'},
        {image: require('../../assets/image3.jpg'),dMobil : 'Toyota', bMobil: 'Inova', sisa:2, harga:'Rp. 350.000',cc:'1.998cc'},
        {image: require('../../assets/image4.jpg'),dMobil : 'Toyota', bMobil: 'Avanza', sisa:5, harga:'Rp. 350.000',cc:'1.997cc'},
    ];

    const renderCard = (card,index) =>{
        return (
            <div className='card' key={index} onClick={()=>navigate('/detail-penyewaan/'+card.dMobil+'-'+card.bMobil+'/'+card.harga)}>
            <img src={card.image}/> 
            <div className='card-title'>
                <p>Sisa {card.sisa}</p>
            </div>
            <div className='card-car-name'>
                <p>{card.dMobil} </p>
                <p>{card.bMobil} </p>
            </div>
            <div className='card-car-cc'>
                <p>{card.cc} </p>
            </div>
            <div className='card-car-price'>
                <p>{card.harga} <span className='price-hari'>/hari</span></p>
            </div>
            </div> 
        )
    }

  return (
      <>
          {cardInfo.map(renderCard)}
      </>
  )
}

export default Items

