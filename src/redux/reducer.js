import {v4 as uuidv4} from 'uuid';

const initialState = {
    list: [
        {id: uuidv4(), title: 'Do homework', status: 'todo', priority: 1},
        {id: uuidv4(), title: 'Do laundry', status: 'in progress', priority: 3},
        {id: uuidv4(), title: 'Make an appointment', status: 'review', priority: 1},
        {id: uuidv4(), title: 'Call Mom', status: 'done', priority: 2},
        {id: uuidv4(), title: 'Cleaning', status: 'todo', priority: 3},
        {id: uuidv4(), title: 'Learn React', status: 'in progress', priority: 1},
        {id: uuidv4(), title: 'Go shopping', status: 'review', priority: 2},
        {id: uuidv4(), title: 'Watch lecture', status: 'done', priority: 1},
    ],
    columns: [
        {id: uuidv4(), title: 'TO DO', status: 'todo', priority: 1},
        {id: uuidv4(), title: 'IN PROGRESS', status: 'in progress', priority: 3},
        {id: uuidv4(), title: 'REVIEW', status: 'review', priority: 1},
        {id: uuidv4(), title: 'DONE', status: 'done', priority: 2},
    ]
};

const kanbanControlPanel = (state = initialState, action) => {
    switch (action.type) {       // switch = if
        case 'TASK_DELETE':     // case same is ===
            const newState = {...state, list: state.list.filter(el => el.id !== action.payload)}
            return newState;
        case 'ADD_TASK':
            return {...state, list: [...state.list, {id: uuidv4(), title: action.payload, priority: 2, status: 'todo'}]};

        default:               //default same as else
            return state;
    }
}
export default kanbanControlPanel;