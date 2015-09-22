import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import callAPIMiddleware from '../middlewares/api'
import reducers from '../reducers';

const initialState = {
    modalButton : {
        showModal : false
    },
    searchPanel : {
        query : "",
        results : null,
        error : "",
        loaded : true
    }
}

const storeEnhancers = []
if (__DEVTOOL__) {
    const { devTools } = require('redux-devtools')
    storeEnhancers.push(devTools())
}
let combinedCreateStore = compose(...storeEnhancers)(createStore)
const finalCreateStore = applyMiddleware(
    thunkMiddleware,
    callAPIMiddleware
)(combinedCreateStore)
export default finalCreateStore(reducers, initialState)
