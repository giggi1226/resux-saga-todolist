import { put, takeEvery, all, call } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))
const fetchRepos = () => fetch('https://api.github.com/users/giggi1226/repos').then(res => res.json()).then(data => data)

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  const repos = yield call(fetchRepos)
  yield put({ type: 'REPOS', repos })
}

export function* watchfetchAsync() {
  yield takeEvery('FETCH_REPOS', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchfetchAsync()
  ])
}