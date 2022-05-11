import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
const navigate = useNavigate();

  return (
    <nav className='nav'>
      <div className='logo'>
      Mobil<span className='red'>Malang</span>
      </div>
      <div className='nav-others'>
        Profil
        Riwayat
      </div>
      <button  className='keluar' onClick={()=>navigate('/login')}>keluar</button >
    </nav>
  )
}

export default Navbar