import initialReducers from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import middlewares from '../middlewares/index.js';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


let persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['msgReducer', 'chatsReducer'],
};

export const history = createBrowserHistory();

export function initStore() {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, initialReducers(history)),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );
    const persistor = persistStore(store);
    return { store, persistor };

};