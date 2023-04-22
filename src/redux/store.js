import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistedReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { fromPairs } from 'lodash';
import { persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
} 

// const persistedRootReducer = persistedReducer(persistConfig, rootReducer);
const persistedRootReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedRootReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);

export { store, persistor };
