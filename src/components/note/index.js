import '../styles/index.css';
import './note.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../nav/Nav";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button';

class Note extends Component {
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