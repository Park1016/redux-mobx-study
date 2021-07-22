const { createStore } = require('redux');


//4. reducer : action받아서 새로운 state로 대체해주는 것
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...prevState,
                user: action.data,
            };
        case 'LOG_OUT':
            return {
                ...prevState,
                user: null,
            }
        case 'ADD_POST':
            return {
                ...prevState,
                posts: [...prevState.posts, action.data],
            }
        default:
            return prevState;
    }
};

//post 불변성 유지하면서 다음 post 예시
//1
// const initialState = {
//     user: null,
//     posts: [],
// }
//2
// const nextState = {
//     ...initialState,
//     posts: [action.data],
// }
//3
// const nextState = {
//     ...initialState,
//     posts: [...initialState.posts, action.data],
// }


// 1.store
const initialState = {
    user: null,
    isLoggedIn: true,
    posts: [],
    comments: [],
    favorites: [],
    history: [],
    likes: [],
    follower: [],
};


// 이렇게 바꾸면 안됨
// initialState.comA = 'b';

const store = createStore(reducer, initialState);
store.subscribe(() => {
    console.log('changed'); //화면 바꿔주는 코드 여기서
});

console.log('1st', store.getState());



//2. action
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

//선 윗부분은 미리 만들어놔야함(reducer, state, action)
//----------------------------------------------
//선 밑부분은 화면에서 동작할때마다 react에서 실행

//3. dispatch
store.dispatch(login({
    id: 1,
    name: 'phj',
    admin: true,
}));
console.log('2nd', store.getState());

store.dispatch(addPost({
    userId: 1,
    id: 1,
    content: 'hello',
}));
store.dispatch(addPost({
    userId: 1,
    id: 2,
    content: '두번째 hello',
}));
console.log('3nd', store.getState());

store.dispatch(logOut());
console.log('4nd', store.getState());