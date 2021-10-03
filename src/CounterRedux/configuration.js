
import {combineReducers, createStore} from 'redux';
import Counter from './ReduxComponents/counter';

const aggregateReducer = combineReducers({
  counter: Counter
});

const store = createStore(aggregateReducer);

export default store;
