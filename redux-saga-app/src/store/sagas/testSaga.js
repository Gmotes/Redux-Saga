import { all,call,fork,takeLatest } from 'redux-saga/effects';
import {callApi} from '../../util/callApi';

function* watchTestRequest() {
    yield takeLatest('TEST_REQUEST', getTestRequest);

}


function* getTestRequest(action) {

      yield call(callApi,
        'get',
        'test',
      );
   
}

export default function* testSaga() {
    yield all([
      fork(watchTestRequest)
    ])
  }