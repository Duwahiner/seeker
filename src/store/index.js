import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { loadState, saveState } from '../configStorage'
import { homeReducer } from '../reducers/homeReducer'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const initialData = loadState()

const store = createStore(
  homeReducer,
  initialData,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

function subscibeStorage () {
  saveState(store.getState())
}

store.subscribe(subscibeStorage)

export {
  store
}
