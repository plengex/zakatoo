import React, {Component, Fragment} from 'react';
import './AboutDeveloperPage.css';
import MyPhoto from '../../assets/images/myphoto.jpg';

class AboutDeveloperPage extends Component {
    goBack = () => {
        const {history} = this.props;
        history.push('/home');
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
                                    <h1>Tentang Pengembang</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="aboutPageWrap">
                    <div className="headImage">
                        <div className="logoDeveloper">
                            <img src={MyPhoto} alt="" className="myPhoto"/>
                        </div>
                    </div>
                    <div className="bodyAboutDeveloper">
                        <p className="aboutLabel">NAMA</p>
                        <p className="aboutLink">Wildanun Nabil</p>
                        <p className="aboutLabel">PENDIDIKAN</p>
                        <p className="aboutLink">Teknik Informatika - UIN Sunan Kalijaga</p>
                        <p className="aboutLabel">EMAIL</p>
                        <p className="aboutLink">plengex09@gmail.com</p>
                        <p className="aboutLabel">GITHUB REPOSITORY</p>
                        <p className="aboutLink">github.com/.........</p>
                        <p className="aboutLabel">SOSIAL MEDIA</p>
                        <a href="https://www.instagram.com/wildanun.nabil/" className="sosial-media instagram" target="_blank" rel="noopener noreferrer">Insatagram</a>
                        <a href="https://www.facebook.com/wildanun.nabil" className="sosial-media facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.linkedin.com/in/wildanun-nabil" className="sosial-media linkedin" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutDeveloperPage;