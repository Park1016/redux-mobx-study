const { createStore } = require('redux');


//4. reducer : action받아서 새로운 state로 대체해주는 것
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'CHANGE_COMP_A':
            return {
                ...prevState,
                compA: action.data,
            };
        case 'CHANGE_COMP_B':
            return {
                ...prevState,
                compB: action.data,
            }
        case 'CHANGE_COMP_C':
            return {
                ...prevState,
                compC: action.data,
            }
        default:
            return prevState;
    }
};


// 1.store
const initialState = {
    compA: 'a',
    compB: 12,
    compC: null,
};


// 이렇게 바꾸면 안됨
// initialState.comA = 'b';

const store = createStore(reducer, initialState);
store.subscribe(() => {
    console.log('changed'); //화면 바꿔주는 코드 여기서
});

console.log('1st', store.getState());



//2. action
const changeCompA = (data) => { //action 생성자
    return { //action
        type: 'CHANGE_COMP_A',
        data,
    }
};

//3. dispatch
store.dispatch(changeCompA('b'));

console.log('2nd', store.getState());