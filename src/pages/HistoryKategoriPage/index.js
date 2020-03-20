import React, {Component, Fragment} from 'react';
import './HistoryKategoriPage.css';
import { connect } from 'react-redux';
import { getDataFromAPI } from '../../config/redux/action';
import { Line } from 'react-chartjs-2';

class HistoryKategoriPage extends Component {
    state = {
        email : '',
        password : '',
        param : this.props.match.params.kategori,
        title : '',
        convertTotalZakat: false,
        isTernak : false
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'))
        this.props.getData(userData.uid)

        switch (this.state.param) {
            case 'zakat-perhiasan':
                this.setState({
                    title: 'Zakat Perhiasan',
                    convertTotalZakat: true
                })
                break;
            case 'zakat-pertanian':
                this.setState({
                    title: 'Zakat Pertanian',
                    convertTotalZakat: true
                })
                break;
            case 'zakat-perniagaan':
                this.setState({
                    title: 'Zakat Perniagaan',
                    convertTotalZakat: true
                })
                break;
            case 'zakat-barang-temuan':
                this.setState({
                    title: 'Zakat Barang Temuan',
                    convertTotalZakat: true
                })
                break;
            case 'zakat-profesi':
                this.setState({
                    title: 'Zakat Profesi',
                    convertTotalZakat: true
                })
                break;
            case 'zakat-ternak':
                this.setState({
                    title: 'Zakat Ternak',
                    isTernak: true
                })
                break;
            default:
                break;
        }

        const tanggal = []
        // eslint-disable-next-line
        this.props.historyZakat.map(histori => {
            tanggal.push(histori.data.date)
            // console.log('histori.data.date')
        })
    }

    goBack = () => {
        const {history} = this.props;
        history.push('/history');
    }

    convertTanggal = (time) => {
        const timestamp = new Date(time)
        const tgl = timestamp.getDate() + '/' + (timestamp.getMonth()+1) + '/' + timestamp.getFullYear()
        return tgl
    }

    convertToNumber = (string) => {
        // return Number(string.replace(/[^0-9.-]+/g," "))
        let str = string.split(",")
        str = str[0].split(" ")
        let angka = str[1]
        let angkaBaru = angka.replace(".", "")
        angkaBaru = angkaBaru.replace(".", "")
        return Number(angkaBaru)
    }

    sliceNumber = (strParams) => {
        let strSlice = strParams.split(" ")
        let strSlice1 = strSlice[0]
        return strSlice1 
    }

    tanggal = []
    zakat = []


    render(){
        const { historyZakat } = this.props
        // console.log(this.props.match.params.kategori)
        // console.log(this.state.dataGrafik.labels)
        console.log(this.zakat)
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
                    <p className="historiKategoriListTitle">History Pembayaran {this.state.title}</p>
                    <div>
                        {/* <Line data={this.state.dataGrafik} /> */}
                    </div>
                    {
                        historyZakat.length > 0 ? (
                                <Fragment>
                                    {
                                        // eslint-disable-next-line
                                        historyZakat.map(histori => {
                                            if (histori.data.kategori === this.props.match.params.kategori) {
                                                this.tanggal.push(this.convertTanggal(histori.data.date))
                                                if (this.state.convertTotalZakat === true) {
                                                    this.zakat.push(this.convertToNumber(histori.data.totalZakat))
                                                }
                                                if (this.state.isTernak === true) {
                                                    this.zakat.push(this.sliceNumber(histori.data.totalZakat))
                                                }
                                            }
                                        })
                                    }
                                    <Line data={{
                                        labels: this.tanggal,
                                        datasets: [{
                                            label: `Total Zakat ${this.state.convertTotalZakat ? "(Rp.)" : "(Ekor)"}`,
                                            data: this.zakat,
                                            backgroundColor: [
                                                'rgb(75, 192, 192, 0.2)'
                                            ],
                                            borderColor: [
                                                'rgba(75, 192, 192, 1)'
                                            ],
                                            borderWidth: 1
                                        }]
                                    }} />
                                    <table className="table">
                                        <tr className="border-bottom">
                                            <th className="pd-5">Tanggal</th>
                                            <th className="pd-5">Total Zakat</th>
                                        </tr>
                                        {
                                            // eslint-disable-next-line
                                            historyZakat.map(histori => {
                                                if (histori.data.kategori === this.props.match.params.kategori) {
                                                    return(
                                                        <tr>
                                                            <td className="pd-5">{this.convertTanggal(histori.data.date)}</td>
                                                            <td>{histori.data.totalZakat}</td>
                                                        </tr>
                                                    )
                                                }
                                            })
                                        }
                                        {this.tanggal.length === 0 ? <tr><td>Tidak ada history</td><td></td></tr> : null}
                                    </table>
                                    {console.log(this.zakat)}
                                </Fragment>
                            ) : null
                    }
                </div>
                
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading,
    popup: state.popup,
    historyZakat: state.historyZakat,
    kategori: state.kategori
})

const reduxDispatch = (dispatch) => ({
    getData: (userId) => dispatch(getDataFromAPI(userId))
})

export default connect(reduxState, reduxDispatch)(HistoryKategoriPage);