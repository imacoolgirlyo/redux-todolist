/* 
 여러 컴포넌트에 영향을 미칠 state 관리
 여기서는 todo 목록, 현재 user가 선택한 filter 
*/ 

import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 
// 이게 다임 ? 걍 createStore 해서 만들고, reducer 전달 ? 