import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormattedMessage } from "react-intl"
import { setroute } from '../../../actions'
import './Header.scss'

function Menu(props) {
    const route = useSelector(state => state.route)
    const dispatch = useDispatch()
    const [arrow, setArrow] = useState(false)
    const checkForArrow = (id) => {
        const interval = setInterval(() => {
            if (document.getElementById(id).getAttribute('aria-expanded') !== 'true') {
                setArrow(false)
                clearInterval(interval)
            }
        }, 100);
    }
    const setRoute = (routeString) => {
        dispatch(setroute(routeString))
    }
    return (
        <li className="nav-item dropdown">
            <a className="nav-link nav-txt" onClick={() => {checkForArrow(props.menu); setArrow(true)}} id={props.menu} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FormattedMessage id={props.menu} /> &nbsp; 
                {!arrow && <i className="fa fa-angle-down" aria-hidden="true"></i>}
                {arrow && <i className="fa fa-angle-up" aria-hidden="true"></i>}
            </a>
            <div className="dropdown-menu" aria-labelledby={props.menu}>
                {props.submenu.map((item) => {
                    return <React.Fragment key={item.value}>
                    <div className="pointer dropdown-item"  onClick={() => setRoute(item.link)}>
                        <FormattedMessage id={item.value} /> &nbsp;
                        {item.arrow ? <i className="fa fa-caret-right" aria-hidden="true"></i> : ""}
                    </div>
                    {item.innermenu ? 
                        item.innermenu.map((inneritem) => {
                            return <a className="dropdown-item" key={inneritem.value} href={inneritem.link}>
                            &nbsp; &nbsp; <FormattedMessage id={inneritem.value} /> 
                        </a>
                        })
                        : ''
                    }
                    </React.Fragment>
                })}
            </div>
        </li>
    )
}

export default Menu
