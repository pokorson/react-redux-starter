import { createStore } from 'redux';
import reducer from './reducer';

const initStore = createStore.bind(null, reducer);

export default initStore;
