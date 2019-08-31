import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-light'>
        <Link className='navbar-brand mx-auto' to='/'>
            #ThisIsForEveryone
        </Link>
    </nav>
)

export default Header
