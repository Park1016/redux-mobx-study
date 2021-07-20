const logIn = (data) => { //비동기 action creator(함수 리턴함)
    return (dispatch, getState) => {
        dispatch(logInRequest(data));  // 비동기작업 시작 전에 동기 부름
        try{
            setTimeout(() => {  //지금 여기선 서버가 없으므로 로그인 요청 시 서버 왔다갔다 할 때 시간걸리는거 구현하는 용도
                dispatch(logInSuccess({
                    userId: 1,
                    nickName: 'phj',
                })); // 비동기작업 끝나면 동기 부름
            }, 2000)
        } catch(e) {
            dispatch(logInFailure(e));
        }
    }
};  //이런식으로 동기action들간의 실행순서를 조작함

const logInRequest = (data) => {   //동기 action creator 
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
};

const logInSuccess = () => {   //동기 action creator
    return {
        type: 'LOG_IN_SUCCESS',
    }
};

const logInFailure = (error) => {
    return {
        type: 'LOG_IN_FAILURE',
        error,
    }
}

// const logIn = (data) => { //동기 action creator(객체 리턴함)
//     return { //action
//         type: 'LOG_IN',
//         data,
//     }
// };

const logOut = () => {
    return {
        type: 'LOG_OUT',
    }
};

module.exports = {
    logIn,
    logOut,
};