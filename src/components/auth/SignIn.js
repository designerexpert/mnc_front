/*eslint no-useless-escape: "off"*/
import React, { Component } from 'react';
// ------------- Begin Redux Imports Here
import { connect } from 'react-redux';
import { logInUser } from '../../actions';
// ------------- Begin External Files Imports Here
import '../styles/index.css';
// ------------- Begin Component Imports Here
import Button from '../Button';
import { withRouter, Redirect } from 'react-router-dom';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            success: true,
            validEmail: true
        }
    }
    componentWillMount() {
        this.setState({ authenticated: this.props.state.users.authenticated })
    }

    componentDidMount() {
        this.setState({ logInUser: this.props.logInUser })
    }

    handleText = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleEnter = (e) => {
        if (e.keyCode === 13) {
            this.handleSubmit();
        }
    }

    handleSwitch = () => {
        this.props.history.push('/signup')
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
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.state.logInUser(user)
            .then((response) => {
                if (this.props.state.users.authenticated.token) { // If there is a token then it is logged in.
                    this.props.history.push('/collections');
                } else {
                    this.setState({ success: false });
                }
            })
            .catch(() => {
                this.setState({ validEmail: false })
            })
    }

    render() {
        return this.state.authenticated !== undefined ?
            /* 
            If there is a JWT Token Found for an
            Authenticated User then the page will
            redirect to /collections.
            */    
            <Redirect to='/collections' /> :
            (
                <div className='pageWrap'>
                    <div className='routeContainer'>
                        <div className='authWrap'>
                            <img className='mainLogo' src='./img/MedNoteCompanion.svg' alt='MedNoteCompanion Logo' />
                            <div className='vertContainer'>
                                <div className='welcomeHeader'>{'Please Sign In'}</div>
                                <div className='vertContainer auth'>
                                    <div className='inputHeader'>Email</div>
                                    <input id='email' type='email' className={this.state.activeField === 'email' ? 'authInput' : 'authInput--active'} onChange={this.handleText} onFocus={this.handleFocus} />
                                    <div className='inputHeader'>Password</div>
                                    <input id='password' type='password' className={this.state.activeField === 'password' ? 'authInput' : 'authInput--active'} onChange={this.handleText} onFocus={this.handleFocus} onKeyDown={this.handleEnter} />
                                    <div className={this.state.sucess ? 'inputHeader' : 'inputHeader inputHeader--fail'}>
                                        {this.state.success ? '' : 'Sign In Error: Please try again.'}
                                    </div>
                                    <div className='formDivider'></div>
                                    <div className='buttonsRow'>
                                        <Button title={'Sign In'} onClick={this.handleSubmit} />
                                    </div>
                                </div>
                                <div className='vertContainer'>
                                    <div className='authNotification'>Don't have an account?</div>
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

export default connect(mapStateToProps, { logInUser })(withRouter(SignIn));