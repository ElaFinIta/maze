import React from 'react';
import '../App.css';
import insta from './assets/instagram.svg';
import github from './assets/github.svg';
import stackoverflow from './assets/stack-overflow.svg';
import linkedin from './assets/linkedin.svg';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://stackoverflow.com/users/14586072/elanor" target="_blank" rel="noreferrer">
            <img src={stackoverflow} alt="stack-overflow icon" />
            </a>
            
            <a href="https://github.com/ElaFinIta" target="_blank" rel="noreferrer">
            <img src={github} alt="github icon" />
            </a>

            <a href="https://www.linkedin.com/in/elena-china-kolehmainen-958673143/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin icon" />
            </a>

            <a href="https://www.instagram.com/leggi_con_me/" target="_blank" rel="noreferrer">
            <img src={insta} alt="instagram icon" />
            </a>
            <p>ECK 2021</p>
        </div>
    );
};

export default Footer;