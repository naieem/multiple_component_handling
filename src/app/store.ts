import { ITodo } from './todos';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, UPDATE_TODO, NEXT_STEP, PREVIOUS_STEP } from './actions';
import * as _ from 'lodash';
// ======================================
// Initializing model of stored value
// ======================================
export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
    stepNumber: number;
}

// ======================================
// Setting initial state Data
// ======================================
export const INITIAL_STATE: IAppState = {
    todos: [
        {
            id: 1,
            name: 'name 1',
            email: 'e1@e.com',
            address: 'address1',
            city: 'dhaka',
            state: 'mohammadpur',
            zip: '1568',
            isCompleted: false
        },
        {
            id: 2,
            name: 'name 2',
            email: 'e2@e.com',
            address: 'address2',
            city: 'dhaka2',
            state: 'mohammadpur2',
            zip: '159',
            isCompleted: true
        }
    ],
    lastUpdate: null,
    stepNumber: 1
};

// =============================================
// Function who takes care of all the actions
// =============================================
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            state.todos.push(action.todo);
            // Object.assign({}, state, {
            //     todos: state.todos,
            //     lastUpdate: new Date()
            // });
            state.lastUpdate = new Date();
            break;
        case TOGGLE_TODO:
            const todo = state.todos.find(t => t.id === action.id);
            const index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            });
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
        case NEXT_STEP:
            state.stepNumber = state.stepNumber + 1;
            return Object.assign({}, state, {
                lastUpdate: new Date(),
                stepNumber: state.stepNumber
            });
        case PREVIOUS_STEP:
            state.stepNumber = state.stepNumber - 1;
            return Object.assign({}, state, {
                lastUpdate: new Date(),
                stepNumber: state.stepNumber
            });
        case UPDATE_TODO:
             const ind = _.findIndex(state.todos, function(o) { return o.id === action.todo.id; });
             state.todos[ind] = action.todo;
            // return Object.assign({}, state, {
            //     todos: [],
            //     lastUpdate: new Date()
            // });
    }
    return state;
}
