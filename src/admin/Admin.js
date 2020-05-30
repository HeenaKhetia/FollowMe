import React, { Component } from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import './Admin.scss'

class Admin extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </div>
        )
    }
}

export default Admin
