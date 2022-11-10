import React from 'react';
import logo from '../../img/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
                <img style={{width: '70px'}} src={logo} />
                <p>Crumb Cooking</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Birthday Party Food Delivery</a>
                <a className="link link-hover">Football Party Food Delivery</a>
                <a className="link link-hover">Graduation Party Food Delivery</a>
                <a className="link link-hover">Dinner Party Food Delivery</a>
                <a className="link link-hover"> Book Club Snack Delivery</a>
                <a className="link link-hover"> Pool Party Snack Delivery</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;