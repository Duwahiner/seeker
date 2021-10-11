import { all } from 'redux-saga/effects'

import fetchSaga from './fetchRequest'

function * rootSaga () {
  yield all([fetchSaga()])
}

export default rootSaga
