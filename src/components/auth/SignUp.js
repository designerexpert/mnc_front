/*eslint no-useless-escape: "off"*/
import React, { Component } from 'react';
// ------------- Begin Redux Imports Here
import { connect } from 'react-redux';
import { addUser } from '../../actions';
// ------------- Begin External Files Imports Here
import '../styles/index.css';
import './auth.css';
// ------------- Begin Component Imports Here
import Button from '../Button';
import Nav from "../nav/AuthNav";
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            password: null,
            password2: null,
            email: null,
            pwMatch: true,
            validEmail: true,
            activeField: null,
            registered: true,
        }
    }
    componentDidMount() {
        this.setState({ addUser: this.props.addUser }); // load actions on state
    }

    componentWillMount() {
        if (this.props.state.users.registered === true) {
            console.log('registered is true at render')
            this.props.history.push('/')
        }
    }

    handleText = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleEnter = (e) => {
        if (e.keyCode === 13) {
            this.handleSubmit();
        }
    }

    checkPasswords = () => {
        if (this.state.password === this.state.password2 && this.state.password !== null) {
            this.setState({ pwMatch: true });
            return true;
        } else {
            this.setState({ pwMatch: false });
            return false;
        }
    }

    handleFocus = (e) => {
        let id = e.target.id;
        this.setState({ activeField: id });
    }

    checkEmail = () => {
        let regVar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regVar.test(this.state.email)) {
            this.setState({ validEmail: true });
            return true;
        } else {
            this.setState({ validEmail: false });
            return false;
        }
    }

    handleSubmit = () => {
        this.checkPasswords()
        this.checkEmail()
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.pwMatch && this.state.validEmail) {
            this.state.addUser(user)
                .then(() => {
                    if (this.props.state.users.registered === true) {
                        /*  Todo:                        
                            This is a Hacky Way to navigate to home after registration is a success.
                            Normally the user would get a message saying: `an email verification was sent to: ${this.state.email}...`
                            After Email Verification link is followed the user would then be navigated to the login page.
                            Right Now the user is just navigated to the log-in page where he/she will log-in to access the app.
                        */
                        this.props.history.push('/');
                    }
                })
                .catch(() => {
                    this.setState({ registered: false })
                });
        } else {

        }
    }

    handleEmailText = () => { // Handles Text
        if (!this.state.validEmail) {
            return 'The email provided is invalid'
        } else if (!this.state.registered) {
            return 'Email is already registered'
        } else {
            return 'Email'
        }
    }

    handleEmailColor = () => {
        if (!this.state.validEmail || !this.state.registered) {
            return 'inputHeader inputHeader--fail';
        } else {
            return 'inputHeader';
        }
    }

    handleSwitch = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='pageWrap'>
                <Nav />
                <div className='routeContainer'>
                    <div className='authWrap'>
                        <img className='mainLogo' src='./img/MedNoteCompanion.svg' alt='MedNoteCompanion Logo' />
                        <div className='vertContainer'>
                            <div className='welcomeHeader'>{'Please Sign Up'}</div>
                            <div className='vertContainer auth'>
                                <div className={this.handleEmailColor()}>
                                    {this.handleEmailText()}
                                </div>
                                <input
                                    id='email'
                                    type='email'
                                    className={this.state.activeField === 'email' ? 'authInput' : 'authInput--active'}
                                    onChange={this.handleText}
                                    onFocus={this.handleFocus} />
                                <div className={this.state.pwMatch ? 'inputHeader' : 'inputHeader inputHeader--fail'}>
                                    {this.state.pwMatch ? 'Password' : '* The passwords do not match'}
                                </div>
                                <input
                                    id='password'
                                    type='password'
                                    className={this.state.activeField === 'password' ? 'authInput' : 'authInput--active'}
                                    onChange={this.handleText}
                                    onFocus={this.handleFocus} />
                                <div className={this.state.pwMatch ? 'inputHeader' : 'inputHeader inputHeader--fail'}>
                                    {this.state.pwMatch ? 'Verify Password' : '* The passwords do not match'}
                                </div>
                                <input
                                    id='password2'
                                    type='password'
                                    className={this.state.activeField === 'password2' ? 'authInput' : 'authInput--active'}
                                    onChange={this.handleText}
                                    onKeyDown={this.handleText}
                                    onFocus={this.handleFocus} />
                                <div className='formDivider'></div>
                                <div className='buttonsRow'>
                                    <Button title={'Sign Up'} onClick={this.handleSubmit} />
                                </div>
                            </div>

                            <div className='vertContainer'>
                                <div className='authNotification'>Already have an account?</div>
                                <div className='buttonsRow'>
                                    <Button onClick={this.handleSwitch} title={'Click Here'} />
                                </div>
                            </div>
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

export default connect(mapStateToProps, { addUser })(withRouter(SignUp));