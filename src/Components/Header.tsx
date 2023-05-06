import React from 'react'
import './All.css'
import { useNavigate, NavigateFunction } from 'react-router-dom'

const Header = () => {

  const navigate: NavigateFunction = useNavigate();

  const handleClick = () => {
    navigate('/Signup');
  };
  // const navigate = useNavigate();

  return (
    <div className='header'>
        
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <img src="/logo.png" alt="" />
        <h4>Pricing</h4>
        <h4>Contact Us</h4>
        <h4  onClick={handleClick} >Login</h4>
        
    </div>
  )
}

export default Header