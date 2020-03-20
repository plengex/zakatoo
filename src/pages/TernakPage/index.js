import React, {Component, Fragment} from 'react';
import DialogBox from '../../component/DialogBox';
import './TernakPage.css';
import { connect } from 'react-redux';
import { changeZakat } from '../../config/redux/action';

class TernakPage extends Component {
    state = {
        jumlahTernak : 0,
        jenisTernak : 1,
        haulHarta : 1,
        totalZakat : '',
        kategori: 'zakat-ternak'
    }

    handleChange = (e) => {
        this.setState({
            jumlahTernak : `${e.target.name === 'jumlahTernak' ? e.target.value : this.state.jumlahTernak}`,
            jenisTernak : `${e.target.name === 'jenisTernak' ? e.target.value : this.state.jenisTernak}`,
            haulHarta : `${e.target.name === 'haulHarta' ? e.target.value : this.state.haulHarta}`
        })
    }

    goBack = () => {
        const {history} = this.props;
        history.push('/home');
    }

    hitung = () => {
        // eslint-disable-next-line
        if (this.state.haulHarta == 1) {
            // eslint-disable-next-line
            if (this.state.jenisTernak == 1) {
                if (this.state.jumlahTernak < 5) {
                    this.setState({
                        totalZakat : `Anda belum wajib membayar zakat karena belum mencapai nisab, nisab Unta adalah 5 ekor`
                    })
                    this.props.isZakat(false)
                } else if (this.state.jumlahTernak >= 5 && this.state.jumlahTernak < 10) {
                    this.setState({
                        totalZakat : '1 ekor anak kambing'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 10 && this.state.jumlahTernak < 15) {
                    this.setState({
                        totalZakat : '2 ekor anak kambing'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 15 && this.state.jumlahTernak < 20) {
                    this.setState({
                        totalZakat : '3 ekor anak kambing'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 20 && this.state.jumlahTernak < 25) {
                    this.setState({
                        totalZakat : '4 ekor anak kambing'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 25 && this.state.jumlahTernak <= 35) {
                    this.setState({
                        totalZakat : '1 ekor anak unta betina (umur 1 tahun lebih)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak > 35 && this.state.jumlahTernak <= 45) {
                    this.setState({
                        totalZakat : '1 ekor anak unta betina (umur 2 tahun lebih)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak > 45 && this.state.jumlahTernak <= 60) {
                    this.setState({
                        totalZakat : '1 ekor anak unta betina (umur 3 tahun lebih)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak > 60 && this.state.jumlahTernak <= 75) {
                    this.setState({
                        totalZakat : '1 ekor anak unta betina (umur 4 tahun lebih)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak > 75 && this.state.jumlahTernak <= 90) {
                    this.setState({
                        totalZakat : '2 ekor anak unta betina (umur 2 tahun lebih)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak > 90 && this.state.jumlahTernak <= 120) {
                    this.setState({
                        totalZakat : '2 ekor anak unta betina (umur 3 tahun lebih)'
                    })
                    this.props.isZakat(true)
                } else {
                    if (this.state.jumlahTernak % 40 <= 40) {
                        this.setState({
                            totalZakat : `${Math.floor(this.state.jumlahTernak / 40)} ekor anak unta betina (umur 2 tahun lebih)`
                        })
                        this.props.isZakat(true)
                    } else if (this.state.jumlahTernak % 50 <= 50) {
                        this.setState({
                            totalZakat : `${Math.floor(this.state.jumlahTernak / 50)} ekor anak unta betina (umur 3 tahun lebih)`
                        })
                        this.props.isZakat(true)
                    }
                }
            // eslint-disable-next-line
            } else if (this.state.jenisTernak == 2) {
                if (this.state.jumlahTernak < 30) {
                    this.setState({
                        totalZakat : `Anda belum wajib membayar zakat karena belum mencapai nisab, nisab Sapi adalah 30 ekor`
                    })
                    this.props.isZakat(false)
                } else if (this.state.jumlahTernak >= 30 && this.state.jumlahTernak < 40) {
                    this.setState({
                        totalZakat : '1 ekor anak sapi jantan/betina (umur 1 tahun)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 40 && this.state.jumlahTernak < 60) {
                    this.setState({
                        totalZakat : '1 ekor anak sapi betina (umur 2 tahun)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 60 && this.state.jumlahTernak < 70) {
                    this.setState({
                        totalZakat : '2 ekor anak sapi jantan (umur 1 tahun)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 70 && this.state.jumlahTernak < 80) {
                    this.setState({
                        totalZakat : '1 ekor anak sapi betina (umur 1 tahun) dan 1 ekor anak sapi jantan (umur 1 tahun)'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak >= 80 && this.state.jumlahTernak < 90) {
                    this.setState({
                        totalZakat : '2 ekor anak sapi betina (umur 2 tahun)'
                    })
                    this.props.isZakat(true)
                } else {
                    if (this.state.jumlahTernak % 30 <= 30) {
                        this.setState({
                            totalZakat : `${Math.floor(this.state.jumlahTernak / 30)} ekor anak sapi betina (umur 1 tahun lebih)`
                        })
                        this.props.isZakat(true)
                    } else if (this.state.jumlahTernak % 40 <= 40) {
                        this.setState({
                            totalZakat : `${Math.floor(this.state.jumlahTernak / 40)} ekor anak sapi betina (umur 2 tahun lebih)`
                        })
                        this.props.isZakat(true)
                    }
                }
            } else {
                if (this.state.jumlahTernak < 40) {
                    this.setState({
                        totalZakat : `Anda belum wajib membayar zakat karena belum mencapai nisab, nisab Kambing adalah 40 ekor`
                    })
                    this.props.isZakat(false)
                } else if (this.state.jumlahTernak >= 40 && this.state.jumlahTernak <= 120) {
                    this.setState({
                        totalZakat : '1 ekor kambing'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak > 120 && this.state.jumlahTernak <= 200) {
                    this.setState({
                        totalZakat : '2 ekor kambing'
                    })
                    this.props.isZakat(true)
                } else if (this.state.jumlahTernak > 200 && this.state.jumlahTernak < 400) {
                    this.setState({
                        totalZakat : '3 ekor kambing'
                    })
                    this.props.isZakat(true)
                } else {
                    if (this.state.jumlahTernak % 100 <= 100) {
                        this.setState({
                            totalZakat : `${Math.floor(this.state.jumlahTernak / 100)} ekor kambing`
                        })
                        this.props.isZakat(true)
                    }; 
                }
            }
        } else {
            this.setState({
                totalZakat : 'Anda belum wajib membayar zakat karena belum mencapai haul (waktu kepemilikan 1 tahun)'
            })
            this.props.isZakat(false)
        }
    }

    closeDialogbox = (newValue) => {
        this.setState({
            totalZakat : newValue
        })
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
                                    <h1>Zakat Binatang Ternak</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerForm">
                    <div className="formInput">
                        <label className="inputLabel">Jumlah Hewan Ternak (ekor)</label>
                        <div className="input">
                            <input className="inputForm" type="number" name="jumlahTernak" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="formInput">
                        <label className="inputLabel">Jenis Hewan Ternak</label>
                        <div className="input">
                            <select className="inputForm" name="jenisTernak" onChange={this.handleChange}>
                                <option value="1">Unta</option>
                                <option value="2">Sapi</option>
                                <option value="3">Kambing</option>
                            </select>
                        </div>
                    </div>
                    <div className="formInput">
                        <label className="inputLabel">Apakah Kepemilikan Hewan Sudah 1 tahun / lebih</label>
                        <div className="input">
                            <select className="inputForm" name="haulHarta" onChange={this.handleChange}>
                                <option value="1">Sudah</option>
                                <option value="0">Belum</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="hitungContainer">
                    <button className="hitungButton" onClick={this.hitung}>
                        <span className="buttonTitle">Hitung</span>
                    </button>
                </div>

                {/* dialog box */}
                {/* eslint-disable-next-line */}
                {this.state.totalZakat != '' ? <DialogBox body={this.state.totalZakat} kategori={this.state.kategori} toCloseDialogbox={(param) => this.closeDialogbox(param)} /> : ''}
                
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLogin: state.isLogin,
    user: state.user
})

const reduxDispatch = (dispatch) => ({
    isZakat : (data) => dispatch(changeZakat(data))
})

export default connect(reduxState, reduxDispatch)(TernakPage);