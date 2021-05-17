import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import home from './login/reducers';
import notification from './notification/reducers';
import loading from './loading/reducer';
import error from './error/reducer';

const homePersistConfig = {
  key: 'home',
  storage: AsyncStorage,
  blacklist: ['password', 'username', 'token']
};

const notificationPersistConfig = {
  key: 'notification',
  storage: AsyncStorage,
  blacklist: ['listNotification']
};


const rootReducer = combineReducers({
  home: persistReducer(homePersistConfig, home),
  notification: persistReducer(notificationPersistConfig, notification),
  loading,
  error,
});

export default rootReducer;
