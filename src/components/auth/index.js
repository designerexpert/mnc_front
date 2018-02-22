// Todo Posibly delete this page after scrapping it. Was created before the use of React-Router-Dom
import React, { Component } from 'react';
// ------------- Begin Redux Imports Here
import { connect } from 'react-redux';
// ------------- Begin External Files Imports Here
import '../styles/index.css';
import './auth.css';
// ------------- Begin Component Imports Here
import SignIn from './SignIn';
import SignUp from './SignUp';
import Button from '../Button';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            JWT: '',
            welcome: ['Please Sign Up', 'Please Sign In'],
            signIn: true,
        }
    }
    componentDidMount() {
        // console.log('auth index history', this.props.history)
        this.setState({ JWT: this.props.JWT }); // Map JWT to Auth State from Redux State.
    }
    handleSwitch = () => {
        let oldSign = this.state.signIn;
        this.setState({ signIn: !oldSign });
    }


    render() {
        if (this.state.signIn) {
            return (
                <div className='authWrap'>
                    <img className='mainLogo' src='./img/MedNoteCompanion.svg' alt='MedNoteCompanion Logo' />
                    <div className='vertContainer'>
                        <div className='authHeader'>{this.state.welcome[1]}</div>
                        <SignIn history={this.props.history} />
                        <div className='vertContainer'>
                            <div className='authNotification'>Don't have an account?</div>
                            <div className='buttonsRow'>
                                <Button onClick={this.handleSwitch} title={'Click Here'} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='authWrap'>
                    <img className='mainLogo' src='./img/MedNoteCompanion.svg' alt='MedNoteCompanion Logo' />
                    <div className='vertContainer'>
                        <div className='authHeader'>{this.state.welcome[0]}</div>
                        <SignUp history={this.props.history} />
                        <div className='vertContainer'>
                            <div className='authNotification'>Already have an account?</div>
                            <div className='buttonsRow'>
                                <Button onClick={this.handleSwitch} title={'Click Here'} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        JWT: state.JWT
    }
}

export default Auth;