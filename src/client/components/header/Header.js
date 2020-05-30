import React from 'react'
import { FormattedMessage } from "react-intl"
import { useSelector, useDispatch } from 'react-redux'
import { setlang, setroute } from '../../../actions'
import './Header.scss'

import Menu from './Menu'

function Header() {
    const lang = useSelector(state => state.lang)
    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="pointer navbar-brand" onClick={() => dispatch(setroute(''))}>
                <img src="images/logo.png" className="logoimg"></img>
                <span className="logofont">followme</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Menu
                        menu="menu.electronics"
                        submenu={[
                            { value: "menu.submenu.mobile", link: "/mobile" },
                            { value: "menu.submenu.laptopcomputer", link: "/laptopcomputer" },
                            { value: "menu.submenu.television", link: "/television" },
                            { value: "menu.submenu.accessories", link: "/accessories" }]}></Menu>

                    <Menu
                        menu="menu.men"
                        submenu={[
                            {
                                value: "menu.submenu.clothing", link: "/clothing", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.topwear", link: "/topwear" },
                                    { value: "menu.innermenu.bottomwear", link: "/bottomwear" }
                                ]
                            },
                            {
                                value: "menu.submenu.footwear", link: "/footwear", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.sports", link: "/topwear" },
                                    { value: "menu.innermenu.casual", link: "/bottomwear" }
                                ]
                            },
                            {
                                value: "menu.submenu.accessories", link: "/laptopcomputer", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.watches", link: "/watches" },
                                    { value: "menu.innermenu.jwellery", link: "/jwellery" },
                                    { value: "menu.innermenu.sunglasses", link: "/sunglasses" },
                                    { value: "menu.innermenu.walletbelt", link: "/walletbelt" },
                                    { value: "menu.innermenu.backpack", link: "/backpack" }
                                ]
                            }
                        ]}></Menu>

                    <Menu
                        menu="menu.women"
                        submenu={[
                            {
                                value: "menu.submenu.clothing", link: "/clothing", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.topwear", link: "/topwear" },
                                    { value: "menu.innermenu.bottomwear", link: "/bottomwear" }
                                ]
                            },
                            {
                                value: "menu.submenu.footwear", link: "/footwear", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.shoes", link: "/shoes" },
                                    { value: "menu.innermenu.sandals", link: "/sandals" }
                                ]
                            },
                            {
                                value: "menu.submenu.accessories", link: "/laptopcomputer", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.handbags", link: "/watches" },
                                    { value: "menu.innermenu.jwellery", link: "/jwellery" },
                                    { value: "menu.innermenu.sunglasses", link: "/sunglasses" },
                                    { value: "menu.innermenu.cosmetics", link: "/walletbelt" }
                                ]
                            }
                        ]}></Menu>

                    <Menu
                        menu="menu.babykids"
                        submenu={[
                            {
                                value: "menu.submenu.clothing", link: "/clothing", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.boys", link: "/boys" },
                                    { value: "menu.innermenu.girls", link: "/girls" }
                                ]
                            },
                            {
                                value: "menu.submenu.footwear", link: "/footwear", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.boys", link: "/boys" },
                                    { value: "menu.innermenu.girls", link: "/girls" }
                                ]
                            },
                            { value: "menu.submenu.toys", link: "/toys" },
                            { value: "menu.submenu.babycare", link: "/babycare" }

                        ]}></Menu>
                    <Menu
                        menu="menu.homefurniture"
                        submenu={[
                            {
                                value: "menu.submenu.kitchen", link: "/kitchen", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.coockware", link: "/coockware" },
                                    { value: "menu.innermenu.serveware", link: "/serveware" }
                                ]
                            },
                            { value: "menu.submenu.lighting", link: "/lighting" },
                            {
                                value: "menu.submenu.furniture", link: "/furniture", arrow: true,
                                innermenu: [
                                    { value: "menu.innermenu.bedroom", link: "/bedroom" },
                                    { value: "menu.innermenu.livingroom", link: "/livingroom" },
                                    { value: "menu.innermenu.office", link: "/office" }
                                ]
                            },
                    ]}></Menu>
                </ul>


                <div className="flex-container flex-space-around flex-align-center">
                    <div className="dropdown">
                        <button className="btn langicon dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {lang}<br></br>
                            <i className="fa fa-language white-txt" aria-hidden="true"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" onClick={() => dispatch(setlang('en'))}> English </a>
                            <a className="dropdown-item" href="#" onClick={() => dispatch(setlang('hi'))}> हिन्दी </a>
                            <a className="dropdown-item" href="#" onClick={() => dispatch(setlang('gu'))}> ગુજરાતી </a>
                        </div>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                    </form>
                    <a className="nav-link nav-txt" >
                        <FormattedMessage id="menu.login" />
                    </a>
                    <a className="nav-link nav-txt" ><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                        <span className="cart-txt"> <FormattedMessage id="menu.cart" /></span>
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Header