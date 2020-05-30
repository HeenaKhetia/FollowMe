import React, { useEffect } from 'react'
import './Body.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AnimationDiv(props) {

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true
          })
      });

    return (
        <div className="animationdiv">
            <div className="flex-container flex-space-around flex-align-center animatediv1">
            <h3 className="white-txt text-center black-txt flex-2">
                {props.advertise[0]['message']}
            </h3>
            <img className="img-fluid flex-3 animatedImg pointer" data-aos='slide-left' src={props.advertise[0]['image']} />
            </div>

            <div className="flex-container flex-space-around flex-align-center animatediv2">
            <img className="img-fluid flex-3 animatedImg pointer" data-aos='slide-right' src={props.advertise[1]['image']} />
            <h3 className="text-center flex-2">
            {props.advertise[1]['message']}
            </h3>
            </div>
        </div>
    )
}

export default AnimationDiv
