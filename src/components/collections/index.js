import '../styles/index.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from "../nav/Nav";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Collections extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        this.setState({ authenticated: this.props.state.users.authenticated })
    }

    render() {
        console.log(this.state.authenticated)
        return (
            <div className='pageWrap'>
                <Nav />
                <div>Collections</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps)(withRouter(Collections));