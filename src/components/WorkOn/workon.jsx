import React from 'react'
import './workon-style.css';
import tog_img from '../../assets/img/tog-img.png'

export default function WorkOn() {
    const spanStyles = [
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '1' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '2' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '3' },
        { transformOrigin: '20.9766px', transform: 'translate(0px, 0px)', '--i': '4' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '5' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '6' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '7' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '8' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '9' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '10' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '11' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '12' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '13' },
        { transformOrigin: '62.9766px', transform: 'translate(0px, 0px)', '--i': '14' },
    ];
    const text1 = 'KAMAS MOVIE';
    const chars1 = text1.split('');
   
    return (
        <section id="work" className="workon">
            <div className="section_container">
                <div className="section_content workon_project_items">
                    <h1 className="section_title">WORKING ON</h1>
                    <div className='tog-img'>
                        <img src={tog_img} className='tog_img' alt="" />
                    </div>
                    <a className="project flex" href="project.html">
                        <div className="pro_title">
                            {chars1.map((char, index) => (
                                <span
                                    key={index}
                                    style={{
                                        transformOrigin: spanStyles[index]?.transformOrigin || 'initial', // Use the corresponding style from spanStyles or a default if not available
                                        transform: spanStyles[index]?.transform || 'initial',
                                        '--i': spanStyles[index]?.['--i'] || 'initial',
                                    }}
                                >
                                    {char}
                                </span>
                            ))}

                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}