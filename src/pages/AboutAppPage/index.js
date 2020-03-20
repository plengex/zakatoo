import React, {Component, Fragment} from 'react';
import './AboutAppPage.css';

class AboutAppPage extends Component {
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
                                    <h1>Tentang Aplikasi</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="aboutPageWrap">
                    <div className="headImage">
                        <div className="logoApp"></div>
                    </div>
                    <div className="bodyAbout">
                        <p>Zakatoo adalah aplikasi yang dibuat dengan tujuan untuk membantu masyarakat dalam melakukan perhitungan zakat. Aplikasi ini dikembangkan pada lingkunan web, sehingga tidak memerlukan instalasi terlebih dahulu ketika hendak menggunakannya layaknya aplikasi native pada umumnya.</p>
                        <p>Perhitungan zakat pada aplikasi Zakatoo sebagian besar merujuk pada kitab "Fiqh az-Zakah" karangan Syekh Dr. Yusuf al-Qaradawi.</p>
                        <p>Kami berharap aplikasi Zakatoo dapat memberikan manfaat bagi setiap orang yang menggunakannya.</p>
                        <p>Zakatoo, aplikasi yang membantu perhitungan zakat anda!</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutAppPage;