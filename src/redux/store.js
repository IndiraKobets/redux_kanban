import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import kanbanControlPanel from './reducer';

const store = createStore(kanbanControlPanel, composeWithDevTools(
    applyMiddleware(),
));

export default store;
