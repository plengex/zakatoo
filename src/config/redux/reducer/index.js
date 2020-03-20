const initialState = {
    popup: {
        open: false,
        title: '',
        message: ''
    },
    isLogin: false,
    isLoading: false,
    zakat: false,
    user: {},
    historyZakat: [],
    kategori: ''
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_POPUP') {
        return {
            ...state,
            popup: action.value
        }
    }
    if (action.type === 'CHANGE_ISLOGIN') {
        return {
            ...state,
            isLogin: action.value
        }
    }
    if (action.type === 'CHANGE_LOADING') {
        return {
            ...state,
            isLoading: action.value
        }
    }
    if (action.type === 'CHANGE_ZAKAT') {
        return {
            ...state,
            zakat: action.value
        }
    }
    if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            user: action.value
        }
    }
    if (action.type === 'SET_HISTORY') {
        return {
            ...state,
            historyZakat: action.value
        }
    }
    if (action.type === 'CHANGE_KATEGORI') {
        return {
            ...state,
            kategori: action.value
        }
    }
    return state;
}

export default reducer;