import React from 'react'
import './works-style.css';
import './phone-style.css'

export default function Works() {
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
    const text1 = '01.GROUPIM';
    const text2 = '02.NEWSPORTAL';
    const text3 = '03.EATFRESH';

    const chars1 = text1.split('');
    const chars2 = text2.split('');
    const chars3 = text3.split('');

    return (
        <section id="work" className="work">
            <div className="section_container">
                <div className="section_content project_items">
                    <div className="section_title">RECENT PROJECTS</div>
                    <a className="project" href="project.html">
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
                        <div className="pop phone">
                            <div className="phone-back">
                                <div className="phone-left-side">
                                    <div className="phone-antena"></div>
                                    <div className="phone-button top"></div>
                                    <div className="phone-button"></div>
                                    <div className="phone-button bottom"></div>
                                    <div className="phone-antena bottom"></div>
                                </div>
                                <div className="phone-bottom">
                                    <div className="phone-antena"></div>
                                    <div className="bottom-speaker">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="phone-screw">
                                        <div></div>
                                    </div>
                                    <div className="phone-charger">
                                    </div>
                                    <div className="phone-screw right">
                                        <div></div>
                                    </div>
                                    <div className="bottom-speaker right">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="phone-antena right"></div>
                                </div>
                            </div>

                            <div className="phone-screen"></div>

                            <div className="phone-display">
                                <div className="phone-notch">
                                    <div className="phone-speaker"></div>
                                </div>
                                <div className="display-content">
                                    <img src="assets/img/project_1b.PNG" alt="" width="370px" height="690px" />

                                    <div className="home-button"></div>
                                </div>
                            </div>

                            <div className="phone-reflections">
                                <div className="reflection-1"></div>
                                <div className="reflection-2"></div>
                                <div className="reflection-3"></div>
                                <div className="reflection-4"></div>
                                <div className="reflection-5"></div>
                                <div className="reflection-6"></div>
                                <div className="reflection-7"></div>
                            </div>
                        </div>
                        <div className="pro_desc">
                            <div>Final Year Project</div>
                            <div>APP-2021 AD.</div>
                        </div>
                    </a>
                    <div className="horizontal_line"></div>
                    <a className="project" href="project.html">
                        <div className="pro_title">
                            {chars2.map((char, index) => (
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
                        <div className="pop phone">
                            <div className="phone-back">
                                <div className="phone-left-side">
                                    <div className="phone-antena"></div>
                                    <div className="phone-button top"></div>
                                    <div className="phone-button"></div>
                                    <div className="phone-button bottom"></div>
                                    <div className="phone-antena bottom"></div>
                                </div>
                                <div className="phone-bottom">
                                    <div className="phone-antena"></div>
                                    <div className="bottom-speaker">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="phone-screw">
                                        <div></div>
                                    </div>
                                    <div className="phone-charger">
                                    </div>
                                    <div className="phone-screw right">
                                        <div></div>
                                    </div>
                                    <div className="bottom-speaker right">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="phone-antena right"></div>
                                </div>
                            </div>

                            <div className="phone-screen"></div>

                            <div className="phone-display">
                                <div className="phone-notch">
                                    <div className="phone-speaker"></div>
                                </div>
                                <div className="display-content">
                                    <img src="assets/img/project_2b.png" alt="" width="375px" height="700px" />

                                    <div className="home-button"></div>
                                </div>
                            </div>

                            <div className="phone-reflections">
                                <div className="reflection-1"></div>
                                <div className="reflection-2"></div>
                                <div className="reflection-3"></div>
                                <div className="reflection-4"></div>
                                <div className="reflection-5"></div>
                                <div className="reflection-6"></div>
                                <div className="reflection-7"></div>
                            </div>
                        </div>
                        <div className="pro_desc">
                            <div>Intern Project</div>
                            <div>APP-2021 AD.</div>
                        </div>
                    </a>
                    <div className="horizontal_line"></div>
                    <a className="project" href="project.html">
                        <div className="pro_title">
                            {chars3.map((char, index) => (
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
                        <div className="pop phone">
                            <div className="phone-back">
                                <div className="phone-left-side">
                                    <div className="phone-antena"></div>
                                    <div className="phone-button top"></div>
                                    <div className="phone-button"></div>
                                    <div className="phone-button bottom"></div>
                                    <div className="phone-antena bottom"></div>
                                </div>
                                <div className="phone-bottom">
                                    <div className="phone-antena"></div>
                                    <div className="bottom-speaker">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="phone-screw">
                                        <div></div>
                                    </div>
                                    <div className="phone-charger">
                                    </div>
                                    <div className="phone-screw right">
                                        <div></div>
                                    </div>
                                    <div className="bottom-speaker right">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="phone-antena right"></div>
                                </div>
                            </div>

                            <div className="phone-screen"></div>

                            <div className="phone-display">
                                <div className="phone-notch">
                                    <div className="phone-speaker"></div>
                                </div>
                                <div className="display-content">
                                    <img src="assets/img/project_2a.png" alt="" width="375px" height="730px" />

                                    <div className="home-button"></div>
                                </div>
                            </div>

                            <div className="phone-reflections">
                                <div className="reflection-1"></div>
                                <div className="reflection-2"></div>
                                <div className="reflection-3"></div>
                                <div className="reflection-4"></div>
                                <div className="reflection-5"></div>
                                <div className="reflection-6"></div>
                                <div className="reflection-7"></div>
                            </div>
                        </div>
                        <div className="pro_desc">
                            <div>Eat Fresh</div>
                            <div>WEB-2022 AD.</div>
                        </div>
                    </a>
                </div>

                <div className="explored-tools">
                    <h1>EXPLORED TOOLS</h1>
                    <div className="tool-list flex">
                        <li>Java</li>
                        <li>Kotlin</li>
                        <li>Swift</li>
                        <li>JavaScript</li>
                        <li>Springboot</li>
                        <li>Laravel</li>
                        <li>React</li>
                    </div>
                </div>
            </div>
        </section>
    );
}