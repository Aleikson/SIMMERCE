import React from 'react';
import styles from './Footer.module.css';
import {  FaFacebook, FaTwitter } from 'react-icons/fa';

import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className={styles.footerDistributed}>
            <div className={styles.footerLeft}>
                <h3>Cupcake Palace</h3>
                <p className={styles.footerLinks}>
                    <a href="/" className={styles.link1}>Home</a>
                    <a href="/">Gallery</a>
                    <a href="/">Shop</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </p>
                <p className={styles.footerCompanyName}>Cupcake Palace © 2023</p>
            </div>
            <div className={styles.footerCenter}>
                <div>
                    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                </div>
                <div>
                    <p>+1.555.555.5555</p>
                </div>
                <div>
                    <p><a href="/">palace@company.com</a></p>
                </div>
            </div>

            <div className={styles.footerRight}>
                <p className={styles.footerCompanyAbout}>
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className={styles.footerIcons}>
                    <a href="/"><i><FaFacebook /></i></a>
                    <a href="/"><i><FaTwitter /></i></a>
                    <a href="/"><i><AiOutlineInstagram /></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;