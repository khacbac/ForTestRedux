import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxSagaScreen from "../component";
import React, { Component } from "react";
//Redux saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import { API_TYPE } from "../../api/FakeApi";
//Middleware
const sagaMiddleware = createSagaMiddleware();

export const INCREMENT = "INCREMENT";
export const INCREMENT_PUT = "INCREMENT_PUT";
export const DECREMENT = "DECREMENT";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const actionIncrement = step => {
  return {
    type: INCREMENT,
    step: step
  };
};

export const actionDecrement = step => {
  return {
    type: DECREMENT,
    step: step
  };
};

export const actionIncrementPut = step => {
  return {
    type: INCREMENT_PUT,
    step: step
  };
};

const defaultState = {
  count: 0
};

const ReducerCount = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count - action.step };
    case DECREMENT:
      return { ...state, count: state.count + action.step };
    case INCREMENT_PUT:
      return { ...state, count: state.count - action.step };
    default:
      return state;
  }
};

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

export const fetchUser = () => {
  return {
    type: FETCH_USER
  };
};

export const fetchUserSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    users: users
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR
  };
};

const defaultUserState = {
  userResponse: {
    users: [],
    loadingStatus: API_TYPE.SUCCESS
  }
};

const ReducerUser = (state = defaultUserState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        userResponse: {
          ...state.userResponse,
          loadingStatus: API_TYPE.LOADING
        }
      };
    case FETCH_USER_SUCCESS:
      // return { ...state, users: action.users, loadingStatus: API_TYPE.SUCCESS };
      return {
        ...state,
        userResponse: {
          ...state.userResponse,
          users: action.users,
          loadingStatus: API_TYPE.SUCCESS
        }
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        userResponse: {
          ...state.userResponse,
          loadingStatus: API_TYPE.LOADING
        }
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  rCount: ReducerCount,
  rUser: ReducerUser
});

//Từ applyMiddleware vào Reducers thì tạo một store, sagaMiddleware nằm giữa Action và Reducers.
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app

const ReduxSagaProvider = () => {
  return (
    <Provider store={store}>
      <ReduxSagaScreen />
    </Provider>
  );
};

export default ReduxSagaProvider;
