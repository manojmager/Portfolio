import React from 'react'
import footer_style from './footer_style.css'
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
                            <li><a href="">instagram</a></li>
                            <li><a href="">email</a></li>
                            <li><a href="">upwork</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}