const { produce } = require('immer');

const initialState = {
    isLoggedIn: false,
    data: null,
};

//immer
// nextState = produce(prevState, (draft) => {})  --> immer의 기본형태
// draft는 prevState의 복사본


const userReducer = (prevState = initialState, action) => { //새로운 state 만들어주기
    return produce(prevState, (draft) => {
        switch (action.type) {
            case 'LOG_IN_REQUEST':
                draft.data = null;
                draft.isLoggedIn = true;
                break;
                // return {
                //     ...prevState,
                //     data: null,
                //     isLoggedIn: true,
                // };
            case 'LOG_IN_SUCCESS':
                draft.data = action.data;
                draft.isLoggedIn = false;
                break;
            // return {
            //     ...prevState,
            //     data: action.data,
            //     isLoggedIn: false,
            // };
            case 'LOG_IN_FAILURE':
                draft.data = null;
                draft.isLoggedIn = false;
                break;
            // return {
            //     ...prevState,
            //     data: null,
            //     isLoggedIn: false,
            // };
            case 'LOG_OUT':
                draft.data = null;
                break;
                // return {
                //     ...prevState,
                //     data: null,
                // }
            default:
                return prevState;
        }
    });
};

module.exports = userReducer;