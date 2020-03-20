import React, {Component, Fragment} from 'react';
import DialogBox from '../../component/DialogBox';
import './LoginPage.css';
import { connect } from 'react-redux';
import { loginUserAPI, closeDialogBox, loginGoogleAPI } from '../../config/redux/action';
import Button from '../../component/Button';

class LoginPage extends Component {
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

    login = async () => {
        const {email, password} = this.state;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if (res) {
            localStorage.setItem('userData', JSON.stringify(res))
            const {history} = this.props;
            history.push('/home');
        }
    }

    loginGoogle = async () => {
        const res = await this.props.loginGoogleAPI()
        console.log(res)
        if (res) {
            localStorage.setItem('userData', JSON.stringify(res))
            localStorage.setItem('isLogin', JSON.stringify(true))
            const {history} = this.props;
            history.push('/home');
        }
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
                                <div className="navbarIconn"></div>
                                <div className="navbarTitle">
                                    <h1>Login</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerFormLogin">
                    {/* <div className="formInput">
                        <label className="inputLabel">Email</label>
                        <div className="input">
                            <input className="inputForm" type="email" name="Email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="formInput">
                        <label className="inputLabel">Password</label>
                        <div className="input">
                            <input className="inputForm" type="password" name="Password" onChange={this.handleChange} />
                        </div>
                    </div> */}
                    <p className="registerSaran">
                        <span className="registerSaranText">Silahkan login terlebih dahulu</span>
                    </p>
                    <Button title="Login dengan Google" onClick={this.loginGoogle} loading={this.props.isLoading} />
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
    popup: state.popup,
    isLogin: state.isLogin
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data)),
    loginGoogleAPI: () => dispatch(loginGoogleAPI()),
    closePopup: () => dispatch(closeDialogBox())
})

export default connect(reduxState, reduxDispatch)(LoginPage);