import '../styles/index.css';
import './nav.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            registered: false,
            loggedIn: {},
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className='navWrap'>
                <div className='nav'>
                    <div className='leftNav'>
                        <NavLink to='/'><div className='navLogo'></div></NavLink>
                    </div>
                    <div className='rightNav'>
                        <NavLink className='navLink' to='/'>Sign In</NavLink>
                        <NavLink className='navLink' to='/signup'>Create Account</NavLink>
                    </div>
                </div>
                <div className='navDivider'>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps)(Nav);