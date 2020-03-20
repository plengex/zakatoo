import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './HeaderNonLogin.css';

class HeaderNonLogin extends Component {
    render(){
        return(
            <Fragment>
                <div className="headerContainer">
                    <div className="headerCard">
                        <div className="headerLogin">
                            <Link to="/login">
                                <p className="headerTitle">Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default HeaderNonLogin;