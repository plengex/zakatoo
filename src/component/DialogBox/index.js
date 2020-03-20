import React, {Component, Fragment} from 'react';
import './DialogBox.css';
import { connect } from 'react-redux';
import { addDataToAPI } from '../../config/redux/action';

class DialogBox extends Component {
    state = {
        totalZakat : '',
        kategori: ''
    }

    CloseDialogbox = () => {
        this.props.toCloseDialogbox(this.state.totalZakat)
    }

    postData = () => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = {
            totalZakat: this.props.body,
            kategori: this.props.kategori,
            date: new Date().getTime(),
            userId: userData.uid
        }
        this.props.saveHistory(data);
        this.props.toCloseDialogbox(this.state.totalZakat);
    }

    render(){
        return(
            <Fragment>
                <div  className="overlay"></div>
                <div className="dialogContainer">
                    <div className="dialog">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.body}</p>
                        {this.props.zakat && JSON.parse(localStorage.getItem('isLogin')) ? 
                        <div>
                            <div className="closeButtonWrap">
                                <button className="closeButton" type="button" onClick={this.postData}>Sudah Membayar Zakat</button>
                            </div>
                            <div className="closeButtonWrap">
                                <button className="alternatifButtonLogin" type="button" onClick={this.CloseDialogbox}>Close</button>
                            </div>
                        </div> :
                        <div className="closeButtonWrap">
                            <button className="alternatifButtonLogin" type="button" onClick={this.CloseDialogbox}>Close</button>
                        </div> }
                    </div>
                </div>
            </Fragment>
        )
    }
}

DialogBox.defaultProps = {
    title : "Total Zakat",
    body : "Perhitungan ini tidak memiliki hasil"
}

const reduxState = (state) => ({
    popup: state.popup,
    zakat: state.zakat,
    isLogin: state.isLogin,
    user: state.user
})

const reduxDispatch = (dispatch) => ({
    saveHistory: (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(DialogBox);