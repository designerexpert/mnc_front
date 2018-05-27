import '../styles/index.css';
import './note.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Button from '../Button';

class Note extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentWillMount() {
        this.setState({ authenticated: this.props.state.users.authenticated })
    }

    render() {
        console.log(this.state.authenticated)
        return (
            this.state.authenticated === undefined ?
                <Redirect to={'/'} /> :
                <div className='pageWrap'>
                    <div className='noteContainer'>
                        THIS IS THE NOTES AREA
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

export default connect(mapStateToProps)(withRouter(Note));