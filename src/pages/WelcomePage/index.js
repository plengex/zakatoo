import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css';

class Welcome extends Component {
    render(){
        return(
            <Fragment>
                <h1 className="welcomeTitle">Welcome to zakato</h1>
                <p className="welcomeSubTitle">Membantu perhitungan zakat anda</p>

                <Link to="/home" className="welcomeNextLink">Lanjut</Link>

            </Fragment>
        )
    }
}

export default Welcome;