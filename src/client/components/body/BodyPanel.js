import React from 'react'
import './Body.scss'

function BodyPanel(props) {
    return (
        <React.Fragment>
         {props.panel.map((item, index) => {
           return <div key={index}> <h1>{item.title}</h1>
             <div className="flex-container flex-space-around flex-wrap bodypanel">
            {item.cards.map((images, index) => {
            return <div className="card card-border pointer" key={index}>
                <img className="card-img-top" src={images.image} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{images.label}</p>
                </div>
            </div>
        })}
        </div> 
        </div>
        })}<br></br>
        </React.Fragment>            
    )
}

export default BodyPanel
