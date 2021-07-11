import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h4>Contáctanos</h4>
            </div>
            <div className="container">
                <div><a href="https://www.facebook.com/"><img src="./../../facebook.svg"/></a></div>
                <div><a href="https://www.instagram.com/"><img src="./../../instagram.svg"/></a></div>
                <div><a href="https://twitter.com/"><img src="./../../twitter.svg"/></a></div>
                <div><a href="https://www.youtube.com/"><img src="./../../youtube.svg"/></a></div>
            </div>
            <div>
                <p>© 2021 ABGUMI, Inc.</p>
            </div>
        </div>
    )
}