import React from 'react'
import './footer_style.css'
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-profession">
                    <p>Frontend Web and App,</p>
                    <p>Creative designer UIUX</p>
                    <p>BASED IN CANADA.</p>
                </div>


                <div className="loc-social-links">
                    <p>London, Canada</p>
                    <div className="social-links">
                        <ul>
                            <li><a href="https://www.instagram.com/kamadeva____/">instagram</a></li>
                            <li><a href="https://mail.google.com/mail/">email</a></li>
                            <li><a href="https://mail.google.com/mail/">upwork</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}