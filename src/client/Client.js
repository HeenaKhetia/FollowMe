import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
import './Client.scss'

class Client extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {!this.props.route && <Body></Body>}
                {this.props.route && <Products></Products>}
                <Footer></Footer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        route: state.route
    }
}

export default connect(mapStateToProps)(Client)
