import React from 'react'
import './about-style.css';
import profileImage from '../../assets/img/profile1.jpg';

export default function About() {
    return (
        <section id="about" className='about'>
            <div className="section_container">
                <div className="section_content flex">
                    <div className="profile">
                        <img src={profileImage} alt="" height="240px" width="400px" />
                    </div>
                    <div className="paragraph">
                        <p>PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY
                            INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.
                        </p>
                        <p>LET'S EMBARK ON AN EXHILARATING JOURNEY TOGETHER TO TRANSFORM YOUR IDEAS INTO REMARKABLE DIGITAL EXPERIENCES
                            THAT RESONATE WITH YOUR AUDIENCE. <br /> WELCOME ABOARD!
                        </p>
                        <p></p>
                        <div className="about_me">
                            <p>With a strong foundation in web development, I bring a unique blend of technical expertise and creative
                                flair to every project I undertake. I am currently available for freelance opportunities worldwide,
                                bringing my passion and skills to clients across the globe. As you scroll down, you'll find a showcase
                                of my work, highlighting my proficiency in crafting interfaces that make a meaningful impact. I invite you to explore my portfolio and witness the fusion of aesthetics and usability.
                            </p>
                            <a href="what.html">more about me and services</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}