import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import DialogBox from '../../component/DialogBox';
import './RegisterPage.css';
import Button from '../../component/Button';
import { connect } from 'react-redux';
import { registerUserAPI, closeDialogBox } from '../../config/redux/action';
// import GoogleIcon from '../../assets/images/google.png';

class RegisterPage extends Component {
    state = {
        email : '',
        password : ''
    }

    handleChange = (e) => {
        this.setState({
            email : `${e.target.name === 'Email' ? e.target.value : this.state.email}`,
            password : `${e.target.name === 'Password' ? e.target.value : this.state.password}`
        })
    }

    goBack = () => {
        const {history} = this.props;
        history.push('/home');
    }

    register = () => {
        const {email, password} = this.state;
        this.props.registerAPI({email, password});
    }

    closeDialogbox = () => {
        if (this.props.popup.message === '') {
            this.setState({
                email: '',
                password: ''
            })
        }
        this.props.closePopup();
    }

    render(){
        return(
            <Fragment>
                <div className="navbar">
                    <nav className="navbarContainer">
                        <div className="navbarWrapper">
                            <div className="unfNavbar">
                                <button className="navbarIcon" onClick={this.goBack}></button>
                                <div className="navbarTitle">
                                    <h1>Register</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerFormLogin">
                    <div className="formInput">
                        <label className="inputLabel">Email</label>
                        <div className="input">
                            <input className="inputForm" type="email" name="Email" onChange={this.handleChange} value={this.state.email} />
                        </div>
                    </div>
                    <div className="formInput">
                        <label className="inputLabel">Password</label>
                        <div className="input">
                            <input className="inputForm" type="password" name="Password" onChange={this.handleChange} value={this.state.password} />
                        </div>
                    </div>
                    <Button title="Register" onClick={this.register} loading={this.props.isLoading} />
                    <p className="registerSaran">
                        <span className="registerSaranText">Sudah punya akun? </span>
                        <Link to="/login">Login</Link>
                    </p>
                </div>

                {/* dialog box */}
                {/* eslint-disable-next-line */}
                {this.props.popup.open ? <DialogBox title={this.props.popup.title} body={this.props.popup.message} toCloseDialogbox={this.closeDialogbox} /> : ''}
                
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading,
    popup: state.popup
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data)),
    closePopup: () => dispatch(closeDialogBox())
})

export default connect(reduxState, reduxDispatch)(RegisterPage);