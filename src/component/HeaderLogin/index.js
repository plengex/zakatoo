import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './HeaderLogin.css';
import { connect } from 'react-redux';
import { changeIsLogin } from '../../config/redux/action';

class HeaderLogin extends Component {
    logout = () => {
        this.props.changeIsLogin()
        
        localStorage.setItem('isLogin', JSON.stringify(false))
        localStorage.removeItem('userData')
        const {history} = this.props;
        history.push('/');
    }

    render(){
        return(
            <Fragment>
                <div className="headerContainer">
                    <div className="headerCard">
                        <div className="headerAkun">
                            <p className="headerTitle cursor" onClick={this.logout}>Logout</p>
                        </div>
                        <div className="headerHistori">
                            <Link to="/history">
                                <p className="headerTitle">Histori</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLogin: state.isLogin
})

const reduxDispatch = (dispatch) => ({
    changeIsLogin: () => dispatch(changeIsLogin())
})

export default connect(reduxState, reduxDispatch)(HeaderLogin);