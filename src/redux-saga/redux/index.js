import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxSagaScreen from "../component";
import React, { Component } from "react";
//Redux saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
//Middleware
const sagaMiddleware = createSagaMiddleware();

export const INCREMENT = "INCREMENT";
export const INCREMENT_PUT = "INCREMENT_PUT";
export const DECREMENT = "DECREMENT";

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

const reducers = combineReducers({
  rCount: ReducerCount
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
