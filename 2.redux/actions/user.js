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

module.exports = {
    login,
    logOut,
};