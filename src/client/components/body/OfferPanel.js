import React from 'react'
import Slider from './Slider'
import './Body.scss'

function OfferPanel(props) {
    return (
        <React.Fragment>
            <h2 className="text-center">{props.offertitle}</h2>
            <div className="desktop offerdiv flex-container flex-space-around">
                {props.offerimgs.map((imgsrc, index) => {
                    return <div key={index} className="text-center offer-imgs">
                        <img className="img-thumbnail pointer" src={imgsrc} />
                    </div>
                })}
            </div>
            <div className="mobile offerdiv">
                <Slider slideImgs={props.offerimgs}></Slider>
            </div>
        </React.Fragment>
    )
}

export default OfferPanel
