import React, {Component, Fragment} from 'react';
import DialogBox from '../../component/DialogBox';
import './RikazPage.css';
import { connect } from 'react-redux';
import { changeZakat } from '../../config/redux/action';

class RikazPage extends Component {
    state = {
        nilaiBarang : 0,
        totalZakat : '',
        kategori: 'zakat-barang-temuan'
    }

    handleChange = (e) => {
        this.setState({
                nilaiBarang : `${e.target.name === 'nilaiBarang' ? e.target.value : this.state.nilaiBarang}`
            })
        }

    goBack = () => {
        const {history} = this.props;
        history.push('/home');
    }

    hitung = () => {
        let total = 0;
        if (this.state.nilaiBarang > 0) {
            // eslint-disable-next-line
            total = (this.state.nilaiBarang == '' ? 0 : this.state.nilaiBarang) * 0.2;
            this.setState({
                totalZakat : `Rp. ${this.number_format(total, 2, ',', '.')} Yaitu 20% dari nilai barang yang anda temukan`
            })
            this.props.isZakat(true)
        } else {
            this.setState({
                totalZakat : 'Anda belum wajib membayar zakat karena barang yang anda temukan tidak ada nilainya'
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
                                    <h1>Zakat Barang Temuan</h1>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerForm">
                    <div className="formInput">
                        <label className="inputLabel">Nilai Barang Temuan (Rupiah)</label>
                        <div className="input">
                            <input className="inputForm" type="number" name="nilaiBarang" onChange={this.handleChange} />
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

export default connect(reduxState, reduxDispatch)(RikazPage);