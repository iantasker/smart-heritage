import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div className="row mt-5">
            <div className="col-sm-12 col-md-4 justify-content-sm-center">
                <Link to="/">
                    <img
                        src="/img/sh_logo.png"
                        alt="SmartHeritage"
                        className="img-fluid"
                    />
                </Link>
            </div>
            <div className="col-md-8 d-none d-md-block">
                <img src="/img/street_texture.png" className="img-fluid" />
            </div>
        </div>
    </header>
);

export default Header;
