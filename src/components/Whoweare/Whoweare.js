import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import { BsCheckLg } from "react-icons/bs";




import WhatWeDoImg1 from '../../assets/whatwedo1.jpg'




const Whoweare = () => {
  return (
<>


<div className='sectionbg'>


<div className="homeSection2 ">
        <div className="homeSection2-content container">
          <div className="homeSection2-left">
            <Fade left>
            <h1>WHY CHOOSE 55 SILVER</h1>
            </Fade>

            <Fade right>
            <h2>"We're here to help you find a path forward."</h2>
            </Fade>

            <Fade left>
            <p>
            Build a new life at one of our sober living homes across Los Angeles, providing support and a community of healing behind you, every step of the way. <br/> <br/>Transitioning back into society is difficult in many situations that's why we offer an opportunity of a new beginning to the world of sobriety.
            </p>
            </Fade>

            <br /> <br />
            <div className="checklist">

            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                Skilled, professional, and friendly staff with years of experience mentoring and working in the recovery field
                </p>
              </div>
            </Fade>
            </div>
            <br />

            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>A supportive, professional drug and alcohol free environment</p>
              </div>
              </Fade>

            </div>
            <br />
            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                All amenities for a sober living house to make you feel at home
                </p>
              </div>
              </Fade>
            </div>
          </div>

          <div className="homeSection2-right">
            <img src={WhatWeDoImg1} loading="lazy" alt="psychologist" />
          </div>
        </div>
      </div>




      </div>




{/* 
<div className='homepage-wrap'>
        <Fade left>
        <div className="SoberLiving-box SoberLiving-left">
                     <div className='SoberLiving-title'><br/>
                <h1>WHY CHOOSE 55 SILVER?</h1>
            </div><br/>
                <p>
                Build a new life at one of our sober living homes across Los Angeles, providing support and a community of healing behind you, every step of the way. <br/> <br/>Transitioning back into society is difficult in many situations that's why we offer an opportunity of a new beginning to the world of sobriety.
                </p>

                <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <Link to="/sober-living">
                    <button>LEARN MORE</button>
                </Link>
                </LinkRoll>
                </div>
            </div>
        </Fade>

        <Fade right>
        <div className="SoberLiving-box box hide">
            <img src={WhatWeDoImg1} alt="Sover Living" loading="lazy" />
        </div>
        </Fade>
</div> */}


</>
  )
}

export default Whoweare