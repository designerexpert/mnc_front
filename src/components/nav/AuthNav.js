import '../styles/index.css';
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
            <div className='nav'>NAV For Unauthenticated User</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps)(Nav);