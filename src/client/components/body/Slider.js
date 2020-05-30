import React from 'react'
import './Body.scss'

function Slider(props) {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-interval="3000" data-ride="carousel">
            <div className="carousel-inner">
                {props.slideImgs.map((image, index) => {
                    return <React.Fragment key={index}>
                        {(index === 0) ? <div className="carousel-item active"><img className="d-block w-100 h-fitcontent" src={image} alt="First slide" /></div>
                            : <div className="carousel-item"><img className="d-block w-100 h-fitcontent" src={image} alt="First slide" /></div>}
                    </React.Fragment>
                })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider
