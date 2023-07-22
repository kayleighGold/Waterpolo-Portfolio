import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import ProgressBar from "./Progress";
import Popup from 'reactjs-popup';
import Accordion from "./Accordion";
import 'reactjs-popup/dist/index.css';

export default function Portfolio(){
    const [open, setOpen] = useState(null);  
    const closeModal = () => setOpen(null);

    return (
        <section id="portfolio" class="portfolio section-bg bg-light">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
            <h2>Portfolio</h2>
            <p>My portfolio encompasses a diverse range of projects in cybersecurity, software development, and mathematics. Overall, my portfolio showcases my multidisciplinary skills and my dedication to creating secure, efficient, and innovative solutions.</p>
            </div>
                <div class="row">
                    <div class="col-lg-4 text-center my-3">
                        <div class="rounded-circle" alt="Generic placeholder image" width="140" height="140"><i class="bx bx-lg bx-terminal"></i></div>
                        <h2><b>Cybersecurity</b></h2>
                        <p>Cyber security credials and Projects.</p>
                        <button class="btn btn-secondary" onClick={() => setOpen("Security")}>View details »</button>
                        <Popup 
                            contentStyle={{
                                borderRadius: "5px",
                                minWidth: "90%",
                            }}
                            closeOnDocumentClick
                            onClose={closeModal}
                            modal
                            lockScroll={true}
                            repositionOnResize={true}
                            open={open === "Security"}
                            >
                                <PortfolioItem closeFunc={closeModal}>
                                <section id="cybersecurity" class="skills section-bg bg-light">
                                    <div class="container" data-aos="fade-up">
                                            <div class="section-title">
                                                <h2>Cybersecurity</h2>
                                                <p>I do my best to stay on top of cybersecurity to keep digital spaces secure, and I enjoy dabbling in software development, creating programs that hopefully make a positive impact. I also have a decent grasp of mathematics, which comes in handy when tackling tricky problems.</p>
                                            </div>
                                            <div class="row skills-content">    
                                                <div class="col-lg-6">
                                                    <ProgressBar skill={"Linux"} progress={3} timeFrame={"Years"}/>
                                                    <ProgressBar skill={"Bash Scripting"} progress={6} timeFrame={"Months"}/>
                                                </div>
                                                <div class="col-lg-6">
                                                    <ProgressBar skill={"Kali Tools"} progress={6} timeFrame={"Months"}/> 
                                                    <ProgressBar skill={"Networking/Networking tools"} progress={1} timeFrame={"Year"}/> 
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </PortfolioItem> 
                        </Popup>
                    </div>
                    <div class="col-lg-4 text-center my-3">
                        <div class="rounded-circle" alt="Generic placeholder image" width="140" height="140"><i class="bx bx-lg bx-code"></i></div>
                        <h2><b>Software Development</b></h2>
                        <p>Skills and Projects.</p>
                        <p><button class="btn btn-secondary" onClick={() => setOpen("Software")}>View details »</button></p>
                        <Popup 
                            contentStyle={{
                                borderRadius: "5px",
                                width: "90%",
                                maxHeight: "100%",
                            }}
                            closeOnDocumentClick
                            onClose={closeModal}
                            modal
                            lockScroll={true}
                            repositionOnResize={true}
                            open={open === "Software"}
                            >
                                <PortfolioItem closeFunc={closeModal}>
                                <section id="Software" class="skills section-bg bg-light">
                                    <div class="container" data-aos="fade-up">
                                            <div class="section-title">
                                            <h2>Software Development</h2>
                                            <p>I do my best to stay on top of cybersecurity to keep digital spaces secure, and I enjoy dabbling in software development, creating programs that hopefully make a positive impact. I also have a decent grasp of mathematics, which comes in handy when tackling tricky problems.</p>
                                            </div>
                                            <div class="row skills-content">    
                                            <div class="col-lg-6">
                                                <ProgressBar skill= {"C++"} progress={3} timeFrame={"Years"}/>
                                                <ProgressBar skill= {"Java"} progress={3} timeFrame={"Years"}/>
                                                <ProgressBar skill={"Python/Django"} progress={1} timeFrame={"Year"}/>
                                                <ProgressBar skill={"Kotlin"} progress={6} timeFrame={"Months"}/>
                                            </div>
                                            <div class="col-lg-6">
                                                <ProgressBar skill={"Git/Github"} progress={3} timeFrame={"Years"}/>
                                                <ProgressBar skill={"Bootstrap"} progress={6} timeFrame={"Months"}/>
                                                <ProgressBar skill={"HTML/CSS"} progress={1} timeFrame={"Year"}/>
                                                <ProgressBar skill={"Javascript/ReactJS"} progress={6} timeFrame={"Months"}/>
                                            </div>
                                            </div>
                                        </div>
                                    </section>
                                </PortfolioItem>
                        </Popup>
                    </div>
                    <div class="col-lg-4 text-center my-3">
                        <div class="rounded-circle" alt="Generic placeholder image" width="140" height="140"><i class="bx bx-lg bx-math"></i></div>
                        <h2><b>Mathematics</b></h2>
                        <p>Skills and Classes.</p>
                        <p><button class="btn btn-secondary" onClick={() => setOpen("Math")}>View details »</button></p>
                        <Popup 
                            contentStyle={{
                                borderRadius: "5px",
                                width: "90%",
                                maxHeight: "100%",
                            }}
                            open={open === "Math"}
                            closeOnDocumentClick
                            onClose={closeModal}
                            modal
                            lockScroll={true}
                            repositionOnResize={true}
                            >
                                <PortfolioItem closeFunc={closeModal}>
                                <section id="mathematics" class="portfolio-container bg-light col-12">
                                    <div class="portfolio-container" data-aos="fade-up">
                                            <div class="section-title">
                                            <h2>Math</h2>
                                            <p>I do my best to stay on top of cybersecurity to keep digital spaces secure, and I enjoy dabbling in software development, creating programs that hopefully make a positive impact. I also have a decent grasp of mathematics, which comes in handy when tackling tricky problems.</p>
                                            </div>
                                            <div class="accordion-container">
                                                <Accordion />
                                            </div>
                                        </div>
                                    </section>
                                </PortfolioItem>
                        </Popup>
                    </div>  
            </div>
        </div>
        </section>
    );
}