import React, {Component, Fragment} from 'react';
import DialogBox from '../../component/DialogBox';
import './PerhiasanPage.css';
import { connect } from 'react-redux';
import { changeZakat } from '../../config/redux/action';

class PerhiasanPage extends Component {
    state = {
        jumlahHarta : 0,
        jenisHarta : 1,
        haulHarta : 1,
        totalZakat : '',
        kategori: 'zakat-perhiasan'
    }

    goBack = () => {
        const {history} = this.props;
        history.push('/home');
    }

    handleChange = (e) => {
        this.setState({
            jumlahHarta : `${e.target.name === 'jumlahHarta' ? e.target.value : this.state.jumlahHarta}`,
            jenisHarta : `${e.target.name === 'jenisHarta' ? e.target.value : this.state.jenisHarta}`,
            haulHarta : `${e.target.name === 'haulHarta' ? e.target.value : this.state.haulHarta}`
        })
    }

    hitung = () => {
        let total = 0;
        // eslint-disable-next-line
        if (this.state.haulHarta == 1) {
            // eslint-disable-next-line
            if (this.state.jenisHarta == 1) {
                if (this.state.jumlahHarta >= 85) {
                    // eslint-disable-next-line
                    total = (this.state.jumlahHarta == '' ? 0 : this.state.jumlahHarta) * 0.025;
                    total *= 717400;
                    this.setState({
                        totalZakat : `Rp. ${this.number_format(total, 2, ',', '.')}`
                    })
                    this.props.isZakat(true)
                } else {
                    this.setState({
                        totalZakat : 'Anda belum wajib membayar zakat karena belum mencapai nisab, nisab Emas adalah 85 gram'
                    })
                    this.props.isZakat(false)
                }
            } else {
                if (this.state.jumlahHarta >= 595) {
                    // eslint-disable-next-line
                    total = (this.state.jumlahHarta == '' ? 0 : this.state.jumlahHarta) * 0.025;
                    total *= 12980;
                    this.setState({
                        totalZakat : `Rp. ${this.number_format(total, 2, ',', '.')}`
                    })
                    this.props.isZakat(true)
                } else {
                    this.setState({
                        totalZakat : 'Anda belum wajib membayar zakat karena belum mencapai nisab, nisab Perak adalah 595 gram'
                    })
                    this.props.isZakat(false)
                }
            }
        } else {
            this.setState({
                totalZakat : 'Anda belum wajib membayar zakat karena belum mencapai haul'
            })
            this.props.isZakat(false)
        }
    }

    number_format = (number, decimals, dec_point, thousands_sep) => {
        // Strip all characters but numerical ones.
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
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
                                    <h1>Zakat Perhiasan</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerForm">
                    <div className="formInput">
                        <label className="inputLabel">Jumlah Harta Perhiasan (gram)</label>
                        <div className="input">
                            <input className="inputForm" type="number" name="jumlahHarta" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="formInput">
                        <label className="inputLabel">Jenis Harta</label>
                        <div className="input">
                            <select className="inputForm" name="jenisHarta" onChange={this.handleChange}>
                                <option value="1">Emas</option>
                                <option value="2">Perak</option>
                            </select>
                        </div>
                    </div>
                    <div className="formInput">
                        <label className="inputLabel">Apakah Kepemilikan Harta Sudah 1 tahun / lebih</label>
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

export default connect(reduxState, reduxDispatch)(PerhiasanPage);