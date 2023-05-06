import React from 'react'
import 'animate.css';
import {GrFacebookOption,GrLinkedinOption} from 'react-icons/gr';

import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Land = () => {
  return (
    <div className='Land'>
        <div className='landTxt'>
            <h1>
                The Art <br /> Of <section>Travelling.</section> 
            </h1>
            <p>Do you need Lorem Ipsum. "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
            <div className='LandButtons'>
            <button className='howHire'>
                <h6>Book a flight</h6>
            </button>
            <button className='howLand'>
                <h6>
                    See how it works
                </h6>
            </button>
            </div>
            <div className='landIcons'>
                <GrFacebookOption fontSize={22} />
                <AiOutlineTwitter fontSize={22} />
                <AiFillInstagram fontSize={22} />
                <GrLinkedinOption fontSize={22} />
                <AiFillYoutube fontSize={22}/>
            </div>
        </div>
        <div>
            <img className='landImg' src="/08.png" alt="" />
        </div>
    </div>
  )
}

export default Land