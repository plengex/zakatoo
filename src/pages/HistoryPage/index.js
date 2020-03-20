import React, {Component, Fragment} from 'react';
import './HistoryPage.css';
import { connect } from 'react-redux';
import { loginUserAPI, closeDialogBox, changeKategori } from '../../config/redux/action';
import { Link } from 'react-router-dom';

class HistoryPage extends Component {
    state = {
        email : '',
        password : ''
    }

    goBack = () => {
        const {history} = this.props;
        history.push('/home');
    }

    handleKategori = (param) => {
        // this.props.history.push('/history/' + param)
        // this.props.changeKategori(param)
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
                                    <h1>History</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerFormLogin">
                    <ul className="historiKategori">
                        <li className="historiKategoriListTitle">History Pembayaran Zakat</li>
                        <li className="historiKategoriList" onClick={this.handleKategori}>
                            <div className="listItemLeft">
                                <Link to="/kategori/zakat-perhiasan">
                                    <div className="listItemText">
                                        Zakat Perhiasan
                                    </div>
                                </Link>
                            </div>
                            <div className="listItemRight"></div>
                        </li>
                        <li className="historiKategoriList" onClick={this.handleKategori}>
                            <div className="listItemLeft">
                                <Link to="/kategori/zakat-pertanian">
                                    <div className="listItemText">
                                        Zakat Pertanian
                                    </div>
                                </Link>
                            </div>
                            <div className="listItemRight"></div>
                        </li>
                        <li className="historiKategoriList" onClick={this.handleKategori}>
                            <div className="listItemLeft">
                                <Link to="/kategori/zakat-perniagaan">
                                    <div className="listItemText">
                                        Zakat Perniagaan
                                    </div>
                                </Link>
                            </div>
                            <div className="listItemRight"></div>
                        </li>
                        <li className="historiKategoriList" onClick={this.handleKategori}>
                            <div className="listItemLeft">
                                <Link to="/kategori/zakat-barang-temuan">
                                    <div className="listItemText">
                                        Zakat Barang Temuan
                                    </div>
                                </Link>
                            </div>
                            <div className="listItemRight"></div>
                        </li>
                        <li className="historiKategoriList" onClick={this.handleKategori}>
                            <div className="listItemLeft">
                                <Link to="/kategori/zakat-profesi">
                                    <div className="listItemText">
                                        Zakat Profesi
                                    </div>
                                </Link>
                            </div>
                            <div className="listItemRight"></div>
                        </li>
                        <li className="historiKategoriList" onClick={this.handleKategori}>
                            <div className="listItemLeft">
                                <Link to="/kategori/zakat-ternak">
                                    <div className="listItemText">
                                        Zakat Ternak
                                    </div>
                                </Link>
                            </div>
                            <div className="listItemRight"></div>
                        </li>
                    </ul>
                </div>
                {/* <Switch>
                    <Route exact path='/history/:kategori' component={HistoryKategoriPage} />
                </Switch> */}
                
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading,
    popup: state.popup
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data)),
    closePopup: () => dispatch(closeDialogBox()),
    changeKategori: (data) => dispatch(changeKategori(data))
})

export default connect(reduxState, reduxDispatch)(HistoryPage);