import { all,fork } from 'redux-saga/effects';
import testSaga from './testSaga';

export default function* sagas() {
  yield all([
    fork(testSaga)
  ])
}