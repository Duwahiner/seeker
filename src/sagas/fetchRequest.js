import { put, takeLatest } from 'redux-saga/effects'
import { getDataJson } from '../reducers/homeReducer'

const DATA_REQUESTED_JSON = 'DATA_REQUESTED_JSON'

export const dataRequestJson = (data = {}) => {
  return {
    type: DATA_REQUESTED_JSON,
    payload: { data }
  }
}

function * fetchData ({ payload }) {
  try {
    yield put(getDataJson(payload))
  } catch (error) {
    yield console.log(error.message)
  }
}

function * fetchSaga () {
  yield takeLatest(DATA_REQUESTED_JSON, fetchData)
}

export default fetchSaga
