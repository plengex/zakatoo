import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

// assets
import './HomePage.css';
import PerhiasanIcon from '../../assets/images/perhiasan.png';
import PertanianIcon from '../../assets/images/pertanian.png';
import PerniagaanIcon from '../../assets/images/perniagaan.svg';
import RikazIcon from '../../assets/images/rikaz.png';
import PenghasilanIcon from '../../assets/images/penghasilan.png';
import TernakIcon from '../../assets/images/ternak.png';
import AppIcon from '../../assets/images/app-icon.png';
import BiodataIcon from '../../assets/images/biodata.png';

// component
import HeaderLogin from '../../component/HeaderLogin';
import { connect } from 'react-redux';

class HomePage extends Component {
    state = {
        login: false
    }

    componentDidMount(){
        if (this.props.isLogin) {
            localStorage.setItem('isLogin', JSON.stringify(true))
        }
        this.setState({
            login: JSON.parse(localStorage.getItem('isLogin'))
        })
    }
    
    userData = JSON.parse(localStorage.getItem('userData'));
    
    render(){
        return(
            <Fragment>
                <div className="section mt-26 mb-0">
                    <div className="sectionHeader">
                        <p className="mainTitle">{JSON.parse(localStorage.getItem('isLogin')) ? this.userData !== null ? this.userData.displayName : this.props.user.displayName : ''}</p>
                    </div>
                    <HeaderLogin />
                    </div>

                <div className="section">
                    <div className="sectionHeader">
                        <p className="mainTitle">Kategori Zakat</p>
                    </div>
                    <div className="wrapperContent">
                        <Link to="/zakat-perhiasan">
                        <div className="wrapperItem">
                            <div className="itemWrapper">
                                <div className="itemDetail">
                                    <div className="itemIcon">
                                        <img src={PerhiasanIcon} alt=""/>
                                    </div>
                                    <p className="itemDescription">Zakat Perhiasan</p>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <Link to="/zakat-pertanian">
                        <div className="wrapperItem">
                            <div className="itemWrapper">
                                <div className="itemDetail">
                                    <div className="itemIcon">
                                        <img src={PertanianIcon} alt=""/>
                                    </div>
                                    <p className="itemDescription">Zakat Pertanian</p>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <Link to="/zakat-perniagaan">
                        <div className="wrapperItem">
                            <div className="itemWrapper">
                                <div className="itemDetail">
                                    <div className="itemIcon">
                                        <img src={PerniagaanIcon} alt=""/>
                                    </div>
                                    <p className="itemDescription">Zakat Perniagaan</p>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <Link to="/zakat-barang-temuan">
                        <div className="wrapperItem">
                            <div className="itemWrapper">
                                <div className="itemDetail">
                                    <div className="itemIcon">
                                        <img src={RikazIcon} alt=""/>
                                    </div>
                                    <p className="itemDescription">Zakat Barang Temuan</p>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <Link to="/zakat-profesi">
                        <div className="wrapperItem">
                            <div className="itemWrapper">
                                <div className="itemDetail">
                                    <div className="itemIcon">
                                        <img src={PenghasilanIcon} alt=""/>
                                    </div>
                                    <p className="itemDescription">Zakat Profesi</p>
                                </div>
                            </div>
                        </div>
                        </Link>

                        <Link to="/zakat-ternak">
                        <div className="wrapperItem">
                            <div className="itemWrapper">
                                <div className="itemDetail">
                                    <div className="itemIcon">
                                        <img src={TernakIcon} alt=""/>
                                    </div>
                                    <p className="itemDescription">Zakat Ternak</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionHeader headerAbout">
                        <p className="mainTitle">Ingin tau lebih jauh?</p>
                    </div>

                    <Link to="/about-app" className="text-decoration">
                    <div className="about">
                        <div className="aboutIcon">
                            <img src={AppIcon} alt="" />
                        </div>
                        <div className="aboutDetail">
                            <p className="aboutTitle">Tentang Aplikasi</p>
                            <p className="aboutDesc">Penjelasan singkat tentang aplikasi</p>
                        </div>
                    </div>
                    </Link>

                    <Link to="/about-developer" className="text-decoration">
                    <div className="about">
                        <div className="aboutIcon">
                            <img src={BiodataIcon} alt="" />
                        </div>
                        <div className="aboutDetail">
                            <p className="aboutTitle">Tentang Pengembang</p>
                            <p className="aboutDesc">Biodata pengembang</p>
                        </div>
                    </div>
                    </Link>
                </div>

            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLogin: state.isLogin,
    user: state.user
})

const reduxDispatch = (dispatch) => ({
    
})

export default connect(reduxState, reduxDispatch)(HomePage);