import React, {Component, Fragment} from 'react';
import DialogBox from '../../component/DialogBox';
import './PerniagaanPage.css';
import { connect } from 'react-redux';
import { changeZakat } from '../../config/redux/action';

class PerniagaanPage extends Component {
    state = {
        totalAsetDagang : 0,
        totalHutang : 0,
        totalZakat : '',
        kategori: 'zakat-perniagaan'
    }

    handleChange = (e) => {
        this.setState({
                totalAsetDagang : `${e.target.name === 'totalAsetDagang' ? e.target.value : this.state.totalAsetDagang}`,
                totalHutang : `${e.target.name === 'totalHutang' ? e.target.value : this.state.totalHutang}`
            })
        }

    goBack = () => {
        const {history} = this.props;
        history.push('/home');
    }

    hitung = () => {
        // eslint-disable-next-line
        let total = (this.state.totalAsetDagang == '' ? 0 : this.state.totalAsetDagang) - (this.state.totalHutang == '' ? 0 : this.state.totalHutang);
        let nisab = 717400 * 85;
        // eslint-disable-next-line
        if (total >= nisab) {
            let totalZakat = total * 0.025;
            this.setState({
                totalZakat : `Rp. ${this.number_format(totalZakat, 2, ',', '.')}`
            })
            this.props.isZakat(true)
        } else {
            this.setState({
                totalZakat : `Anda belum wajib membayar zakat karena belum mencapai nisab, nisab zakat perniagaan adalah Rp. ${this.number_format(nisab, 2, ',', '.')}`
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
                                    <h1>Zakat Perniagaan</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerForm">
                    <div className="formInput">
                        <label className="inputLabel">Total Semua Aset Dagang (Rupiah)</label>
                        <div className="input">
                            <input className="inputForm" type="number" name="totalAsetDagang" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="formInput">
                        <label className="inputLabel">Total Hutang/Tanggungan (Rupiah)</label>
                        <div className="input">
                            <input className="inputForm" type="number" name="totalHutang" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="hitungContainer">
                    <button className="hitungButton" type="button" onClick={this.hitung}>
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

export default connect(reduxState, reduxDispatch)(PerniagaanPage);