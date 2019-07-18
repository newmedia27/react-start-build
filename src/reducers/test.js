import { handleActions, createAction } from 'redux-actions';

const SET_TEST = 'TEST/SET__TEST';

export const REDUCER_NAME = 'test';

export const setTestData = createAction(SET_TEST);

const initialState = { test: false };

export default handleActions(
  {
    [setTestData]: (state, { payload }) => payload,
  },
  initialState,
);

export const testSelector = state => state[REDUCER_NAME].test;
