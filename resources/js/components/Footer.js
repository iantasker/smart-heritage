import React from 'react'

const Footer = () => (
    <footer className='container-fluid bg-white mt-2'>
        <div className="row justify-content-center py-2">
            <div className="col-auto text-center">
                <a href='https://www.mslprojects.co.uk/'>
                    <img src='/img/msl_projects.200x300.png' className='footer-img' alt='MSL Projects' />
                </a>
            </div>
            <div className="col-auto text-center">
                <a href='https://www.thersa.org/'>
                    <img src='/img/rsa.200x300.png' className='footer-img' alt='RSA: Royal Society for the encouragement of Arts, Manufactures and Commerce' />
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 bg-light">
                <div className='text-center text-black-50'>
                    SmartHeritage &copy; 2019 Copyright <a href='https://www.mslprojects.co.uk/'>MSL Projects</a>
                </div>
            </div>
        </div>
    </footer >
)

export default Footer
