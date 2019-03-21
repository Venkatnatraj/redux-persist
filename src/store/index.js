import { createStore , applyMiddleware } from "redux";

import rootReducer from "./reducers";

import {createLogger} from 'redux-logger'
import { persistStore , persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root',
    storage
};

const logger = createLogger({
    collapsed : true
})

const persist_reducer = persistReducer(persistConfig , rootReducer)

const store = createStore(persist_reducer , applyMiddleware(logger));

const persistor = persistStore(store)

export  {store , persistor};
