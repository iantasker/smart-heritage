import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className='navbar navbar-light'>
            <Link className='navbar-brand mx-auto' to='/'>
                #ThisIsForEveryone
            </Link>
        </nav>
        <div className='splash' />
    </header>
)

export default Header
