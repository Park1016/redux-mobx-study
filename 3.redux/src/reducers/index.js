// 순수함수라서 분리가 쉬움
// 순수함수 : 매개변수, 함수내에서 선언한 변수를 빼곤 다른 것을 참조하지 않는 함수들

// 함수는 쪼갤 수 없지만 redux에서 combineReducers를 제공해줌 -> 함수 쪼갤 수 있음
const {combineReducers} = require('redux');
const userReducer = require('./user');
const postReducer = require('./post');

module.exports = combineReducers({
    user: userReducer,  //user: -> 이렇게 함으로서 initialState의 범위가 initialState전체에서 user로 좁아짐
    post: postReducer,
});;