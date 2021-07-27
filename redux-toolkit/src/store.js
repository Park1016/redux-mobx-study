// 파일 분류의 기준 : 보통 store의 initalState의 데이터들을 기준으로 나눔
// 그래서 initalState구조를 잘 짜는게 아주 중요함 -> 그걸 기준으로 action, reducer가 나뉘기 때문에


// const { createStore, compose, applyMiddleware } = require('redux');
// const {composeWithDevTools} = require('redux-devtools-extension');
const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');

const reducer = require('./reducers');

//4. reducer : action받아서 새로운 state로 대체해주는 것
// reducer.js파일


// 1.store
// const initialState = {
//     user: {
//         isLoggedIn: false,
//         data: null,
//     },
//     posts: [],
//     comments: [],
//     favorites: [],
//     history: [],
//     likes: [],
//     follower: [],
// };



// *** 미들웨어 ***

// function firstMiddleware(store){
//         이 사이에서 할거
//     return function(next){    --> next는 dispatch역할
//           이 사이에서 할거
//         return function(action){
//             위에 사이사이에 할 거 없고 여기서만 할 거 있을 때 밑 코드처럼 씀
//         }
//     }
// }

const firstMiddleware = (store) => (next) => (action) => {
    // 기본기능 전후로 기능추가 가능
    console.log('기능 추가1, 액션 실행', action); // --> 기본기능 실행되기 전에 기능 추가됨
    next(action);  // --> 기본기능, 얘만 있으면 미들웨어 없는 기본동작만 하는 샘(action을 dispatch하는거) 
    // 이 사이에 subscribe 동작
    console.log('기능 추가2, 액션 끝', action); // --> 기본기능 후에 기능추가할 때
};

// const thunkMiddleware = (store) => (next) => (action) => {
//     if(typeof action == 'function'){ //비동기인 경우(원래 action은 객체지만 만약 비동기로 쓰겠다면 action을 함수로 넣어주겠다는 의미 내포)
//         return action(store.dispatch, store.getState);  // action함수를 두개의 인수를 넣어서 실행
//     }
//     return next(action); // return 쓰든 안쓰든 상관없음
// }

// **thunk미들웨어 정리
// action은 객체임, 즉 동기
// 로그인, 로그아웃, 게시글 작성같이 서버를 거쳐야하는 비동기작업에서는 action를 함수에 넣어서 dispatch함
// 그럼 thunk가 함수action을 실행함
// 그럼 action파일에서 비동기action처리


// const enhancer = compose(
//     applyMiddleware(),
//     devtoll, 리덕스 devtool연결하는 코드 여기에 적음
// )  
// -->  applyMiddleware말고 다른거(devtool같은) 붙힐 때 compose로 함수 합성해줌
// 이거 밑처럼 해도됨

// const enhancer = process.env.NODE_ENV === 'production' 
//     ? compose(     // 배포할 때
//         applyMiddleware(
//             firstMiddleware,
//             thunkMiddleware,
//         ),
//     )
//     : composeWithDevTools(   //개발환경일 때
//         applyMiddleware(
//             firstMiddleware,
//             thunkMiddleware,
//         ),
//     );

// redux devtoll : action, dispatch, state들을 편하게 볼 수 있게 해주는 크롬 확장 플러그인


// const store = createStore(reducer, initialState, enhancer);
const store = configureStore({
    reducer,
    // preloadedState:  --> 서버사이드렌더링할때 서버로부터 initialState가 올때만 씀, ssr전용
    middleware: [firstMiddleware, ...getDefaultMiddleware()], //커스텀 미들웨어, 기존 미들웨어
    devTools: process.env.NODE_ENV !== 'production', //개발할때만 devTools 쓰겠다는 뜻
    // enhancer
})


module.exports = store;

// store.subscribe(() => {
//     console.log('changed'); //화면 바꿔주는 코드 여기서
// });

// // console.log('1st', store.getState());



// //2. action
// // action.js파일

// //선 윗부분은 미리 만들어놔야함(reducer, state, action)
// //----------------------------------------------
// //선 밑부분은 화면에서 동작할때마다 react에서 실행

// //3. dispatch
// store.dispatch(logIn({
//     id: 1,
//     name: 'phj',
//     admin: true,
// }));
// // console.log('2nd', store.getState());

// store.dispatch(addPost({
//     userId: 1,
//     id: 1,
//     content: 'hello',
// }));
// store.dispatch(addPost({
//     userId: 1,
//     id: 2,
//     content: '두번째 hello',
// }));
// // console.log('3nd', store.getState());

// store.dispatch(logOut());
// // console.log('4nd', store.getState());


// //action은 기본적으로 동기, 객체

// //action과 dispatch사이에 비동기를 넣기위해 미들웨어(thunk, saga 등) 필요

// //굳이 비동기처리 때문이 아니더라도
// //미들웨어는 aciton과 dispatch사이에서 어떠한 동작이든 할 수 있게 해주기 위해 사용

// // 미들웨어의 핵심! 어디서 동작하는가? --> action과 dispatch사이