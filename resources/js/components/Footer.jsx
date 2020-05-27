import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className='container-fluid mt-2 p-0'>
    <hr />
    <div className="row">
      <Link className="col-auto" to="/">
        <img src="/img/MSL_logo.png" alt="MSL" className="img-fluid" />
      </Link>
      <Link className="col-auto" to="/">
        <img src="/img/rsa_orig.png" alt="RSA" className="img-fluid" />
      </Link>
      <Link className="col-auto" to="/">
        <img src="/img/thespace.png" alt="The Space" className="img-fluid" />
      </Link>
    </div>
    <div className="row">
      <div className="col-md-12 mt-3">
        <div className='text-left small'>
          SmartHeritage &copy; 2019 Copyright <a href='https://www.mslprojects.co.uk/'>MSL Projects</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
