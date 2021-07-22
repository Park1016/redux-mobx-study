import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './actions/user';


const App = () => {
    const user = useSelector((state)=>state.user);
    const dispatch= useDispatch(); //dispatch함수를 가져옴
    const onLogIn = useCallback(() => {
        dispatch(logIn({
            id: 'phj',
            password: '1234',
        }));
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(logOut());
    }, []);
    return (
        <section>
            {user.isLoggedIn
            ? <div>로그인 중</div>
            : user.data
            ? <div>{user.data.nickName}</div>
            : '로그인 해주세요'}
            {!user.data ?
            <button onClick={onLogIn}>로그인</button>:
            <button onClick={onLogOut}>로그아웃</button>}
        </section>
    )
}

export default App;