import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-light'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>
                #ThisIsForEveryone
            </Link>
        </div>
    </nav>
)

export default Header
