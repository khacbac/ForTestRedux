/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReduxSagaProvider from './src/redux-saga/redux';

AppRegistry.registerComponent(appName, () => ReduxSagaProvider);
