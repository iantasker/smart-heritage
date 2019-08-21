import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-light'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>
        <img src="/svg/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="Smart Heritage"/>
          Smart Heritage
      </Link>
    </div>
  </nav>
)

export default Header
