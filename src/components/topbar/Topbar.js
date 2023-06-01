import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content '>
                <div className='address bar-box1'>
                    <p><span><MdLocationPin />&nbsp;</span>1800 Vine Street, Los Angeles CA 90028</p>
                </div>

                <div className='email bar-box2'>
                    <p><span><FiMail />&nbsp;</span> info@55silver.biz</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone />&nbsp;</span> <a href="tel:3235792196"> +1 (310) 526-7505 </a></p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar