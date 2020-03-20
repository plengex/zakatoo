import firebase, { database } from '../../firebase';

export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_LOADING', value: true})
    return (
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
            // const isNewUser = res.additionalUserInfo.isNewUser;
            console.log(res);
            const popupData = {
                open: true,
                title: 'Berhasil Mendaftarkan Akun',
                message: ''
            }

            dispatch({type: 'CHANGE_POPUP', value: popupData})
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            const popupData = {
                open: true,
                title: 'Gagal Mendaftarkan Akun',
                message: errorMessage
            }

            dispatch({type: 'CHANGE_POPUP', value: popupData})
            dispatch({type: 'CHANGE_LOADING', value: false})
            console.log(errorCode, errorMessage);
        })
    )
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((res) => {
            // const isNewUser = res.additionalUserInfo.isNewUser;
            const userData = {
                email: res.user.email,
                uid: res.user.uid,
                emailVerified: res.user.emailVerified
            }
            
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: true})
            dispatch({type: 'CHANGE_USER', value: userData})
            resolve(userData)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            const popupData = {
                open: true,
                title: 'Login Gagal',
                message: errorMessage
            }

            dispatch({type: 'CHANGE_POPUP', value: popupData})
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: false})
            console.log(errorCode, errorMessage);
            reject(false)
        })
    })
}

export const loginGoogleAPI = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((res) => {
            const user = res.user;
            const userData = {
                email: user.email,
                uid: user.uid,
                displayName: user.displayName
            }

            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: true})
            dispatch({type: 'CHANGE_USER', value: userData})
            resolve(userData)
        })
        .catch((err) => {
            // Handle Errors here.
            var errorMessage = err.message;
            const popupData = {
                open: true,
                title: 'Login Gagal',
                message: errorMessage
            }

            dispatch({type: 'CHANGE_POPUP', value: popupData})
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: false})
            reject(false)
        });
    })
}

export const addDataToAPI = (data) => (dispatch) => {
    database.ref('zakat/' + data.userId).push({
        totalZakat: data.totalZakat,
        kategori: data.kategori,
        date: data.date
    })
}

export const getDataFromAPI = (userId) => (dispatch) => {
    const urlHistory = database.ref('zakat/' + userId);
    return new Promise((resolve, reject) => {
        urlHistory.on('value', function(snapshot){ 
            const data = []
            // eslint-disable-next-line
            Object.keys(snapshot.val()).map(key => {
                data.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            })
            dispatch({type: 'SET_HISTORY', value: data})
            resolve(snapshot.val())
        })
    })
}

export const closeDialogBox = () => (dispatch) => {
    const popupData = {
        open: false,
        title: '',
        message: ''
    }

    dispatch({type: 'CHANGE_POPUP', value: popupData})
}

export const changeIsLogin = () => (dispatch) => {
    dispatch({type: 'CHANGE_ISLOGIN', value: false})
}

export const changeZakat = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_ZAKAT', value: data})
}

export const changeUser = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_USER', value: data})
}

export const changeKategori = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_KATEGORI', value: data})
}