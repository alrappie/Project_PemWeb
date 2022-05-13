import React from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
const navigate = useNavigate();

  return (
    <nav className='nav'>
      <div className='logo'>
      <Link className='c' to={'/menu'}>
        Mobil<span className='red'>Malang</span>
      </Link>
      </div>
      <div className='nav-others'>
        <Link className='a' to={'/profil'}>Profil</Link>
        <Link className='b' to={'/riwayat'}>Riwayat</Link>
      </div>
      <Link  to = {'/user/login'} className='keluar' onClick={()=>localStorage.clear()}>keluar</Link >
    </nav>
  )
}

export default Navbar