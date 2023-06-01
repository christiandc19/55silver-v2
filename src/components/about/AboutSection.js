import React from 'react'
import './AboutSection.css'
// import Fade from 'react-reveal/Fade';
import ContactForm from '../contact/ContactForm'
import { BsCheckLg } from "react-icons/bs";

import MissionSection1 from '../../assets/missionSection1.jpg'
// import Staff from '../../assets/staff.jpg'
// import Clinic from '../../assets/clinic.jpg'



const AboutSection = () => {
    return (
        <>

            <div className='about-section sectionbg'>
                <div className='about-content container'>
                    <div className='about-flex'>
                        
                        <div className='about-left'>
                        <h1>ABOUT US</h1>
                        <p>55 Silver is a combination of sober living housing opportunities. Our mission is to create a stable and productive future through healing and close monitoring of all aspects of recovery. We oversee a handful of recovery clinic locations and sober living alternatives in Southern California. </p><br/>
                        <p><span><BsCheckLg /> </span>To provide a structured environment that creates maximum healing.</p><br/>
                        <p><span><BsCheckLg /> </span>To create a structured, safe, and functional recovery environment that stabilizes your life and leads to long-term stability.</p><br/>
                        <p><span><BsCheckLg /> </span>To create an environment of recovery and healing that helps you rewrite your future and change your life.</p><br/>
                        </div>



                        <div className='about-right'>
                            <img src={ MissionSection1 } alt="Therapy Session" loading="lazy" />
                        </div>

                    </div>
                </div>
            </div>






{/* 




        <div className='about-section container'>
        <h1 className='about-header'>About Us</h1>
        <p>55 Silver is a combination of sober living housing opportunities. Our mission is to create a stable and productive future through healing and close monitoring of all aspects of recovery. We oversee a handful of recovery clinic locations and sober living alternatives in Southern California. </p>



            <div>
                <div className="content">
                <div className='flex-right'>
                    <Fade top>
                    <div className='thumbnail'>
                        <img src={ Therapy } width="300" height="250" alt="Therapy Session" loading="lazy"/>
                        <div>                   
                        <p>To provide a structured environment that creates maximum healing.</p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Staff } width="300" height="250" alt="Clinic Staff" loading="lazy"/>
                    <p>To create a structured, safe, and functional recovery environment that stabilizes your life and leads to long-term stability.</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                    <img src={ Clinic } width="300" height="250" alt="Bluecross  Logo" loading="lazy"/>
                    <p>To create an environment of recovery and healing that helps you rewrite your future and change your life.</p>
                    </div>
                    </Fade>
                         

                    </div>
                </div>
            </div>
        </div> */}

        <ContactForm />

</>
    )
}

export default AboutSection
