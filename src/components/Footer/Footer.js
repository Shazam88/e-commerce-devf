import React from 'react'
import './Footer.css'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import Youtube from './youtube.svg'

export const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h4>Contáctanos</h4>
            </div>
            <div className="container">
                <div><a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook"/></a></div>
                <div><a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram"/></a></div>
                <div><a href="https://twitter.com/"><img src={Twitter} alt="Twitter"/></a></div>
                <div><a href="https://www.youtube.com/"><img src={Youtube} alt="Youtube"/></a></div>
            </div>
            <div>
                <p>© 2021 ABGUMI, Inc.</p>
            </div>
        </div>
    )
}