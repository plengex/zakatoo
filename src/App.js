import React, { Component } from 'react';
import {BrowserRouter, Switch,Redirect, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage/';
import LoginPage from './pages/LoginPage';
import HistoryPage from './pages/HistoryPage';
import PerhiasanPage from './pages/PerhiasanPage';
import PertanianPage from './pages/PertanianPage';
import PerniagaanPage from './pages/PerniagaanPage';
import RikazPage from './pages/RikazPage';
import ProfesiPage from './pages/ProfesiPage';
import TernakPage from './pages/TernakPage';
import AboutAppPage from './pages/AboutAppPage';
import AboutDeveloperPage from './pages/AboutDeveloperPage';

import './App.css';
import HistoryKategoriPage from './pages/HistoryKategoriPage';

class App extends Component {
  state = {
    login: JSON.parse(localStorage.getItem('isLogin'))
  }

  render(){
    return (
        <BrowserRouter>
          <div className="App">
  
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                {this.props.isLogin ? <Route exact path="/home" component={HomePage}/> : <Route exact path="/" component={LoginPage}/>}
                {JSON.parse(localStorage.getItem('isLogin')) ? <Route path="/history" component={HistoryPage} /> : <Route exact path="/" component={LoginPage}/>}
                {JSON.parse(localStorage.getItem('isLogin')) ? <Route path="/kategori/:kategori" component={HistoryKategoriPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/zakat-perhiasan" component={PerhiasanPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/zakat-pertanian" component={PertanianPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/zakat-perniagaan" component={PerniagaanPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/zakat-barang-temuan" component={RikazPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/zakat-profesi" component={ProfesiPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/zakat-ternak" component={TernakPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/about-app" component={AboutAppPage} /> : <Route exact path="/" component={LoginPage}/>}
                {this.props.isLogin ? <Route path="/about-developer" component={AboutDeveloperPage} /> : <Route exact path="/" component={LoginPage}/>}
  
                {/* {JSON.parse(localStorage.getItem('isLogin')) ? null : <Route path="/register" component={RegisterPage} />}
                {JSON.parse(localStorage.getItem('isLogin')) ? <Route path="/history" component={HistoryPage} /> : null}
                {JSON.parse(localStorage.getItem('isLogin')) ? <Route path="/kategori/:kategori" component={HistoryKategoriPage} /> : null} */}
                {/* <Route path="/login" component={LoginPage} /> */}
                {/* <Route path="/register" component={RegisterPage} /> */}
                {/* <Route path="/history" component={HistoryPage} >
                </Route> */}
                {/* <Route path="/zakat-perhiasan" component={PerhiasanPage} />
                <Route path="/zakat-pertanian" component={PertanianPage} />
                <Route path="/zakat-perniagaan" component={PerniagaanPage} />
                <Route path="/zakat-barang-temuan" component={RikazPage} />
                <Route path="/zakat-profesi" component={ProfesiPage} />
                <Route path="/zakat-ternak" component={TernakPage} />
                <Route path="/about-app" component={AboutAppPage} />
                <Route path="/about-developer" component={AboutDeveloperPage} /> */}
                <Route path="*">
                  <Redirect to="/" />
                </Route>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

const reduxState = (state) => ({
    isLogin: state.isLogin,
    user: state.user
})

// const reduxDispatch = (dispatch) => ({
    
// })

export default connect(reduxState)(App);
