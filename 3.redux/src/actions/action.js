// action안에서도 데이터 중심으로 분류
// 사용자 --> login, logOut
// 게시글 --> addPost

const login = (data) => { //action 생성자
    return { //action
        type: 'LOG_IN',
        data,
    }
};

const logOut = () => {
    return {
        type: 'LOG_OUT',
    }
}

const addPost = (data) => {
    return {
        type: 'ADD_POST',
        data,
    }
}

module.exports = {
    login,
    logOut,
    addPost,
};