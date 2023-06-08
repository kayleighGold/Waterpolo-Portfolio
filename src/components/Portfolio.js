import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import Skills from "./Skills";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Portfolio(){
    const [open, setOpen] = useState(false);  
    const closeModal = () => setOpen(false);

    return (
        <section id="portfolio" class="portfolio section-bg bg-light">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
            <h2>Portfolio</h2>
            <p>My portfolio encompasses a diverse range of projects in cybersecurity, software development, and mathematics. Overall, my portfolio showcases my multidisciplinary skills and my dedication to creating secure, efficient, and innovative solutions.</p>
            </div>
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <div class="rounded-circle" alt="Generic placeholder image" width="140" height="140"><i class="bx bx-lg bx-terminal"></i></div>
                        <h2><b>Cybersecurity</b></h2>
                        <p>Cyber security credials and Projects.</p>
                        <p><button class="btn btn-secondary" onClick={() => setOpen(o => !o)}>View details »</button></p>
                        <Popup 
                            open={open}
                            closeOnDocumentClick
                            onClose={closeModal}
                            modal
                            >
                            <div>
                                <PortfolioItem closeFunc={closeModal}>
                                <Skills />
                                </PortfolioItem>
                            </div>

                        </Popup>
                        
                    </div>
                    <div class="col-lg-4 text-center">
                        <div class="rounded-circle" alt="Generic placeholder image" width="140" height="140"><i class="bx bx-lg bx-code"></i></div>
                        <h2><b>Software Development</b></h2>
                        <p>Skills and Projects.</p>
                        <Popup trigger={<p><a class="btn btn-secondary" role="button">View details »</a></p>}>
                            <div>Test</div>
                        </Popup>
                    </div>
                    <div class="col-lg-4 text-center">
                        <div class="rounded-circle" alt="Generic placeholder image" width="140" height="140"><i class="bx bx-lg bx-math"></i></div>
                        <h2><b>Mathematics</b></h2>
                        <p>Skills and Classes.</p>
                        <Popup trigger={<p><a class="btn btn-secondary" role="button">View details »</a></p>}>
                            <div>Skills and classes.</div>
                        </Popup>
                    </div>  
            </div>
        </div>
        </section>
    );
}