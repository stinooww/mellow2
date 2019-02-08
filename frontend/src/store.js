// https://www.youtube.com/watch?v=93p3LxR9xfM
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
        rootReducer,
        initialState,
        compose(
                applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)
;

export default store;