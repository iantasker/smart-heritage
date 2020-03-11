import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className='navbar navbar-light'>
      <Link className='navbar-brand mx-auto' to='/'>
        <img srcset="/img/smart_heritage.png 300w,
            /img/smart_heritage.png 800w"
          sizes="(max-width: 600px) 480px,
            800px"
          src="/img/smart_heritage.png" alt="SmartHeritage"/>
      </Link>
    </nav>
  </header>
)

export default Header
