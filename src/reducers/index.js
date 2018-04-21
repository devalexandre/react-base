import { createStore, combineReducers,applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
})

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,promiseMiddleware)));


export default store