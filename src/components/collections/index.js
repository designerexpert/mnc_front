import '../styles/index.css';
import './collections.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../nav/Nav";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button';

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
                <div className='collectionsContainer'>
                    <div className='collectionsMenu'>
                        <div className='welcomeHeader'>
                            {'Document Collections Menu'}
                        </div>
                        <div>
                            {'Please select from the options bellow'}
                        </div>
                        <div className='buttonsStack'>
                            <Button title={'New SOAP Note'} onClick={() => this.props.history.push('/note')} />
                        </div>
                    </div>
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

export default connect(mapStateToProps)(withRouter(Collections));